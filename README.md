# Portfolio Website

Portfolio personal website yang dibangun dengan [Next.js](https://nextjs.org) dan [Tailwind CSS](https://tailwindcss.com).

## Daftar Isi

- [Fitur](#fitur)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Build Produksi](#build-produksi)
- [Struktur Proyek](#struktur-proyek)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)

## ✨ Fitur

- Dark mode dan Light mode dengan next-themes
- Responsive design dengan Tailwind CSS
- Next.js 16 dengan App Router
- Animasi smooth dengan Motion
- GitHub contribution graph
- Showcase projects, music, movies, dan profile
- Custom UI components dengan Radix UI
- Statistics and achievements section

## Prasyarat

Pastikan sudah menginstall:

- **Node.js** (versi 18.17 atau lebih baru)
- **npm** atau **yarn** atau **pnpm**

Cek versi Node.js:

```bash
node --version
npm --version
```

## Instalasi

### 1. Clone Repository

```bash
git clone <repository-url>
cd Portofolio-web
```

### 2. Install Dependencies

Gunakan salah satu dari perintah berikut:

```bash
npm install
```

atau dengan yarn:

```bash
yarn install
```

atau dengan pnpm:

```bash
pnpm install
```

## ▶️ Menjalankan Aplikasi

### Development Mode

Jalankan development server:

```bash
npm run dev
```

atau:

```bash
yarn dev
```

atau:

```bash
pnpm dev
```

Buka browser dan kunjungi:

- **http://localhost:3000**

Server akan otomatis reload ketika ada perubahan file.

### Linting

Cek kode dengan ESLint:

```bash
npm run lint
```

## ️ Build Produksi

### 1. Build Project

```bash
npm run build
```

### 2. Jalankan Production Server

```bash
npm run start
```

Aplikasi akan tersedia di **http://localhost:3000**

## Struktur Proyek

```
.
├── app/                      # Pages dan layouts utama
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── Home/                # Home components
│   ├── profile/             # Profile page dan components
│   ├── projects/            # Projects page
│   ├── music/               # Music page
│   └── movie/               # Movie page
├── components/              # Reusable components
│   ├── ui/                  # UI components dasar (button, input, etc)
│   └── kibo-ui/             # Custom components
├── utils/                   # Utility functions
│   ├── data/                # Data statis (projects, achievements, etc)
│   ├── types/               # TypeScript types dan interfaces
│   └── customTheme.tsx      # Theme configuration
├── hooks/                   # Custom React hooks
├── public/                  # Static files (images, robots.txt, etc)
├── styles/                  # Global styles
└── package.json             # Project dependencies
```

## ️ Teknologi yang Digunakan

### Core Framework

- **Next.js 16.0.7** - React framework dengan SSR/SSG
- **React 19.2.1** - UI library
- **TypeScript 5** - Type safety

### Styling

- **Tailwind CSS 4** - Utility-first CSS
- **PostCSS 4** - CSS processing

### UI & Components

- **Radix UI** - Accessible component primitives
  - Dialog, Dropdown Menu, Separator, Tooltip, Collapsible
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **Motion** - Animation library

### Features & Utilities

- **next-themes** - Dark/Light mode management
- **date-fns** - Date utility library
- **clsx** - Class name utility
- **tailwind-merge** - Merge Tailwind CSS classes

### Development

- **ESLint 9** - Code linting
- **@types packages** - TypeScript definitions

## Dokumentasi Lebih Lanjut

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [React Documentation](https://react.dev)

## Deployment

### Deploy ke Vercel (Recommended)

Cara termudah untuk deploy adalah menggunakan [Vercel Platform](https://vercel.com):

1. Push kode ke GitHub
2. Buka https://vercel.com/new
3. Import repository
4. Vercel akan otomatis detect Next.js
5. Click Deploy

Baca lebih lanjut: [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## Catatan

- Pastikan semua dependencies ter-install dengan benar sebelum menjalankan
- Gunakan Node.js versi LTS untuk stabilitas maksimal
- Jika ada error, coba hapus `node_modules` dan `.next` folder, lalu install ulang

---
