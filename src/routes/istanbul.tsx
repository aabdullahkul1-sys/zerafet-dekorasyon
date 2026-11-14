import { createFileRoute, Link } from "@tanstack/react-router";
import { istanbulDistricts } from "@/lib/content";
import { JsonLd, breadcrumbJson, pageHead } from "@/lib/seo";
import { PageIntro } from "@/components/site/shell";
import { contact, site, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/istanbul")({
  head: () =>
    pageHead({
      path: "/istanbul",
      title: "İstanbul duvar ve ayna dekorasyonu",
      description:
        "İstanbul’un ilçelerinde yerinde keşif ve montaj. Duvar dekorasyonu, LED’li ayna, TV ünitesi ve dresuar. İlçelerde şube yoktur.",
    }),
  component: IstanbulPage,
});

function Districts({ title, names }: { title: string; names: readonly string[] }) {
  return (
    <div>
      <h2 className="font-display text-3xl text-ink">{title}</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {names.map((name) => (
          <li key={name} className="border border-line px-3 py-2 text-sm text-ink">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IstanbulPage() {
  return (
    <main id="icerik">
      <JsonLd data={breadcrumbJson([{ name: "Ana sayfa", path: "/" }, { name: "İstanbul", path: "/istanbul" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "İstanbul duvar ve ayna dekorasyonu",
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: { "@type": "HomeAndConstructionBusiness", name: site.name, telephone: contact.phoneTel, url: site.url },
          url: `${site.url}/istanbul`,
        }}
      />
      <PageIntro
        kicker="İstanbul"
        title="İlçelere yerinde keşif."
        text="Duvar dekorasyonu, ayna dekorasyonu, TV ünitesi ve dresuar İstanbul’da ölçülerek üretilir. Her ilçede şube yoktur. Keşif adreste yapılır, montaj aynı ekip tarafından tamamlanır."
        crumbs={[{ label: "Ana sayfa", to: "/" }, { label: "İstanbul" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2">
        <Districts title="Avrupa yakası" names={istanbulDistricts.avrupa} />
        <Districts title="Anadolu yakası" names={istanbulDistricts.anadolu} />
      </section>
      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-5 py-14">
          <Link to="/duvar-dekorasyonu" className="bg-ink px-5 py-3 text-sm text-paper">
            Duvar dekorasyonu
          </Link>
          <Link to="/ayna-dekorasyonu" className="border border-line px-5 py-3 text-sm text-ink">
            Ayna dekorasyonu
          </Link>
          <Link to="/muteahhit-emlak" className="border border-line px-5 py-3 text-sm text-ink">
            Müteahhit ve emlak
          </Link>
          <a href={whatsappHref()} className="border border-line px-5 py-3 text-sm text-ink">
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
