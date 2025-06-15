import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "LuaData - AI, ML & Data Science Solutions",
  description:
    "Transform your business with cutting-edge AI and machine learning solutions. Custom ML models, data science consulting, and intelligent automation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}

        {/* Google Analytics & Google Ads Global Site Tag */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-PL8CF7XX6Y" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Google Analytics Configuration
            gtag('config', 'G-PL8CF7XX6Y', {
                'page_title': 'LuaData - AI ML Data Science',
                'page_location': window.location.href
            });
            
            // Google Ads Conversion Tracking Configuration  
            gtag('config', 'AW-17153791006');
          `}
        </Script>
      </body>
    </html>
  )
}
