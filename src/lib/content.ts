export type Tag = "lambri" | "mermer" | "ahsap" | "vitrin" | "somine" | "ayna";

export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  tags: Tag[];
  room: string;
  story: string;
  specs: { label: string; value: string }[];
  featured?: boolean;
};

export type Service = {
  slug: string;
  index: string;
  title: string;
  lead: string;
  body: string[];
  points: string[];
  tag: Tag;
};

export const filters: { id: Tag | "tumu"; label: string }[] = [
  { id: "tumu", label: "Tümü" },
  { id: "lambri", label: "Lambri" },
  { id: "mermer", label: "Mermer" },
  { id: "ahsap", label: "Ahşap" },
  { id: "vitrin", label: "Vitrin" },
  { id: "somine", label: "Şömine" },
  { id: "ayna", label: "Ayna" },
];

export const projects: Project[] = [
  {
    slug: "mermer-somine",
    title: "Mermer zemin, şömineli konsol",
    excerpt: "Beyaz mermer görünümlü panel, iki yanda krem lambri, ortada elektrikli şömine.",
    image: "/works/mermer-somine.jpg",
    alt: "Beyaz mermer TV duvarı, yanlarda krem lambri, şömineli asma konsol ve dikey aplikler",
    tags: ["mermer", "somine", "lambri"],
    room: "Salon",
    featured: true,
    story:
      "Televizyon mermer görünümlü panelin içinde duruyor. İki yanda flütlü lambri, altta üç bölmeli asma konsolun ortasında elektrikli şömine. Tavan kotunda gizli ışık bandı, yanlarda ince dikey aplikler.",
    specs: [
      { label: "Panel", value: "Mermer görünümlü" },
      { label: "Yanlar", value: "Flütlü krem lambri" },
      { label: "Konsol", value: "Asma, şömineli orta göz" },
      { label: "Işık", value: "Tavan bandı ve dikey aplik" },
    ],
  },
  {
    slug: "cubuk-led",
    title: "Çubuk LED, krem lambri",
    excerpt: "Krem flütün üstünde ayrı boylarda dikey çubuk LED. TV çerçevesi ve asma konsol aynı ışıkta.",
    image: "/works/cubuk-led.jpg",
    alt: "Krem lambri TV duvarı, farklı boylarda dikey çubuk LED, ışıklı TV çerçevesi ve asma konsol",
    tags: ["lambri"],
    room: "Salon",
    featured: true,
    story:
      "Duvarın tamamı krem flüt. Işık, panelin üstünden inen çubuk LED’lerle geliyor; boylar bilinçli olarak aynı değil. Televizyon ince bir ışık çerçevesinin içinde, konsol duvardan kopuk ve altı da aydınlık.",
    specs: [
      { label: "Duvar", value: "Krem flütlü lambri" },
      { label: "Işık", value: "Dikey çubuk LED" },
      { label: "TV", value: "Işıklı çerçeve" },
      { label: "Konsol", value: "Asma, kapaklı" },
    ],
  },
  {
    slug: "kemer-flut",
    title: "Flüt üzerinde kemer ayna",
    excerpt: "Bej flüt kaplamanın içinde kemer ayna ve tek çekmeceli asma konsol.",
    image: "/works/kemer-flut.jpg",
    alt: "Bej flütlü duvar kaplaması, kemer ayna ve asma konsol",
    tags: ["ayna", "lambri"],
    room: "Antre",
    story:
      "Ayna, flüt kaplamanın içine kemer olarak oturuyor. Konsol tek çekmece ve duvardan kopuk. Kapı pervazı kaplamanın dışında bırakıldı.",
    specs: [
      { label: "Zemin", value: "Bej flüt" },
      { label: "Ayna", value: "Kemer" },
      { label: "Konsol", value: "Asma, tek çekmece" },
      { label: "Ölçü", value: "Kapı payına göre" },
    ],
  },
  {
    slug: "antrasit-somine",
    title: "Antrasit lambri, ateş çizgisi",
    excerpt: "Koyu dikey çıtalar, beyaz aplikler ve konsolun içinde elektrikli şömine.",
    image: "/works/antrasit-somine.jpg",
    alt: "Antrasit lambri TV duvarı, dikey aplikler, ışıklı vitrin ve şömineli konsol",
    tags: ["lambri", "somine", "vitrin"],
    room: "Salon",
    featured: true,
    story:
      "Tüm duvar antrasit flütle kaplı. TV paneli ince bir ışık çerçevesiyle ayrılıyor. Solda boydan ışıklı vitrin, konsolun ortasında elektrikli şömine, iki yanda dikey aplik.",
    specs: [
      { label: "Duvar", value: "Antrasit flütlü lambri" },
      { label: "Vitrin", value: "Boydan, sıcak ışık" },
      { label: "Konsol", value: "Asma, şömineli" },
      { label: "Aplik", value: "Çift, dikey" },
    ],
  },
  {
    slug: "ceviz-duvar",
    title: "Ceviz kaplama, tam duvar",
    excerpt: "Duvarın tamamı ceviz. TV nişi arkadan ışık alıyor, yanlarda ince metal çizgi.",
    image: "/works/ceviz-duvar.jpg",
    alt: "Tam duvar ceviz kaplama TV ünitesi, arkadan aydınlatmalı niş ve asma konsol",
    tags: ["ahsap", "lambri"],
    room: "Salon",
    featured: true,
    story:
      "Panel, konsol ve yan kanatlar aynı ceviz kaplamada. Televizyon nişi geriden yıkanıyor. Dar dikey şeritler metal çıta ile ritmi kırıyor.",
    specs: [
      { label: "Kaplama", value: "Ceviz, tam duvar" },
      { label: "Niş", value: "Arkadan aydınlatmalı" },
      { label: "Konsol", value: "Asma, çok gözlü" },
      { label: "Detay", value: "Dikey metal çizgi" },
    ],
  },
  {
    slug: "yesil-lambri",
    title: "Adaçayı lambri",
    excerpt: "Yeşil flütlü duvar, beyaz TV paneli ve boydan ışıklı vitrin.",
    image: "/works/yesil-lambri.jpg",
    alt: "Adaçayı yeşil lambri duvar, beyaz LED çerçeveli TV paneli ve ışıklı cam vitrin",
    tags: ["lambri", "vitrin"],
    room: "Salon",
    featured: true,
    story:
      "Renk burada duvarın kendisi. Adaçayı flüt, beyaz panel ve sıcak vitrin ışığı tek kompozisyonda duruyor. TV çerçevesi gizli LED ile ayrılıyor.",
    specs: [
      { label: "Duvar", value: "Adaçayı flütlü lambri" },
      { label: "Panel", value: "Beyaz, LED çerçeve" },
      { label: "Vitrin", value: "Boydan, camlı" },
      { label: "Konsol", value: "Beyaz, alçak" },
    ],
  },
  {
    slug: "altin-mermer",
    title: "Gri mermer, altın damar",
    excerpt: "Altın damarlı mermer, meşe şerit ve altın raflı açık vitrin.",
    image: "/works/altin-mermer.jpg",
    alt: "Altın damarlı gri mermer TV duvarı, ahşap şerit ve altın raflı vitrin",
    tags: ["mermer", "vitrin", "ahsap"],
    room: "Salon",
    story:
      "Gri mermer görünümlü yüzey altın damarla kesiliyor. Solda ahşap flüt ve aplik, sağda altın profilli açık raflar. Alt konsol sade ve beyaz.",
    specs: [
      { label: "Panel", value: "Gri mermer, altın damar" },
      { label: "Sol", value: "Ahşap flüt ve aplik" },
      { label: "Sağ", value: "Altın raflı vitrin" },
      { label: "Konsol", value: "Beyaz, çok gözlü" },
    ],
  },
  {
    slug: "krem-cizgi",
    title: "Düşen ışık çizgileri",
    excerpt: "Krem lambri üzerinde iki yanda farklı boyda dikey LED hatları.",
    image: "/works/krem-cizgi.jpg",
    alt: "Krem lambri duvarda düşen LED çizgileri, ışıklı TV çerçevesi ve asma konsol",
    tags: ["lambri"],
    room: "Salon",
    featured: true,
    story:
      "Duvar baştan sona krem flüt. Televizyonun iki yanında boyları değişen dikey ışık çizgileri ritmi kuruyor. Konsol beş gözlü ve duvardan kopuk.",
    specs: [
      { label: "Duvar", value: "Krem flütlü lambri" },
      { label: "Işık", value: "Dikey LED hatları" },
      { label: "Çerçeve", value: "Gizli LED" },
      { label: "Konsol", value: "Asma, beş göz" },
    ],
  },
  {
    slug: "krem-aplik",
    title: "Çift aplik, açık raf",
    excerpt: "Yukarı-aşağı aplikler flütü yıkıyor; sağda boydan açık raf.",
    image: "/works/krem-aplik.jpg",
    alt: "Krem lambri TV ünitesi, çift duvar aplik ve boydan açık raf",
    tags: ["lambri", "vitrin"],
    room: "Salon",
    story:
      "Aplikler ışığı hem tavana hem konsola bırakıyor. TV paneli duvardan bir kademe önde. Sağ kanat açık raflı, alttaki konsol geniş ve sade.",
    specs: [
      { label: "Duvar", value: "Krem flüt" },
      { label: "Aplik", value: "Çift, yukarı-aşağı" },
      { label: "Raf", value: "Boydan açık" },
      { label: "Konsol", value: "Geniş, kapaklı" },
    ],
  },
  {
    slug: "gri-vitrin",
    title: "Gri lambri, ışıklı nişler",
    excerpt: "İki yanda sıcak ışıklı niş, ortada gri panel ve uzun konsol.",
    image: "/works/gri-vitrin.jpg",
    alt: "Gri flütlü TV duvarı, iki yanda ışıklı nişler ve uzun konsol",
    tags: ["lambri", "vitrin"],
    room: "Salon",
    story:
      "Gri flüt duvarın tamamını kaplıyor. Nişler panelin iki yanında, içleri sıcak ışıkla. Konsol alçak ve kesintisiz.",
    specs: [
      { label: "Duvar", value: "Gri flütlü lambri" },
      { label: "Niş", value: "İki yanda, ışıklı" },
      { label: "Panel", value: "LED çerçeveli" },
      { label: "Konsol", value: "Uzun, kapaklı" },
    ],
  },
  {
    slug: "cam-vitrin",
    title: "Cam kapaklı ikiz vitrin",
    excerpt: "TV’nin iki yanında boydan cam vitrin, içinde dikey LED.",
    image: "/works/cam-vitrin.jpg",
    alt: "Bej lambri duvarda cam kapaklı ışıklı ikiz vitrin ve TV paneli",
    tags: ["vitrin", "lambri"],
    room: "Salon",
    story:
      "Simetrik kurulum. İki cam vitrin aynı ritmi tekrarlıyor, dikey ışık rafları ayırıyor. Orta panel sade, konsol dört gözlü.",
    specs: [
      { label: "Vitrin", value: "Cam kapaklı, ikiz" },
      { label: "Işık", value: "Dikey LED" },
      { label: "Duvar", value: "Bej flüt" },
      { label: "Konsol", value: "Dört göz" },
    ],
  },
  {
    slug: "beton-ahsap",
    title: "Beton panel, ceviz çerçeve",
    excerpt: "Ceviz duvarın içinde beton görünümlü panel, kitaplık ve ses barı.",
    image: "/works/beton-ahsap.jpg",
    alt: "Ceviz kaplama duvarda beton görünümlü TV paneli, kitaplık ve ses barı",
    tags: ["ahsap", "vitrin"],
    room: "Salon",
    featured: true,
    story:
      "Yaşayan bir salon. Ceviz kaplama duvar, beton görünümlü panel ve sıcak LED çerçeve. Solda kitaplık, konsolun üstünde ses barı.",
    specs: [
      { label: "Duvar", value: "Ceviz kaplama" },
      { label: "Panel", value: "Beton görünümlü" },
      { label: "Depolama", value: "Açık kitaplık" },
      { label: "Işık", value: "Panel çevresi LED" },
    ],
  },
  {
    slug: "gece-isik",
    title: "Gece senaryosu",
    excerpt: "Karanlıkta yalnızca aplikler, vitrinler ve panel çerçevesi yanıyor.",
    image: "/works/gece-isik.jpg",
    alt: "Gece ışığında lambri TV duvarı, ışıklı vitrinler ve yere düşen aplik ışığı",
    tags: ["lambri", "vitrin"],
    room: "Salon",
    story:
      "Aydınlatma senaryosu gündüzden ayrı düşünülüyor. Aplikler yere iki damla bırakıyor, vitrinler içeriden yanıyor, panel çerçevesi tavana doğru yükseliyor.",
    specs: [
      { label: "Senaryo", value: "Gece, loş" },
      { label: "Aplik", value: "Yukarı-aşağı" },
      { label: "Vitrin", value: "Siyah çerçeve, ışıklı" },
      { label: "Konsol", value: "Asma, açık orta göz" },
    ],
  },
  {
    slug: "beyaz-lambri",
    title: "Beyaz, baştan sona",
    excerpt: "Duvarın tümü beyaz flüt. İki yanda kısa ışık çizgileri, ortada yüzen konsol.",
    image: "/works/beyaz-lambri.jpg",
    alt: "Beyaz flütlü tam duvar, dikey LED çizgileri ve asma beyaz konsol",
    tags: ["lambri"],
    room: "Salon",
    story:
      "Süs az, ritim çok. Beyaz flüt kapıdan kapıya sürüyor. Dikey ışıklar simetrik değil; biri uzun, diğeri kısa. Konsol duvardan kopuk.",
    specs: [
      { label: "Duvar", value: "Beyaz flüt, tam boy" },
      { label: "Işık", value: "Asimetrik dikey LED" },
      { label: "Panel", value: "Gizli çerçeve ışığı" },
      { label: "Konsol", value: "Asma, üç göz" },
    ],
  },
  {
    slug: "mermer-halo",
    title: "Mermer ve halo",
    excerpt: "Mermer yüzeyin önünde yüzen beyaz panel, çevresi kesintisiz ışık.",
    image: "/works/mermer-halo.jpg",
    alt: "Mermer duvarda halo ışıklı beyaz TV paneli ve asma konsol",
    tags: ["mermer", "lambri"],
    room: "Salon",
    story:
      "Mermer görünümlü zemin düz, panel ondan bir katman önde. Işık panelin arkasından taşıyor. Sağda flüt, altta sade asma konsol.",
    specs: [
      { label: "Zemin", value: "Mermer görünümlü" },
      { label: "Panel", value: "Halo LED" },
      { label: "Yan", value: "Flütlü şerit" },
      { label: "Konsol", value: "Asma, üç göz" },
    ],
  },
  {
    slug: "mermer-konsol",
    title: "Mermer niş, bombeli konsol",
    excerpt: "Antre duvarı: mermer orta, flütlü yanlar, ayaklı bombeli konsol.",
    image: "/works/mermer-konsol.jpg",
    alt: "Mermer niş, flütlü yan paneller, aplikler ve bombeli ayaklı konsol",
    tags: ["mermer", "lambri"],
    room: "Antre",
    story:
      "Her iş televizyon olmak zorunda değil. Antrede mermer niş, iki yanda flüt ve aplik, önde bombeli ayaklı konsol. Avize ışığı mermere düşüyor.",
    specs: [
      { label: "Niş", value: "Mermer görünümlü" },
      { label: "Yanlar", value: "Flütlü panel" },
      { label: "Konsol", value: "Bombeli, ayaklı" },
      { label: "Işık", value: "Çift aplik" },
    ],
  },
  {
    slug: "ayna-kemer",
    title: "Kemer ayna, ışıklı daireler",
    excerpt: "Antre duvarı: kemer ayna, iki ışıklı daire ve asma dresuar. Sağda aydınlatmalı dikey çıtalar.",
    image: "/works/ayna-kemer.jpg",
    alt: "Ledli kemer ayna, iki yuvarlak ışıklı ayna, beyaz asma dresuar ve arkadan aydınlatmalı dikey çıtalar",
    tags: ["ayna", "lambri"],
    room: "Antre",
    featured: true,
    story:
      "Duvar bir ayna kompozisyonu olarak çizildi. Solda boydan kemer, üstte iki daire, altta iki çekmeceli asma dresuar. Sağdaki çıtalar duvardan kopuk ve arkadan ışık alıyor. Ölçü, kapı ve tavan kotuna göre alındı.",
    specs: [
      { label: "Ayna", value: "Kemer ve iki daire" },
      { label: "Işık", value: "Ayna çevresi ve çıta arkası" },
      { label: "Dresuar", value: "Asma, iki çekmece" },
      { label: "Yan", value: "Dikey çıta" },
    ],
  },
  {
    slug: "flut-dresuar",
    title: "Flütlü dresuar",
    excerpt: "Beyaz flüt panellerin arasında boydan ayna, asma dresuar ve puf.",
    image: "/works/flut-dresuar.jpg",
    alt: "Beyaz flütlü yan paneller, boydan ayna, iki çekmeceli asma dresuar ve oturmalı puf",
    tags: ["ayna", "lambri"],
    room: "Antre",
    featured: true,
    story:
      "Ayna iki flüt kanadın arasına oturuyor. Dresuar duvardan kopuk, iki eşit çekmece. Altında oturmalık var. Kapı ve koridor payı çizimde bırakıldı.",
    specs: [
      { label: "Ayna", value: "Boydan, düz" },
      { label: "Yanlar", value: "Beyaz flüt" },
      { label: "Dresuar", value: "Asma, iki çekmece" },
      { label: "Oturuş", value: "Puf" },
    ],
  },
  {
    slug: "led-ayna",
    title: "Işıklı yuvarlak ayna",
    excerpt: "Yatak odasında halka LED’li ayna ve pirinç kulplu makyaj konsolu.",
    image: "/works/led-ayna.jpg",
    alt: "Halka LED ışıklı yuvarlak ayna ve pirinç kulplu asma makyaj konsolu",
    tags: ["ayna"],
    room: "Yatak odası",
    featured: true,
    story:
      "Ayna kendi ışığını taşıyor. Halka LED yüzü eşit aydınlatıyor, konsolun ön kenarında ikinci bir çizgi var. Çekmeceler pirinç kulpla bitiyor.",
    specs: [
      { label: "Ayna", value: "Yuvarlak, halka LED" },
      { label: "Konsol", value: "Asma, iki çekmece" },
      { label: "Metal", value: "Pirinç kulp" },
      { label: "Işık", value: "Ayna ve ön kenar" },
    ],
  },
  {
    slug: "mese-raf",
    title: "Meşe vitrin, ceviz şerit",
    excerpt: "Beyaz duvarda ceviz dikey şerit, meşe açık raf ve arkadan ışık.",
    image: "/works/mese-raf.jpg",
    alt: "Beyaz duvarda ceviz şerit, meşe ışıklı raf ve LED çerçeveli TV paneli",
    tags: ["ahsap", "vitrin"],
    room: "Salon",
    story:
      "Duvar boyanmış bırakılmıyor; iki ahşap parça onu tutuyor. Solda dar ceviz flüt, sağda meşe raflar içten aydınlatılıyor. Panelin arkası sıcak ışık.",
    specs: [
      { label: "Sol", value: "Ceviz dikey şerit" },
      { label: "Sağ", value: "Meşe ışıklı raf" },
      { label: "Panel", value: "Arkadan LED" },
      { label: "Konsol", value: "Beyaz, dört göz" },
    ],
  },
  {
    slug: "kristal",
    title: "Kristal tavan, dikey ışık",
    excerpt: "Koyu asma konsol, iki yanda düşen ışık, yanda ahşap kaplama.",
    image: "/works/kristal.jpg",
    alt: "Kristal avize altında dikey LED çizgili TV duvarı ve koyu asma konsol",
    tags: ["lambri", "ahsap"],
    room: "Salon",
    story:
      "Tavan kristal avizeyle soğuk, duvar sıcak. Dikey ışıklar panelin iki yanında iniyor. Konsol koyu ve yüzer; yanda ahşap kaplama duvarı bitiriyor.",
    specs: [
      { label: "Duvar", value: "Krem flüt" },
      { label: "Işık", value: "Dikey LED hatları" },
      { label: "Konsol", value: "Koyu, asma" },
      { label: "Yan", value: "Ahşap kaplama" },
    ],
  },
  {
    slug: "sade-cerceve",
    title: "Sade krem çerçeve",
    excerpt: "Az parça: ışıklı çerçeve, üç gözlü konsol, alttaki flüt bant.",
    image: "/works/sade-cerceve.jpg",
    alt: "Krem flüt duvarda sade LED çerçeveli televizyon ve üç gözlü asma konsol",
    tags: ["lambri"],
    room: "Salon",
    story:
      "Dar duvarda fazlalık yok. Çerçeve ışığı paneli duvardan ayırıyor, konsol üç eşit göze bölünüyor, altında flüt bant sürüyor.",
    specs: [
      { label: "Duvar", value: "Krem flüt" },
      { label: "Çerçeve", value: "İnce LED" },
      { label: "Konsol", value: "Asma, üç göz" },
      { label: "Alt", value: "Flüt bant" },
    ],
  },
  {
    slug: "ahsap-merkez",
    title: "Ahşap merkez, cam kanatlar",
    excerpt: "Ortada ahşap flüt, iki yanda cam vitrin ve aplik.",
    image: "/works/ahsap-merkez.jpg",
    alt: "Ahşap flüt merkezli TV duvarı, cam vitrinler, aplikler ve ayaklı konsol",
    tags: ["ahsap", "vitrin", "lambri"],
    room: "Salon",
    story:
      "Kompozisyon simetrik. Ahşap flüt ortaya oturuyor, krem flütler onu yanlardan tutuyor. Cam vitrinler siyah ince çerçeveli, konsol ayak üzerinde.",
    specs: [
      { label: "Merkez", value: "Ahşap flüt" },
      { label: "Yanlar", value: "Krem flüt ve aplik" },
      { label: "Vitrin", value: "Cam, siyah çerçeve" },
      { label: "Konsol", value: "Ayaklı, dört göz" },
    ],
  },
  {
    slug: "cift-dolap",
    title: "Aplik ve siyah çerçeve",
    excerpt: "Krem flüt, çift aplik ve siyah profilli ışıklı dolap.",
    image: "/works/cift-dolap.jpg",
    alt: "Krem lambri TV duvarı, duvar aplikleri ve siyah çerçeveli ışıklı dolap",
    tags: ["lambri", "vitrin"],
    room: "Salon",
    story:
      "Aplik ışığı flütün üzerinde yelpaze gibi açılıyor. Sağdaki dolap siyah çerçeveyle duvardan ayrılıyor, raflar içeriden yanıyor.",
    specs: [
      { label: "Duvar", value: "Krem flüt" },
      { label: "Aplik", value: "Çift" },
      { label: "Dolap", value: "Siyah çerçeve, ışıklı" },
      { label: "Konsol", value: "Geniş, kapaklı" },
    ],
  },
  {
    slug: "asimetrik",
    title: "Tek taraflı vitrin",
    excerpt: "Solda kapalı dolap ve ışıklı niş, sağda gri flüt kanat.",
    image: "/works/asimetrik.jpg",
    alt: "Asimetrik TV duvarı, solda ışıklı niş ve sağda gri lambri kanat",
    tags: ["lambri", "vitrin"],
    room: "Salon",
    story:
      "İki yan birbirinin kopyası değil. Solda depolama ve ışık, sağda yalnızca flüt. TV paneli bu dengesizliğin ortasında sakin duruyor.",
    specs: [
      { label: "Sol", value: "Kapaklı dolap ve niş" },
      { label: "Sağ", value: "Gri flüt kanat" },
      { label: "Panel", value: "LED çerçeve" },
      { label: "Konsol", value: "Asma, dört göz" },
    ],
  },
  {
    slug: "beton-raf",
    title: "Gri gövde, ceviz raf",
    excerpt: "Beton görünümlü gövde, ceviz kitaplık ve ışıklı raf kolu.",
    image: "/works/beton-raf.jpg",
    alt: "Gri beton görünümlü TV ünitesi, ceviz kitaplık ve ışıklı raf",
    tags: ["ahsap", "vitrin"],
    room: "Salon",
    story:
      "Gövde gri ve tok. Üst bant ceviz kaplama, sağ kol ışıklı raflarla iniyor. Ses barı panelin altında, konsolun üstünde duruyor.",
    specs: [
      { label: "Gövde", value: "Beton görünümlü" },
      { label: "Üst", value: "Ceviz kaplama" },
      { label: "Raf", value: "Işıklı, açık" },
      { label: "Sol", value: "Ceviz kitaplık" },
    ],
  },
  {
    slug: "nis-cerceve",
    title: "Çerçeve içinde lambri",
    excerpt: "Kahverengi bir çerçeve, içinde ışıklı flüt ve yüzen konsol.",
    image: "/works/nis-cerceve.jpg",
    alt: "Çerçeve içine alınmış krem lambri TV nişi ve asma konsol",
    tags: ["lambri"],
    room: "Salon",
    story:
      "Duvarın bir parçası niş gibi içeri alınıyor. Flüt yalnızca çerçevenin içinde. Işık panelin arkasından taşıyor, konsol iki göze bölünüyor.",
    specs: [
      { label: "Çerçeve", value: "Gömme niş" },
      { label: "İç", value: "Krem flüt" },
      { label: "Işık", value: "Arkadan halo" },
      { label: "Konsol", value: "Asma" },
    ],
  },
];

