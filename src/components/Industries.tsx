import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Zap, Gauge, Network, Shield, RotateCw } from 'lucide-react';

export default function Industries() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const capabilities = [
		{
			icon: Cpu,
			title: 'Complete Automation Systems',
			description: 'End-to-end control architecture from field instrumentation through supervisory control. We design integrated PLC/SCADA systems with coordinated process control, data acquisition, and real-time monitoring.',
			technical: 'Multi-tier architectures with distributed I/O, redundant controllers, and deterministic network communication. Complete system integration from sensor level through enterprise MES connectivity.',
			applications: ['Continuous process control', 'Batch manufacturing', 'Assembly automation', 'Material handling systems']
		},
		{
			icon: Zap,
			title: 'PLC Programming & Control Panels',
			description: 'Custom programmable logic controller solutions with structured programming, comprehensive fault diagnostics, and operational flexibility for evolving process requirements.',
			technical: 'IEC 61131-3 compliant programming in ladder logic, structured text, and function blocks. Modular code architecture with version control and documentation standards.',
			applications: ['Sequential control', 'Process interlocking', 'Machine sequencing', 'Safety logic implementation']
		},
		{
			icon: Gauge,
			title: 'Variable Frequency Drives',
			description: 'Motor speed control engineering with energy optimization, harmonic mitigation, and integration with upstream automation architecture. Comprehensive drive commissioning and tuning services.',
			technical: 'Vector control algorithms with auto-tuning capabilities. Harmonic analysis and filtering design. Multi-motor coordination and torque management.',
			applications: ['Pump stations', 'HVAC systems', 'Conveyor networks', 'Crane & material transport']
		},
		{
			icon: Network,
			title: 'Industrial Networking',
			description: 'Ethernet-based industrial networks with deterministic communication, redundancy protocols, and cybersecurity hardening. Complete network design from field level to plant supervision.',
			technical: 'Ethernet/IP, Profinet, and Modbus TCP architectures. Network topology design with ring redundancy. VLAN segmentation and industrial firewall configuration.',
			applications: ['Plant-wide SCADA', 'Remote diagnostics', 'Device-level networking', 'Data historian connectivity']
		},
		{
			icon: Shield,
			title: 'Functional Safety Systems',
			description: 'Safety-rated control systems compliant with IEC 61508 and ISO 13849. Complete safety lifecycle from hazard analysis through validation and periodic functional testing.',
			technical: 'SIL 2/3 and PLd/e safety architectures with diagnostic coverage calculation. Safety-rated communication and integration with standard automation systems.',
			applications: ['Emergency shutdown systems', 'Machine guarding', 'Fire & gas detection', 'Process safety interlocks']
		},
		{
			icon: RotateCw,
			title: 'Legacy System Modernization',
			description: 'Retrofit engineering for obsolete control systems with improved reliability, enhanced functionality, and extended operational lifetime. Phased migration strategies minimize production disruption.',
			technical: 'Migration path analysis and risk assessment. Protocol conversion and interface engineering. Parallel operation strategies for validation.',
			applications: ['PLC replacement', 'HMI upgrades', 'Drive modernization', 'Network infrastructure renewal']
		}
	];

	return (
		<section id="industries" className="relative bg-industrial-50">
			{/* Section introduction */}
			<div className="section-padding-sm border-b border-industrial-200">
				<div className="container-editorial" ref={ref}>
					<div className="grid lg:grid-cols-12 gap-16">
						<div className="lg:col-span-2 hidden lg:block">
							<motion.div
								initial={{ scaleY: 0 }}
								animate={isInView ? { scaleY: 1 } : {}}
								transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
								className="orange-line-vertical origin-top"
							/>
						</div>
						
						<div className="lg:col-span-10">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
							>
								<span className="mono-label mb-6 block">Technical Capabilities</span>
								<h2 className="mb-8 max-w-4xl">
									Automation Engineering
									<span className="text-brand-orange"> Across Industrial Disciplines</span>
								</h2>
								<p className="text-xl leading-relaxed text-industrial-600 max-w-3xl">
									Systematic approach to control system design, integration, and lifecycle support. 
									Each capability backed by field-proven methodologies and comprehensive documentation standards.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			{/* Capabilities - flowing editorial sections */}
			{capabilities.map((capability, index) => {
				const Icon = capability.icon;
				const isEven = index % 2 === 0;

				return (
					<motion.div 
						key={capability.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-150px" }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className={`section-padding-sm border-b border-industrial-200 ${!isEven ? 'bg-white' : ''}`}
					>
						<div className="container-editorial">
							<div className={`grid lg:grid-cols-12 gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
								{/* Icon and title side */}
								<div className={`lg:col-span-5 ${!isEven ? 'lg:col-start-8' : ''}`}>
									<div
									>
										{/* Number and icon */}
										<div className="flex items-start space-x-6 mb-8">
											<span className="font-mono text-6xl font-bold text-brand-orange/20 leading-none">
												0{index + 1}
											</span>
											<div className="p-5 bg-white border-2 border-brand-orange/30">
												<Icon className="w-10 h-10 text-brand-orange" strokeWidth={1.5} />
											</div>
										</div>

										<h3 className="text-3xl font-bold mb-6 text-industrial-900">
											{capability.title}
										</h3>

										{/* Technical details box */}
										<div className="bg-white border-l-4 border-brand-orange p-6 mb-8">
											<span className="mono-label block mb-3">Technical Approach</span>
											<p className="text-sm leading-relaxed text-industrial-700">
												{capability.technical}
											</p>
										</div>

										{/* Applications */}
										<div>
											<span className="mono-label block mb-4">Applications</span>
											<ul className="space-y-2">
												{capability.applications.map((app, i) => (
													<li key={i} className="flex items-start text-sm text-industrial-700">
														<span className="w-1 h-1 bg-brand-orange mt-2 mr-3 flex-shrink-0"></span>
														<span>{app}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>

								{/* Description side */}
								<div className={`lg:col-span-7 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
									<div className="lg:pt-32"
									>
										<p className="text-xl leading-relaxed text-industrial-600 mb-8">
											{capability.description}
										</p>

										{/* Abstract technical diagram */}
										<div className="relative aspect-video bg-white border border-industrial-200 p-12">
											<svg viewBox="0 0 600 400" className="w-full h-full opacity-[0.08]">
												<g stroke="#E67E22" strokeWidth="2" fill="none">
													{index === 0 && (
														<>
															<rect x="50" y="50" width="150" height="100" />
															<rect x="250" y="50" width="150" height="100" />
															<rect x="450" y="50" width="100" height="100" />
															<rect x="150" y="200" width="150" height="150" />
															<line x1="125" y1="150" x2="225" y2="200" />
															<line x1="325" y1="150" x2="225" y2="200" />
															<line x1="500" y1="150" x2="300" y2="200" />
														</>
													)}
													{index === 1 && (
														<>
															<rect x="100" y="50" width="400" height="250" />
															<line x1="100" y1="150" x2="500" y2="150" />
															<line x1="100" y1="250" x2="500" y2="250" />
															<line x1="300" y1="50" x2="300" y2="300" />
															<circle cx="200" cy="100" r="30" />
															<circle cx="400" cy="100" r="30" />
														</>
													)}
													{index === 2 && (
														<>
															<circle cx="300" cy="200" r="120" />
															<circle cx="300" cy="200" r="80" />
															<circle cx="300" cy="200" r="40" />
															<line x1="180" y1="200" x2="420" y2="200" />
															<line x1="300" y1="80" x2="300" y2="320" />
															<polygon points="300,50 350,100 250,100" />
														</>
													)}
													{index === 3 && (
														<>
															<circle cx="150" cy="200" r="60" />
															<circle cx="300" cy="100" r="60" />
															<circle cx="300" cy="300" r="60" />
															<circle cx="450" cy="200" r="60" />
															<line x1="210" y1="200" x2="240" y2="130" />
															<line x1="210" y1="200" x2="240" y2="270" />
															<line x1="360" y1="130" x2="390" y2="200" />
															<line x1="360" y1="270" x2="390" y2="200" />
														</>
													)}
													{index === 4 && (
														<>
															<rect x="100" y="100" width="150" height="200" />
															<rect x="350" y="100" width="150" height="200" />
															<line x1="250" y1="200" x2="350" y2="200" />
															<polygon points="300,190 310,200 300,210 290,200" fill="#E67E22" />
															<circle cx="175" cy="150" r="20" />
															<circle cx="425" cy="150" r="20" />
														</>
													)}
													{index === 5 && (
														<>
															<rect x="50" y="150" width="200" height="100" />
															<rect x="350" y="150" width="200" height="100" />
															<line x1="250" y1="200" x2="350" y2="200" />
															<polygon points="300,190 320,200 300,210" />
															<line x1="150" y1="100" x2="150" y2="150" />
															<line x1="450" y1="100" x2="450" y2="150" />
														</>
													)}
												</g>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				);
			})}
		</section>
	);
}
