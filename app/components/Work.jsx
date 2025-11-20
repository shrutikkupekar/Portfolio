import React from 'react';
import Image from 'next/image';
import { assets, workData } from '@/assets/assets'; // Make sure both are exported from the same file

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Discover my portfolio of innovative projects that highlight my skills in web development and problem-solving through clean, efficient, and creative code.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workData.map((project, index) => (
          <div
            key={index}
            className="rounded-xl h-64 bg-cover bg-center flex flex-col justify-end items-start p-4 text-white relative shadow-md"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Black Description Box */}
            <div className="bg-black bg-opacity-80 w-[70%] p-3 rounded-lg flex flex-col group-hover:bottom-7">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <div className="flex items-center gap-2">
                <p className="text-sm">{project.description}</p>
                <div className="absolute top-4 right-4">
                  <Image src={assets.send_icon} alt="Send Icon" className="w-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-700 border border-[0.5px] border-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] hover:shadow-lg hover:shadow-black hover:-translate-y-1 duration-500"
      >
        Show more
        <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4" />
      </a>

    </div>
  );
};

export default Work;
