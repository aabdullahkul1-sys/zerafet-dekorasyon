import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/quote-form";
import { Crumbs } from "@/components/site/shell";
import { JsonLd, breadcrumbJson, pageHead } from "@/lib/seo";
import { contact, site, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/iletisim")({
  head: () =>
    pageHead({
      path: "/iletisim",
      title: "TV ünitesi keşif talebi",
      description:
        "Özel ölçü TV ünitesi için keşif talebi. Duvar genişliği, şehir ve ilgi alanını yazın. Net teklif, ölçü ve çizimden sonra gelir.",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main id="icerik">
      <JsonLd data={breadcrumbJson([{ name: "Ana sayfa", path: "/" }, { name: "İletişim", path: "/iletisim" }])} />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <Crumbs items={[{ label: "Ana sayfa", to: "/" }, { label: "İletişim" }]} />
        <p className="mt-4 text-xs tracking-widest text-brass uppercase">İletişim</p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Ölçüyü konuşalım.</h1>
        <p className="mt-4 text-stone">
          {site.name} özel ölçü duvar sistemleri üretir. 180×80 cm ayna 3.500 TL’den başlar. Diğer işlerin net teklifi ölçüden sonra yazılır.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="text-stone">Saatler</dt>
            <dd className="text-ink">{contact.hours}</dd>
          </div>
          <div>
            <dt className="text-stone">Hizmet</dt>
            <dd className="text-ink">{contact.serviceNote}</dd>
          </div>
          <div>
            <dt className="text-stone">Telefon</dt>
            <dd>
              <a className="text-ink" href={`tel:${contact.phoneTel}`}>
                {contact.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-stone">WhatsApp</dt>
            <dd>
              <a className="text-ink" href={whatsappHref("Merhaba, Zerafet Dekorasyon. Bilgi almak istiyorum.")}>
                {contact.phoneDisplay}
              </a>
            </dd>
          </div>
          {contact.instagram ? (
            <div>
              <dt className="text-stone">Instagram</dt>
              <dd>
                <a className="text-ink" href={contact.instagram} target="_blank" rel="noreferrer">
                  {contact.instagramHandle}
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
      <QuoteForm />
      </div>
    </main>
  );
}
