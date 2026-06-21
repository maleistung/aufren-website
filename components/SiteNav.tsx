import Link from "next/link";
import Wordmark from "@/components/Wordmark";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-6 md:px-10">
        <Wordmark />
        <nav className="flex items-center gap-8">
          <Link
            href="/about"
            className="font-sans text-sm text-ink-mute transition-colors hover:text-ink"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="font-sans text-sm text-ink-mute transition-colors hover:text-ink"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
