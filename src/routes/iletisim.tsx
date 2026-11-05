import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/quote-form";
import { pageHead } from "@/lib/seo";
import { contact, site } from "@/lib/site";

export const Route = createFileRoute("/iletisim")({
  head: () =>
    pageHead({
      path: "/iletisim",
      title: "Keşif ve iletişim",
      description:
        "Zerafet Dekorasyon keşif formu. Duvar genişliği, şehir ve ilgi alanınızı yazın. Net teklif ölçü ve çizimden sonra gelir.",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main id="icerik" className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-xs tracking-widest text-brass uppercase">İletişim</p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Ölçüyü konuşalım.</h1>
        <p className="mt-4 text-stone">
          {site.name} özel ölçü duvar sistemleri üretir. Form, ön keşif metni hazırlar. Fiyat içermez.
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
          {contact.phoneDisplay ? (
            <div>
              <dt className="text-stone">Telefon</dt>
              <dd>
                <a className="text-ink" href={`tel:${contact.phoneTel}`}>
                  {contact.phoneDisplay}
                </a>
              </dd>
            </div>
          ) : null}
          {contact.instagram ? (
            <div>
              <dt className="text-stone">Instagram</dt>
              <dd>
                <a className="text-ink" href={contact.instagram}>
                  {contact.instagram.replace("https://", "")}
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
      <QuoteForm />
    </main>
  );
}
