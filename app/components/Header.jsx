import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import ProfileImg from '@/assets/profile_image.png';

const Header = () => {
  return (
    <div className='relative  w-11/12 pt-6 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
<Image src={ProfileImg} alt="Profile" className="w-64 h-64 rounded-full object-cover" />
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi I am Shrutik Kupekar</h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] w-300 font-Ovo'>
        Fullstack Developer based in California
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
        I am a Fullstack developer from California with 2 years of experience in 2 start ups
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 rounded-full bg-black text-white border border-gray-500 flex items-center gap-2'>
          Contact me <Image src={assets.right_arrow_white} alt="arrow"     className="w-4 transition duration-300 group-hover:invert"
 />
        </a>
        <a href="/Shrutik.Kupekar.pdf" download className='px-10 py-3 border bg-black-500 rounded-full border-gray-500 flex items-center gap-2'>
          <Image src={assets.download_icon} alt="download" className='w-4' />My resume
        </a>
      </div>
    </div>
  );
}

export default Header;
