import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { filters, projects, type Tag } from "@/lib/content";
import { JsonLd, breadcrumbJson, pageHead } from "@/lib/seo";
import { PageIntro } from "@/components/site/shell";
import { site } from "@/lib/site";

export const Route = createFileRoute("/projeler")({
  head: () =>
    pageHead({
      path: "/projeler",
      title: "TV ünitesi uygulamaları",
      description:
        "Zerafet Dekorasyon uygulama arşivi: lambri TV duvarı, mermer panel, ceviz kaplama, ışıklı vitrin, şömineli konsol ve ledli ayna. Hepsi özel ölçü.",
    }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<Tag | "tumu">("tumu");
  const visible = useMemo(
    () => (filter === "tumu" ? projects : projects.filter((item) => item.tags.includes(filter))),
    [filter],
  );

  return (
    <main id="icerik">
      <JsonLd data={breadcrumbJson([{ name: "Ana sayfa", path: "/" }, { name: "Projeler", path: "/projeler" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "TV ünitesi uygulamaları",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.title,
            url: `${site.url}/projeler/${project.slug}`,
          })),
        }}
      />
      <PageIntro
        kicker="Arşiv"
        title="Uygulanan duvarlar."
        text="Her kare bitmiş ya da montaja hazır bir iş. Filtre, malzemeye göre arşivi daraltır."
        crumbs={[
          { label: "Ana sayfa", to: "/" },
          { label: "Projeler" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Proje filtresi">
          {filters.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item.id)}
                className={
                  active
                    ? "shrink-0 border border-ink bg-ink px-4 py-2 text-sm text-paper"
                    : "shrink-0 border border-line bg-paper px-4 py-2 text-sm text-ink"
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-sm text-stone">{visible.length} iş</p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.slug}>
              <Link to="/projeler/$slug" params={{ slug: project.slug }} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-panel">
                  <img src={project.image} alt={project.alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <p className="mt-3 text-xs tracking-widest text-stone uppercase">{project.room}</p>
                <h2 className="font-display text-2xl text-ink group-hover:text-brass">{project.title}</h2>
                <p className="mt-1 text-sm text-stone">{project.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
