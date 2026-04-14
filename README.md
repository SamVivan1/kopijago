# KopiJago

Aplikasi web modern untuk KopiJago - platform penjualan dan informasi kopi berkualitas tinggi. Dibangun dengan teknologi terkini untuk memberikan pengalaman pengguna yang optimal.

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Prasyarat](#prasyarat)
- [Instalasi & Setup](#instalasi--setup)
- [Menjalankan Proyek](#menjalankan-proyek)
- [Struktur Proyek](#struktur-proyek)
- [Perintah Tersedia](#perintah-tersedia)
- [Deployment](#deployment)
- [Berkontribusi](#berkontribusi)
- [Lisensi](#lisensi)

## 🎯 Tentang Proyek

KopiJago adalah aplikasi web yang dirancang untuk menampilkan rangkaian produk kopi premium, informasi lokasi, dan memudahkan pelanggan untuk menghubungi melalui berbagai platform. Aplikasi ini menawarkan antarmuka yang intuitif dan responsif dengan dukungan tema gelap/terang.

## ✨ Fitur

- 🎨 **UI Modern** - Komponen yang indah dan responsif menggunakan Radix UI
- 🌙 **Dark/Light Mode** - Dukungan penuh untuk tema gelap dan terang
- 📱 **Responsive Design** - Sempurna untuk desktop, tablet, dan mobile
- 🎯 **Integrasi Media Sosial** - Link langsung ke Instagram dan WhatsApp
- 📊 **Analytics** - Integrasi Vercel Analytics untuk tracking
- ♿ **Accessible** - Memenuhi standar aksesibilitas web
- ⚡ **Performance Optimized** - Menggunakan Next.js 16 untuk performa maksimal
- 🔒 **TypeScript** - Type-safe development untuk kode yang lebih reliable

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 16.2.0 (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Form Management:** React Hook Form
- **Theme:** Next Themes
- **Analytics:** Vercel Analytics
- **Date Handling:** Date-fns

### Development
- **Package Manager:** PNPM
- **Linting:** ESLint
- **Node Version:** 18+ (recommended 20+)

### Deployment
- **Container:** Docker & Docker Compose
- **Platform:** Kompatibel dengan semua cloud provider (Vercel, AWS, GCP, DigitalOcean, dll)

## 📦 Prasyarat

Sebelum memulai, pastikan Anda telah menginstall:

- **Node.js** (versi 18+, rekomendasi 20+)
- **PNPM** (package manager yang digunakan)
  ```bash
  npm install -g pnpm
  ```
- **Docker & Docker Compose** (opsional, untuk deployment)

## 🚀 Instalasi & Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd kopijago
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Setup Environment Variables
Buat file `.env.local` di root direktori (jika diperlukan):
```bash
# .env.local
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 🏃 Menjalankan Proyek

### Development Mode
```bash
pnpm dev
```
Aplikasi akan berjalan di `http://localhost:3000`

### Build untuk Production
```bash
pnpm build
```

### Jalankan Production Build
```bash
pnpm start
```

### Linting
```bash
pnpm lint
```

## 📁 Struktur Proyek

```
kopijago/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Halaman utama
│   ├── layout.tsx           # Layout root
│   └── globals.css          # Global styles
├── components/              
│   ├── ui/                  # Komponen UI reusable
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ... (40+ komponen)
│   └── theme-provider.tsx   # Provider untuk tema
├── hooks/                   # Custom React hooks
│   ├── use-mobile.ts        # Deteksi perangkat mobile
│   └── use-toast.ts         # Toast notifications
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── styles/                 # Global styles
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose setup
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies & scripts
└── pnpm-lock.yaml         # Lock file (pnpm)
```

## 📝 Perintah Tersedia

| Command | Deskripsi |
|---------|-----------|
| `pnpm dev` | Jalankan development server dengan hot reload |
| `pnpm build` | Build untuk production |
| `pnpm start` | Jalankan production build |
| `pnpm lint` | Jalankan linting dengan ESLint |

## 🐳 Deployment

### Deployment dengan Docker

#### 1. Build Docker Image
```bash
docker build -t kopijago-app .
```

#### 2. Jalankan Container
```bash
docker run -p 3000:3000 kopijago-app
```

### Deployment dengan Docker Compose (Recommended)
```bash
docker-compose up -d --build
```

Aplikasi akan berjalan di `http://localhost:3000`

**File Deployment yang Disediakan:**
- `Dockerfile` - Minimal Dockerfile untuk production
- `docker-compose.yml` - Orchestration untuk deployment mudah

### Deployment ke Cloud Providers

#### Vercel (Recommended untuk Next.js)
```bash
npm i -g vercel
vercel
```

#### AWS, GCP, DigitalOcean
- Gunakan Docker image yang sudah dibuat
- Follow dokumentasi provider masing-masing
- Pastikan port 3000 terbuka

### Environment Variables untuk Production
```bash
NODE_ENV=production
```

## 🔧 Customization

### Menambah Component Baru
1. Buat file di `components/ui/nama-komponen.tsx`
2. Export component dari file tersebut
3. Gunakan di halaman/komponen lain

### Styling
- Gunakan Tailwind CSS classes
- Custom styles dengan CSS Modules atau styled components
- Theme colors dapat dikustomisasi di Tailwind config

## 📚 Dokumentasi & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [TypeScript](https://www.typescriptlang.org)

## 🐛 Troubleshooting

### Issue: Build gagal dengan error dependencies
```bash
# Clear cache dan reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Issue: Port 3000 sudah digunakan
```bash
# Gunakan port berbeda
pnpm dev -p 3001
```

### Issue: Docker build gagal
```bash
# Rebuild tanpa cache
docker build --no-cache -t kopijago-app .
```

## 🤝 Berkontribusi

Kontribusi sangat diterima! Untuk berkontribusi:

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini dilindungi di bawah lisensi proprietary. Hubungi owner untuk informasi lebih lanjut.

## 📬 Kontak

**KopiJago**
- 📱 WhatsApp: [Hubungi Kami](https://wa.me/6281234567890)
- 📷 Instagram: [@kopijago.id](https://instagram.com/kopijago.id)

---

**Dibuat dengan ❤️ untuk KopiJago**
