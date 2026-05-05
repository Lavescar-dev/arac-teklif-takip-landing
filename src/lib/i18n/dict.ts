export type Locale = 'tr' | 'en';

export type Dict = {
  langSwitch: { aria: string; tr: string; en: string };
  nav: { github: string; site: string };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    sub: string;
    ctaDownload: string;
    ctaSource: string;
    metaLicense: string;
    metaPlatforms: string;
    metaPython: string;
  };
  what: {
    title: string;
    arac: { name: string; desc: string };
    teklif: { name: string; desc: string };
  };
  flow: {
    title: string;
    steps: Array<{ k: string; t: string; d: string }>;
  };
  features: { title: string; items: Array<{ t: string; d: string }> };
  install: {
    title: string;
    sub: string;
    sourceTitle: string;
    sourceCmd: string;
    binaryTitle: string;
    binaryNote: string;
  };
  footer: { author: string; built: string };
};

const tr: Dict = {
  langSwitch: { aria: 'Dil seçici', tr: 'TR', en: 'EN' },
  nav: { github: 'GitHub', site: 'lavescar.com.tr' },
  hero: {
    eyebrow: 'KOBI OFIS OTOMASYONU',
    titleLead: 'Excel artı Gmail.',
    titleAccent: 'Sıkıcı tekrar yok.',
    titleTail: 'Sadece bildirim.',
    sub: 'Araç bakım takibi ve teklif hatırlatma için iki küçük Python aracı. Excel’deki kuralı oku, eşik aşılırsa Gmail SMTP üzerinden bildirim at.',
    ctaDownload: '↓ Indir',
    ctaSource: 'Kaynak kodu',
    metaLicense: 'MIT',
    metaPlatforms: 'Windows · Linux · macOS',
    metaPython: 'Python 3.10+',
  },
  what: {
    title: 'iki araç, tek mantık',
    arac: {
      name: 'AracTakip',
      desc: 'Filo araç bakım çizelgesi (km, tarih, eşik) — bakım yaklaşırsa otomatik hatırlatma e-postası.',
    },
    teklif: {
      name: 'TeklifTakip',
      desc: 'Müşteri teklifleri Excel’de mi takip ediliyor — yanıt bekleyen, vade yaklaşan teklif için otomatik takip e-postası.',
    },
  },
  flow: {
    title: 'akış',
    steps: [
      { k: '1', t: 'Excel açılır', d: 'openpyxl ile (Excel kurulu olmasına gerek yok). Workbook formülleri lokal değerlendirilir.' },
      { k: '2', t: 'Kural değerlendirilir', d: 'CALC: D8 B13 E13 <=15 — plaka hücresi, etiket hücresi, değer hücresi, eşik. Sıralı kurallar.' },
      { k: '3', t: 'E-posta gönderilir', d: 'Gmail SMTP (587/SSL). App password ile, üçüncü taraf SMTP yok.' },
      { k: '4', t: 'SET ile sıfırlanır', d: 'Hatırlatma sonrası SET: C22 50 ile sayaç güncellenir, aynı bildirim tekrarlanmaz.' },
    ],
  },
  features: {
    title: 'özellikler',
    items: [
      { t: 'GUI sihirbazı', d: 'Tkinter setup wizard — config dosyasını el ile yazmaya gerek yok.' },
      { t: 'PyInstaller .exe', d: 'Tek dosya Windows .exe — hedef makinede Python kurulu olmasına gerek yok.' },
      { t: 'CALC + SET kuralları', d: 'Excel formülleri (TODAY, NOW, hücre aritmetiği) lokal evaluator ile çözülür.' },
      { t: 'Birden fazla alıcı', d: 'EMAILRECIPIENTS satırına virgülle ayırarak istediğin kadar muhatap ekle.' },
      { t: 'Log dosyası', d: 'EmailGonderici.log — her tetiklenen kural ve gönderilen mail kayıt altında.' },
      { t: 'Cron / Görev Zamanlayıcı', d: 'Linux’da cron, Windows’da Task Scheduler ile dakika/saat bazlı tetikle.' },
    ],
  },
  install: {
    title: 'kurulum',
    sub: 'İki yol — kaynaktan çalıştır ya da .exe indir.',
    sourceTitle: 'Kaynaktan',
    sourceCmd:
      'git clone https://github.com/Lavescar-dev/arac-teklif-takip\ncd arac-teklif-takip\npip install -r requirements.txt\npython EmailGonderici.py --setup',
    binaryTitle: 'Hazır .exe (Windows)',
    binaryNote:
      'GitHub Releases sayfasından son AracTakip.exe ve TeklifTakip.exe’yi indir, çift tıkla, sihirbaz açılır.',
  },
  footer: { author: '© 2026 Lavescar', built: 'SvelteKit + Cloudflare Pages' },
};

