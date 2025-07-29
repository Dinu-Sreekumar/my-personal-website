// src/components/About.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <section id="about" className="py-16 md:py-24">
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
            About Me
          </h2>

          <div className="text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              Hello! I'm Dinu Sreekumar, an aspiring professional from <strong>Kochi, Kerala</strong>, and
              currently a <strong>3rd-year BCA degree student at Christ College Irinjalakuda</strong>.
              I have a passion for leveraging technology to solve real-world problems. My journey in tech spans both
              data-driven insights and engaging web experiences. I thrive on learning
              and continuously expanding my skill set in areas like <strong>Python, Machine Learning,
              Data Visualization</strong>, and modern web development using <strong>React, TypeScript, and Tailwind CSS</strong>.
            </p>
            <p>
              My hands-on experience includes developing practical applications like the
              <strong>Customer Churn Prediction</strong> model, where I executed an end-to-end machine learning
              pipeline. This involved extensive data preprocessing, training a <strong>Random Forest Classifier</strong>
              to identify key churn factors for a telecom company, and rigorously evaluating its performance.
              It demonstrated my ability to transform raw data into actionable business insights.
            </p>
            <p>
              Additionally, I built a <strong>Python Personal Finance Tracker with Data Visualization</strong>,
              utilizing <strong>Pandas, Matplotlib, and Seaborn</strong> to empower users with a clear understanding
              of their financial health through interactive charts. Both these projects were
              developed with guidance from <strong>Google's Gemini AI</strong>, showcasing my adaptability
              and proficiency in leveraging advanced AI tools for enhanced learning and development.
            </p>
            <p>
              I am always eager to take on new challenges and collaborate on projects that push the
              boundaries of what's possible with data and intuitive user interfaces. Let's connect and build something impactful!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;