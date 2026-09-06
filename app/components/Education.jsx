import React from "react";

const Education = () => {
  return (
    <div id="education" className="w-full px-[12%] py-16 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Academic Background</h4>
      <h2 className="text-center text-5xl font-Ovo">Education</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Strong academic foundation in Computer Science, data structures,
        algorithms, system design, and scalable software engineering.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* MS */}
        <div className="border border-gray-400 rounded-xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:bg-[#fcf4ff] dark:hover:bg-[#303030] text-[color:var(--page-fg)]">
          <h3 className="text-xl font-semibold mb-2">
            M.S. in Computer Science
          </h3>
          <p className="text-sm mb-4 opacity-80">
            California State University, Fullerton
          </p>

          <ul className="space-y-2 text-sm leading-6">
            <li>• GPA: 3.7</li>
            <li>• Aug 2024 – May 2026</li>
            <li>• Focus: Advanced Algorithms, Backend Engineering, Databases</li>
          </ul>
        </div>

        {/* BE */}
        <div className="border border-gray-400 rounded-xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:bg-[#fcf4ff] dark:hover:bg-[#303030] text-[color:var(--page-fg)]">
          <h3 className="text-xl font-semibold mb-2">
            B.E. in Computer Engineering
          </h3>
          <p className="text-sm mb-4 opacity-80">
            University of Mumbai
          </p>

          <ul className="space-y-2 text-sm leading-6">
            <li>• Aug 2018 – May 2022</li>
            <li>• Core: Data Structures, OOP, System Design</li>
            <li>• Built foundational full-stack and ML projects</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Education;
