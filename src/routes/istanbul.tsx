import { createFileRoute, Link } from "@tanstack/react-router";
import { featuredProjects, istanbulDistricts } from "@/lib/content";
import { JsonLd, breadcrumbJson, faqJson, pageHead } from "@/lib/seo";
import { PageIntro } from "@/components/site/shell";
import { contact, site, whatsappHref } from "@/lib/site";

const questions = [
  {
    q: "Her ilçede dükkân var mı?",
    a: "Yok. Atölye tek. Kadıköy, Şişli, Başakşehir veya Pendik fark etmez; ölçü adreste alınır, montaj aynı ekip tarafından yapılır.",
  },
  {
    q: "Keşif ücretli mi?",
    a: "İstanbul içindeki keşif, işin ölçüsü ve çizimi içindir. Net fiyat çizimden sonra yazılır. 180×80 cm LED’li aynanın başlangıç fiyatı sitede açıktır.",
  },
];

export const Route = createFileRoute("/istanbul")({
  head: () =>
    pageHead({
      path: "/istanbul",
      title: "İstanbul duvar ve ayna dekorasyonu",
      description:
        "İstanbul’un Avrupa ve Anadolu yakasında yerinde keşif. Duvar dekorasyonu, LED’li ayna, TV ünitesi ve dresuar. İlçelerde şube yoktur.",
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
  const photos = featuredProjects.slice(0, 2);
  return (
    <main id="icerik">
      <JsonLd data={breadcrumbJson([{ name: "Ana sayfa", path: "/" }, { name: "İstanbul", path: "/istanbul" }])} />
      <JsonLd data={faqJson(questions)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "İstanbul duvar ve ayna dekorasyonu",
          description:
            "İstanbul ilçelerinde yerinde ölçülen TV duvarı, lambri, LED’li ayna ve dresuar. Şube ağı yoktur.",
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: {
            "@type": "HomeAndConstructionBusiness",
            name: site.name,
            telephone: contact.phoneTel,
            url: site.url,
          },
          url: `${site.url}/istanbul`,
        }}
      />
      <PageIntro
        kicker="İstanbul"
        title="İlçeye gelinir, şube açılmaz."
        text="Duvar dekorasyonu, ayna dekorasyonu, TV ünitesi ve dresuar İstanbul’da ölçülerek üretilir. Avrupa yakası ve Anadolu yakası aynı atölyeden çıkar. Randevu, keşif yapılacak adresin ilçesine göre verilir."
        crumbs={[{ label: "Ana sayfa", to: "/" }, { label: "İstanbul" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-ink">Keşif nasıl yapılır</h2>
          <p className="mt-4 text-stone">
            Duvar genişliği, tavan yüksekliği, priz yeri ve ekran ölçüsü adreste alınır. Çizim bu ölçülerle hazırlanır. Kesim ve lake atölyede biter. Montaj günü panel, ışık ve konsol yerine oturtulur.
          </p>
          <p className="mt-4 text-stone">
            Telefon {contact.phoneDisplay}. Çalışma saati {contact.hours}. Müteahhit ve emlak ofislerinin şantiye keşfi de aynı düzendedir.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappHref()} className="bg-ink px-5 py-3 text-sm text-paper">
              WhatsApp
            </a>
            <Link to="/duvar-dekorasyonu" className="border border-line px-5 py-3 text-sm text-ink">
              Duvar dekorasyonu
            </Link>
            <Link to="/ayna-dekorasyonu" className="border border-line px-5 py-3 text-sm text-ink">
              Ayna dekorasyonu
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {photos.map((project) => (
            <Link key={project.slug} to="/projeler/$slug" params={{ slug: project.slug }}>
              <img src={project.image} alt={project.alt} className="aspect-[3/4] w-full object-cover" />
              <p className="mt-2 text-sm text-ink">{project.title}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2">
          <Districts title="Avrupa yakası" names={istanbulDistricts.avrupa} />
          <Districts title="Anadolu yakası" names={istanbulDistricts.anadolu} />
        </div>
      </section>
      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="font-display text-3xl text-ink">Sık sorulan sorular</h2>
          {questions.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex items-center justify-between gap-4 py-4 text-ink">
                {item.q}
                <span className="text-brass group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="pb-4 text-sm text-stone">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
