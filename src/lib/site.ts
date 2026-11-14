export const site = {
  name: "Zerafet Dekorasyon",
  shortName: "Zerafet",
  tagline: "Özel ölçü TV duvarları, ayna ve dresuar",
  description:
    "İstanbul’da özel ölçü TV ünitesi, duvar dekorasyonu ve LED’li ayna. 180×80 cm ayna 3.500 TL’den başlar. Lambri ve şömineli konsol yerinde monte edilir.",
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
  instagramHandle: string;
  hours: string;
  serviceNote: string;
} = {
  phoneDisplay: "0535 052 82 33",
  phoneTel: "+905350528233",
  whatsapp: "905350528233",
  email: "",
  instagram: "https://www.instagram.com/zerafet_ayna_dekor/",
  instagramHandle: "@zerafet_ayna_dekor",
  hours: "Pazartesi–Cumartesi, 09:00–19:00",
  serviceNote: "Yerinde keşif ve montaj. TV ünitelerinde net fiyat, ölçü ve çizimden sonra belirlenir.",
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
