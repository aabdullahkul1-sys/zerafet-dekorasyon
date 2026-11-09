import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { contact } from "@/lib/site";

const widths = ["2 metreden dar", "2–3 metre", "3–4 metre", "4 metreden geniş", "Henüz ölçmedim"];
const interests = ["TV ünitesi", "Lambri", "Mermer panel", "Vitrin", "Şömine", "Ayna", "Dresuar", "Emin değilim"];

type Draft = {
  name: string;
  phone: string;
  city: string;
  width: string;
  interest: string;
  note: string;
};

const empty: Draft = {
  name: "",
  phone: "",
  city: "",
  width: widths[1],
  interest: interests[0],
  note: "",
};

const storageKey = "zerafet-talepler";

function digits(value: string) {
  return value.replace(/\D/g, "");
}

function brief(draft: Draft) {
  return [
    "Zerafet Dekorasyon keşif talebi",
    `Ad: ${draft.name}`,
    `Telefon: ${draft.phone}`,
    `Şehir: ${draft.city}`,
    `Duvar: ${draft.width}`,
    `İlgi: ${draft.interest}`,
    draft.note ? `Not: ${draft.note}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function QuoteForm() {
  const [draft, setDraft] = useState<Draft>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Draft, string>>>({});
  const [sent, setSent] = useState<Draft | null>(null);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<Draft[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setHistory(JSON.parse(raw) as Draft[]);
    } catch {
      setHistory([]);
    }
  }, []);

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const next: Partial<Record<keyof Draft, string>> = {};
    if (draft.name.trim().length < 2) next.name = "Adınızı yazın.";
    if (digits(draft.phone).length < 10) next.phone = "Telefon numarası eksik.";
    if (draft.city.trim().length < 2) next.city = "Şehir veya ilçe yazın.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const saved = { ...draft, name: draft.name.trim(), city: draft.city.trim() };
    const list = [saved, ...history].slice(0, 6);
    setHistory(list);
    localStorage.setItem(storageKey, JSON.stringify(list));
    setSent(saved);
    setDraft(empty);
  }

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (sent) {
    const text = brief(sent);
    const whatsapp = contact.whatsapp
      ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`
      : "";
    return (
      <div className="border border-line bg-foam p-6 sm:p-8">
        <p className="text-xs tracking-widest text-brass uppercase">Talep hazır</p>
        <h2 className="mt-2 font-display text-3xl text-ink">Teşekkürler, {sent.name.split(" ")[0]}.</h2>
        <p className="mt-3 text-sm text-stone">
          Bu bir ön keşiftir, fiyat içermez. Metni atölyeye iletin; ölçüden sonra yazılı teklif gelir.
        </p>
        <pre className="mt-5 overflow-x-auto bg-paper p-4 text-sm whitespace-pre-wrap text-ink">{text}</pre>
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" className="bg-ink px-4 py-3 text-sm text-paper" onClick={() => copy(text)}>
            {copied ? "Kopyalandı" : "Metni kopyala"}
          </button>
          {whatsapp ? (
            <a className="border border-line px-4 py-3 text-sm text-ink" href={whatsapp} target="_blank" rel="noreferrer">
              WhatsApp ile gönder
            </a>
          ) : null}
          {contact.email ? (
            <a className="border border-line px-4 py-3 text-sm text-ink" href={`mailto:${contact.email}?subject=Keşif talebi&body=${encodeURIComponent(text)}`}>
              E-posta ile gönder
            </a>
          ) : null}
          <button type="button" className="px-4 py-3 text-sm text-stone" onClick={() => setSent(null)}>
            Yeni talep
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-line bg-foam p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad" error={errors.name} id="ad">
          <input id="ad" value={draft.name} onChange={(event) => update("name", event.target.value)} className={inputClass} autoComplete="name" />
        </Field>
        <Field label="Telefon" error={errors.phone} id="telefon">
          <input id="telefon" value={draft.phone} onChange={(event) => update("phone", event.target.value)} className={inputClass} inputMode="tel" autoComplete="tel" />
        </Field>
        <Field label="Şehir / ilçe" error={errors.city} id="sehir">
          <input id="sehir" value={draft.city} onChange={(event) => update("city", event.target.value)} className={inputClass} autoComplete="address-level2" />
        </Field>
        <Field label="Duvar genişliği" id="genislik">
          <select id="genislik" value={draft.width} onChange={(event) => update("width", event.target.value)} className={inputClass}>
            {widths.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
        <Field label="İlgi" id="ilgi">
          <select id="ilgi" value={draft.interest} onChange={(event) => update("interest", event.target.value)} className={inputClass}>
            {interests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Not" id="not">
            <textarea id="not" value={draft.note} onChange={(event) => update("note", event.target.value)} className={`${inputClass} min-h-28`} placeholder="TV ölçüsü, renk tercihi, oda." />
          </Field>
        </div>
      </div>
      <button type="submit" className="mt-6 bg-ink px-5 py-3 text-sm text-paper">
        Talebi hazırla
      </button>
      <p className="mt-3 text-xs text-stone">Bağlayıcı fiyat değildir. Bu cihazda son talepleriniz durur.</p>
      {history.length ? (
        <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm text-stone">
          {history.map((item, index) => (
            <li key={`${item.phone}-${index}`}>
              {item.name} · {item.city} · {item.interest}
            </li>
          ))}
        </ul>
      ) : null}
    </form>
  );
}

const inputClass =
  "mt-2 w-full border border-line bg-paper px-3 py-3 text-sm text-ink outline-none";

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className="block text-sm text-ink">
      {label}
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-brass" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
