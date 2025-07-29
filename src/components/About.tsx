// src/components/About.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only plays once when component enters view
    threshold: 0.1,    // Percentage of component visible to trigger
  });

  return (
    <section id="about" className="py-16 md:py-24 text-gray-800">
      <div className="container mx-auto px-6">
        {/* Inner content box for readability over the gradient */}
        <div 
          ref={ref} // Attach the ref to the element you want to observe
          className={`bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-4xl mx-auto 
            transition-all duration-1000 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            <p className="mb-6">
              Hi, I'm Dinu, a passionate programmer from Kochi, Kerala. My journey into the world of code began with a fascination for how technology solves real-world problems. I thrive on bringing ideas to life through elegant and efficient solutions.
            </p>
            <p className="mb-6">
              I specialize in full-stack development, with a strong foundation in both front-end technologies like React and back-end frameworks. I enjoy the challenge of building robust applications from concept to deployment.
            </p>
            <p>
              When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or enjoying a good book. I'm always eager to learn and grow, and I believe in the power of continuous self-improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;