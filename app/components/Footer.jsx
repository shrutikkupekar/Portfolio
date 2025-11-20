import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo.png';
import { assets } from '@/assets/assets';

const Footer = () => {
  return (
    <div className='mt-10'>
      <div className='text-center'>
        <Image src={Logo} alt='' className='w-36 mx-auto mb-2' />
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6' />
          shrutikskupekar@gmail.com
        </div>

        {/* ✅ Divider line above footer text */}
        <div className='border-t border-gray-300 mt-8'></div>

        <div className='text-center sm:flex items-center justify-between mx-[2%] mt-2 py-6'>
          <p>© 2025 Shrutik Kupekar. All rights reserved.</p>
          <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>
              <a
                target='_blank'
                href='https://github.com/shrutikkupekar'
                className='hover:text-gray-500 transition'
              >
                Github
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/shrutik-kupekar/'
                className='hover:text-gray-500 transition'
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
