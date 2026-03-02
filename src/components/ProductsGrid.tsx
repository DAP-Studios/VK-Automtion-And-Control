import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import partner logos
import siemensLogo from '../assets/partners/siemens.png';
import allenBradleyLogo from '../assets/partners/allenbradley.png';
import schneiderLogo from '../assets/partners/schneider.png';
import abbLogo from '../assets/partners/abb.png';
import mitsubishiLogo from '../assets/partners/mitsubishi.png';
import omronLogo from '../assets/partners/omron.png';
import deltaLogo from '../assets/partners/delta.png';
import invtLogo from '../assets/partners/invt.png';
import weconLogo from '../assets/partners/wecon.png';
import wintechLogo from '../assets/partners/wintech.png';

gsap.registerPlugin(ScrollTrigger);

const partners = [
	{ name: 'Siemens', logo: siemensLogo },
	{ name: 'Allen-Bradley', logo: allenBradleyLogo },
	{ name: 'Schneider Electric', logo: schneiderLogo },
	{ name: 'ABB', logo: abbLogo },
	{ name: 'Mitsubishi', logo: mitsubishiLogo },
	{ name: 'Omron', logo: omronLogo },
	{ name: 'Delta', logo: deltaLogo },
	{ name: 'INVT', logo: invtLogo },
	{ name: 'Wecon', logo: weconLogo },
	{ name: 'Wintech', logo: wintechLogo }
];