const en: Dict = {
  langSwitch: { aria: 'Language switch', tr: 'TR', en: 'EN' },
  nav: { github: 'GitHub', site: 'lavescar.com.tr' },
  hero: {
    eyebrow: 'SMB OFFICE AUTOMATION',
    titleLead: 'Excel plus Gmail.',
    titleAccent: 'No boring repetition.',
    titleTail: 'Only notifications.',
    sub: 'Two small Python tools for vehicle maintenance and proposal follow-up tracking. Read the rule from Excel, fire a Gmail SMTP notification when the threshold trips.',
    ctaDownload: '↓ Download',
    ctaSource: 'Source code',
    metaLicense: 'MIT',
    metaPlatforms: 'Windows · Linux · macOS',
    metaPython: 'Python 3.10+',
  },
  what: {
    title: 'two tools, one logic',
    arac: {
      name: 'AracTakip',
      desc: 'Fleet vehicle maintenance scheduler (km, date, threshold) — fires a reminder email when service is due.',
    },
    teklif: {
      name: 'TeklifTakip',
      desc: 'Tracking customer proposals in Excel — automatic follow-up email for pending replies and approaching deadlines.',
    },
  },
  flow: {
    title: 'flow',
    steps: [
      { k: '1', t: 'Open the workbook', d: 'Pure-Python openpyxl reader — no Excel install required. Formulas are evaluated locally.' },
      { k: '2', t: 'Evaluate rules', d: 'CALC: D8 B13 E13 <=15 — plate cell, label cell, value cell, threshold. Rules are processed in order.' },
      { k: '3', t: 'Send email', d: 'Gmail SMTP (587/SSL) with an app password. No third-party SMTP relay involved.' },
      { k: '4', t: 'Reset with SET', d: 'After firing, SET: C22 50 updates the counter so the same notification does not repeat.' },
    ],
  },
  features: {
    title: 'features',
    items: [
      { t: 'GUI wizard', d: 'Tkinter setup wizard — no need to hand-write the config file.' },
      { t: 'PyInstaller .exe', d: 'Single-file Windows .exe — target machine does not need Python installed.' },
      { t: 'CALC + SET rules', d: 'Excel formulas (TODAY, NOW, cell arithmetic) resolve through a local evaluator.' },
      { t: 'Multiple recipients', d: 'EMAILRECIPIENTS line accepts a comma-separated list — add as many recipients as you need.' },
      { t: 'Log file', d: 'EmailGonderici.log — every triggered rule and sent mail is recorded.' },
      { t: 'Cron / Task Scheduler', d: 'Wire it up via cron on Linux or Task Scheduler on Windows.' },
    ],
  },
  install: {
    title: 'install',
    sub: 'Two ways — run from source or download the .exe.',
    sourceTitle: 'From source',
    sourceCmd:
      'git clone https://github.com/Lavescar-dev/arac-teklif-takip\ncd arac-teklif-takip\npip install -r requirements.txt\npython EmailGonderici.py --setup',
    binaryTitle: 'Prebuilt .exe (Windows)',
    binaryNote:
      'Grab the latest AracTakip.exe and TeklifTakip.exe from the GitHub Releases page, double-click, the wizard opens.',
  },
  footer: { author: '© 2026 Lavescar', built: 'SvelteKit + Cloudflare Pages' },
};

export const dictionaries: Record<Locale, Dict> = { tr, en };
export { en };
export const defaultLocale: Locale = 'tr';
