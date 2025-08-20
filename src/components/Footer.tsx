import React from 'react';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white border-t border-orange-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Zap className="w-8 h-8 text-orange-400" />
                <div className="absolute inset-0 w-8 h-8 bg-orange-400/20 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">VK Automation</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Leading provider of industrial automation solutions, specializing in PLC systems, 
              SCADA development, and comprehensive control systems for modern industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-orange-500/10 hover:bg-orange-500 p-3 rounded-lg transition-colors">
                <Facebook className="w-5 h-5 text-orange-500 hover:text-white" />
              </a>
              <a href="#" className="bg-orange-500/10 hover:bg-orange-500 p-3 rounded-lg transition-colors">
                <Twitter className="w-5 h-5 text-orange-500 hover:text-white" />
              </a>
              <a href="#" className="bg-orange-500/10 hover:bg-orange-500 p-3 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5 text-orange-500 hover:text-white" />
              </a>
              <a href="#" className="bg-orange-500/10 hover:bg-orange-500 p-3 rounded-lg transition-colors">
                <Instagram className="w-5 h-5 text-orange-500 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-600 hover:text-orange-600 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-orange-600 transition-colors">Products</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-600">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-600">info@vkautomation.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <span className="text-gray-600">Industrial Area, Phase-II<br />Chandigarh, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-500/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 VK Automation Control. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