export const services: Service[] = [
  {
    slug: "tv-unitesi",
    index: "01",
    title: "Özel ölçü TV ünitesi",
    lead: "Televizyon bir modülün içine sıkıştırılmaz. Panel, duvarın genişliğine ve ekranın ölçüsüne göre çizilir.",
    body: [
      "Priz, anten ve askı payı çizimde yerini alır. Panel ekrandan bir kademe büyük olur; ışık çerçevesi televizyonun kenarına yapışmaz.",
      "Konsol yüzer ya da ayaklı olabilir. Göz sayısı, kapak yönü ve açık niş, odadaki eşyaya göre belirlenir.",
    ],
    points: ["TV ölçüsüne göre panel", "Priz ve kablo payı", "Asma veya ayaklı konsol", "Yerinde hizalama"],
    tag: "lambri",
  },
  {
    slug: "lambri",
    index: "02",
    title: "Dekoratif lambri",
    lead: "Flütlü kaplama duvarı düz bir fondan ritme çevirir. Krem, beyaz, gri, adaçayı ve antrasit.",
    body: [
      "Çıta aralığı ve derinlik ışığın nasıl düşeceğini değiştirir. Aplik ve dikey LED, flütün üzerinde ayrı bir tempo kurar.",
      "Lambri tek başına da durur, mermer ya da ahşap bir panelle de birleşir.",
    ],
    points: ["Flüt aralığı çizimde netleşir", "Mat lake renk", "Tam duvar veya niş", "Kapı ve tavan kotuna göre biter"],
    tag: "lambri",
  },
  {
    slug: "mermer-panel",
    index: "03",
    title: "Mermer görünümlü panel",
    lead: "Beyaz, gri ve altın damarlı yüzeyler. Doğal taş hissi, duvar ölçüsüne göre panel.",
    body: [
      "Mermer görünümlü plaka TV’nin arkasına ya da antre nişine gelir. Yanında flüt veya sade bir kaset bırakılır ki damar nefes alsın.",
      "Derz ve damar yönü çizimde işaretlenir; montajda damar rastgele kesilmez.",
    ],
    points: ["Damar yönü korunur", "TV arkası veya antre nişi", "Halo ışık ile birlikte", "Yan flüt ile dengelenir"],
    tag: "mermer",
  },
  {
    slug: "aydinlatma",
    index: "04",
    title: "Gizli LED ve çubuk ışık",
    lead: "Çubuk LED, gizli çerçeve ve aplik. Işık panelin içinde, çizimde yerini alır.",
    body: [
      "Dikey çubuklar flütün üstünden iner; boyları aynı olmak zorunda değildir. Çerçeve LED’i televizyonun kenarını tutar, konsolun altı ayrı bir hat olabilir.",
      "Şeritler servis boşluğuyla gizlenir. Gece senaryosu gündüzden bağımsız açılır.",
    ],
    points: ["Dikey çubuk LED", "TV çevresi çerçevesi", "Ayrı senaryo", "Servis payı"],
    tag: "lambri",
  },
  {
    slug: "vitrin",
    index: "05",
    title: "Işıklı vitrin ve raf",
    lead: "Cam kapaklı ya da açık. Kitap, obje ya da yalnızca ışık için.",
    body: [
      "Raf aralığı konulacak eşyaya göre değişir. Cam kapakta ince siyah veya gövde renginde profil kullanılır.",
      "İç ışık rafın altından ya da dikey bir hattan gelir; göz almaması için panelin içinde kalır.",
    ],
    points: ["Cam veya açık raf", "İçten sıcak ışık", "Simetrik veya tek kanat", "Kitaplık ölçüsü"],
    tag: "vitrin",
  },
  {
    slug: "somine",
    index: "06",
    title: "Şömineli konsol",
    lead: "Elektrikli, dekoratif ünite. Baca istemez. Konsolun orta gözüne oturur.",
    body: [
      "Şömine ölçüsü konsol çizilirken belirlenir. Alev efekti ile panel LED’i ayrı düşünülür; ikisi aynı anda bağırmaz.",
      "Isı payı ve priz, gövdenin içinde çözülür.",
    ],
    points: ["Elektrikli dekoratif ünite", "Baca gerekmez", "Orta göze gömme", "Ayrı priz"],
    tag: "somine",
  },
  {
    slug: "ayna-unitesi",
    index: "07",
    title: "Işıklı ayna ve dresuar",
    lead: "180×80 cm LED’li ayna 3.500 TL’den başlar. Kemer, yuvarlak ayna ve flütlü dresuar ayrıca fiyatlanır.",
    body: [
      "3.500 TL yalnızca 180×80 cm LED’li ayna içindir. Kemer, ikinci ayna, flüt, dresuar ve puf bu fiyata girmez. Duvar ölçülünce her biri kendi fiyatıyla teklife eklenir.",
      "Işık aynanın çevresinde kalır. Dresuar derinliği oturma payına göre kısalır. Kompozisyon kapı, priz ve tavan kotuna göre biter.",
    ],
    points: ["180×80 cm, 3.500 TL’den", "Kemer ve daire", "Asma dresuar", "Flütlü yan panel"],
    tag: "ayna",
  },
  {
    slug: "asma-konsol",
    index: "08",
    title: "Asma konsol",
    lead: "Yerde ayak yoksa oda daha geniş kalır. Taşıyıcı duvarın içindedir, görünmez.",
    body: [
      "Göz sayısı duvar boyuna bölünür. Kapaklar pushesiz ya da gömme kulplu olabilir. Üst tabla TV ünitesiyle aynı renkte ya da bilinçli olarak ayrıdır.",
    ],
    points: ["Gizli taşıyıcı", "Eşit veya serbest göz", "Mat lake veya ahşap", "Üst tabla aydınlatması"],
    tag: "lambri",
  },
];

