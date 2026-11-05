import { createFileRoute } from "@tanstack/react-router";
import { sitemapEntries } from "@/lib/content";
import { site } from "@/lib/site";

const amp = "\u0026amp;";
const lt = "\u0026lt;";
const gt = "\u0026gt;";
const quot = "\u0026quot;";

function xml(value: string) {
  return value.replaceAll("&", amp).replaceAll("<", lt).replaceAll(">", gt).replaceAll('"', quot);
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const { updated, pages } = sitemapEntries();
        const body = pages
          .map((page) => {
            const image = page.image
              ? `\n    <image:image><image:loc>${xml(site.url + page.image)}</image:loc><image:title>${xml(page.caption ?? site.name)}</image:title></image:image>`
              : "";
            return `  <url><loc>${xml(site.url + page.path)}</loc><lastmod>${updated}</lastmod><priority>${page.priority}</priority>${image}\n  </url>`;
          })
          .join("\n");
        const doc = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${body}\n</urlset>\n`;
        return new Response(doc, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
