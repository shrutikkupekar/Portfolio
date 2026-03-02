'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { assets } from '@/assets/assets';
import arrow_icon from '@/assets/arrow-icon.png';


const Header = () => {
  const line1 = 'Hi I am Shrutik Kupekar';
  const line2 = 'Fullstack Developer based in California';
  const line3 =
    'I am a Fullstack developer from California with 2 years of experience in 2 startups.';

  const [step, setStep] = useState(1);
  const [isDark, setIsDark] = useState(false);

  // Detect if dark mode is active
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  // Control sequence timing
  useEffect(() => {
    if (step === 1) setTimeout(() => setStep(2), line1.length * 60 + 400);
    else if (step === 2) setTimeout(() => setStep(3), line2.length * 55 + 600);
  }, [step]);

  return (
    <div
      className="relative w-full px-4 pt-10 max-w-5xl mx-auto min-h-screen flex flex-col 
                 items-center justify-center text-center gap-6 transition-colors duration-300"
      style={{ color: isDark ? 'white' : 'black' }}
    >
      {/* -------- Line 1 -------- */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-Ovo">
        {step === 1 ? (
          <Typewriter
            words={[line1]}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={0}
            delaySpeed={0}
          />
        ) : (
          line1
        )}
      </h3>

      {/* -------- Line 2 -------- */}
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-Ovo leading-tight">
        {step >= 2 ? (
          step === 2 ? (
            <Typewriter
              words={[line2]}
              cursor
              cursorStyle="_"
              typeSpeed={55}
              deleteSpeed={0}
              delaySpeed={0}
            />
          ) : (
            line2
          )
        ) : null}
      </h1>

      {/* -------- Line 3 (Fade-in) -------- */}
      <p
        className={`text-sm sm:text-base max-w-xl font-Ovo px-2 transition-opacity duration-1000 ${step >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
      >
        {line3}
      </p>

      {/* -------- Buttons (Fade-in with line 3) -------- */}
      <div
        className={`flex flex-col sm:flex-row items-center gap-4 mt-4'
          `}
      >
        {/* Contact Button */}
        <a
          href="#contact"
          className="w-max flex items-center justify-center gap-2
  text-700 border border-[0.5px] border-700
  rounded-full py-3 px-10
  hover:bg-[#fcf4ff]
  dark:hover:bg-[#fcf4ff]
  dark:hover:text-black
  hover:shadow-lg hover:shadow-black
  hover:-translate-y-1 duration-500"

        >
          Contact me
          <Image
            src={assets.right_arrow_bold}
            alt="arrow"
            className="w-4 dark:group-hover:invert"
          />
        </a>


        {/* Resume Button */}
        <a
          href="./Shrutik_Kupekar_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="w-max flex items-center justify-center gap-2
  text-700 border border-[0.5px] border-700
  rounded-full py-3 px-10
  hover:bg-[#fcf4ff]
  dark:hover:bg-[#fcf4ff]
  dark:hover:text-black
  hover:shadow-lg hover:shadow-black
  hover:-translate-y-1 duration-500"

        >

          My Resume
          <Image
            src={arrow_icon}
            alt="arrow"
            className="w-3 dark:group-hover:invert"
          />
        </a>


        {/* <a
          href=""
          className="w-max flex items-center justify-center gap-2 text-700 border border-[0.5px] border-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] hover:shadow-lg hover:shadow-black hover:-translate-y-1 duration-500"
        >
          Show more
          <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4" />
        </a> */}



      </div>
    </div>
  );
};

export default Header;
