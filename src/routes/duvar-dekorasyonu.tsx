import { createFileRoute, Link } from "@tanstack/react-router";
import { projectBySlug } from "@/lib/content";
import { JsonLd, breadcrumbJson, pageHead } from "@/lib/seo";
import { PageIntro } from "@/components/site/shell";
import { contact, site, whatsappHref } from "@/lib/site";

const pieces = [
  { slug: "lambri" as const, title: "Dekoratif lambri", text: "Krem, beyaz, gri, adaçayı ve antrasit flüt. TV duvarının tamamına ya da bir nişe uygulanır." },
  { slug: "mermer-panel" as const, title: "Mermer görünümlü panel", text: "Beyaz, gri ve altın damar. TV arkası ve antre nişi için üretilir. Doğal taş değildir." },
  { slug: "aydinlatma" as const, title: "Çubuk LED", text: "Dikey ışık çubuğu ve gizli çerçeve, kaplamayla birlikte çizilir. Sonradan bant yapıştırılmaz." },
  { slug: "somine" as const, title: "Şömineli konsol", text: "Elektrikli dekoratif ünite konsolun ortasına oturur. Baca gerekmez." },
];

const photos = ["mermer-somine", "cubuk-led", "yesil-lambri"] as const;

export const Route = createFileRoute("/duvar-dekorasyonu")({
  head: () =>
    pageHead({
      path: "/duvar-dekorasyonu",
      title: "İstanbul duvar dekorasyonu",
      description:
        "İstanbul’da özel ölçü duvar dekorasyonu. Lambri, mermer görünümlü panel, çubuk LED ve şömineli TV ünitesi yerinde ölçülür, atölyede üretilir.",
    }),
  component: WallPage,
});

function WallPage() {
  return (
    <main id="icerik">
      <JsonLd data={breadcrumbJson([{ name: "Ana sayfa", path: "/" }, { name: "Duvar dekorasyonu", path: "/duvar-dekorasyonu" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Duvar dekorasyonu",
          serviceType: "Duvar dekorasyonu",
          description: "İstanbul’da lambri, mermer görünümlü panel, çubuk LED ve şömineli konsoldan oluşan özel ölçü duvar kaplaması.",
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: { "@type": "Organization", name: site.name, telephone: contact.phoneTel, url: site.url },
          url: `${site.url}/duvar-dekorasyonu`,
        }}
      />
      <PageIntro
        kicker="Duvar dekorasyonu"
        title="Duvar, ölçüye göre kaplanır."
        text="Lambri, mermer görünümlü panel, çubuk LED ve şömineli konsol hazır paket değildir. İstanbul’da duvar ölçülür, çizim onaylanır, üretim atölyede biter."
        crumbs={[{ label: "Ana sayfa", to: "/" }, { label: "Duvar dekorasyonu" }]}
      />
      <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:grid-cols-2">
        {pieces.map((item) => (
          <li key={item.slug} className="border border-line p-6">
            <h2 className="font-display text-3xl text-ink">{item.title}</h2>
            <p className="mt-3 text-stone">{item.text}</p>
            <Link to="/hizmetler/$slug" params={{ slug: item.slug }} className="mt-4 inline-flex text-sm text-brass">
              İncele
            </Link>
          </li>
        ))}
      </ul>
      <section className="border-t border-line bg-foam">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-14 sm:grid-cols-3">
          {photos.map((slug) => {
            const project = projectBySlug(slug);
            if (!project) return null;
            return (
              <Link key={slug} to="/projeler/$slug" params={{ slug }}>
                <img src={project.image} alt={project.alt} className="aspect-[4/3] w-full object-cover" />
                <p className="mt-2 text-sm text-ink">{project.title}</p>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-5 py-14">
          <Link to="/projeler" className="bg-ink px-5 py-3 text-sm text-paper">
            Uygulamalar
          </Link>
          <Link to="/istanbul" className="border border-line px-5 py-3 text-sm text-ink">
            İstanbul ilçeleri
          </Link>
          <a href={whatsappHref()} className="border border-line px-5 py-3 text-sm text-ink">
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
