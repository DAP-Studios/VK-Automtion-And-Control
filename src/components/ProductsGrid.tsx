import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsGrid() {
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		// Stagger animation for product cards
		if (cardsRef.current.length > 0) {
			gsap.from(cardsRef.current, {
				scrollTrigger: {
					trigger: cardsRef.current[0],
					start: 'top 80%',
				},
				y: 100,
				opacity: 0,
				rotation: 5,
				stagger: 0.1,
				duration: 0.8,
				ease: 'back.out(1.2)'
			});
		}

		// Add magnetic hover effect to cards
		cardsRef.current.forEach(card => {
			if (!card) return;

			const handleMouseMove = (e: MouseEvent) => {
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left - rect.width / 2;
				const y = e.clientY - rect.top - rect.height / 2;

				gsap.to(card, {
					x: x * 0.1,
					y: y * 0.1,
					rotationY: x * 0.05,
					rotationX: -y * 0.05,
					duration: 0.5,
					ease: 'power2.out',
					transformPerspective: 1000
				});
			};

			const handleMouseLeave = () => {
				gsap.to(card, {
					x: 0,
					y: 0,
					rotationY: 0,
					rotationX: 0,
					duration: 0.5,
					ease: 'power2.out'
				});
			};

			card.addEventListener('mousemove', handleMouseMove);
			card.addEventListener('mouseleave', handleMouseLeave);

			return () => {
				card.removeEventListener('mousemove', handleMouseMove);
				card.removeEventListener('mouseleave', handleMouseLeave);
			};
		});
	}, []);

	const products = [
		{
			id: 1,
			model: 'PLC-500 Series',
			category: 'Programmable Logic Controllers',
			tagline: 'Mission-critical process control',
			description: 'Industrial-grade PLCs engineered for 24/7 operation in demanding manufacturing environments.',
			icon: '🎛️',
			color: 'from-blue-500 to-blue-600',
			specs: [
				{ label: 'I/O Capacity', value: 'Up to 2048 points' },
				{ label: 'Scan Cycle', value: '<0.8ms typical' },
				{ label: 'Memory', value: '32MB program' }
			],
			applications: ['Process automation', 'Manufacturing', 'Water treatment', 'Energy']
		},
		{
			id: 2,
			model: 'HMI-Touch Pro Series',
			category: 'Human-Machine Interface',
			tagline: 'Sunlight-readable touchscreens',
			description: 'High-resolution operator panels with capacitive multi-touch technology and 1000 cd/m² brightness.',
			icon: '📱',
			color: 'from-orange-500 to-red-600',
			specs: [
				{ label: 'Display Sizes', value: '7" to 21.5"' },
				{ label: 'Resolution', value: 'Up to 1920x1080' },
				{ label: 'Touch', value: '10-point multi-touch' }
			],
			applications: ['Machine control', 'Process visualization', 'Data logging', 'Alarms']
		},
		{
			id: 3,
			model: 'VFD-Ultra Series',
			category: 'Variable Frequency Drives',
			tagline: 'High-efficiency motor control',
			description: 'Precision motor control from 0.75kW to 630kW with sensorless vector control.',
			icon: '⚡',
			color: 'from-yellow-500 to-orange-600',
			specs: [
				{ label: 'Power Range', value: '0.75kW-630kW' },
				{ label: 'Control Mode', value: 'V/F, vector' },
				{ label: 'Efficiency', value: '>98% rated' }
			],
			applications: ['Pump control', 'HVAC systems', 'Conveyors', 'Cranes']
		},
		{
			id: 4,
			model: 'Safety Controller SC-300',
			category: 'Functional Safety Systems',
			tagline: 'SIL 3 / PLe certified',
			description: 'Safety-rated controllers with redundant processing and self-diagnostics.',
			icon: '🛡️',
			color: 'from-red-500 to-pink-600',
			specs: [
				{ label: 'Safety Rating', value: 'SIL 3 / PLe' },
				{ label: 'Safety I/O', value: '64 in / 32 out' },
				{ label: 'Response Time', value: '<10ms' }
			],
			applications: ['Emergency stop', 'Light curtains', 'Safety gates', 'Control']
		},
		{
			id: 5,
			model: 'Communication Module CM-802',
			category: 'Industrial Networking',
			tagline: 'Multi-protocol gateway',
			description: 'Universal gateway supporting Ethernet/IP, Profinet, Modbus TCP, and MQTT.',
			icon: '🌐',
			color: 'from-green-500 to-emerald-600',
			specs: [
				{ label: 'Protocols', value: '4+ protocols' },
				{ label: 'Throughput', value: '100Mbps Ethernet' },
				{ label: 'Latency', value: '<5ms' }
			],
			applications: ['Network integration', 'Legacy system bridging', 'Cloud connectivity']
		},
		{
			id: 6,
			model: 'Power Supply PSU-1200',
			category: 'Industrial Power',
			tagline: 'Redundant power systems',
			description: 'Reliable power delivery with redundancy support and wide input range.',
			icon: '🔋',
			color: 'from-purple-500 to-indigo-600',
			specs: [
				{ label: 'Output Power', value: '1200W @ 24VDC' },
				{ label: 'Input Range', value: '85-264VAC' },
				{ label: 'Protection', value: 'Overload, short circuit' }
			],
			applications: ['Redundant systems', 'Critical control', 'UPS backup']
		}
	];

	return (
		<section className="bg-white py-20">
			<div className="container-wide">
				{/* Header */}
				<div className="mb-16 text-center">
					<span className="mono-label text-brand-orange mb-4 block">Product Portfolio</span>
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Our Complete Product Lineup
					</h1>
					<p className="text-lg text-industrial-600 max-w-3xl mx-auto">
						Field-proven automation hardware combining precision engineering with operational longevity. 
						Every component is selected for harsh industrial environments.
					</p>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product, index) => (
						<div
							key={product.id}
							ref={(el) => (cardsRef.current[index] = el)}
							className="group"
							style={{ transformStyle: 'preserve-3d' }}
						>
							<div className="h-full flex flex-col bg-white border border-industrial-200 hover:border-brand-orange transition-all duration-300 rounded-lg overflow-hidden hover:shadow-2xl">
								{/* Visual Header with gradient */}
								<div className={`bg-gradient-to-br ${product.color} p-8 text-white relative h-32 flex items-center justify-center overflow-hidden`}>
									<div className="text-6xl opacity-10 absolute top-0 right-0 group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
									<div className="text-5xl relative z-10 group-hover:scale-125 transition-transform duration-300">{product.icon}</div>
								</div>

								{/* Content */}
								<div className="flex-1 p-6 flex flex-col">
									{/* Category Badge */}
									<span className="inline-block mono-label text-xs mb-2 px-3 py-1 bg-industrial-50 border border-industrial-200 rounded w-fit">
										{product.category}
									</span>

									{/* Model Name */}
									<h3 className="text-xl font-bold text-industrial-900 mb-2">
										{product.model}
									</h3>

									{/* Tagline */}
									<p className="text-sm text-brand-orange font-medium mb-3">
										{product.tagline}
									</p>

									{/* Description */}
									<p className="text-sm text-industrial-600 mb-4 leading-relaxed">
										{product.description}
									</p>

									{/* Quick Specs */}
									<div className="space-y-2 mb-4">
										{product.specs.map((spec, i) => (
											<div key={i} className="flex justify-between text-xs py-1 border-t border-industrial-100">
												<span className="font-medium text-industrial-600">{spec.label}:</span>
												<span className="font-mono text-industrial-900">{spec.value}</span>
											</div>
										))}
									</div>

									{/* Applications */}
									<div className="space-y-2">
										<p className="text-xs font-bold text-industrial-700 uppercase">Applications:</p>
										<div className="flex flex-wrap gap-1">
											{product.applications.map((app, i) => (
												<span key={i} className="text-xs px-2 py-1 bg-brand-orange/10 text-brand-orange rounded">
													{app}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className="mt-20 bg-gradient-to-r from-industrial-900 to-industrial-800 rounded-lg p-12 text-center text-white">
					<h3 className="text-3xl font-bold mb-4">Need Complete Specifications?</h3>
					<p className="text-lg text-industrial-300 mb-8 max-w-2xl mx-auto">
						Request detailed technical documentation, CAD models, and integration guidelines for any product.
					</p>
					<a
						href="/contact"
						className="inline-block border-2 border-brand-orange bg-brand-orange hover:bg-opacity-90 text-white px-10 py-4 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded"
					>
						Request Technical Data
					</a>
				</div>
			</div>
		</section>
	);
}
