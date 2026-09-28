import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  metadataBase: new URL('https://kyn3d-holymoly.example'),
  title: { default: 'Kyn3D & Holy Moly', template: '%s | Kyn3D & Holy Moly' },
  description: 'Thoughtful little tools for big imaginations. Meet Kyn3D and Holy Moly.',
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: { title: 'Kyn3D & Holy Moly', description: 'Small worlds. Big feeling.', type: 'website', siteName: 'Kyn3D & Holy Moly' },
  twitter: { card: 'summary_large_image', title: 'Kyn3D & Holy Moly', description: 'Small worlds. Big feeling.' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#fff8f6', width: 'device-width', initialScale: 1 }

const jsonLd = { '@context': 'https://schema.org', '@graph': [{ '@type': 'Organization', name: 'BigFred007', email: 'fredincorporation@gmail.com', url: 'https://kyn3d-holymoly.example' }, { '@type': 'MobileApplication', name: 'Kyn3D', applicationCategory: 'MultimediaApplication', operatingSystem: 'Android' }, { '@type': 'MobileApplication', name: 'Holy Moly', applicationCategory: 'LifestyleApplication', operatingSystem: 'Android' }, { '@type': 'WebPage', name: 'Privacy Policy | Kyn3D & Holy Moly', url: 'https://kyn3d-holymoly.example/privacy-policy', dateModified: '2026-09-14', about: { '@type': 'Thing', name: 'Privacy practices for Kyn3D and Holy Moly' } }] }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${outfit.variable} ${jakarta.variable}`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
