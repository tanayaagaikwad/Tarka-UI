import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import CustomCursor from '@/components/CustomCursor';
import Loader from '@/components/Loader';
import ScrollProgress from '@/components/ScrollProgress';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600'] });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', axes: ['opsz'] });

export const metadata: Metadata = {
  title: 'Tarka — Design that thinks before it looks',
  description: 'Tarka takes an idea and turns it into something real.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[var(--paper)]">
      <body className={`${inter.variable} ${fraunces.variable} antialiased flex flex-col min-h-screen text-[var(--ink)]`}>
        <CustomCursor />
        <Loader />
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
