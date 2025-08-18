import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>
      <div className='flex w-flex flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image
            src={assets.user_image}
            alt="Profile"
            className="rounded-3xl w-full"
          />          </div>
        <div className="flex-1">
          <p className='mb-10 max-w-2xl font-Ovo'>I’m a passionate Full Stack Developer with nearly 2 years of hands-on experience building scalable web and mobile applications. I’ve worked extensively with technologies like React, Node.js, MongoDB, Flutter, and MySQL, delivering optimized, secure, and user-centric solutions across multiple platforms. From designing APIs to refining UI/UX and integrating analytics, I’ve had the opportunity to work across the stack and bring real products to life — fast and efficiently.

            Having worked in dynamic startup environments, I bring more than just technical skills to the table. I've led client meetings, handled hiring and onboarding, managed Agile sprint planning, and contributed to brand-building efforts — experiences that have shaped me into a well-rounded team contributor. I thrive in fast-paced settings where I can collaborate across roles, learn quickly, and deliver with impact.</p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index} className="flex items-start gap-4 border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:shadow-lg hover:shadow-black hover:-translate-y-1 duration-500">
                <Image
                  src={icon}
                  alt={title}
                  className="w-8 h-8"
                />
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </li>
            ))}

          </ul>
          <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>

          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-[#fcf4ff] hover:shadow-md hover:-translate-y-1 duration-500 "
              >
                <Image src={tool} alt='Tool' className='w-6 sm:w-7' />
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;