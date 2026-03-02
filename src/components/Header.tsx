import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

// ── Glowing bar component ────────────────────────────────────────────────────
function GlowingNavBar() {
  return (
    <motion.div
      className="fixed top-0 left-10 right-5 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent z-50"
      style={{
        boxShadow: '0 0 40px rgba(249, 115, 22, 1), 0 0 80px rgba(249, 115, 22, 0.6), 0 0 120px rgba(249, 115, 22, 0.3)',
      }}
      animate={{
        width: ['0%', '100%', '0%'],
        opacity: [0.2, 1, 0.2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	 const navItems = [
		 { label: 'Home', href: '/' },
		 { label: 'Products', href: '/products' },
		 { label: 'Services', href: '/services' },
		 { label: 'Clients', href: '/clients' },
		 { label: 'Contact', href: '/contact' },
	 ];

	return (
		<>
			<GlowingNavBar />
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
				}`}
			>
			<div className="container-wide">
				<div className="flex items-center justify-between h-20">
					 {/* Logo */}
					 <Link to="/" className="flex items-center">
					 <img src={logo} alt="VK Automation and Control" className="h-10 md:h-12 w-auto" />
					 	<span className="ml-2 text-lg md:text-xl font-bold text-orange-700">VK</span>
						<span className="text-brand-orange">|Automation and Control</span>
					 </Link>
					 {/* Desktop Navigation */}
					 <nav className="hidden md:flex items-center space-x-8 relative pt-2">

						 {navItems.map((item) => {
							 const isActive = location.pathname === item.href;
							 return (
								 <Link
									 key={item.label}
									 to={item.href}
									 className={`relative text-sm font-medium transition-colors duration-200 group ${
										 isActive
											 ? 'text-brand-orange'
											 : 'text-industrial-400 hover:text-brand-orange'
									 }`}
								 >
									 {item.label}
									 <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${
										 isActive ? 'w-full' : 'w-0 group-hover:w-full'
									 }`}></span>
								 </Link>
							 );
						 })}
					 </nav>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-industrial-900 hover:text-brand-orange transition-colors"
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-white border-t border-industrial-200"
					>
						<nav className="container-wide py-6 flex flex-col space-y-4">
							   {navItems.map((item) => {
								   const isActive = location.pathname === item.href;
								   return (
									   <Link
										   key={item.label}
										   to={item.href}
										   onClick={() => setIsOpen(false)}
										   className={`text-base font-medium transition-colors py-2 ${
											   isActive
												   ? 'text-brand-orange border-l-4 border-brand-orange pl-3'
												   : 'text-industrial-700 hover:text-brand-orange'
										   }`}
									   >
										   {item.label}
									   </Link>
								   );
							   })}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
		</>
	);
}

