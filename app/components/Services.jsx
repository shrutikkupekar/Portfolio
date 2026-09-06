'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets, serviceData } from '@/assets/assets';

const FlipCard = ({ icon, title, description, expertise, flipped, onFlip, onUnflip, isDark }) => {
  return (
    <div
      className="relative w-full h-80 cursor-pointer"
      style={{ perspective: '1200px', perspectiveOrigin: 'center' }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 border border-gray-400 rounded-xl p-6
            text-[color:var(--page-fg)]"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            backgroundColor: isDark ? '#303030' : '#ffffff',
          }}
        >
          <Image src={icon} alt={title} className="w-10" />
          <h3 className="text-lg my-4 font-semibold">{title}</h3>
          <p className="text-sm leading-5">{description}</p>
          <button
            onClick={onFlip}
            className="flex items-center gap-2 text-sm mt-5 text-pink-600 hover:underline"
          >
            Read more
            <Image src={assets.right_arrow} className="w-4" alt="arrow icon" />
          </button>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 border border-pink-300 rounded-xl p-6
            flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: isDark ? '#303030' : '#fcf4ff',
            color: isDark ? '#dedede' : '#1f2937',
          }}
        >
          <div>
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <p className="text-sm leading-6">{expertise}</p>
          </div>
          <button
            onClick={onUnflip}
            className="flex items-center gap-2 text-sm text-pink-600 hover:underline mt-4"
          >
            <Image
              src={assets.right_arrow}
              className="w-4 rotate-180"
              alt="back"
            />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        From building responsive frontends to architecting powerful backends, here's what I can help you with.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, expertise }, index) => (
          <FlipCard
            key={index}
            icon={icon}
            title={title}
            description={description}
            expertise={expertise}
            flipped={flippedIndex === index}
            onFlip={() => setFlippedIndex(index)}
            onUnflip={() => setFlippedIndex(null)}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;