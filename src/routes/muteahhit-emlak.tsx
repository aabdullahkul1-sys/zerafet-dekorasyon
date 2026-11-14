import { createFileRoute, Link } from "@tanstack/react-router";
import { JsonLd, breadcrumbJson, pageHead } from "@/lib/seo";
import { PageIntro } from "@/components/site/shell";
import { site, whatsappHref } from "@/lib/site";

const items = [
  { title: "Örnek daire", text: "Satış ofisinin göstereceği dairede TV duvarı, ayna ve dresuar aynı dilde çözülür." },
  { title: "Site teslimi", text: "Tekrarlayan dairelerde ölçü bir kez netleşir. Kaplama ve ışık daireler arasında şaşmaz." },
  { title: "Emlak sunumu", text: "İlan ve gezdirme için duvar bitmiş görünür. Boş niş ve açık kablo bırakılmaz." },
  { title: "Teklif", text: "Daire sayısı, ekran ölçüsü ve kaplama belli olmadan toplu fiyat yazılmaz." },
];

export const Route = createFileRoute("/muteahhit-emlak")({
  head: () =>
    pageHead({
      path: "/muteahhit-emlak",
      title: "Müteahhit ve emlak ofisleri",
      description:
        "İstanbul’da müteahhit ve emlak ofisleri için örnek daire, site teslimi ve ayna dekorasyonu. TV duvarı ölçüye göre üretilir.",
    }),
  component: TradePage,
});

function TradePage() {
  return (
    <main id="icerik">
      <JsonLd data={breadcrumbJson([{ name: "Ana sayfa", path: "/" }, { name: "Müteahhit ve emlak", path: "/muteahhit-emlak" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Müteahhit ve emlak ofisleri için duvar uygulaması",
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: { "@type": "Organization", name: site.name, url: site.url },
          url: `${site.url}/muteahhit-emlak`,
          audience: { "@type": "BusinessAudience", name: "Müteahhit ve emlak ofisleri" },
        }}
      />
      <PageIntro
        kicker="Proje işleri"
        title="Müteahhit ve emlak ofisleri."
        text="Örnek daire, yeni site ve satışa çıkan konut için TV duvarı, duvar dekorasyonu ve ayna dekorasyonu. İstanbul’da keşif şantiyede ya da dairede yapılır."
        crumbs={[{ label: "Ana sayfa", to: "/" }, { label: "Müteahhit ve emlak" }]}
      />
      <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.title} className="border-t border-line pt-5">
            <h2 className="font-display text-3xl text-ink">{item.title}</h2>
            <p className="mt-3 text-stone">{item.text}</p>
          </li>
        ))}
      </ul>
      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-5 py-14">
          <a href={whatsappHref()} className="bg-ink px-5 py-3 text-sm text-paper">
            WhatsApp
          </a>
          <Link to="/projeler" className="border border-line px-5 py-3 text-sm text-ink">
            Uygulamalar
          </Link>
          <Link to="/istanbul" className="border border-line px-5 py-3 text-sm text-ink">
            İstanbul ilçeleri
          </Link>
        </div>
      </section>
    </main>
  );
}
