import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavbarMinimal } from '@/components/blocks/NavbarMinimal'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body' })
const headingFont = Inter({ subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: 'Blade & Co. | Premium Barbershop in Downtown Manhattan',
  description:
    'Blade & Co. is a premium downtown Manhattan barbershop offering precision haircuts, beard trims, hot towel shaves, and styling in a dark, moody space with warm gold accents. Book your chair today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} ${headingFont.variable} bg-background text-foreground`}>
        <NavbarMinimal
          logo="Blade & Co."
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Book"
          ctaHref="/contact#booking"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Blade & Co."
          description="Downtown Manhattan grooming—sharp cuts, warm towels, zero rush. Precision haircuts, beard work, and hot towel shaves in a low-lit, leather-and-brass space."
          columns={[
            {
              title: 'Blade & Co.',
              links: [
                { label: 'Downtown Manhattan', href: '/contact' },
                { label: 'book@bladeandco.nyc', href: 'mailto:book@bladeandco.nyc' },
                { label: '+1 (212) 555-0198', href: 'tel:+12125550198' },
              ],
            },
            {
              title: 'Explore',
              links: [
                { label: 'Services', href: '/services' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
            },
            {
              title: 'Hours',
              links: [
                { label: 'Mon–Fri: 10am–8pm', href: '/contact' },
                { label: 'Sat: 10am–6pm', href: '/contact' },
                { label: 'Sun: 11am–5pm', href: '/contact' },
              ],
            },
          ]}
          copyright={`© 2026 Blade & Co. All rights reserved.`}
        />
      </body>
    </html>
  )
}
