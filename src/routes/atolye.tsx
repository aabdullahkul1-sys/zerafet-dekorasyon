import { createFileRoute, Link } from "@tanstack/react-router";
import { steps } from "@/lib/content";
import { pageHead, JsonLd, breadcrumbJson } from "@/lib/seo";
import { PageIntro } from "@/components/site/shell";

const materials = [
  { title: "Mat lake", text: "Krem, beyaz, gri, adaçayı, antrasit. Işığı yutmayan, parlamayan yüzey.", image: "/works/krem-cizgi.jpg", alt: "Krem mat lake lambri duvar" },
  { title: "Ahşap kaplama", text: "Ceviz ve meşe. Damar yönü çizimde işaretlenir, kesimde bozulmaz.", image: "/works/ceviz-duvar.jpg", alt: "Ceviz kaplama TV duvarı" },
  { title: "Mermer görünümlü", text: "Beyaz, gri ve altın damar. Antre nişi ya da TV arkası.", image: "/works/mermer-somine.jpg", alt: "Mermer görünümlü TV paneli" },
  { title: "Cam ve ışık", text: "İnce profilli vitrin, halka LED ayna, servis paylı şerit.", image: "/works/cam-vitrin.jpg", alt: "Cam kapaklı ışıklı vitrin" },
];

export const Route = createFileRoute("/atolye")({
  head: () =>
    pageHead({
      path: "/atolye",
      title: "Atölye, özel üretim ve montaj",
      description:
        "TV ünitesi nasıl üretilir: keşif, çizim, atölyede kesim ve lake, yerinde montaj. Mat lake, ahşap kaplama, mermer görünümlü panel ve gizli LED.",
    }),
  component: AtolyePage,
});

function AtolyePage() {
  return (
    <main id="icerik">
      <JsonLd data={breadcrumbJson([{ name: "Ana sayfa", path: "/" }, { name: "Atölye", path: "/atolye" }])} />
      <PageIntro
        kicker="Atölye"
        title="Şantiye imalat yeri değildir."
        text="Kesim, lake ve ışık tesisatı atölyede biter. Eve yalnızca montaj ve hizalama kalır."
        crumbs={[
          { label: "Ana sayfa", to: "/" },
          { label: "Atölye" },
        ]}
      />
      <ol className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2">
        {steps.map((step) => (
          <li key={step.index} className="border-t border-line pt-5">
            <p className="font-display text-3xl text-brass">{step.index}</p>
            <h2 className="mt-2 font-display text-3xl text-ink">{step.title}</h2>
            <p className="mt-3 text-stone">{step.text}</p>
          </li>
        ))}
      </ol>
      <section className="border-t border-line bg-foam">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-display text-4xl text-ink">Malzeme</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {materials.map((item) => (
              <li key={item.title} className="bg-paper">
                <img src={item.image} alt={item.alt} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-stone">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="font-display text-3xl text-ink">Ne yapmıyoruz</h2>
        <ul className="mt-4 space-y-3 text-stone">
          <li>Hazır modül satmıyoruz. Duvar uymuyorsa ürünü zorlamayız.</li>
          <li>Sitede bağlayıcı fiyat yazmayız. Teklif, ölçü ve çizimden sonra gelir.</li>
          <li>Işığı sonradan yapıştırılmış bir bant gibi bırakmayız.</li>
        </ul>
        <Link to="/iletisim" className="mt-8 inline-flex bg-ink px-5 py-3 text-sm text-paper">
          Keşif talep et
        </Link>
      </section>
    </main>
  );
}
