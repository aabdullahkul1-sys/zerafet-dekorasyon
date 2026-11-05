import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { linksForProject, projectBySlug, relatedProjects } from "@/lib/content";
import { JsonLd, breadcrumbJson, pageHead } from "@/lib/seo";
import { site } from "@/lib/site";
import { Crumbs } from "@/components/site/shell";

export const Route = createFileRoute("/projeler/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    const description = project
      ? `${project.room} uygulaması. ${project.excerpt}`.slice(0, 160)
      : site.description;
    return pageHead({
      path: `/projeler/${project?.slug ?? ""}`,
      title: project ? `${project.title} — ${project.room}` : "Proje",
      description,
    });
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const related = relatedProjects(project.slug);
  const topics = linksForProject(project.tags);
  const json = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.story,
    image: `${site.url}${project.image}`,
    url: `${site.url}/projeler/${project.slug}`,
    inLanguage: "tr-TR",
    creator: { "@type": "Organization", name: site.name, url: site.url },
    about: project.tags.join(", "),
  };

  return (
    <main id="icerik">
      <JsonLd
        data={breadcrumbJson([
          { name: "Ana sayfa", path: "/" },
          { name: "Projeler", path: "/projeler" },
          { name: project.title, path: `/projeler/${project.slug}` },
        ])}
      />
      <JsonLd data={json} />
      <article>
        <header className="mx-auto max-w-6xl px-5 pt-10">
          <Crumbs
            items={[
              { label: "Ana sayfa", to: "/" },
              { label: "Projeler", to: "/projeler" },
              { label: project.title },
            ]}
          />
          <h1 className="mt-4 max-w-3xl font-display text-4xl text-ink sm:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-stone">{project.excerpt}</p>
        </header>
        <figure className="mx-auto mt-8 max-w-6xl px-5">
          <img src={project.image} alt={project.alt} className="max-h-[80vh] w-full object-cover" />
          <figcaption className="mt-3 text-sm text-stone">
            {project.room}. {project.alt}
          </figcaption>
        </figure>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl text-ink">İşin kendisi</h2>
            <p className="mt-4 text-stone">{project.story}</p>
            {topics.length ? (
              <ul className="mt-6 flex flex-wrap gap-3">
                {topics.map((topic) =>
                  topic.to === "/atolye" ? (
                    <li key={topic.tag}>
                      <Link to="/atolye" className="border border-line px-3 py-2 text-sm text-ink">
                        {topic.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={topic.tag}>
                      <Link to="/hizmetler/$slug" params={{ slug: topic.slug ?? "tv-unitesi" }} className="border border-line px-3 py-2 text-sm text-ink">
                        {topic.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            ) : null}
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