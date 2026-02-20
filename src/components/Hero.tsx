import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
	const heroRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const circleRef = useRef<SVGCircleElement>(null);
	const floatingRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Animate title characters with stagger
		if (titleRef.current) {
			const chars = titleRef.current.querySelectorAll('.char');
			gsap.from(chars, {
				opacity: 0,
				y: 100,
				rotation: 10,
				ease: 'back.out(1.7)',
				duration: 1,
				stagger: 0.02,
				delay: 0.5
			});
		}

		// Rotating circle animation
		if (circleRef.current) {
			gsap.to(circleRef.current, {
				rotation: 360,
				duration: 20,
				repeat: -1,
				ease: 'none',
				transformOrigin: 'center center'
			});
		}

		// Floating animation for accent elements
		if (floatingRef.current) {
			gsap.to(floatingRef.current, {
				y: -20,
				duration: 2,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut'
			});
		}

		// Parallax effect on scroll
		if (heroRef.current) {
			gsap.to(heroRef.current.querySelector('.hero-bg'), {
				y: 200,
				ease: 'none',
				scrollTrigger: {
					trigger: heroRef.current,
					start: 'top top',
					end: 'bottom top',
					scrub: true
				}
			});
		}
	}, []);

	return (
		<section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-industrial-50">
			{/* Technical lines background */}
			<div className="absolute inset-0 technical-lines hero-bg"></div>
			<div className="absolute inset-0 blueprint-grid opacity-40"></div>
			
			{/* Abstract industrial composition - right side with rotating circle */}
			<div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.03]">
				<svg viewBox="0 0 800 1200" className="h-full w-full" preserveAspectRatio="xMaxYMid slice">
					<g ref={circleRef} stroke="#E67E22" strokeWidth="2" fill="none">
						<circle cx="600" cy="300" r="200" />
						<circle cx="600" cy="300" r="150" />
						<circle cx="600" cy="300" r="100" />
						<line x1="400" y1="300" x2="800" y2="300" />
						<line x1="600" y1="100" x2="600" y2="500" />
						<rect x="500" y="600" width="200" height="150" />
						<polygon points="550,850 650,850 600,950" />
					</g>
				</svg>
			</div>

			{/* Floating accent elements */}
			<div ref={floatingRef}>
				<motion.div 
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
					className="absolute top-1/3 left-0 right-1/2 h-[2px] bg-gradient-to-r from-brand-orange/60 to-transparent origin-left"
				/>
			
				<motion.div
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 1 }}
					transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="absolute left-16 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-brand-orange/40 to-transparent origin-top hidden md:block"
				/>
			</div>
			

			<div className="container-wide relative z-10 py-32">
				<div className="max-w-5xl">
					{/* Animated label */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="mb-8 flex items-center space-x-4"
					>
						<div className="w-12 h-[2px] bg-brand-orange"></div>
						<span className="mono-label text-brand-orange">Industrial Automation & Control</span>
					</motion.div>

					{/* Main headline - staggered entrance with character animation */}
					<div className="mb-10 overflow-hidden">
						<h1 ref={titleRef} className="display leading-[0.95]">
							{"Engineering Precision".split('').map((char, i) => (
								<span key={i} className="char inline-block">
									{char === ' ' ? '\u00A0' : char}
								</span>
							))}
						</h1>
						<motion.h1
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
							className="display leading-[0.95] text-brand-orange"
						>
							Into Every System
						</motion.h1>
					</div>

					{/* Supporting statement */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
						className="max-w-2xl mb-16"
					>
						<p className="text-xl md:text-2xl leading-relaxed text-industrial-700 font-light">
							Designing, integrating, and supporting mission-critical automation infrastructure 
							for manufacturing and process industries. Built on systematic engineering principles 
							and three decades of field-proven reliability.
						</p>
					</motion.div>

					{/* Technical metrics - editorial style */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
						className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16"
					>
						{[
							{ value: '99.7%', label: 'System Uptime' },
							{ value: '<1ms', label: 'Response Time' },
							{ value: '24/7', label: 'Support' },
							{ value: '500+', label: 'Systems Deployed' }
						].map((metric, i) => (
							<div key={i} className="relative">
								<div className="absolute -left-4 top-0 w-[2px] h-full bg-brand-orange/20"></div>
								<div className="font-mono text-3xl md:text-4xl font-bold text-industrial-900 mb-2 leading-none">
									{metric.value}
								</div>
								<div className="text-sm text-industrial-600 uppercase tracking-wider">
									{metric.label}
								</div>
							</div>
						))}
					</motion.div>

					{/* CTA - text-based, minimal */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
					>
						<a
							href="#contact"
							className="inline-flex items-center space-x-3 text-industrial-900 hover:text-brand-orange transition-colors duration-300 group"
						>
							<span className="text-lg font-medium">Request Technical Consultation</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
						</a>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator - refined */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 1.5 }}
				className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3"
			>
				<span className="text-xs text-industrial-500 uppercase tracking-widest">Scroll</span>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					className="w-[1px] h-12 bg-gradient-to-b from-brand-orange/60 to-transparent"
				/>
			</motion.div>
		</section>
	);
}

