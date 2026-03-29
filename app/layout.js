import './globals.css';
import { Outfit, Ovo } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const ovo = Ovo({ subsets: ['latin'], weight: '400', variable: '--font-ovo' });

export const metadata = {
  title: 'Shrutik Kupekar | Portfolio',
  description: 'Fullstack Developer Portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased overflow-x-hidden scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}