'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const CONTACT_LINKS = {
  instagram: 'https://instagram.com/kopijago.id',
  whatsapp: 'https://wa.me/6281234567890?text=Halo%20KopiJago%2C%20aku%20mau%20tanya%20soal%20tempat%20dan%20menu.',
}

const MENU_ITEMS = [
  {
    name: 'Kopi Susu Jago',
    origin: 'Blend house roast',
    price: 'Rp28.000',
    notes: 'Bold espresso, creamy milk, dan hint caramel yang nyaman.',
  },
  {
    name: 'Es Mocha Kampus',
    origin: 'Java single origin',
    price: 'Rp32.000',
    notes: 'Cokelat pekat, tekstur lembut, cocok buat nemenin nugas panjang.',
  },
  {
    name: 'Manual Brew Flores',
    origin: 'Flores Bajawa',
    price: 'Rp38.000',
    notes: 'Clean, floral, dan aftertaste manis yang terasa premium.',
  },
]

const PROCESS_STEPS = [
  { step: '1', title: 'Source', desc: 'Biji kopi dipilih dari partner farmer yang konsisten kualitasnya.' },
  { step: '2', title: 'Roast', desc: 'Roasting kecil-kecilan untuk menjaga karakter rasa tetap hidup.' },
  { step: '3', title: 'Brew', desc: 'Ekstraksi dibuat presisi biar tiap cangkir tetap balance.' },
  { step: '4', title: 'Serve', desc: 'Datang ke meja dengan visual hangat dan aroma yang langsung kena.' },
]

const TESTIMONIALS = [
  {
    name: 'Budi Rahman',
    role: 'Coffee Enthusiast',
    text: 'Tempatnya punya rasa dan ambience yang konsisten. Sekali duduk, betah sampai malam.',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Cafe Owner',
    text: 'Blend dan penyajiannya rapi. Branding visualnya juga terasa matang dan premium.',
  },
  {
    name: 'Ahmad Wijaya',
    role: 'Food Blogger',
    text: 'Hero section-nya sudah ngena, dan pengalaman datang ke tempatnya juga terasa sehangat itu.',
  },
]

function BrandLogo({
  className,
  darkOnLight = false,
}: {
  className: string
  darkOnLight?: boolean
}) {
  return (
    <Image
      src="/placeholder-logo.png"
      alt="KopiJago"
      width={208}
      height={86}
      className={`${darkOnLight ? 'brightness-0 saturate-0 contrast-200 ' : ''}${className}`}
    />
  )
}

