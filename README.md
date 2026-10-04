# AraçTakip + TeklifTakip — tanıtım sayfası

[AraçTakip + TeklifTakip](https://github.com/Lavescar-dev/arac-teklif-takip) araçlarının tanıtım sayfası: Excel'deki muayene, sigorta ve teklif tarihleri için otomatik e-posta bildirimi.

- **Canlı:** https://arac.lavescar.com.tr
- **Ürün:** [arac-teklif-takip](https://github.com/Lavescar-dev/arac-teklif-takip)

SvelteKit + Svelte 5 ile yazılmış tek sayfalık site; Türkçe/İngilizce dil desteği `src/lib/i18n` altında.
Cloudflare Pages üzerinde `@sveltejs/adapter-cloudflare` ile yayınlanır.

## Geliştirme

```sh
npm ci
npm run dev       # yerel geliştirme sunucusu
npm run check     # svelte-check + TypeScript
npm run build
```

## Yayınlama

```sh
npm run deploy    # build + wrangler pages deploy (Cloudflare hesabı gerekir)
```