export const steps = [
  {
    index: "01",
    title: "Keşif",
    text: "Duvar genişliği, tavan yüksekliği, priz yeri ve televizyon ölçüsü yerinde alınır. Fotoğraf yeterse ön çizim de yapılır.",
  },
  {
    index: "02",
    title: "Çizim",
    text: "Panel, niş, ışık ve konsol aynı kâğıtta çözülür. Renk ve kaplama bu aşamada kilitlenir.",
  },
  {
    index: "03",
    title: "Atölye",
    text: "Kesim, lake, LED tesisatı ve vitrin atölyede biter. Şantiye, montaj yeridir; imalat yeri değil.",
  },
  {
    index: "04",
    title: "Montaj",
    text: "Duvar terazisi, askı ve ışık yerinde kontrol edilir. Teslim, ekran yerine oturunca tamamlanır.",
  },
];

export const faq = [
  {
    q: "Hazır ölçü mü çalışıyorsunuz?",
    a: "Hayır. Her duvar ölçülür. Hazır modül, priz ve ekran denk gelmediğinde boşluk bırakır. Biz o boşluğu çizimde kapatırız.",
  },
  {
    q: "Fiyat neden sitede yazmıyor?",
    a: "Metre, kaplama, cam, şömine ve ışık senaryosu fiyatı değiştirir. Ölçü ve çizimden sonra yazılı teklif verilir. Sitedeki form ön keşif içindir, bağlayıcı fiyat değildir.",
  },
  {
    q: "Televizyonu siz mi takıyorsunuz?",
    a: "Panel, seçilen ekranın ölçüsüne göre hazırlanır. Montajda askı hizalanır. Ekranın kendisi ayrıca temin edilir.",
  },
  {
    q: "LED arızalanırsa duvar sökülür mü?",
    a: "Şeritler servis boşluğuyla gizlenir. Amaç, bir arızada tüm kaplamayı dağıtmamak.",
  },
  {
    q: "Şömine baca ister mi?",
    a: "Hayır. Konsola oturan ünite elektrikli ve dekoratiftir. Gerçek yanma yoktur, ısı ve priz payı çizimde bırakılır.",
  },
  {
    q: "Mermer panel gerçek taş mı?",
    a: "Hayır. Görünüm mermer, malzeme duvar paneli. Damar yönü çizimde işaretlenir; montajda rastgele kesilmez. Gerçek taş kaplama ayrıca konuşulmaz.",
  },
  {
    q: "Asma konsol her duvara olur mu?",
    a: "Taşıyıcı ya da sağlam dolu duvar gerekir. Alçıpan bölmede konsol ayaklı çözülür ya da arkaya taşıyıcı profil konur. Keşifte duvar cinsi bakılır.",
  },
  {
    q: "Ledli TV duvarı ayrı tesisat ister mi?",
    a: "Panelin içinde şerit ve sürücü için pay bırakılır. Priz, TV ile ışığın ayrı açılabilmesi için çizimde iki hat olarak işaretlenir.",
  },
  {
    q: "Ne kadar sürer?",
    a: "Süre, çizim kilidi ve malzeme sırasına bağlıdır. Keşifte net gün konuşulur; her işe uyan sabit bir gün yoktur.",
  },
  {
    q: "180×80 ayna ne kadar?",
    a: "180×80 cm LED’li ayna 3.500 TL’den başlar. Kemer, ikinci ayna, flüt, dresuar ve puf bu fiyata girmez. Onlar duvar ölçülünce ayrıca fiyatlanır.",
  },
  {
    q: "Lambri nemli duvarda durur mu?",
    a: "Islak hacim değildir. Salon ve antre için üretilir. Duvar nemliyse önce kaynak kurutulur; ıslak yüzeye kaplama yapılmaz.",
  },
];

