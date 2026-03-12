import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wrench, LineChart, Phone, Zap, TrendingUp, Headset } from 'lucide-react';

import plcServiceImg from '../assets/industries/plc.png';
import vfdServiceImg from '../assets/industries/vfd.png';
import autoServiceImg from '../assets/industries/auto.png';

export default function Services() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const services = [
		{
			icon: Wrench,
			image: plcServiceImg,
			number: '01',
			title: 'System Integration',
			tagline: 'Concept to commissioning, end to end',
			description: 'Multi-vendor integration with a unified control strategy. We handle specification, panel design, programming, and validation so systems start clean and stay supportable.',
			capabilities: [
				{ label: 'PLC Programming', detail: 'IEC 61131-3 structured code with modular architecture.' },
				{ label: 'SCADA Systems', detail: 'HMI/SCADA visualization, alarms, trends, and recipes.' },
				{ label: 'Panel Fabrication', detail: 'UL508A panels with clear labeling and schematics.' },
				{ label: 'Field Services', detail: 'Installation, termination, loop checks, and startup.' }
			],
			deliverables: ['Functional design specification', 'Control panel drawings', 'Software documentation', 'Commissioning reports']
		},
		{
			icon: LineChart,
			image: vfdServiceImg,
			number: '02',
			title: 'Process Optimization',
			tagline: 'Control tuning and performance gains',
			description: 'Data-led tuning to improve stability, energy use, and throughput. We turn historian data into clear actions and measurable gains.',
			capabilities: [
				{ label: 'Loop Tuning', detail: 'PID tuning for stability, overshoot, and response.' },
				{ label: 'Energy Management', detail: 'Power monitoring and cost-reduction strategies.' },
				{ label: 'OEE Analysis', detail: 'Downtime tagging and OEE visibility.' },
				{ label: 'Predictive Maintenance', detail: 'Condition monitoring and early-warning models.' }
			],
			deliverables: ['Process performance reports', 'Optimization recommendations', 'Control algorithm updates', 'Training documentation']
		},
		{
			icon: Phone,
			image: autoServiceImg,
			number: '03',
			title: 'Technical Support',
			tagline: 'Uptime protection and lifecycle support',
			description: '24/7 response for critical systems. Remote diagnostics reduce downtime; preventive maintenance keeps software, backups, and documentation current.',
			capabilities: [
				{ label: 'Emergency Response', detail: '24/7 support with rapid on-site response for critical failures.' },
				{ label: 'Remote Diagnostics', detail: 'Secure remote access for troubleshooting and updates.' },
				{ label: 'Maintenance Programs', detail: 'Scheduled health checks, backups, and audits.' },
				{ label: 'Documentation', detail: 'As-built drawings, code notes, and operator guides.' }
			],
			deliverables: ['Service visit reports', 'System backup archives', 'Modification documentation', 'Training sessions']
		}
	];

	const processSteps = [
		{ phase: 'Discovery', detail: 'Requirements, site survey, existing system review.' },
		{ phase: 'Design', detail: 'Control philosophy, P&IDs, equipment specs.' },
		{ phase: 'Implementation', detail: 'Panel build, programming, factory testing.' },
		{ phase: 'Commissioning', detail: 'Site install, loop checks, training, validation.' }
	];

	return (
		<section id="services" className="relative section-light">
			{/* Section introduction */}
			<div className="section-padding-sm border-b border-stone-200">
				<div className="container-editorial" ref={ref}>
					<div className="grid lg:grid-cols-12 gap-12">
						<div className="lg:col-span-7">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
							>
								<span className="mono-label mb-6 block text-brand-orange/70">Service Offerings</span>
									<h2 className="mb-8 text-industrial-900">
										Engineering Services
										<span className="gradient-text"> for Industrial Control Systems</span>
									</h2>
									<p className="text-xl leading-relaxed text-industrial-500 measure-wide">
									Full-lifecycle support from design through maintenance. Technical depth,
									fast response, and clean documentation.
								</p>
							</motion.div>
						</div>

						<div className="lg:col-span-5 lg:pt-20">
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
									className="glass-card rounded-2xl border-l-4 border-brand-orange p-8"
							>
								<span className="mono-label block mb-4 text-brand-orange/70">Engineering Process</span>
										<p className="text-sm leading-relaxed text-industrial-500">
									Structured workflow: requirements, detailed design, phased implementation,
									validated testing, and clean handover documentation.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			{/* Service details - flowing sections */}
			{services.map((service, index) => {
				const Icon = service.icon;
				const isEven = index % 2 === 0;

				return (
					<motion.div
						key={service.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-120px" }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="section-padding-sm border-b border-stone-200"
					>
						<div className="container-editorial">
							<div className="grid lg:grid-cols-12 gap-12 items-start">
								{/* Content column */}
								<div className={`lg:col-span-7 ${!isEven ? 'lg:col-start-6' : ''}`}>
									<div
									>
										{/* Number and title */}
										<div className="flex items-center mb-6">
											<span className="font-mono text-6xl font-bold text-brand-orange/20 mr-6">
												{service.number}
											</span>
											<div className="flex-1 h-[2px] bg-gradient-to-r from-brand-orange to-transparent"></div>
										</div>

										<div className="mb-8">
											<Icon className="w-10 h-10 text-brand-orange mb-4" strokeWidth={1.5} />
											<h3 className="text-4xl font-bold mb-4 text-industrial-900">
												{service.title}
											</h3>
											<p className="text-lg text-brand-orange font-medium mb-6">
												{service.tagline}
											</p>
										</div>

										<p className="text-lg leading-relaxed text-industrial-500 mb-10">
											{service.description}
										</p>

										{/* Deliverables */}
									<div className="glass-card rounded-xl p-6">
										<span className="mono-label block mb-4 text-brand-orange/70">Key Deliverables</span>
										<div className="grid grid-cols-2 gap-3">
											{service.deliverables.map((item, i) => (
													<div key={i} className="flex items-start text-sm text-industrial-500">
														<span className="w-1 h-1 bg-brand-orange mt-2 mr-3 flex-shrink-0"></span>
														<span>{item}</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>

{/* Capabilities & Image column */}
							<div className={`lg:col-span-5 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
								{/* Real service image */}
								<motion.div
									initial={{ opacity: 0, x: isEven ? 40 : -40 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-150px" }}
									transition={{ duration: 1, delay: 0.2 }}
										className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8 border border-stone-200"
								>
									<img
										src={service.image}
										alt={service.title}
										className="absolute inset-0 w-full h-full object-cover"
									/>
									{/* Dark gradient overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
									{/* Orange tint accent */}
									<div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(230,126,34,0.18) 0%, transparent 60%)' }} />
									{/* Bottom label */}
									<div className="absolute bottom-0 left-0 right-0 p-6">
										<div className="flex items-center gap-3">
											<div className="p-2 rounded-lg" style={{ background: 'rgba(230,126,34,0.2)', border: '1px solid rgba(230,126,34,0.3)' }}>
												<Icon className="w-5 h-5 text-brand-orange" strokeWidth={1.5} />
											</div>
											<span className="font-mono text-sm font-semibold text-white/80">{service.title}</span>
										</div>
										</div>
									</motion.div>

									{/* Capabilities list */}
									<div className="space-y-6">
										<span className="mono-label block text-brand-orange/70">Technical Capabilities</span>
										{service.capabilities.map((cap, i) => (
											<div key={i} className="border-l-2 border-brand-orange/30 pl-6 pb-4">
											<h4 className="font-bold text-industrial-900 mb-2 text-sm">{cap.label}</h4>
											<p className="text-sm text-industrial-500 leading-relaxed">
													{cap.detail}
												</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				);
			})}

			{/* Process timeline */}
			<div className="section-padding text-industrial-900" style={{ background: 'linear-gradient(135deg, #fff5eb 0%, #f8f6f2 50%, #fff5eb 100%)' }}>
				<div className="container-editorial">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
					>
							<span className="mono-label mb-8 block text-industrial-500">Implementation Methodology</span>
						<h3 className="text-3xl font-bold mb-16 max-w-2xl">
							Systematic Engineering Workflow
						</h3>

						<div className="grid md:grid-cols-4 gap-8">
							{processSteps.map((step, i) => (
								<motion.div
									key={step.phase}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: i * 0.1 }}
								>
									<div className="font-mono text-5xl font-bold text-brand-orange/40 mb-4">
										0{i + 1}
									</div>
									<h4 className="text-xl font-bold mb-3">{step.phase}</h4>
									<p className="text-sm text-industrial-600 leading-relaxed">
										{step.detail}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
