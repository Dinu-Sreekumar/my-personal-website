// src/components/Projects.tsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer'; // Import useInView

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>

        {/* Projects Grid with animation */}
        <div 
          ref={ref} // Attach the ref to the grid container
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
            transition-all duration-1000 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {/* Project Card 1: Customer Churn Prediction Project */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">Customer Churn Prediction Project</h3>
            <p className="text-gray-600 mb-4">
              A machine learning project focused on predicting customer churn for a telecom company. It utilizes Python, Pandas, and Scikit-learn, covering the data science pipeline from data preprocessing to model training and evaluation using a Random Forest Classifier.
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-blue-600">Python, Pandas, Scikit-learn, Random Forest</span>
              <a 
                href="https://github.com/Dinu-Sreekumar/Customer-Churn-Prediction" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-800 font-medium transition duration-300 flex items-center space-x-1"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Project Card 2: Python Finance Tracker project */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">Python Finance Tracker project</h3>
            <p className="text-gray-600 mb-4">
              A Python-based personal finance tracker with data visualization. It allows users to log and categorize income/expense transactions to understand financial health through charts like Expense Distribution Pie Chart, Monthly Income vs. Expenses Bar Chart, and Cumulative Balance Line Graph.
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-blue-600">Python, Pandas, Matplotlib, Seaborn, CSV</span>
              <a 
                href="https://github.com/Dinu-Sreekumar/Python-Finance-Tracker" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-800 font-medium transition duration-300 flex items-center space-x-1"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;