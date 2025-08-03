'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Logo from '@/assets/logo.png';

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(0)';
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  };

  return (
    <>
      {/* Background Image behind Navbar */}
      <div className="fixed top-0 left-0 w-full h-20 z-40">
        <Image
          src={assets.header_bg_color}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white ">
        {/* Logo */}
        <a href="#top">
          <Image src={Logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-ul hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li><a className="font-ovo" href="#top">Home</a></li>
          <li><a className="font-ovo" href="#about">About me</a></li>
          <li><a className="font-ovo" href="#services">Services</a></li>
          <li><a className="font-ovo" href="#work">My work</a></li>
          <li><a className="font-ovo" href="#contact">Contact me</a></li>
        </ul>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Button (optional) */}
          <button>
            <Image src={assets.moon_icon} alt="Toggle Theme" className="w-6" />
          </button>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="Arrow icon" />
          </a>

          {/* Mobile Menu Toggle */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} className="w-6" alt="Open Menu" />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          className="nav-ul block md:hidden ml-3 flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-[100] h-screen bg-rose-50 transition-transform duration-500"
          style={{ transform: 'translateX(16rem)' }}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close" className="w-6 cursor-pointer" />
          </div>
          <li><a className="font-ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-ovo" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-ovo" onClick={closeMenu} href="#services">Services</a></li>
          <li><a className="font-ovo" onClick={closeMenu} href="#work">My work</a></li>
          <li><a className="font-ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
