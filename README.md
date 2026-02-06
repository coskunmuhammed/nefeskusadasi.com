# Nefes Villaları Landing Page

Kuşadası Soğucak – Nefes Villaları için geliştirilmiş modern, responsive landing page projesi.
Next.js 14, TypeScript ve TailwindCSS kullanılarak geliştirilmiştir. Docker ile üretime hazır hale getirilmiştir.

## İçerik
- **Modern Tasarım**: Ferah, mobil uyumlu ve premium arayüz.
- **Tek Sayfa Yapısı**: Hero, Proje Özeti, Planlar, Özellikler, Akıllı Ev, SSS ve İletişim bölümleri.
- **Teknik**: Next.js App Router, SEO uyumlu metadata.

## Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ veya Docker Desktop

### 1. Docker İle (Önerilen)
Projeyi tek komutla ayağa kaldırmak için:

```bash
docker compose up --build
```
Uygulama http://localhost:3000 adresinde çalışacaktır.

### 2. Yerel Geliştirme Ortamı
```bash
npm install
npm run dev
```

## Klasör Yapısı

```
nefeskusadasi.com/
├── app/                  # Sayfa ve layout (App Router)
├── components/           # UI Bileşenleri (Hero, Header, Features vb.)
├── public/               # Görseller (images/)
├── Dockerfile            # Docker production build yapılandırması
├── docker-compose.yml    # Docker servis tanımı
└── next.config.ts        # Next.js konfigürasyonu (Standalone modu aktif)
```

## Notlar
- İletişim formu frontend simülasyonudur, veritabanı bağlantısı yoktur.
- Görseller `public/images` klasöründen sunulmaktadır.
