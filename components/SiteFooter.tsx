import Link from "next/link";
import Wordmark from "@/components/Wordmark";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hair bg-paper">
      <div className="mx-auto max-w-shell px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div className="max-w-xs">
            <Wordmark />
            <p className="mt-5 font-sans text-sm leading-relaxed text-ink-mute">
              A holding company building and operating consumer and commerce
              ventures across global markets.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-3 font-sans text-sm text-ink-mute">
              <li>
                <Link href="/about" className="transition-colors hover:text-ink">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="transition-colors hover:text-ink">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:info@aufren.com" className="transition-colors hover:text-ink">
                  info@aufren.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Registered Office</p>
            <address className="not-italic font-sans text-sm leading-relaxed text-ink-mute">
              <span className="text-ink">Aufren LLC</span>
              <br />
              1309 Coffeen Avenue, STE 1200
              <br />
              Sheridan, Wyoming 82801
              <br />
              United States
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-hair pt-6 font-sans text-xs text-ink-mute md:flex-row md:items-center md:justify-between">
          <span>&copy; {year} Aufren LLC. All rights reserved.</span>
          <span>Registered in the State of Wyoming, USA</span>
        </div>
      </div>
    </footer>
  );
}