export default function ProductsGrid() {
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
	// flipped tracks click-toggled state (used on mobile, or as override on desktop)
	const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});
	const isMobile = useRef(false);

	useEffect(() => {
		isMobile.current = window.innerWidth < 768;
		const onResize = () => { isMobile.current = window.innerWidth < 768; };
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	// Toggle flip on click — used for mobile taps; on desktop this acts as a "lock" override
	const handleClick = (id: number) => {
		if (isMobile.current) {
			setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
		}
	};

	useEffect(() => {
		const validCards = cardsRef.current.filter(Boolean);
		if (validCards.length === 0) return;

		// Only animate translateY — never touch opacity so cards are always visible
		gsap.set(validCards, { y: 40 });

		const tween = gsap.to(validCards, {
			y: 0,
			stagger: 0.08,
			duration: 0.5,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: validCards[0],
				start: 'top 90%',
			},
		});

		return () => {
			tween.kill();
			ScrollTrigger.getAll().forEach(t => t.kill());
		};
	}, []);

	const products = [
		{
			id: 1,
			model: 'PLC-500 Series',
			category: 'Programmable Logic Controllers',
			tagline: 'Mission-critical control',
			description: 'Industrial PLCs built for continuous operation in harsh environments.',
			icon: '🎛️',
			color: 'from-blue-600 to-indigo-700',
			bgColor: 'bg-blue-50',
			specs: [
				{ label: 'I/O Capacity', value: 'Up to 2048 points' },
				{ label: 'Scan Cycle', value: '<0.8ms typical' },
				{ label: 'Memory', value: '32MB program' },
			],
			applications: ['Process automation', 'Manufacturing', 'Water treatment', 'Energy'],
		},
		{
			id: 2,
			model: 'HMI-Touch Pro Series',
			category: 'Human-Machine Interface',
			tagline: 'Operator panels, built for clarity',
			description: 'High-resolution touch HMIs with bright displays and reliable multi-touch.',
			icon: '📱',
			color: 'from-orange-500 to-orange-700',
			bgColor: 'bg-orange-50',
			specs: [
				{ label: 'Display Sizes', value: '7" to 21.5"' },
				{ label: 'Resolution', value: 'Up to 1920x1080' },
				{ label: 'Touch', value: '10-point multi-touch' },
			],
			applications: ['Machine control', 'Process visualization', 'Data logging', 'Alarms'],
		},
		{
			id: 3,
			model: 'VFD-Ultra Series',
			category: 'Variable Frequency Drives',
			tagline: 'High-efficiency motor control',
			description: 'Precision motor control from 0.75kW to 630kW with sensorless vector control.',
			icon: '⚡',
			color: 'from-green-600 to-emerald-700',
			bgColor: 'bg-green-50',
			specs: [
				{ label: 'Power Range', value: '0.75kW–630kW' },
				{ label: 'Control Mode', value: 'V/F, vector' },
				{ label: 'Efficiency', value: '>98% rated' },
			],
			applications: ['Pump control', 'HVAC systems', 'Conveyors', 'Cranes'],
		},
		{
			id: 4,
			model: 'Safety Controller SC-300',
			category: 'Functional Safety Systems',
			tagline: 'SIL 3 / PLe certified',
			description: 'Safety-rated control with redundant processing and self-diagnostics.',
			icon: '🛡️',
			color: 'from-red-600 to-rose-700',
			bgColor: 'bg-red-50',
			specs: [
				{ label: 'Safety Rating', value: 'SIL 3 / PLe' },
				{ label: 'Safety I/O', value: '64 in / 32 out' },
				{ label: 'Response Time', value: '<10ms' },
			],
			applications: ['Emergency stop', 'Light curtains', 'Safety gates', 'Control'],
		},
		{
			id: 5,
			model: 'Communication Module CM-802',
			category: 'Industrial Networking',
			tagline: 'Multi-protocol gateway',
			description: 'Gateway for Ethernet/IP, Profinet, Modbus TCP, and MQTT.',
			icon: '🌐',
			color: 'from-purple-600 to-violet-700',
			bgColor: 'bg-purple-50',
			specs: [
				{ label: 'Protocols', value: '4+ protocols' },
				{ label: 'Throughput', value: '100Mbps Ethernet' },
				{ label: 'Latency', value: '<5ms' },
			],
			applications: ['Network integration', 'Legacy bridging', 'Cloud connectivity'],
		},
		{
			id: 6,
			model: 'Power Supply PSU-1200',
			category: 'Industrial Power',
			tagline: 'Redundant power systems',
			description: 'Stable power delivery with redundancy support and wide input range.',
			icon: '🔋',
			color: 'from-yellow-600 to-amber-700',
			bgColor: 'bg-yellow-50',
			specs: [
				{ label: 'Output Power', value: '1200W @ 24VDC' },
				{ label: 'Input Range', value: '85–264VAC' },
				{ label: 'Protection', value: 'Overload, short circuit' },
			],
			applications: ['Redundant systems', 'Critical control', 'UPS backup'],
		},
	];

	return (
		<>
			{/* Inline styles for flip perspective — required since Tailwind has no built-in perspective utility */}
			<style>{`
				.flip-scene {
					perspective: 1200px;
				}
				.flip-card-inner {
					position: relative;
					width: 100%;
					height: 100%;
					transform-style: preserve-3d;
					transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1);
				}
				/* Desktop: hover triggers flip */
				@media (hover: hover) and (pointer: fine) {
					.flip-scene:hover .flip-card-inner {
						transform: rotateY(180deg);
					}
				}
				/* Mobile / touch: class-controlled flip */
				.flip-scene.is-flipped .flip-card-inner {
					transform: rotateY(180deg);
				}
				.flip-face {
					position: absolute;
					inset: 0;
					backface-visibility: hidden;
					-webkit-backface-visibility: hidden;
					border-radius: 0.5rem;
					overflow: hidden;
				}
				.flip-face-back {
					transform: rotateY(180deg);
				}
				/* Scroll-infinite partner logos */
				@keyframes scrollInfinite {
					0%   { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}
				.animate-scroll-infinite {
					display: flex;
					width: max-content;
					animation: scrollInfinite 28s linear infinite;
				}
				.animate-scroll-infinite:hover {
					animation-play-state: paused;
				}
			`}</style>

			<section className="bg-gradient-to-b from-industrial-50 to-white py-20">
				<div className="container-wide">
					{/* Header */}
					<div className="mb-16 text-center">
						<span className="mono-label text-brand-orange mb-4 block text-sm font-semibold">
							Product Portfolio
						</span>
						<h1 className="text-4xl md:text-5xl font-bold mb-6 text-industrial-900">
							Complete Product{' '}
							<span className="text-brand-orange">Lineup</span>
						</h1>
						<p className="text-lg text-industrial-600 max-w-3xl mx-auto leading-relaxed">
							Field-proven automation hardware built for uptime, longevity, and harsh
							environments.
						</p>
					</div>

					{/* Products Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
						{products.map((product, index) => (
							<div
								key={product.id}
								ref={(el) => (cardsRef.current[index] = el)}
								/* h-[28rem] gives the scene a fixed height */
								className={`flip-scene h-[28rem] cursor-pointer select-none${flipped[product.id] ? ' is-flipped' : ''}`}
								onClick={() => handleClick(product.id)}
								role="button"
								aria-pressed={!!flipped[product.id]}
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') handleClick(product.id);
								}}
							>
								<div className="flip-card-inner">
									{/* ─── FRONT ─── */}
									<div
										className={`flip-face ${product.bgColor} border-2 border-industrial-300 hover:border-brand-orange shadow-xl`}
									>
										{/* Gradient image area */}
										<div
											className={`relative w-full h-3/4 bg-gradient-to-br ${product.color} flex items-center justify-center`}
										>
											<span className="text-8xl opacity-40 select-none drop-shadow-lg">
												{product.icon}
											</span>
											{/* subtle bottom fade */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
										</div>

										{/* Name strip */}
										<div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center h-1/4 p-4 bg-white border-t-4 border-brand-orange/30">
											<p className="text-xs mono-label text-brand-orange font-semibold mb-1 uppercase tracking-wide">
												{product.category}
											</p>
											<h3 className="text-lg font-bold text-industrial-900 text-center">
												{product.model}
											</h3>
										</div>

										{/* Flip hint */}
										<div className="absolute bottom-2 right-3 text-xs text-industrial-400 opacity-60 pointer-events-none">
											<span className="hidden md:inline">Hover to flip</span>
											<span className="md:hidden">Tap to flip</span>
										</div>
									</div>

									{/* ─── BACK ─── */}
									<div className="flip-face flip-face-back bg-industrial-900 border-2 border-brand-orange shadow-lg p-6 flex flex-col">
										{/* Tagline */}
										<p className="text-sm text-brand-orange font-semibold mb-3 leading-snug">
											{product.tagline}
										</p>

										{/* Description */}
										<p className="text-xs text-industrial-300 mb-4 leading-relaxed">
											{product.description}
										</p>

										{/* Specs */}
										<div className="mb-4 pb-4 border-b border-industrial-700">
											<p className="text-xs font-bold text-industrial-400 uppercase mb-2 tracking-wider">
												Specs
											</p>
											{product.specs.map((spec, i) => (
												<div key={i} className="flex justify-between text-xs py-1">
													<span className="text-industrial-400">{spec.label}</span>
													<span className="font-mono text-brand-orange font-medium">
														{spec.value}
													</span>
												</div>
											))}
										</div>

										{/* Applications */}
										<div className="flex-1">
											<p className="text-xs font-bold text-industrial-400 uppercase mb-2 tracking-wider">
												Applications
											</p>
											<div className="flex flex-wrap gap-1">
												{product.applications.map((app, i) => (
													<span
														key={i}
														className="text-xs px-2 py-1 bg-brand-orange/20 text-brand-orange rounded"
													>
														{app}
													</span>
												))}
											</div>
										</div>

										{/* Flip-back hint (mobile only) */}
										<div className="text-xs text-industrial-500 pt-3 text-center opacity-60 md:hidden pointer-events-none">
											Tap to flip back
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Brand Partners Carousel */}
					<div className="mt-20 mb-8">
						<div className="text-center mb-8">
							<h3 className="text-2xl font-bold text-industrial-900 mb-2">
								Technology Partners
							</h3>
							<p className="text-industrial-600">
								Certified integration across leading automation platforms.
							</p>
						</div>
						<div className="relative overflow-hidden bg-white py-8 border-y-2 border-industrial-200">
							{/* Gradient overlays */}
							<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
							<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

							{/* Scrolling logos — duplicated for seamless loop */}
							<div className="animate-scroll-infinite">
								{[...partners, ...partners].map((partner, i) => (
									<div
										key={`${partner.name}-${i}`}
										className="flex-shrink-0 w-40 h-24 mx-6 flex items-center justify-center bg-white border-2 border-industrial-200 rounded-lg p-4 hover:border-brand-orange hover:shadow-lg transition-all duration-300"
										title={partner.name}
									>
										<img
											src={partner.logo}
											alt={partner.name}
											className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
										/>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* CTA Section */}
					<div className="mt-20 bg-gradient-to-r from-industrial-900 to-industrial-800 rounded-lg p-12 text-center text-white">
						<h3 className="text-3xl font-bold mb-4 text-white">Need Technical Specs?</h3>
						<p className="text-lg text-industrial-300 mb-8 max-w-2xl mx-auto">
							Request datasheets, CAD models, and integration notes for any product.
						</p>
						<a
							href="/contact"
							className="inline-block border-2 border-brand-orange bg-brand-orange hover:bg-opacity-90 text-white px-10 py-4 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded"
						>
							Request Specs
						</a>
					</div>
				</div>
			</section>
		</>
	);
}