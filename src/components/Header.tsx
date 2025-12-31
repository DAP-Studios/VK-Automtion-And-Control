import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-2xl border-b border-slate-200/60 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center w-14 h-14 drop-shadow-xl">
              <img src="/fin.png" alt="VK Automation Logo" className="w-12 h-12 z-10 rounded-full shadow-lg" />
              <div className="absolute inset-0 w-14 h-14 bg-gradient-to-br from-orange-400/30 to-cyan-400/20 rounded-full blur-lg animate-pulse z-0"></div>
            </div>
            <span className="text-3xl font-extrabold font-sans bg-gradient-to-r from-cyan-600 via-blue-700 to-orange-500 bg-clip-text text-transparent tracking-tight select-none drop-shadow-md">
              VK Automation
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 bg-white/50 backdrop-blur-lg rounded-full px-6 py-3 shadow border border-slate-100/40">
            {[
              { href: '#home', label: 'Home' },
              { href: '#products', label: 'Products' },
              { href: '#services', label: 'Services' },
              { href: '#about', label: 'About' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 rounded-full font-semibold text-gray-800 hover:text-orange-600 transition group"
              >
                <span>{item.label}</span>
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 p-2 rounded-full bg-white/80 hover:bg-orange-100 border border-orange-100/40 shadow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200/40 rounded-b-2xl shadow-2xl animate-fade-in">
            <nav className="px-4 py-8 flex flex-col gap-4">
              {[
                { href: '#home', label: 'Home' },
                { href: '#products', label: 'Products' },
                { href: '#services', label: 'Services' },
                { href: '#about', label: 'About' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-gray-800 font-semibold hover:bg-orange-100 hover:text-orange-600 transition text-lg"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;