import { Inter, Syne, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import MosaicBackground from './components/MosaicBackground';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata = {
  title: 'Shrutik Kupekar',
  description: 'Fullstack Software Engineer — React, Node.js, AWS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} ${jetbrains.variable} font-sans antialiased`}>
        <MosaicBackground />
        {children}
      </body>
    </html>
  );
}
