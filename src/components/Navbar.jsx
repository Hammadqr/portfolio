// components/Navbar.jsx
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-gray-800">Hammad Qaiser</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-800 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <a href="#home" className="block py-2 text-gray-800 hover:text-blue-600">Home</a>
          <a href="#about" className="block py-2 text-gray-800 hover:text-blue-600">About</a>
          <a href="#projects" className="block py-2 text-gray-800 hover:text-blue-600">Projects</a>
          <a href="#contact" className="block py-2 text-gray-800 hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
}