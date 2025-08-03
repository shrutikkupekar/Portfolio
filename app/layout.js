// app/layout.js

import './globals.css';
import { Outfit, Ovo } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const ovo = Ovo({ subsets: ['latin'], weight: '400', variable: '--font-ovo' });

export const metadata = {
  title: 'Portfolio',
  description: 'Description here',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.className} ${ovo.className} antialiased overflow-x-hidden`}>
      <body>{children}</body>
    </html>
  );
}
