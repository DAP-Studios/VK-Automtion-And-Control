import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsGrid() {
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
	const [flipped, setFlipped] = useState<{[key: number]: boolean}>({});

	const toggleFlip = (id: number) => {
		setFlipped(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	};

	useEffect(() => {
		// Stagger animation for product cards on load
		if (cardsRef.current.length > 0) {
			gsap.from(cardsRef.current, {
				scrollTrigger: {
					trigger: cardsRef.current[0],
					start: 'top 80%',
				},
				y: 50,
				opacity: 0,
				stagger: 0.1,
				duration: 0.6,
				ease: 'power2.out'
			});
		}
	}, []);

		const products = [
		{
			id: 1,
			model: 'PLC-500 Series',
			category: 'Programmable Logic Controllers',
			tagline: 'Mission-critical process control',
			description: 'Industrial-grade PLCs engineered for 24/7 operation in demanding manufacturing environments.',
			icon: '🎛️',
			image: 'https://via.placeholder.com/400x300?text=PLC+Controller+System',
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
			image: 'https://via.placeholder.com/400x300?text=HMI+Touch+Display',
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
			image: 'https://via.placeholder.com/400x300?text=VFD+Drive+System',
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
			image: 'https://via.placeholder.com/400x300?text=Safety+Controller',
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
			image: 'https://via.placeholder.com/400x300?text=Network+Module',
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
			image: 'https://via.placeholder.com/400x300?text=Power+Supply+Unit',
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
						className="h-80 cursor-pointer perspective"
						onClick={() => toggleFlip(product.id)}
						onMouseLeave={() => window.innerWidth < 768 && setFlipped(prev => ({...prev, [product.id]: false}))}
					>
						{/* Flip Card Container */}
						<div 
							className="relative w-full h-full transition-transform duration-500 ease-out"
							style={{
								transformStyle: 'preserve-3d',
								transform: flipped[product.id] ? 'rotateY(180deg)' : 'rotateY(0deg)'
							}}
						>
							{/* Front - Image & Name */}
							<div 
								className="absolute w-full h-full bg-white border-2 border-industrial-200 hover:border-brand-orange rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
								style={{ backfaceVisibility: 'hidden' }}
							>
								{/* Image Container */}
								<div className={`relative w-full h-3/4 bg-gradient-to-br ${product.color} overflow-hidden flex items-center justify-center`}>
									{product.image ? (
										<>
											<img 
												src={product.image} 
												alt={product.model}
												className="w-full h-full object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
										</>
									) : (
										<div className="text-6xl opacity-20">{product.icon}</div>
									)}
								</div>

								{/* Name Section */}
								<div className="flex flex-col justify-center items-center h-1/4 p-4 bg-white border-t-2 border-industrial-100">
									<p className="text-xs mono-label text-industrial-500 mb-1 uppercase tracking-wide">{product.category}</p>
									<h3 className="text-lg font-bold text-industrial-900 text-center">{product.model}</h3>
								</div>

								{/* Flip Indicator */}
								<div className="absolute bottom-2 right-2 text-xs text-industrial-400 opacity-60 hover:opacity-100 transition-opacity">
									<span className="hidden md:inline">Hover to flip</span>
									<span className="md:hidden">Tap to flip</span>
								</div>
							</div>

							{/* Back - Details */}
							<div 
								className="absolute w-full h-full bg-industrial-900 border-2 border-brand-orange rounded-lg shadow-lg p-6 flex flex-col overflow-y-auto"
								style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
							>
								{/* Tagline */}
								<p className="text-sm text-brand-orange font-medium mb-4 leading-relaxed">
									{product.tagline}
								</p>

								{/* Description */}
								<p className="text-xs text-industrial-300 mb-4 leading-relaxed">
									{product.description}
								</p>

								{/* Quick Specs */}
								<div className="mb-4 pb-4 border-b border-industrial-700">
									<p className="text-xs font-bold text-industrial-400 uppercase mb-2">Specs:</p>
									{product.specs.slice(0, 3).map((spec, i) => (
										<div key={i} className="flex justify-between text-xs py-1">
											<span className="text-industrial-400">{spec.label}:</span>
											<span className="font-mono text-brand-orange">{spec.value}</span>
										</div>
									))}
								</div>

								{/* Applications */}
								<div>
									<p className="text-xs font-bold text-industrial-400 uppercase mb-2">Applications:</p>
									<div className="flex flex-wrap gap-1">
										{product.applications.slice(0, 3).map((app, i) => (
											<span key={i} className="text-xs px-2 py-1 bg-brand-orange/20 text-brand-orange rounded">
												{app}
											</span>
										))}
									</div>
								</div>

								{/* Flip Back Indicator */}
								<div className="text-xs text-industrial-500 mt-auto pt-2 text-center opacity-60">
									<span className="hidden md:inline">Click to flip back</span>
									<span className="md:hidden">Tap to flip back</span>
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
