import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { serviceData } from '@/assets/assets';

const Services = () => {
    return (
        <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Serivces</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>From building responsive frontends to architecting powerful backends, here’s what I can help you with.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
  {serviceData.map(({ icon, title, description, link }, index) => (
    <div
      key={index}
      className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:shadow-lg hover:shadow-black hover:-translate-y-1 duration-500'
    >
      <Image src={icon} alt='' className='w-10' />
      <h3 className='text-lg my-4 text-gray-700 font-semibold'>{title}</h3>
      <p className='text-sm text-gray-600 leading-5'>{description}</p>
      <a
        href={link}
        className='flex items-center gap-2 text-sm mt-5 text-pink-600 hover:underline'
      >
        Read more
        <Image src={assets.right_arrow} className='w-4' alt='arrow icon' />
      </a>
    </div>
  ))}
</div>



        </div>
    )
}
export default Services;
