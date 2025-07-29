// src/components/Skills.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Inner content box for readability over the gradient */}
        <div 
          ref={ref}
          className={`bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-4xl mx-auto text-gray-800
            transition-all duration-1000 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg">
            {/* Programming Languages */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-600">Languages</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">Python</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">JavaScript (ES6+)</a></li>
                <li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">TypeScript</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">HTML5</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">CSS3</a></li>
              </ul>
            </div>

            {/* Frameworks & Libraries */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-600">Frameworks & Libraries</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">React.js</a></li>
                <li><a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">React Router</a></li>
                <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">Tailwind CSS</a></li>
                <li><a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">Pandas</a></li>
                <li><a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">Scikit-learn</a></li>
                <li><a href="https://matplotlib.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">Matplotlib</a></li>
                <li><a href="https://seaborn.pydata.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">Seaborn</a></li>
              </ul>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-600">Tools & Platforms</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">Git</a> & <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">GitHub</a></li>
                <li><a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">Google Colab</a></li>
                <li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">npm (Node Package Manager)</a></li>
                <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors duration-200 cursor-pointer">VS Code</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;