import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import ProfileImg from '@/assets/profile_image.png';

const Header = () => {
  return (
    <div className="relative w-full px-4 pt-10 max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center text-center gap-6">
      
      {/* Profile Image */}
      <div>
        <Image
          src={ProfileImg}
          alt="Profile"
          className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover mx-auto"
        />
      </div>

      {/* Intro Text */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-Ovo">
        Hi I am Shrutik Kupekar
      </h3>
      
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-Ovo leading-tight">
        Fullstack Developer based in California
      </h1>

      <p className="text-sm sm:text-base max-w-xl font-Ovo px-2">
        I am a Fullstack developer from California with 2 years of experience in 2 start ups
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-8 py-3 bg-black text-white rounded-full border border-gray-500 flex items-center gap-2 transition duration-300"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            className="w-4"
          />
        </a>

        <a
          href="/Shrutik.Kupekar.pdf"
          download
          className="px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2 bg-white transition duration-300"
        >
          <Image
            src={assets.download_icon}
            alt="download"
            className="w-4"
          />
          My resume
        </a>
      </div>
    </div>
  );
};

export default Header;
