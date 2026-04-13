import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Apex — CRM Dashboard',
  description: 'Sales pipeline and customer management',
  icons: {
    icon: [
      {
        url: '/apex-crm/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/apex-crm/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/apex-crm/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apex-crm/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
