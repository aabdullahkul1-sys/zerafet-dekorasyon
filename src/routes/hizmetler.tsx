import { createFileRoute, Link } from "@tanstack/react-router";
import { serviceSeo, services } from "@/lib/content";
import { JsonLd, breadcrumbJson, pageHead } from "@/lib/seo";
import { PageIntro } from "@/components/site/shell";
import { site } from "@/lib/site";

export const Route = createFileRoute("/hizmetler")({
  head: () =>
    pageHead({
      path: "/hizmetler",
      title: "Özel ölçü TV ünitesi ve duvar kaplama",
      description:
        "Özel ölçü TV ünitesi, dekoratif lambri, mermer görünümlü panel, ledli TV duvarı, ışıklı vitrin, şömineli konsol ve ledli makyaj aynası.",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zerafet Dekorasyon hizmetleri",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: serviceSeo[service.slug]?.title ?? service.title,
      url: `${site.url}/hizmetler/${service.slug}`,
    })),
  };

  return (
    <main id="icerik">
      <JsonLd data={breadcrumbJson([{ name: "Ana sayfa", path: "/" }, { name: "Hizmetler", path: "/hizmetler" }])} />
      <JsonLd data={list} />
      <PageIntro
        kicker="Ne yapıyoruz"
        title="Duvar, parça parça değil, bir bütün."
        text="Sekiz iş kalemi var. Çoğu projede birkaçı aynı çizimde birleşir. Hepsi atölyede üretilir."
        crumbs={[
          { label: "Ana sayfa", to: "/" },
          { label: "Hizmetler" },
        ]}
      />
      <ul className="mx-auto max-w-6xl px-5 py-8">
        {services.map((service) => (
          <li key={service.slug} className="border-b border-line">
            <Link to="/hizmetler/$slug" params={{ slug: service.slug }} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr_1.4fr] sm:items-baseline">
              <span className="text-sm text-brass">{service.index}</span>
              <h2 className="font-display text-3xl text-ink">{serviceSeo[service.slug]?.title ?? service.title}</h2>
              <p className="text-sm text-stone">{service.lead}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}