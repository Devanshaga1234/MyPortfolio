import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import '@/styles/test.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Aaryan Gusain - Junior CS Student at UIUC',
  description: 'Personal portfolio of Aaryan Gusain, a CS student at UIUC specializing in full-stack development and machine learning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

