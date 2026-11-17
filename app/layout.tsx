import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({
  variable: '--font-sans-app',
  subsets: ['latin', 'latin-ext'],
});
const serif = Playfair_Display({
  variable: '--font-serif-app',
  subsets: ['latin', 'latin-ext'],
});
export const metadata: Metadata = {
  title: 'Plantiva — Doğadan Gelen Mutluluk',
  description: 'Taze çiçekler, seçkin bitkiler ve anlamlı hediyeler.',
  openGraph: {
    title: 'Plantiva 🌿',
    description: 'Her duygunun çiçek açan bir hâli var.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plantiva 🌿',
    description: 'Her duygunun çiçek açan bir hâli var.',
    images: ['/og.png'],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
