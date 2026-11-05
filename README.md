# Zerafet Dekorasyon

Özel ölçü TV duvarları ve dekoratif kaplamalar için kurumsal site.

## Yapı

- `src/lib/site.ts` — marka, adres URL’si ve iletişim. Boş bırakılan telefon, WhatsApp ve e-posta sitede görünmez.
- `src/lib/content.ts` — hizmetler, projeler, süreç ve SSS. Yeni iş buraya eklenir.
- `src/routes/` — sayfalar: ana sayfa, projeler, hizmetler, atölye, iletişim, `sitemap.xml`.
- `public/works/` — uygulama fotoğrafları.
- `public/robots.txt` — tarama izni. Kök dizin kapatılmaz.

## İletişim bilgisi

`src/lib/site.ts` içindeki `contact` alanlarını doldurun:

- `phoneDisplay` ve `phoneTel`
- `whatsapp` (ülke kodu ile, ör. `90532…`) — form, talebi WhatsApp’a bağlar
- `email`, `instagram`

Alan adı değişirse `site.url` ve `public/robots.txt` birlikte güncellenir.
