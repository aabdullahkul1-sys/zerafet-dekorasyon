import { contact, site } from "@/lib/site";

export function pageHead(opts: { title: string; description: string; path: string }) {
  const title = opts.path === "/" ? opts.title : `${opts.title} · ${site.name}`;
  const canonical = `${site.url}${opts.path}`;
  return {
    meta: [
      { title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: site.name },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "tr", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: canonical },
    ],
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function breadcrumbJson(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? site.url : `${site.url}${item.path}`,
    })),
  };
}

export function faqJson(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function organizationJson(imagePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}${imagePath}`,
    logo: `${site.url}/favicon.svg`,
    telephone: contact.phoneTel,
    areaServed: { "@type": "Country", name: "Türkiye" },
    knowsLanguage: "tr",
    inLanguage: "tr-TR",
  };
}
