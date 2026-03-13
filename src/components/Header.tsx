import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { navItems, siteConfig } from '../lib/siteConfig';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();
	const headerShellRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const onPointerDown = (event: MouseEvent | TouchEvent) => {
			if (!headerShellRef.current) {
				return;
			}

			const target = event.target;
			if (target instanceof Node && !headerShellRef.current.contains(target)) {
				setIsOpen(false);
			}
		};

		window.addEventListener('mousedown', onPointerDown);
		window.addEventListener('touchstart', onPointerDown);

		return () => {
			window.removeEventListener('mousedown', onPointerDown);
			window.removeEventListener('touchstart', onPointerDown);
		};
	}, [isOpen]);

	return (
		<header className="fixed inset-x-0 top-0 z-[160]">
			<div className="container-wide pt-4">
				<div
					ref={headerShellRef}
					className={`transition-all duration-300 ${
						scrolled || isOpen
							? 'surface-panel rounded-[1.75rem]'
							: 'bg-white/12 backdrop-blur-md border border-white/10 rounded-[1.75rem]'
					}`}
				>
					<div className="flex h-20 items-center justify-between px-5 md:px-7">
						<Link to="/" className="flex min-w-0 items-center gap-2.5 pr-3 sm:gap-3">
							<img src={logo} alt={siteConfig.name} className="h-11 w-auto sm:h-12" />
							<div className="min-w-0">
								<div className={`font-display text-[11px] font-semibold leading-tight transition-colors duration-300 sm:text-xl sm:leading-none ${scrolled || isOpen ? 'text-industrial-900' : 'text-white'}`}>
									<span className="block sm:inline">VK Automation</span>
									<span className="block sm:ml-1 sm:inline">and Control</span>
								</div>
							{/* <div className={`mt-1 text-[0.7rem] uppercase tracking-[0.28em] transition-colors duration-300 ${scrolled || isOpen ? 'text-industrial-500' : 'text-white/70'}`}>
									Power and Integration
								</div> */}
							</div>
						</Link>

						<nav className="hidden items-center gap-7 lg:flex">
							{navItems.map((item) => {
								const isActive = location.pathname === item.href;
								return (
									<Link
										key={item.label}
										to={item.href}
										className={`text-sm font-semibold transition-colors ${
											isActive ? 'text-brand-orange' : 'text-industrial-500 hover:text-orange-700'
										}`}
									>
										{item.label}
									</Link>
								);
							})}
						</nav>

						<div className="hidden items-center gap-3 lg:flex">
							<a
								href={siteConfig.phoneHref}
								className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition hover:border-brand-orange hover:text-brand-orange ${
									scrolled
										? 'border border-industrial-200 bg-white/80 text-industrial-800'
										: 'border border-white/30 bg-white/10 text-white'
								}`}
							>
								<Phone className="h-4 w-4" />
								{siteConfig.phoneDisplay}
							</a>
							<Link
								to="/contact"
								className="inline-flex items-center gap-2 rounded-full bg-industrial-900 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-500 hover:shadow-[0_14px_30px_rgba(230,126,34,0.35)]"
							>
								Request Consultation
								<ArrowUpRight className="h-4 w-4" />
							</Link>
						</div>

						<button
							type="button"
							onClick={() => setIsOpen((open) => !open)}
							className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:border-brand-orange lg:hidden ${
								scrolled || isOpen
									? 'border border-industrial-200 bg-white/80 text-industrial-900'
									: 'border border-white/30 bg-white/10 text-white'
							}`}
							aria-label="Toggle menu"
							aria-expanded={isOpen}
						>
							{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
						</button>
					</div>

					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: 'auto' }}
								exit={{ opacity: 0, height: 0 }}
								className="overflow-hidden border-t border-industrial-200 lg:hidden"
							>
								<div className="px-5 pb-5 pt-4 md:px-7">
									<nav className="flex flex-col gap-1">
										{navItems.map((item) => {
											const isActive = location.pathname === item.href;
											return (
												<Link
													key={item.label}
													to={item.href}
													className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
														isActive
															? 'bg-industrial-900 text-white'
															: 'text-industrial-500 hover:bg-industrial-100 hover:text-brand-orange'
													}`}
												>
													{item.label}
												</Link>
											);
										})}
									</nav>
									<div className="mt-4 grid gap-3 sm:grid-cols-2">
										<a
											href={siteConfig.phoneHref}
											className="rounded-2xl border border-industrial-200 px-4 py-3 text-sm font-semibold text-industrial-800"
										>
											{siteConfig.phoneDisplay}
										</a>
										<Link
											to="/contact"
											className="rounded-2xl bg-brand-orange px-4 py-3 text-center text-sm font-semibold text-white"
										>
											Start a Project
										</Link>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</header>
	);
}

