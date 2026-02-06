import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '../context/LanguageContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kuşadası Soğucak – Nefes Villaları',
  description: 'Kuşadası Soğucak’ta 3 dönüm arazi içinde, özel havuzlu ve akıllı ev altyapısına sahip 8 bağımsız villa.',
  openGraph: {
    title: 'Kuşadası Soğucak – Nefes Villaları',
    description: '3 dönüm özel arazi, 8 bağımsız villa, özel havuz ve akıllı ev sistemi.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
