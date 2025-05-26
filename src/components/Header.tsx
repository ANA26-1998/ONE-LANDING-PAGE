import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src="/one logoo.png" alt=" ONE Logo" className="h-8" />
           {/*ONE*/}
           <span className="font-bold text-gray-900 text-lg">ONE</span>
        
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#mission" className="text-gray-700 hover:text-primary-600 transition-colors">Mission</a>
          <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">Features</a>
          <a href="#prototype" className="text-gray-700 hover:text-primary-600 transition-colors">Prototype</a>
          <a href="#signup" className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-primary-700 transition-all transform hover:scale-105">
            Sign Up
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          name='menu'
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#mission" 
            className="text-gray-700 hover:text-primary-600 transition-colors py-2 px-4"
            onClick={() => setIsOpen(false)}
          >
            Mission
          </a>
          <a 
            href="#features" 
            className="text-gray-700 hover:text-primary-600 transition-colors py-2 px-4"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#prototype" 
            className="text-gray-700 hover:text-primary-600 transition-colors py-2 px-4"
            onClick={() => setIsOpen(false)}
          >
            Prototype
          </a>
          <a 
            href="#signup" 
            className="bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;