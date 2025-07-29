// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Home: React.FC = () => {
  return (
    // Hero Section Container
    <div id="home" className="min-h-screen text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn">
        Hi, I'm Dinu
      </h1>
      <p className="text-xl md:text-2xl mb-8 animate-slideUp">
        A Passionate Programmer
      </p>
      {/* Updated Link for the button */}
      <Link 
        to="/projects" // Redirects to the /projects route
        className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out"
      >
        View My Projects {/* Updated button text */}
      </Link>
    </div>
  );
};

export default Home;