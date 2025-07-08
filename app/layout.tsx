import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from './providers';


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ghoonghat Saree Wala - Timeless Elegance for Every Occasion",
  description: "Discover beautiful sarees for weddings, parties, and daily wear. Premium quality, authentic designs.",
   icons:{
    icon:"sub-logo.png"
   }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  )
}
