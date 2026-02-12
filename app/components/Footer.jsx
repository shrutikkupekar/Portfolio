'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import WhiteLogo from '@/assets/whiteshrutik.png';
import { assets } from '@/assets/assets';

const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-10">
      <div className="text-center">
        {/* Logo */}
        <Image
          src={isDark ? WhiteLogo : Logo}
          alt="Shrutik Kupekar Logo"
          className="w-36 mx-auto mb-2 transition-opacity duration-300"
        />

        {/* Email */}
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="Mail" className="w-6" />
          <span className="text-sm">shrutikskupekar@gmail.com</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8"></div>

        {/* Bottom Bar */}
        <div className="text-center sm:flex items-center justify-between mx-[2%] mt-2 py-6 text-sm">
          <p>© 2025 Shrutik Kupekar. All rights reserved.</p>

          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/shrutikkupekar"
                className="hover:text-gray-500 transition"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/shrutik-kupekar/"
                className="hover:text-gray-500 transition"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
