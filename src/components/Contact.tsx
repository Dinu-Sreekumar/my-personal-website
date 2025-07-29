// src/components/Contact.tsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useInView } from 'react-intersection-observer'; // Import useInView

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        {/* Inner content box for readability over the gradient */}
        <div 
          ref={ref} // Attach the ref to the content box
          className={`bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-3xl mx-auto text-gray-800
            transition-all duration-1000 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Get in Touch
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            We are always learning something new everyday. Feel free to reach out and share your ideas!
          </p>

          <div className="flex flex-col items-center space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-3">
              <MdEmail className="text-3xl" />
              <a 
                href="mailto:dinusrewkumar@gmail.com" 
                className="text-blue-600 hover:text-blue-800 text-xl md:text-2xl font-medium transition duration-300"
              >
                dinusrewkumar@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-3xl" />
              <a 
                href="https://www.linkedin.com/in/Dinu-Sreekumar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 text-xl md:text-2xl font-medium transition duration-300"
              >
                Dinu Sreekumar's LinkedIn
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center space-x-3">
              <FaGithub className="text-3xl" />
              <a 
                href="https://github.com/Dinu-Sreekumar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 text-xl md:text-2xl font-medium transition duration-300"
              >
                Dinu Sreekumar's GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;