export default function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    elements.forEach((element) => {
      if (element.dataset.revealDelay) {
        element.style.transitionDelay = element.dataset.revealDelay
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])

  const openContactLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleInstagramContact = () => {
    openContactLink(CONTACT_LINKS.instagram)
  }

  const handleWhatsAppContact = () => {
    openContactLink(CONTACT_LINKS.whatsapp)
  }

  return (
    <div id="top" className="page-shell min-h-screen bg-background text-foreground">
      <nav className="nav-shell fixed top-0 z-50 w-full border-b border-white/8 bg-[#120905]/78 backdrop-blur-2xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#top" className="flex items-center">
            <BrandLogo className="h-9 w-auto sm:h-10" />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#menu" className="text-sm text-[#f0e1d4] transition hover:text-accent">
              Menu
            </Link>
            <Link href="#about" className="text-sm text-[#f0e1d4] transition hover:text-accent">
              Tentang
            </Link>
            <Link href="#contact" className="text-sm text-[#f0e1d4] transition hover:text-accent">
              Kontak
            </Link>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-accent text-accent-foreground shadow-[0_12px_28px_rgba(212,163,115,0.22)] transition hover:bg-accent/90"
            >
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#120905_0%,#1a0d08_38%,#2a1710_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,163,115,0.2),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(123,75,44,0.28),transparent_28%)]" />
        <div className="hero-media absolute inset-0 md:left-[44%]">
          <Image
            src="/hero.png"
            alt="Hero KopiJago"
            fill
            priority
            sizes="(min-width: 768px) 56vw, 100vw"
            className="object-cover object-center md:object-right"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,9,5,0.48)_0%,rgba(18,9,5,0.9)_58%,#120905_100%)] md:bg-[linear-gradient(90deg,#120905_10%,rgba(18,9,5,0.95)_36%,rgba(18,9,5,0.76)_56%,rgba(18,9,5,0.22)_100%)]" />

        <div className="relative mx-auto flex w-full max-w-7xl items-center">
          <div data-reveal data-reveal-delay="120ms" className="max-w-2xl space-y-7">
            <div className="inline-flex rounded-full border border-[#d4a373]/30 bg-[#f3dfc2]/10 px-4 py-2 text-sm font-semibold text-[#f3dfc2]">
              Kopinya Para Jagoan
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-balance text-[#fff7f0] md:text-6xl lg:text-7xl">
              Tempat ngopi, nugas, dan healing.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#ead9cb]/85 md:text-xl">
              Visual kopi yang hangat, suasana premium yang tetap santai, dan experience yang terasa solid dari layar sampai datang ke tempat.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Button asChild className="bg-accent px-8 py-6 text-lg text-accent-foreground hover:bg-accent/90">
                <Link href="#menu">Jelajahi Menu</Link>
              </Button>
              <Button
                onClick={handleWhatsAppContact}
                variant="outline"
                className="border-[#f3dfc2]/35 bg-transparent px-8 py-6 text-lg text-[#fff7f0] hover:bg-[#f3dfc2]/10 hover:text-[#fff7f0]"
              >
                Chat via WhatsApp
              </Button>
            </div>
         
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="scroll-mt-24 border-y border-white/6 bg-[linear-gradient(180deg,rgba(27,16,11,0.98)_0%,rgba(20,10,6,0.98)_100%)] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent/85">
              Menu Pilihan
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#fff5ed]">
              Rasa hangat, tampilan clean, dan karakter kopi yang tetap kuat.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
              Menu section sekarang dibawa ke nuansa yang sama dengan hero, jadi keseluruhan halaman terasa satu cerita visual.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {MENU_ITEMS.map((product, index) => (
              <Card
                key={product.name}
                data-reveal
                data-reveal-delay={`${120 + index * 120}ms`}
                className="group overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(49,29,21,0.92)_0%,rgba(23,13,9,0.96)_100%)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.22)] transition duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_28px_70px_rgba(0,0,0,0.3)]"
              >
                <div className="mb-6 flex h-48 items-center justify-center rounded-2xl border border-white/6 bg-[radial-gradient(circle_at_top,rgba(212,163,115,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                  <BrandLogo className="h-16 w-auto opacity-92 transition duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#fff5ed]">
                  {product.name}
                </h3>
                <p className="mb-3 text-sm font-semibold text-accent">
                  {product.origin}
                </p>
                <p className="mb-5 text-sm leading-relaxed text-foreground/72">
                  {product.notes}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-serif text-2xl font-bold text-[#f3dfc2]">
                    {product.price}
                  </span>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Pesan
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-b border-white/6 bg-[linear-gradient(180deg,#140a06_0%,#1a0d08_100%)] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div data-reveal className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent/85">
              Tentang KopiJago
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#fff5ed]">
              Branding yang hangat, kopi yang serius, dan ruang yang bikin betah.
            </h2>
            <div className="space-y-4 text-foreground/75">
              <p>
                KopiJago dibangun untuk jadi titik temu antara kopi yang enak, tempat yang nyaman, dan visual yang terasa matang.
              </p>
              <p>
                Kami pilih biji dengan karakter yang jelas, roasting dengan pendekatan yang konsisten, lalu sajikan dalam ambience yang modern tapi tetap akrab.
              </p>
              <p>
                Dari first impression di hero sampai section lain, seluruh tone dibuat senada agar experience-nya utuh dan premium.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div data-reveal data-reveal-delay="120ms">
                <p className="font-serif text-3xl font-bold text-accent">3</p>
                <p className="text-sm text-foreground/70">Tahun meracik pengalaman</p>
              </div>
              <div data-reveal data-reveal-delay="220ms">
                <p className="font-serif text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-foreground/70">Customer happy tiap hari</p>
              </div>
            </div>
          </div>

          <div data-reveal data-reveal-delay="160ms" className="flex items-center justify-center">
            <div className="flex aspect-square w-full max-w-[30rem] flex-col items-center justify-center rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(212,163,115,0.18),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-10 shadow-[0_24px_70px_rgba(0,0,0,0.26)]">
              <BrandLogo className="h-24 w-auto opacity-95" />
              <p className="mt-6 text-center text-sm uppercase tracking-[0.32em] text-[#ead9cb]/72">
                Dark chocolate mood, premium coffee attitude
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/6 bg-[linear-gradient(180deg,#170c08_0%,#22120d_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent/85">
              Our Process
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#fff5ed]">
              Dari sourcing sampai serve, semuanya dibuat rapi dan terasa smooth.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {PROCESS_STEPS.map((item, index) => (
              <div
                key={item.step}
                data-reveal
                data-reveal-delay={`${120 + index * 100}ms`}
                className="rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 text-center shadow-[0_18px_48px_rgba(0,0,0,0.18)]"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground shadow-[0_10px_30px_rgba(212,163,115,0.2)]">
                  {item.step}
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#fff5ed]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/6 bg-[linear-gradient(180deg,#130905_0%,#1b100b_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent/85">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#fff5ed]">
              Experience yang diingat bukan cuma kopinya, tapi atmosfernya juga.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                data-reveal
                data-reveal-delay={`${100 + index * 100}ms`}
                className="border border-white/8 bg-[linear-gradient(180deg,rgba(48,29,22,0.85),rgba(20,11,8,0.96))] p-8 shadow-[0_18px_56px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-foreground/76">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <p className="font-serif font-bold text-[#fff5ed]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/68">
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#1a0f0a_0%,#2b180f_100%)] px-4 py-20 text-primary-foreground sm:px-6 lg:px-8">
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent/85">
            Contact
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-[#fff5ed]">
            Kopi Jago
          </h2>
          <p className="mb-8 text-lg text-white">
 Ubah Ide Jadi Karya, Sambil Ngopi Saja.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={handleInstagramContact}
              className="bg-accent px-8 py-6 text-lg font-semibold text-accent-foreground hover:bg-accent/90"
            >
              Hubungi Instagram
            </Button>
            <Button
              onClick={handleWhatsAppContact}
              variant="outline"
              className="border-primary-foreground text-white hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              Hubungi WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="scroll-mt-24 border-t border-white/8 bg-[linear-gradient(180deg,#130905_0%,#100805_100%)] px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div data-reveal>
              <BrandLogo className="mb-4 h-10 w-auto" />
              <p className="text-sm text-foreground/70">
                Premium Indonesian specialty coffee dengan tone visual yang konsisten dan hangat.
              </p>
            </div>
            <div data-reveal data-reveal-delay="100ms">
              <p className="mb-4 font-semibold text-[#fff5ed]">Quick Links</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link href="#menu" className="transition hover:text-accent">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="transition hover:text-accent">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#top" className="transition hover:text-accent">
                    Back to Top
                  </Link>
                </li>
              </ul>
            </div>
            <div data-reveal data-reveal-delay="180ms">
              <p className="mb-4 font-semibold text-[#fff5ed]">Contact</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li> Banda Aceh, Indonesia</li>
                <li> hello@kopijago.com</li>
                <li> +62 812 3456 7890</li>
              </ul>
            </div>
            <div data-reveal data-reveal-delay="260ms">
              <p className="mb-4 font-semibold text-[#fff5ed]">Follow Us</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <button type="button" onClick={handleInstagramContact} className="transition hover:text-accent">
                    Instagram
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleWhatsAppContact} className="transition hover:text-accent">
                    WhatsApp
                  </button>
                </li>
                <li>
                  <Link href="#menu" className="transition hover:text-accent">
                    Lihat Menu
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8">
            <p className="text-center text-sm text-foreground/62">
              © 2026 KopiJago. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
