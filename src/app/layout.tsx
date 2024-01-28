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
  title: 'タイトル',
  description: 'ディスクリプション',
  robots: {
    index: false,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body className={`${notojp.className} text-neutral-700 leading-7`}>{children}</body>
    </html>
  )
}
