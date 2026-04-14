import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'KopiJago - Kopinya Para Jagoan',
  description: 'Discover the art of specialty coffee at KopiJago. Ethically sourced, expertly roasted, and perfectly brewed.',
  generator: 'samvivan.my.id',
  icons: {
    icon: [
      {
        url: '/placeholder-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/placeholder-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/placeholder-logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/placeholder-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
