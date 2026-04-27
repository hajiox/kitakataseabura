import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = 'https://kitakataseabura.aizu-syokubura.com'

export const metadata: Metadata = {
  title: '喜多方背脂醤油ラーメン | 創業100年の醤油×国産極上背脂【会津ブランド館】送料無料',
  description: '「あっさり」だけじゃない喜多方ラーメン界のニューウェーブ！創業100年の醤油と国産豚の極上背脂が織りなす至高の「こってり背脂醤油」。お店レベルのパンチ力をご自宅で。2食・6食セット、スープのみの3種類をご用意。',
  generator: 'v0.app',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '喜多方背脂醤油ラーメン | 創業100年の醤油×国産極上背脂【会津ブランド館】',
    description: '「あっさり」だけじゃない喜多方ラーメン界のニューウェーブ！創業100年の醤油と国産豚の極上背脂が織りなす至高の「こってり背脂醤油」をご自宅で。送料無料。',
    url: siteUrl,
    siteName: '会津ブランド館',
    images: [
      {
        url: '/ogp.jpg',
        width: 1200,
        height: 630,
        alt: '喜多方背脂醤油ラーメン - 旨い！背脂の圧倒的コク。',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '喜多方背脂醤油ラーメン | 創業100年の醤油×国産極上背脂【会津ブランド館】',
    description: '「あっさり」だけじゃない喜多方ラーメン界のニューウェーブ！創業100年の醤油と国産豚の極上背脂が織りなす至高の「こってり背脂醤油」をご自宅で。',
    images: ['/ogp.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  keywords: ['喜多方ラーメン', '背脂醤油ラーメン', '通販', 'お取り寄せ', '会津ブランド館', '送料無料', 'こってり', '国産豚背脂', '生麺'],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QF0C5C17LW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QF0C5C17LW');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3741108852688541');
            fbq('track', 'PageView');
            fbq('track', 'ViewContent', {
              content_name: 'kitakataseabura',
              content_category: 'product_lp'
            });
          `}
        </Script>
        <noscript>{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3741108852688541&ev=PageView&noscript=1" />`}</noscript>
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
