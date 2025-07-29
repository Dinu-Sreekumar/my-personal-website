// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom'; // Import Outlet

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar stays here, as it's on all pages */}
      <Outlet /> {/* This is where React Router will render your page components (Home, About, Projects, Contact) */}
    </div>
  );
}

export default App;