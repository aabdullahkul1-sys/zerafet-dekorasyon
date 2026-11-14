import { createFileRoute, Link } from "@tanstack/react-router";
import { faq, featuredProjects, projectBySlug, serviceSeo, services, steps } from "@/lib/content";
import { JsonLd, faqJson, organizationJson, pageHead } from "@/lib/seo";
import { contact, mirrorPrice, site, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      path: "/",
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
    }),
  component: Home,
});

function Home() {
  const lead = featuredProjects[0];
  const rest = featuredProjects.slice(1, 5);
  const json = {
    ...organizationJson(lead.image),
    makesOffer: services.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: serviceSeo[item.slug]?.title ?? item.title,
        url: `${site.url}/hizmetler/${item.slug}`,
      },
    })),
  };

  return (
    <main id="icerik">
      <JsonLd data={json} />
      <JsonLd data={faqJson(faq)} />
      <section className="grid lg:min-h-[calc(100svh-4rem)] lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-between gap-10 px-5 py-10 sm:px-8 lg:order-1 lg:px-12 lg:py-14">
          <div>
            <p className="text-xs tracking-widest text-brass uppercase">Özel ölçü duvar sistemleri</p>
            <h1 className="mt-4 max-w-xl font-display text-4xl text-ink sm:text-6xl">
              Televizyonun durduğu duvar, odanın kendisi olsun.
            </h1>
            <p className="mt-5 max-w-md text-stone">
              Lambri, mermer görünümlü panel, çubuk LED, ışıklı vitrin ve şömineli konsol. Her parça duvarın ölçüsüne göre atölyede üretilir, yerinde monte edilir.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/projeler" className="bg-ink px-5 py-3 text-sm text-paper">
              Projeleri gör
            </Link>
            <Link to="/iletisim" className="border border-line px-5 py-3 text-sm text-ink">
              Keşif talep et
            </Link>
          </div>
        </div>
        <div className="order-1 relative min-h-80 lg:order-2 lg:min-h-full">
          <img src={lead.image} alt={lead.alt} className="absolute inset-0 h-full w-full object-cover" />
          <p className="absolute bottom-4 left-4 bg-paper px-3 py-2 text-xs text-ink">{lead.title}</p>
        </div>
      </section>

      <section className="border-y border-line">
        <ul className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-3">
          {[
            ["Özel ölçü", "Hazır modül yok. Duvar, priz ve ekran birlikte çizilir."],
            ["Işık içeride", "LED ve aplik panelin parçasıdır, sonradan yapıştırılmaz."],
            ["Tek el", "Lambri, vitrin, şömine ve ayna aynı atölyeden çıkar."],
          ].map(([title, text]) => (
            <li key={title} className="bg-paper px-5 py-8">
              <h2 className="font-display text-2xl text-ink">{title}</h2>
              <p className="mt-2 text-sm text-stone">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-widest text-brass uppercase">Ayna ve dresuar</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Özel ölçü. Başlangıç fiyatı yazıyor.</h2>
            <p className="mt-4 max-w-md text-panel">
              {mirrorPrice.size} ledli ayna {mirrorPrice.from}’den başlar. Kemer, daire, flüt ve dresuar duvara göre çizilir. O işler bu fiyata dahil değildir.
            </p>
            <p className="mt-8 font-display text-5xl">{mirrorPrice.from}</p>
            <p className="text-sm text-panel">{mirrorPrice.size}, başlangıç</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappHref()} className="bg-paper px-5 py-3 text-sm text-ink">
                WhatsApp
              </a>
              <Link to="/hizmetler/$slug" params={{ slug: "ayna-unitesi" }} className="border border-stone px-5 py-3 text-sm text-paper">
                Ayna ve dresuar
              </Link>
            </div>
            <a href={`tel:${contact.phoneTel}`} className="mt-4 inline-block text-sm text-panel">
              {contact.phoneDisplay}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {(["ayna-kemer", "flut-dresuar"] as const).map((slug) => {
              const project = projectBySlug(slug);
              if (!project) return null;
              return (
                <Link key={slug} to="/projeler/$slug" params={{ slug }} className="block">
                  <img src={project.image} alt={project.alt} className="aspect-[3/4] w-full object-cover" />
                  <p className="mt-2 text-sm text-paper">{project.title}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl text-ink">Seçilen işler</h2>
          <Link to="/projeler" className="text-sm text-brass">
            Tümü
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {rest.map((project) => (
            <Link key={project.slug} to="/projeler/$slug" params={{ slug: project.slug }} className="group block">
              <div className="aspect-[4/3] overflow-hidden bg-panel">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-3 text-xs tracking-widest text-stone uppercase">{project.room}</p>
              <h3 className="font-display text-2xl text-ink">{project.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-foam">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] sm:py-20">
          <div>
            <p className="text-xs tracking-widest text-brass uppercase">Hizmetler</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Duvarın ihtiyaç duyduğu parçalar.</h2>
            <Link to="/hizmetler" className="mt-6 inline-flex text-sm text-ink">
              Hizmetlerin tümü
            </Link>
          </div>
          <ul>
            {services.map((service) => (
              <li key={service.slug} className="border-b border-line">
                <Link to="/hizmetler/$slug" params={{ slug: service.slug }} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="text-xs text-brass">{service.index}</span>
                  <span className="flex-1">
                    <span className="block font-display text-2xl text-ink">{serviceSeo[service.slug]?.title ?? service.title}</span>
                    <span className="mt-1 block text-sm text-stone">{service.lead}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="font-display text-4xl text-ink">Dört adım</h2>
        <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.index}>
              <p className="font-display text-3xl text-brass">{step.index}</p>
              <h3 className="mt-2 text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-stone">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <h2 className="font-display text-4xl text-ink">Sık sorulanlar</h2>
          <div className="mt-6">
            {faq.map((item) => (
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
        </div>
      </section>
    </main>
  );
}
