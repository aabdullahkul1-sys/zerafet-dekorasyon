import { site } from "@/lib/site";

export function pageHead(opts: { title: string; description: string; path: string }) {
  const title = opts.path === "/" ? opts.title : `${opts.title} · ${site.name}`;
  return {
    meta: [
      { title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow" },
      { name: "author", content: site.name },
    ],
    links: [{ rel: "canonical", href: `${site.url}${opts.path}` }],
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
