'use client';

import React from 'react';

const stack = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Redux',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
      { name: 'Flutter',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
      { name: 'REST APIs',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Docker',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Firebase',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
      { name: 'Figma',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { name: 'AWS',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', invert: true },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="w-full px-[12%] py-16 scroll-mt-20">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-14">
        <span className="text-2xl text-[#c80082]">✦</span>
        <h2 className="text-lg font-Outfit font-semibold tracking-widest uppercase text-[color:var(--page-fg)]">
          My Stack
        </h2>
      </div>

      <div className="flex flex-col">
        {stack.map(({ category, items }) => (
          <div key={category} className="border-t border-gray-700/40 py-9">
            <div className="grid grid-cols-1 sm:grid-cols-[210px_1fr] gap-y-5 gap-x-10 sm:items-center">

              <h3 className="font-Outfit font-black text-3xl uppercase tracking-tight text-[color:var(--page-fg)] leading-none">
                {category}
              </h3>

              <div className="flex flex-wrap gap-x-8 gap-y-5">
                {items.map(({ name, icon, invert }) => (
                  <div key={name} className="flex items-center gap-3 group">
                    <img
                      src={icon}
                      alt={name}
                      width={32}
                      height={32}
                      className={`w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 ${invert ? 'dark:invert' : ''}`}
                    />
                    <span className="font-Outfit text-sm sm:text-base text-[color:var(--page-fg)] opacity-85 whitespace-nowrap">
                      {name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
