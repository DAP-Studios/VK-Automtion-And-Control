import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyan/80 backdrop-blur-md border-b border-orange-500/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img src="/fin.png" alt="VK Automation Logo" className="w-10 h-10"/>
              <div className="absolute inset-0 w-8 h-8 bg-orange-400/20 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold text--500" >VK Automation And Control </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-orange-600 transition-colors">Products</a>
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-orange-500/20">
            <nav className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              <a href="#products" className="block text-gray-700 hover:text-orange-600 transition-colors">Products</a>
              <a href="#services" className="block text-gray-700 hover:text-orange-600 transition-colors">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-orange-600 transition-colors">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;