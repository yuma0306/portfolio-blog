import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

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
    url: 'https://portfolio-blog-two-mu.vercel.app',
    siteName: 'Uma Code',
    images: [
      {
        url: 'https://portfolio-blog-two-mu.vercel.app/ogp.png',
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
    <html lang='ja'>
      <body className={`${notojp.className} text-[#333] text-[16px] tracking-wide leading-7 break-words`}>{children}</body>
    </html>
  )
}
