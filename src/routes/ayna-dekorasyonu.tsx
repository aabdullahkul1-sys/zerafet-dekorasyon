import { createFileRoute, Link } from "@tanstack/react-router";
import { projectBySlug } from "@/lib/content";
import { JsonLd, breadcrumbJson, pageHead } from "@/lib/seo";
import { PageIntro } from "@/components/site/shell";
import { contact, mirrorPrice, site, whatsappHref } from "@/lib/site";

const photos = ["ayna-kemer", "flut-dresuar", "led-ayna"] as const;

export const Route = createFileRoute("/ayna-dekorasyonu")({
  head: () =>
    pageHead({
      path: "/ayna-dekorasyonu",
      title: "İstanbul ayna dekorasyonu",
      description:
        "İstanbul’da özel ölçü ayna dekorasyonu. 180×80 cm LED’li ayna 3.500 TL’den başlar. Kemer ayna, yuvarlak ayna ve dresuar ayrıca fiyatlanır.",
    }),
  component: MirrorPage,
});

function MirrorPage() {
  return (
    <main id="icerik">
      <JsonLd data={breadcrumbJson([{ name: "Ana sayfa", path: "/" }, { name: "Ayna dekorasyonu", path: "/ayna-dekorasyonu" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Ayna dekorasyonu",
          serviceType: "Ayna dekorasyonu",
          description: "İstanbul’da LED’li ayna, kemer ayna ve dresuar. 180×80 cm başlangıç fiyatı 3.500 TL.",
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: { "@type": "Organization", name: site.name, telephone: contact.phoneTel, url: site.url },
          url: `${site.url}/ayna-dekorasyonu`,
          offers: {
            "@type": "Offer",
            priceCurrency: "TRY",
            price: "3500",
            description: `${mirrorPrice.size} LED’li ayna başlangıç fiyatı. Kemer, yuvarlak ayna, flüt ve dresuar dahil değildir.`,
            url: `${site.url}/ayna-dekorasyonu`,
          },
        }}
      />
      <PageIntro
        kicker="Ayna dekorasyonu"
        title="Ayna ve dresuar, duvara göre."
        text="LED’li ayna, kemer ayna, yuvarlak ayna, flüt kaplama ve dresuar İstanbul’da ölçülerek üretilir. Antre, yatak odası ve salon nişine uygulanır."
        crumbs={[{ label: "Ana sayfa", to: "/" }, { label: "Ayna dekorasyonu" }]}
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="font-display text-5xl text-ink">{mirrorPrice.from}</p>
        <p className="mt-2 max-w-2xl text-stone">
          {mirrorPrice.size} LED’li ayna için başlangıç fiyatıdır. Kemer ayna, yuvarlak ayna, flüt kaplama ve dresuar bu tutara dahil değildir. Onların fiyatı duvar ölçülünce belirlenir.
        </p>
        <p className="mt-4 max-w-2xl text-stone">Telefon {contact.phoneDisplay}. Çalışma saati {contact.hours}.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {photos.map((slug) => {
            const project = projectBySlug(slug);
            if (!project) return null;
            return (
              <Link key={slug} to="/projeler/$slug" params={{ slug }}>
                <img src={project.image} alt={project.alt} className="aspect-[3/4] w-full object-cover" />
                <p className="mt-2 text-sm text-ink">{project.title}</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappHref()} className="bg-ink px-5 py-3 text-sm text-paper">
            WhatsApp
          </a>
          <Link to="/hizmetler/$slug" params={{ slug: "ayna-unitesi" }} className="border border-line px-5 py-3 text-sm text-ink">
            Ayna ve dresuar
          </Link>
          <Link to="/istanbul" className="border border-line px-5 py-3 text-sm text-ink">
            İstanbul ilçeleri
          </Link>
        </div>
      </section>
    </main>
  );
}
