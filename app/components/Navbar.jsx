'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Logo from '@/assets/logo.png';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const sideMenuRef = useRef();

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
  const html = document.documentElement;
  const newTheme = isDark ? "light" : "dark";

  // 1️⃣ Update DOM class instantly (before state)
  html.classList.remove(isDark ? "dark" : "light");
  html.classList.add(newTheme);

  // 2️⃣ Store preference
  localStorage.setItem("theme", newTheme);

  // 3️⃣ Update React state after DOM is already updated
  setIsDark(!isDark);
};


  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.classList.remove('translate-x-64');
      sideMenuRef.current.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden'; // prevent scroll on mobile
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.classList.remove('translate-x-0');
      sideMenuRef.current.classList.add('translate-x-64');
      document.body.style.overflow = ''; // allow scroll again
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
  className={`fixed top-0 left-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
  duration-0 border-b border-gray-300/50 dark:border-gray-700/50
  backdrop-blur-md shadow-md
  ${isScroll
    ? isDark
      ? 'bg-[#120022]/85 text-white'
      : 'bg-white/80 text-gray-900'
    : 'bg-transparent text-gray-900 dark:text-white'
  }`}
>





        {/* Logo */}
        <a href="#top">
          <Image src={Logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Desktop Nav Links */}
        <ul
          className="nav-ul hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
             bg-[color:var(--page-bg)]/80 text-[color:var(--page-fg)]
             shadow-sm backdrop-blur-md transition-colors duration-300"
        >
          <li><a className="font-ovo text-[color:var(--page-fg)] hover:text-gray-500 dark:hover:text-purple-400 transition-colors duration-200" href="#top">Home</a></li>
          <li><a className="font-ovo hover:text-gray-500 dark:hover:text-purple-400 transition-colors duration-200" href="#about">About me</a></li>
          <li><a className="font-ovo hover:text-gray-500 dark:hover:text-purple-400 transition-colors duration-200" href="#services">Services</a></li>
          <li><a className="font-ovo hover:text-gray-500 dark:hover:text-purple-400 transition-colors duration-200" href="#work">My work</a></li>
          <li><a className="font-ovo hover:text-gray-500 dark:hover:text-purple-400 transition-colors duration-200" href="#contact">Contact me</a></li>
        </ul>




        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle Button */}
          <button onClick={toggleTheme}>
            <Image
              src={isDark ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              className="w-6 transition-transform duration-300 hover:scale-110"
            />
          </button>

          {/* GitHub Button */}
          <a
            href="https://github.com/shrutikkupekar"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-8 py-2.5 rounded-full ml-4 border
bg-white text-[color:var(--page-fg)] border-gray-400 shadow-sm
backdrop-blur-md transition-all duration-300 hover:opacity-80"

          >
            <Image
              src={assets.github_logo}
              alt="GitHub"
              width={25}
              height={25}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-medium text-black">GitHub</span>
          </a>



          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} className="w-6" alt="Menu" />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          className="nav-ul block md:hidden ml-3 flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-[100] h-screen bg-rose-50 dark:bg-darktheme translate-x-64 transition-transform duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close" className="w-6 cursor-pointer" />
          </div>
          <li><a className="font-ovo text-black dark:text-white" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-ovo text-black dark:text-white" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-ovo text-black dark:text-white" onClick={closeMenu} href="#services">Services</a></li>
          <li><a className="font-ovo text-black dark:text-white" onClick={closeMenu} href="#work">My work</a></li>
          <li><a className="font-ovo text-black dark:text-white" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
