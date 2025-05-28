import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import '@/src/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Code Republic Swapi project',
  description: 'A Swapi project for Code Republic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex w-full flex-col gap-4 p-4 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
