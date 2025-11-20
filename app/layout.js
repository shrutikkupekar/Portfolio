import './globals.css';
import Script from 'next/script';
import { Outfit, Ovo } from 'next/font/google';

// ✅ Load Google fonts (kept same variables you used)
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const ovo = Ovo({ subsets: ['latin'], weight: '400', variable: '--font-ovo' });

export const metadata = {
  title: 'Shrutik Kupekar | Portfolio',
  description: 'Fullstack Developer Portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    // ✅ suppressHydrationWarning avoids small HTML mismatches (like extensions)
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* ✅ Run this script before React hydrates to prevent dark-mode flicker */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`try {
              const t = localStorage.getItem('theme');
              if (t === 'dark') document.documentElement.classList.add('dark');
              else document.documentElement.classList.remove('dark');
            } catch (e) { /* no-op */ }`}
        </Script>
      </head>

      {/* ✅ Body inherits your Google font variables and global styles */}
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased overflow-x-hidden scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
