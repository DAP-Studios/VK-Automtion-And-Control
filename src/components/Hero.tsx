// import React from 'react';
import { ArrowRight, Cpu, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.2)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              right: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.5,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(0, 170, 255, 0.74)`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Future of
            </span>
            <br />
            <span className="text-gray-900">Automation And Control</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Advanced industrial automation solutions powered by cutting-edge technology. 
            From PLCs to SCADA systems, we engineer the future of industrial control.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => {
              const el = document.getElementById('products');
              if (el instanceof HTMLElement) {
                const hadTabIndex = el.hasAttribute('tabindex');
                if (!hadTabIndex) el.setAttribute('tabindex', '-1');
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                el.focus();
                if (!hadTabIndex) el.removeAttribute('tabindex');
              } else {
                window.location.hash = '#products';
              }
            }}
            className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            Explore Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el instanceof HTMLElement) {
                const hadTabIndex = el.hasAttribute('tabindex');
                if (!hadTabIndex) el.setAttribute('tabindex', '-1');
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                el.focus();
                if (!hadTabIndex) el.removeAttribute('tabindex');
              } else {
                window.location.hash = '#contact';
              }
            }}
            className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
          >
            Get Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6 hover:bg-white/90 transition-all duration-300 shadow-lg">
            <Cpu className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart PLCs</h3>
            <p className="text-gray-600">Advanced programmable logic controllers for industrial automation</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6 hover:bg-white/90 transition-all duration-300 shadow-lg">
            <Zap className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Power Systems</h3>
            <p className="text-gray-600">Reliable power distribution and control solutions</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6 hover:bg-white/90 transition-all duration-300 shadow-lg">
            <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety Systems</h3>
            <p className="text-gray-600">Comprehensive safety and monitoring solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;