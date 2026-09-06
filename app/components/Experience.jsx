import React from "react";
import { assets } from '@/assets/assets';
import Image from "next/image";
import dev from '@/assets/dev.png';

const Experience = () => {
  return (
    <div id="experience" className="w-full px-[12%] py-16 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Journey</h4>
      <h2 className="text-center text-5xl font-Ovo">Work Experience</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Hands-on industry experience building scalable systems, APIs, and
        production-ready applications across startups and fast-paced teams.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* SAAA Consultants */}
        <div className="border border-gray-400 rounded-xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:bg-[#fcf4ff] dark:hover:bg-[#303030] text-[color:var(--page-fg)]">
          <h3 className="text-xl font-semibold mb-2">
            Software Developer — SAAA Consultants
          </h3>
          <p className="text-sm mb-4 opacity-80">
            Mumbai, India | Jun 2023 – Jul 2024
          </p>

          <ul className="space-y-2 text-sm leading-6">
            <li>• Built scalable web applications using React, Node.js, and MySQL.</li>
            <li>• Reduced page load time by 45% through performance optimization.</li>
            <li>• Designed REST APIs for business workflows and payment systems.</li>
            <li>• Improved CI/CD pipelines for zero-downtime deployments.</li>
            <li>• Delivered features end-to-end from design to monitoring.</li>
          </ul>
        </div>

        {/* Fineappl */}
        <div className="border border-gray-400 rounded-xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:bg-[#fcf4ff] dark:hover:bg-[#303030] text-[color:var(--page-fg)]">
          <h3 className="text-xl font-semibold mb-2">
            Software Developer — Fineappl
          </h3>
          <p className="text-sm mb-4 opacity-80">
            Mumbai, India | May 2022 – Dec 2022
          </p>

          <ul className="space-y-2 text-sm leading-6">
            <li>• Contributed to cross-platform mobile application development.</li>
            <li>• Increased weekly active users by 70%.</li>
            <li>• Implemented offline-first data handling & sync logic.</li>
            <li>• Integrated analytics tracking for product insights.</li>
          </ul>
        </div>

        {/* Cyberrace */}
        <div className="border border-gray-400 rounded-xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:bg-[#fcf4ff] dark:hover:bg-[#303030] text-[color:var(--page-fg)]">
          <h3 className="text-xl font-semibold mb-2">
            Python Developer Intern — Cyberrace Infovision
          </h3>
          <p className="text-sm mb-4 opacity-80">
            Mumbai, India | Mar 2020 – Jun 2020
          </p>

          <ul className="space-y-2 text-sm leading-6">
            <li>• Built Python analytics tool using Tkinter + MySQL.</li>
            <li>• Automated data workflows with validation checks.</li>
            <li>• Reduced repetitive manual processing efforts.</li>
          </ul>
        </div>

        {/* Harrisburg Internship */}
        <div className="border border-gray-400 rounded-xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:bg-[#fcf4ff] dark:hover:bg-[#303030] text-[color:var(--page-fg)]">
          <h3 className="text-xl font-semibold mb-2">
            Internship Program — Harrisburg University
          </h3>
          <p className="text-sm mb-4 opacity-80">
            Pennsylvania, USA | Jun 2019 – Jul 2019
          </p>

          <ul className="space-y-2 text-sm leading-6">
            <li>• Built ML mini-projects using Python.</li>
            <li>• Applied algorithms and dynamic programming concepts.</li>
            <li>• Collaborated in cross-cultural technical teams.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Experience;
