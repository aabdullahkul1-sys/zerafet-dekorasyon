import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projectsForTag, serviceBySlug } from "@/lib/content";
import { JsonLd, pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/hizmetler/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    pageHead({
      path: `/hizmetler/${loaderData?.service.slug ?? ""}`,
      title: loaderData?.service.title ?? "Hizmet",
      description: loaderData?.service.lead ?? site.description,
    }),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = projectsForTag(service.tag).slice(0, 3);
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.lead,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "TR",
  };

  return (
    <main id="icerik">
      <JsonLd data={json} />
      <article className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs tracking-widest text-brass uppercase">
          <Link to="/hizmetler" className="text-brass">
            Hizmetler
          </Link>
          <span aria-hidden="true"> / {service.index}</span>
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-6xl">{service.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-stone">{service.lead}</p>
        <div className="mt-8 max-w-2xl space-y-4 text-stone">
          {service.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {service.points.map((point) => (
            <li key={point} className="border border-line bg-foam px-4 py-3 text-sm text-ink">
              {point}
            </li>
          ))}
        </ul>
        <Link to="/iletisim" className="mt-8 inline-flex bg-ink px-5 py-3 text-sm text-paper">
          Bu iş için keşif
        </Link>
      </article>
      {related.length ? (
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <h2 className="font-display text-3xl text-ink">Bu dilden işler</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link to="/projeler/$slug" params={{ slug: item.slug }}>
                    <img src={item.image} alt={item.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <h3 className="mt-2 font-display text-xl text-ink">{item.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </main>
  );
}
