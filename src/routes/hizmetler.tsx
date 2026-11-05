import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/content";
import { pageHead } from "@/lib/seo";
import { PageIntro } from "@/components/site/shell";

export const Route = createFileRoute("/hizmetler")({
  head: () =>
    pageHead({
      path: "/hizmetler",
      title: "Hizmetler",
      description:
        "Özel ölçü TV ünitesi, dekoratif lambri, mermer görünümlü panel, gizli LED, ışıklı vitrin, şömineli konsol ve ışıklı ayna. Zerafet Dekorasyon.",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main id="icerik">
      <PageIntro
        kicker="Ne yapıyoruz"
        title="Duvar, parça parça değil, bir bütün."
        text="Sekiz iş kalemi var. Çoğu projede birkaçı aynı çizimde birleşir. Hepsi atölyede üretilir."
      />
      <ul className="mx-auto max-w-6xl px-5 py-8">
        {services.map((service) => (
          <li key={service.slug} className="border-b border-line">
            <Link to="/hizmetler/$slug" params={{ slug: service.slug }} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr_1.4fr] sm:items-baseline">
              <span className="text-sm text-brass">{service.index}</span>
              <h2 className="font-display text-3xl text-ink">{service.title}</h2>
              <p className="text-sm text-stone">{service.lead}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
