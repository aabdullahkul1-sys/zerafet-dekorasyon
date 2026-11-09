export const site = {
  name: "Zerafet Dekorasyon",
  shortName: "Zerafet",
  tagline: "Özel ölçü TV duvarları, ayna ve dresuar",
  description:
    "Özel ölçü TV ünitesi, ledli ayna ve dresuar. 180×80 cm ayna 3.500 TL’den başlar. Lambri, mermer panel ve şömineli konsol ölçüye göre üretilir, yerinde monte edilir.",
  url: "https://zerafetdekorasyon.com",
  locale: "tr-TR",
} as const;

/** Telefon, WhatsApp ve e-posta buradan güncellenir. Boş bırakılan kanal sitede gizlenir. */
export const contact: {
  phoneDisplay: string;
  phoneTel: string;
  whatsapp: string;
  email: string;
  instagram: string;
  hours: string;
  serviceNote: string;
} = {
  phoneDisplay: "0535 052 82 33",
  phoneTel: "+905350528233",
  whatsapp: "905350528233",
  email: "",
  instagram: "",
  hours: "Pazartesi–Cumartesi, 09:00–19:00",
  serviceNote: "Yerinde keşif ve montaj. Net teklif, ölçü ve çizimden sonra yazılır.",
};

export const nav = [
  { to: "/projeler", label: "Projeler" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/atolye", label: "Atölye" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export const mirrorPrice = {
  size: "180×80 cm",
  from: "3.500 TL",
} as const;

export function whatsappHref(text?: string) {
  const base = `https://wa.me/${contact.whatsapp}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
