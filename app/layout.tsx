import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'BuyPlot.in - Premium Properties in UP & Uttarakhand | Trusted Real Estate',
  description: 'Find verified properties in Uttar Pradesh and Uttarakhand. 100% legally verified, transparent pricing, zero hidden costs. Founded by Dr. Rajeev Goyal with 30+ years of experience.',
  metadataBase: new URL('https://buyplot.in'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}



