import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projectBySlug, relatedProjects } from "@/lib/content";
import { JsonLd, pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/projeler/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) =>
    pageHead({
      path: `/projeler/${loaderData?.project.slug ?? ""}`,
      title: loaderData?.project.title ?? "Proje",
      description: loaderData?.project.excerpt ?? site.description,
    }),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const related = relatedProjects(project.slug);
  const json = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.story,
    image: `${site.url}${project.image}`,
    creator: { "@type": "Organization", name: site.name },
  };

  return (
    <main id="icerik">
      <JsonLd data={json} />
      <article>
        <header className="mx-auto max-w-6xl px-5 pt-10">
          <p className="text-xs tracking-widest text-brass uppercase">
            <Link to="/projeler" className="text-brass">
              Projeler
            </Link>
            <span aria-hidden="true"> / </span>
            {project.room}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-stone">{project.excerpt}</p>
        </header>
        <div className="mx-auto mt-8 max-w-6xl px-5">
          <img src={project.image} alt={project.alt} className="max-h-[80vh] w-full object-cover" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl text-ink">İşin kendisi</h2>
            <p className="mt-4 text-stone">{project.story}</p>
          </div>
          <dl className="border border-line bg-foam">
            {project.specs.map((spec) => (
              <div key={spec.label} className="grid grid-cols-2 gap-3 border-b border-line px-4 py-3 last:border-b-0">
                <dt className="text-sm text-stone">{spec.label}</dt>
                <dd className="text-sm text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
      {related.length ? (
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <h2 className="font-display text-3xl text-ink">Yakın işler</h2>
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
