'use client';

import React from 'react';

const projects = [
  {
    title: 'Skynet Chat',
    description:
      'A serverless AI-powered chat application with real-time responses. Built on a serverless architecture for seamless scalability and deployed on Vercel.',
    tags: ['Next.js', 'React', 'AI / LLM', 'Serverless', 'Vercel'],
    live: 'https://skynet-ai-chat-app.vercel.app/',
    github: '',
    from: '#0f2027',
    to: '#203a43',
    accent: '#00bcf0',
    icon: '🤖',
  },
];

export default function Work() {
  return (
    <section id="work" className="w-full px-[12%] py-16 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo text-[color:var(--page-fg)] opacity-80">
        A selection of projects I've built — from AI-powered apps to full-stack
        web solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col rounded-2xl overflow-hidden border border-gray-700/50
                       hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
                       transition-all duration-300"
            style={{ background: '#1a1a1a' }}
          >
            {/* Card header — gradient banner */}
            <div
              className="relative h-40 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${project.from}, ${project.to})`,
              }}
            >
              <span className="text-6xl select-none">{project.icon}</span>
              {/* Live badge */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 flex items-center gap-1.5 text-xs font-Outfit font-semibold
                             px-3 py-1 rounded-full border backdrop-blur-sm transition-opacity duration-200
                             hover:opacity-80"
                  style={{
                    borderColor: project.accent,
                    color: project.accent,
                    background: 'rgba(0,0,0,0.35)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: project.accent }}
                  />
                  Live
                </a>
              )}
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 p-5 gap-3">
              <h3 className="font-Outfit font-bold text-xl text-[color:var(--page-fg)]">
                {project.title}
              </h3>
              <p className="font-Outfit text-sm leading-6 text-[color:var(--page-fg)] opacity-70 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-Outfit px-2.5 py-1 rounded-full border border-gray-600/60
                               text-[color:var(--page-fg)] opacity-70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-Outfit font-semibold py-2 rounded-lg
                               transition-opacity duration-200 hover:opacity-80"
                    style={{ background: project.accent, color: '#000' }}
                  >
                    View Live ↗
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-Outfit font-semibold py-2 rounded-lg
                               border border-gray-600 text-[color:var(--page-fg)] hover:border-gray-400
                               transition-colors duration-200"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Placeholder card — coming soon */}
        <div
          className="flex flex-col items-center justify-center rounded-2xl border border-dashed
                     border-gray-600/50 h-72 gap-3 opacity-40"
        >
          <span className="text-4xl">🚧</span>
          <p className="font-Outfit text-sm text-[color:var(--page-fg)]">More coming soon</p>
        </div>
      </div>
    </section>
  );
}
