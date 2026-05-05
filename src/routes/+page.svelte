<script lang="ts">
  import { onMount } from 'svelte';
  import { i18n } from '$lib/i18n/index.svelte';

  const REPO = 'https://github.com/Lavescar-dev/arac-teklif-takip';
  const RELEASES = `${REPO}/releases`;

  onMount(() => i18n.init());

  const t = $derived(i18n.t);
  const locale = $derived(i18n.locale);
</script>

<svelte:head>
  <title>lavescar ▸ arac-teklif-takip</title>
  <meta name="description" content="Araç bakım takibi ve teklif hatırlatma için iki Python aracı. Excel kuralları + Gmail SMTP + Tkinter sihirbazı + PyInstaller .exe." />
</svelte:head>

<main class="page">
  <header class="top">
    <div class="brand">
      <span class="logo">L</span>
      <span class="name">lavescar</span>
      <span class="sep">▸</span>
      <span class="mode">arac-teklif-takip</span>
    </div>
    <nav class="top-nav" aria-label={t.langSwitch.aria}>
      <a href={REPO} target="_blank" rel="noopener">{t.nav.github}</a>
      <a href="https://lavescar.com.tr" target="_blank" rel="noopener">{t.nav.site}</a>
      <div class="lang" role="group" aria-label={t.langSwitch.aria}>
        <button class="lang-btn" class:on={locale === 'tr'} aria-pressed={locale === 'tr'} onclick={() => i18n.set('tr')}>{t.langSwitch.tr}</button>
        <button class="lang-btn" class:on={locale === 'en'} aria-pressed={locale === 'en'} onclick={() => i18n.set('en')}>{t.langSwitch.en}</button>
      </div>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-main">
      <div class="hero-eyebrow">{t.hero.eyebrow}</div>
      <h1>
        <span class="h-muted">{t.hero.titleLead}</span><br />
        <span class="h-accent">{t.hero.titleAccent}</span><br />
        {t.hero.titleTail}
      </h1>
      <p class="hero-sub">{t.hero.sub}</p>

      <div class="hero-cta">
        <a class="btn primary" href={RELEASES} target="_blank" rel="noopener">{t.hero.ctaDownload}</a>
        <a class="btn ghost" href={REPO} target="_blank" rel="noopener">{t.hero.ctaSource}</a>
      </div>

      <div class="hero-meta">
        <span>{t.hero.metaLicense}</span>
        <span class="dot-sep">·</span>
        <span>{t.hero.metaPlatforms}</span>
        <span class="dot-sep">·</span>
        <span>{t.hero.metaPython}</span>
      </div>
    </div>

    <div class="hero-card" aria-hidden="true">
      <div class="mock-row head">
        <span>EmailGondericiAyarlar.txt</span>
        <span class="clip">CONFIG</span>
      </div>
      <div class="mock-block">
        <span class="ln">FILENAME</span><span>: Arac Bakim Takibi.xlsx</span>
        <span class="ln">GMAILUSERNAME</span><span>: filo@firma.com</span>
        <span class="ln">EMAILRECIPIENTS</span><span>: bakim@firma.com</span>
      </div>
      <div class="mock-row head">CALC kuralları <span class="ready">aktif</span></div>
      <div class="mock-rules">
        <div><code>CALC:</code> <span class="hi">D8</span> B13 E13 <span class="op">&lt;=15</span></div>
        <div><code>CALC:</code> <span class="hi">D8</span> B14 E14 <span class="op">&lt;=15</span></div>
        <div><code>CALC:</code> <span class="hi">I8</span> G13 J13 <span class="op">&lt;=15</span></div>
        <div><code>SET:</code>  <span class="hi">C22</span> 50</div>
      </div>
      <div class="mock-row head">çıkış</div>
      <div class="mock-output">
        <div><span class="dot ok"></span>34ABC123 · "Yağ filtresi" · 12 km kaldı → mail gönderildi</div>
        <div><span class="dot ok"></span>34DEF456 · "Lastik rotasyonu" · 7 km kaldı → mail gönderildi</div>
        <div><span class="dot dim"></span>SET C22 = 50 · sayaç sıfırlandı</div>
      </div>
    </div>
  </section>

  <section class="block">
    <h2>{t.what.title}</h2>
    <div class="two">
      <article class="card">
        <h3>{t.what.arac.name}</h3>
        <p>{t.what.arac.desc}</p>
      </article>
      <article class="card">
        <h3>{t.what.teklif.name}</h3>
        <p>{t.what.teklif.desc}</p>
      </article>
    </div>
  </section>

  <section class="block">
    <h2>{t.flow.title}</h2>
    <ol class="steps">
      {#each t.flow.steps as step}
        <li>
          <span class="step-k">{step.k}</span>
          <div>
            <strong>{step.t}</strong>
            <span>{step.d}</span>
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <section class="block">
    <h2>{t.features.title}</h2>
    <ul class="grid">
      {#each t.features.items as it}
        <li>
          <strong>{it.t}</strong>
          <span>{it.d}</span>
        </li>
      {/each}
    </ul>
  </section>

  <section class="block" id="install">
    <h2>{t.install.title}</h2>
    <p class="muted">{t.install.sub}</p>
    <div class="two">
      <article class="card">
        <h3>{t.install.sourceTitle}</h3>
        <pre><code>{t.install.sourceCmd}</code></pre>
      </article>
      <article class="card">
        <h3>{t.install.binaryTitle}</h3>
        <p>{t.install.binaryNote}</p>
        <a class="btn primary inline" href={RELEASES} target="_blank" rel="noopener">{t.hero.ctaDownload}</a>
      </article>
    </div>
  </section>

  <footer class="foot">
    <span>{t.footer.author}</span>
    <span class="dot-sep">·</span>
    <span>{t.footer.built}</span>
  </footer>
</main>
