import Wordmark from "@/components/Wordmark";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hair bg-paper">
      <div className="mx-auto max-w-shell px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Wordmark />
            <p className="mt-4 font-sans text-sm leading-relaxed text-ink-mute">
              A holding company building and operating consumer and commerce
              ventures across global markets.
            </p>
          </div>
          <div className="font-sans text-sm leading-relaxed text-ink-mute">
            <p className="eyebrow mb-3">Registered Office</p>
            <p className="text-ink">Aufren LLC</p>
            <p>1309 Coffeen Avenue, STE 1200</p>
            <p>Sheridan, Wyoming 82801</p>
            <p>United States</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-hair pt-6 font-sans text-xs text-ink-mute md:flex-row md:items-center md:justify-between">
          <span>&copy; {year} Aufren LLC. All rights reserved.</span>
          <span>Registered in the State of Wyoming, USA</span>
        </div>
      </div>
    </footer>
  );
}