export function projectBySlug(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export function serviceBySlug(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function projectsForTag(tag: Tag) {
  return projects.filter((item) => item.tags.includes(tag));
}

export function relatedProjects(slug: string, limit = 3) {
  const current = projectBySlug(slug);
  if (!current) return [];
  return projects
    .filter((item) => item.slug !== slug && item.tags.some((tag) => current.tags.includes(tag)))
    .slice(0, limit);
}

export const featuredProjects = projects.filter((item) => item.featured);

export const serviceSeo: Record<
  string,
  { title: string; description: string; note: string }
> = {
  "tv-unitesi": {
    title: "Özel ölçü TV ünitesi",
    description:
      "Özel ölçü TV ünitesi: ekran eni, duvar genişliği ve priz yerine göre panel ile konsol. Hazır modül yok. Atölyede üretilir, yerinde monte edilir.",
    note: "İlk üç ölçü ekranın eni, duvarın net genişliği ve prizin yeridir. Panel, askı payı kalacak kadar büyük çizilir.",
  },
  lambri: {
    title: "Dekoratif lambri kaplama",
    description:
      "Dekoratif lambri: krem, beyaz, gri, adaçayı ve antrasit flüt. TV duvarı, niş veya tam duvar. Işık, çıta aralığına göre çizilir.",
    note: "Flüt aralığı, ışığın ince bir çizgi mi yoksa düz bir gölge mi bırakacağını belirler. Renk, gündüz ve gece senaryosunda birlikte bakılır.",
  },
  "mermer-panel": {
    title: "Mermer görünümlü TV paneli",
    description:
      "Mermer görünümlü TV paneli ve antre nişi. Beyaz, gri ve altın damar. Damar yönü korunur, halo ışıkla birlikte uygulanır.",
    note: "Bu bir duvar paneli görünümüdür, ocak taşı değildir. Damarın sürekliliği kesim planında işaretlenir.",
  },
  aydinlatma: {
    title: "Çubuk LED TV duvarı",
    description:
      "Çubuk LED TV duvarı: krem lambri üzerinde dikey ışık çubukları, ışıklı TV çerçevesi ve asma konsol. Özel ölçüde üretilir.",
    note: "Çubukların boyu ve aralığı duvar genişliğine göre çizilir. Işık sonradan yapıştırılmaz.",
  },
  vitrin: {
    title: "Işıklı vitrin",
    description:
      "Işıklı vitrin ve açık raf. Cam kapak veya açık niş, içten sıcak LED. Kitaplık ve obje ölçüsüne göre raf aralığı.",
    note: "Raf yüksekliği konulacak eşyaya göre değişir. Cam kapakta ince profil kullanılır; iç ışık göz hizasını yakmaz.",
  },
  somine: {
    title: "Şömineli TV ünitesi",
    description:
      "Şömineli TV ünitesi: elektrikli dekoratif ünite, konsolun orta gözünde. Baca gerekmez. Isı payı ve priz çizimde bırakılır.",
    note: "Alev efekti ile panel ışığı ayrı düşünülür. İkisi aynı anda bağırmaz. Yanma yoktur.",
  },
  "ayna-unitesi": {
    title: "Özel ölçü LED’li ayna",
    description:
      "180×80 cm LED’li ayna 3.500 TL’den başlar. Kemer, yuvarlak ayna ve flütlü dresuar ayrıca fiyatlanır. Zerafet Dekorasyon.",
    note: "3.500 TL, 180×80 cm LED’li ayna içindir. Duvar kompozisyonu ve dresuar bu fiyata girmez.",
  },
  "asma-konsol": {
    title: "Asma TV sehpası",
    description:
      "Asma TV sehpası: ayaksız, gizli taşıyıcılı konsol. Göz sayısı duvar boyuna bölünür. Mat lake veya ahşap kaplama.",
    note: "Alçıpan bölmede konsol ayaklı çözülür. Dolu duvarda taşıyıcı görünmez, yer boş kalır.",
  },
};

export const tagLinks: { tag: Tag; to: "/hizmetler/$slug" | "/atolye"; slug?: string; label: string }[] = [
  { tag: "lambri", to: "/hizmetler/$slug", slug: "lambri", label: "Dekoratif lambri" },
  { tag: "mermer", to: "/hizmetler/$slug", slug: "mermer-panel", label: "Mermer görünümlü panel" },
  { tag: "vitrin", to: "/hizmetler/$slug", slug: "vitrin", label: "Işıklı vitrin" },
  { tag: "somine", to: "/hizmetler/$slug", slug: "somine", label: "Şömineli ünite" },
  { tag: "ayna", to: "/hizmetler/$slug", slug: "ayna-unitesi", label: "Ledli ayna" },
  { tag: "ahsap", to: "/atolye", label: "Ahşap kaplama" },
];

export function linksForProject(tags: Tag[]) {
  return tagLinks.filter((item) => tags.includes(item.tag));
}

const updated = "2026-11-14";

export function sitemapEntries() {
  const pages: { path: string; priority: string; image?: string; caption?: string }[] = [
    { path: "/", priority: "1.0", image: "/works/mermer-somine.jpg", caption: "Mermer görünümlü şömineli TV duvarı" },
    { path: "/hizmetler", priority: "0.9" },
    { path: "/projeler", priority: "0.9" },
    { path: "/atolye", priority: "0.7" },
    { path: "/iletisim", priority: "0.6" },
    ...services.map((item) => ({ path: `/hizmetler/${item.slug}`, priority: "0.8" })),
    ...projects.map((item) => ({
      path: `/projeler/${item.slug}`,
      priority: "0.6",
      image: item.image,
      caption: item.alt,
    })),
  ];
  return { updated, pages };
}
