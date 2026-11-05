import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact, nav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        İçeriğe geç
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="h-8 w-px bg-brass" aria-hidden="true" />
          <span className="leading-tight">
            <span className="block font-display text-xl text-ink">Zerafet</span>
            <span className="block text-xs tracking-widest text-stone uppercase">Dekorasyon</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Ana menü">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-stone"
              activeProps={{ className: "text-sm text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/iletisim" className="hidden bg-ink px-4 py-2.5 text-sm text-paper sm:inline-flex">
            Keşif talep et
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobil-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobil-menu" className="border-t border-line bg-paper md:hidden">
          <nav className="flex flex-col px-5 py-3" aria-label="Mobil menü">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="border-b border-line py-4 font-display text-3xl text-ink">
                {item.label}
              </Link>
            ))}
            <Link to="/iletisim" className="mt-4 mb-3 bg-ink px-4 py-3 text-center text-sm text-paper">
              Keşif talep et
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display text-3xl">Zerafet Dekorasyon</p>
          <p className="mt-3 max-w-sm text-sm text-panel">{site.tagline}. Ölçüye göre üretilir, yerinde monte edilir.</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-brass uppercase">Sayfalar</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-widest text-brass uppercase">Atölye</p>
          <p className="mt-3 text-sm text-panel">{contact.hours}</p>
          <p className="mt-2 text-sm text-panel">{contact.serviceNote}</p>
          {contact.phoneDisplay ? (
            <a className="mt-3 block text-sm text-paper" href={`tel:${contact.phoneTel}`}>
              {contact.phoneDisplay}
            </a>
          ) : null}
          {contact.email ? (
            <a className="mt-2 block text-sm text-paper" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          ) : null}
        </div>
      </div>
      <div className="border-t border-stone/40">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-panel">
          © {new Date().getFullYear()} {site.name}. Tüm görseller uygulanan işlerdir.
        </p>
      </div>
    </footer>
  );
}

export function NotFoundPage() {
  return (
    <main id="icerik" className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 py-24">
      <p className="text-sm text-brass">404</p>
      <h1 className="mt-3 font-display text-5xl text-ink">Bu sayfa yok.</h1>
      <p className="mt-4 max-w-md text-stone">Aradığınız iş ya da hizmet taşınmış olabilir. Projelere dönün.</p>
      <Link to="/projeler" className="mt-8 inline-flex w-fit bg-ink px-5 py-3 text-sm text-paper">
        Projeleri gör
      </Link>
    </main>
  );
}

export function PageIntro({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <p className="text-xs tracking-widest text-brass uppercase">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-stone">{text}</p>
      </div>
    </header>
  );
}
