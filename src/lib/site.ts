export const site = {
  name: "Zerafet Dekorasyon",
  shortName: "Zerafet",
  tagline: "Özel ölçü TV duvarları ve dekoratif kaplamalar",
  description:
    "Özel ölçü TV ünitesi, dekoratif lambri, ledli TV duvarı, mermer görünümlü panel, ışıklı vitrin ve şömineli asma konsol. Zerafet Dekorasyon ölçü alır, atölyede üretir, yerinde monte eder.",
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
  phoneDisplay: "",
  phoneTel: "",
  whatsapp: "",
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
