import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Client/partner data (copied from Clients.tsx)
const partners = [
	{ name: 'Siemens', category: 'PLC & Automation' },
	{ name: 'Allen-Bradley', category: 'Rockwell Automation' },
	{ name: 'Schneider Electric', category: 'Industrial Control' },
	{ name: 'ABB', category: 'Drives & Motors' },
	{ name: 'Mitsubishi', category: 'Automation Solutions' },
	{ name: 'Omron', category: 'Control Components' },
	{ name: 'Phoenix Contact', category: 'Interface Solutions' },
	{ name: 'Eaton', category: 'Power Management' }
];

export default function Products() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const products = [
		{
			model: 'PLC-500 Series',
			category: 'Programmable Logic Controllers',
			tagline: 'Mission-critical process control with redundancy support and deterministic scan cycles',
			description: 'Industrial-grade PLCs engineered for 24/7 operation in demanding manufacturing environments. Modular architecture supports expansion from 64 to 2048 I/O points with hot-swappable modules and dual-redundant power supplies.',
			specs: [
				{ label: 'I/O Capacity', value: 'Up to 2048 points (expandable)' },
				{ label: 'Scan Cycle', value: '<0.8ms typical @ 1K instructions' },
				{ label: 'Memory', value: '32MB program / 64MB data retention' },
				{ label: 'Communication', value: 'Ethernet/IP, Profinet, Modbus TCP/RTU' },
				{ label: 'Operating Range', value: '-40°C to +70°C, 5-95% RH' },
				{ label: 'Standards', value: 'IEC 61131-3, UL508, CE marked' }
			],
			applications: ['Process automation', 'Manufacturing lines', 'Water treatment', 'Energy management']
		},
		{
			model: 'HMI-Touch Pro Series',
			category: 'Human-Machine Interface',
			tagline: 'Sunlight-readable industrial touchscreens with multi-touch capability and secure remote access',
			description: 'High-resolution operator panels with capacitive multi-touch technology and 1000 cd/m² brightness for visibility in direct sunlight. Embedded web server enables secure remote monitoring without additional hardware.',
			specs: [
				{ label: 'Display Sizes', value: '7" / 10.4" / 15" / 21.5" TFT LCD' },
				{ label: 'Resolution', value: 'Up to 1920x1080 Full HD' },
				{ label: 'Touch Technology', value: 'Projected capacitive, 10-point multi-touch' },
				{ label: 'Brightness', value: '1000 cd/m² (sunlight readable)' },
				{ label: 'Protection Rating', value: 'IP65 front panel / NEMA 4X' },
				{ label: 'Protocols', value: 'OPC UA, Modbus, Ethernet/IP, MQTT' }
			],
			applications: ['Machine control', 'Process visualization', 'Data logging', 'Alarm management']
		},
		{
			model: 'VFD-Ultra Series',
			category: 'Variable Frequency Drives',
			tagline: 'High-efficiency motor control with advanced vector algorithms and predictive diagnostics',
			description: 'Precision motor control from 0.75kW to 630kW with sensorless vector control achieving ±0.2% speed regulation. Integrated harmonic filtering reduces THD below 5% without external reactors.',
			specs: [
				{ label: 'Power Range', value: '0.75kW to 630kW (1-900HP)' },
				{ label: 'Control Mode', value: 'V/F, open-loop vector, closed-loop vector' },
				{ label: 'Overload Capacity', value: '150% for 60s / 180% for 10s' },
				{ label: 'Efficiency', value: '>98% at rated load (IE4 motors)' },
				{ label: 'Communication', value: 'Modbus RTU/TCP, Profibus DP, CANopen' },
				{ label: 'Features', value: 'Auto-tuning, flying start, PID control' }
			],
			applications: ['Pump control', 'HVAC systems', 'Conveyor drives', 'Crane & hoist']
		},
		{
			model: 'Safety Controller SC-300',
			category: 'Functional Safety Systems',
			tagline: 'SIL 3 / PLe certified safety controllers with dual-channel architecture and diagnostic coverage >99%',
			description: 'Safety-rated controllers for machine protection applications with redundant processing, self-diagnostics, and safety-rated communication. Compliant with IEC 61508 and ISO 13849-1 standards.',
			specs: [
				{ label: 'Safety Rating', value: 'SIL 3 / PLe (Cat 4) certified' },
				{ label: 'Safety I/O', value: '64 inputs / 32 outputs (expandable)' },
				{ label: 'Response Time', value: '<10ms safety reaction time' },
				{ label: 'Diagnostic Coverage', value: '>99% (DC High per ISO 13849)' },
				{ label: 'Safe Communication', value: 'Safety over Ethernet (CIP Safety)' },
				{ label: 'Programming', value: 'IEC 61131-3 with safety extensions' }
			],
			applications: ['Emergency stop', 'Light curtains', 'Safety gates', 'Two-hand control']
		}
	];

	return (
		<section id="products" className="relative bg-white">
			{/* Section introduction */}
			<div className="section-padding-sm border-b border-industrial-200">
				<div className="container-editorial" ref={ref}>
					<div className="grid lg:grid-cols-12 gap-16">
						<div className="lg:col-span-8">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
							>
								<span className="mono-label mb-6 block">Product Portfolio</span>
								<h2 className="mb-8">
									Control Systems Engineered
									<span className="text-brand-orange"> For Industrial Reliability</span>
								</h2>
								<p className="text-xl leading-relaxed text-industrial-600 max-w-3xl">
									Field-proven automation hardware combining precision engineering with 
									operational longevity. Every component is selected for harsh industrial 
									environments and backed by comprehensive technical support.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			{/* Product showcase - editorial case study style */}
			{products.map((product, index) => {
				const isEven = index % 2 === 0;
				const [open, setOpen] = useState(false);
				return (
					<div
						key={product.model}
						className={`section-padding-sm border-b border-industrial-200 ${isEven ? 'bg-white' : 'bg-industrial-50'}`}
					>
						<div className="container-editorial">
							<button
								className="w-full text-left flex items-center justify-between py-4 px-6 bg-industrial-100 hover:bg-industrial-200 rounded transition mb-4 focus:outline-none"
								onClick={() => setOpen((prev) => !prev)}
								aria-expanded={open}
							>
								<div className="flex items-center gap-4">
									<span className="font-mono text-2xl font-bold text-brand-orange/60">0{index + 1}</span>
									<span className="mono-label text-industrial-700">{product.category}</span>
									<span className="font-bold text-industrial-900 text-lg">{product.model}</span>
								</div>
								<span className="text-brand-orange text-2xl">{open ? '−' : '+'}</span>
							</button>
							{open && (
								<div className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
									{/* Content side */}
									<div className={`lg:col-span-7 ${!isEven ? 'lg:col-start-6' : ''}`}>
										<motion.div
											initial={{ opacity: 0, y: 30 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true, margin: "-150px" }}
											transition={{ duration: 0.8, delay: 0.2 }}
											className="mb-8"
										>
											<p className="text-lg text-brand-orange font-medium mb-4 leading-relaxed">
												{product.tagline}
											</p>
											<p className="text-lg leading-relaxed text-industrial-600 mb-8">
												{product.description}
											</p>
										</motion.div>
										{/* Technical specifications */}
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true, margin: "-150px" }}
											transition={{ duration: 0.6, delay: 0.4 }}
											className="bg-white border-l-4 border-brand-orange p-8 mb-8"
										>
											<h4 className="mono-label mb-6">Technical Specifications</h4>
											<dl className="space-y-4">
												{product.specs.map((spec, i) => (
													<div key={i} className="grid grid-cols-3 gap-4 pb-3 border-b border-industrial-100 last:border-0">
														<dt className="col-span-1 text-sm font-medium text-industrial-600">
															{spec.label}
														</dt>
														<dd className="col-span-2 text-sm font-mono text-industrial-900">
															{spec.value}
														</dd>
													</div>
												))}
											</dl>
										</motion.div>
										{/* Applications */}
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true, margin: "-150px" }}
											transition={{ duration: 0.6, delay: 0.5 }}
										>
											<span className="mono-label block mb-4">Typical Applications</span>
											<div className="flex flex-wrap gap-3 mb-6">
												{product.applications.map((app, i) => (
													<span
														key={i}
														className="px-4 py-2 bg-industrial-50 border border-industrial-200 text-sm text-industrial-700"
													>
														{app}
													</span>
												))}
											</div>
											{/* Client/partner loop for each product */}
											<span className="mono-label block mb-2">Key Technology Partners</span>
											<div className="flex flex-wrap gap-2">
												{partners.map((partner, idx) => (
													<span
														key={partner.name}
														className="px-3 py-1 bg-industrial-50 border border-industrial-200 text-xs text-industrial-700 rounded"
														title={partner.category}
													>
														{partner.name}
													</span>
												))}
											</div>
										</motion.div>
									</div>
									{/* Visual side - abstract technical diagram */}
									<div className={`lg:col-span-5 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
										<motion.div
											initial={{ opacity: 0, x: isEven ? 40 : -40 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true, margin: "-150px" }}
											transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
											className="relative aspect-[4/5] bg-industrial-50 border border-industrial-200 overflow-hidden"
										>
											{/* Abstract technical illustration */}
											<div className="absolute inset-0 flex items-center justify-center p-12">
												<svg viewBox="0 0 400 500" className="w-full h-full opacity-10">
													<g stroke="#E67E22" strokeWidth="2" fill="none">
														{index === 0 && (
															<>
																<rect x="50" y="50" width="300" height="200" />
																<rect x="80" y="80" width="240" height="140" />
																<line x1="50" y1="150" x2="350" y2="150" />
																<circle cx="200" cy="350" r="80" />
																<line x1="120" y1="350" x2="280" y2="350" />
																<line x1="200" y1="270" x2="200" y2="430" />
															</>
														)}
														{index === 1 && (
															<>
																<rect x="75" y="75" width="250" height="350" />
																<rect x="100" y="100" width="200" height="250" />
																<line x1="75" y1="200" x2="325" y2="200" />
																<line x1="75" y1="300" x2="325" y2="300" />
																<circle cx="200" cy="150" r="30" />
																<circle cx="150" cy="250" r="20" />
																<circle cx="250" cy="250" r="20" />
															</>
														)}
														{index === 2 && (
															<>
																<circle cx="200" cy="200" r="120" />
																<circle cx="200" cy="200" r="80" />
																<circle cx="200" cy="200" r="40" />
																<line x1="80" y1="200" x2="320" y2="200" />
																<line x1="200" y1="80" x2="200" y2="320" />
																<polygon points="200,350 150,430 250,430" />
															</>
														)}
														{index === 3 && (
															<>
																<rect x="100" y="100" width="200" height="300" />
																<line x1="150" y1="100" x2="150" y2="400" />
																<line x1="250" y1="100" x2="250" y2="400" />
																<line x1="100" y1="250" x2="300" y2="250" />
																<circle cx="200" cy="250" r="60" />
																<polygon points="200,150 220,180 180,180" />
															</>
														)}
													</g>
												</svg>
											</div>
											{/* Model label overlay */}
											<div className="absolute bottom-8 left-8 right-8">
												<div className="bg-white/90 backdrop-blur-sm p-6 border-l-4 border-brand-orange">
													<p className="font-mono text-sm text-industrial-900 font-bold">
														{product.model}
													</p>
												</div>
											</div>
										</motion.div>
									</div>
								</div>
							)}
						</div>
					</div>
				);
			})}

			{/* CTA section */}
			<div className="section-padding-sm bg-industrial-900 text-white">
				<div className="container-editorial text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h3 className="text-3xl font-bold mb-6">Need Complete System Specifications?</h3>
						<p className="text-lg text-industrial-300 mb-8 max-w-2xl mx-auto">
							Request detailed technical documentation, CAD models, and integration guidelines 
							for any product in our portfolio.
						</p>
						<a
							href="#contact"
							className="inline-block border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-10 py-4 text-sm font-medium uppercase tracking-wider transition-all duration-300"
						>
							Request Technical Data Sheet
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
