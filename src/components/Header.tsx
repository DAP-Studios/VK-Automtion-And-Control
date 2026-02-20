import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

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
		 { label: 'Industries', href: '/industries' },
		 { label: 'Services', href: '/services' },
		 { label: 'Clients', href: '/clients' },
		 { label: 'Contact', href: '/contact' },
	 ];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
			}`}
		>
			<div className="container-wide">
				<div className="flex items-center justify-between h-20">
					 {/* Logo */}
					 <Link to="/" className="flex items-center space-x-3">
						 <span className="text-2xl font-bold text-industrial-900">VK<span className="text-brand-orange">|</span>AUTOMAION AND CONTROL</span>
					 </Link>

					 {/* Desktop Navigation */}
					 <nav className="hidden md:flex items-center space-x-8">
						 {navItems.map((item) => {
							 const isActive = location.pathname === item.href;
							 return (
								 <Link
									 key={item.label}
									 to={item.href}
									 className={`relative text-sm font-medium transition-colors duration-200 group ${
										 isActive
											 ? 'text-brand-orange'
											 : 'text-industrial-700 hover:text-brand-orange'
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
	);
}

