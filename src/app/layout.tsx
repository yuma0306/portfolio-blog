import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

import { Noto_Sans_JP } from 'next/font/google'

const notojp = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Uma Code',
  description: '自主制作したポートフォリオを紹介しています。 | Uma Code',
  robots: {
    index: false,
  },
  openGraph: {
    title: 'Uma Code',
    description: '自主制作したポートフォリオを紹介しています。 | Uma Code',
    url: `${process.env.VERCEL_URL ?? 'http://localhost:3000'}`,
    siteName: 'Uma Code',
    images: [
      {
        url: `${process.env.VERCEL_URL ?? 'http://localhost:3000'}/ogp.png`,
        width: 1200,
        height: 630,
        alt: 'OGP画像',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja' className=''>
      <body className={`${notojp.className} text-[#333] text-[16px] tracking-wide leading-7 break-words`}>{children}</body>
    </html>
  )
}
