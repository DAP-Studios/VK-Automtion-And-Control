import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wrench, LineChart, Phone } from 'lucide-react';

export default function Services() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const services = [
		{
			icon: Wrench,
			number: '01',
			title: 'System Integration',
			tagline: 'Complete automation architecture from concept through commissioning',
			description: 'Multi-vendor platform integration with unified control strategy. From specification and panel design through field installation, programming, and validation testing. Structured documentation and operator training ensure sustainable operations.',
			capabilities: [
				{ label: 'PLC Programming', detail: 'Structured code in IEC 61131-3 languages with modular architecture' },
				{ label: 'SCADA Systems', detail: 'Process visualization with alarming, trending, and recipe management' },
				{ label: 'Panel Fabrication', detail: 'UL508A compliant control panels with wire labeling and schematics' },
				{ label: 'Field Services', detail: 'Installation, termination, loop checking, and startup commissioning' }
			],
			deliverables: ['Functional design specification', 'Control panel drawings', 'Software documentation', 'Commissioning reports']
		},
		{
			icon: LineChart,
			number: '02',
			title: 'Process Optimization',
			tagline: 'Performance analysis and control tuning for operational efficiency',
			description: 'Data-driven approach to control loop performance, energy consumption, and production throughput. Process historian analysis identifies optimization opportunities. Control algorithm improvements deliver measurable results in cycle time, waste reduction, and equipment utilization.',
			capabilities: [
				{ label: 'Loop Tuning', detail: 'PID controller optimization with stability and response time analysis' },
				{ label: 'Energy Management', detail: 'Power monitoring and optimization strategies for utility cost reduction' },
				{ label: 'OEE Analysis', detail: 'Overall Equipment Effectiveness tracking with downtime categorization' },
				{ label: 'Predictive Maintenance', detail: 'Condition monitoring and failure prediction algorithms' }
			],
			deliverables: ['Process performance reports', 'Optimization recommendations', 'Control algorithm updates', 'Training documentation']
		},
		{
			icon: Phone,
			number: '03',
			title: 'Technical Support',
			tagline: 'Lifecycle support with rapid response and preventive maintenance',
			description: '24/7 emergency response for critical production systems. Remote diagnostics with VPN connectivity minimize downtime. Preventive maintenance programs include regular site visits, backup verification, and documentation updates. Spare parts inventory management ensures component availability.',
			capabilities: [
				{ label: 'Emergency Response', detail: '24/7 phone support with 2-hour on-site response for critical failures' },
				{ label: 'Remote Diagnostics', detail: 'Secure VPN access for troubleshooting and code modifications' },
				{ label: 'Maintenance Programs', detail: 'Scheduled site visits with system health checks and backups' },
				{ label: 'Documentation', detail: 'As-built drawings, code documentation, and operator manuals' }
			],
			deliverables: ['Service visit reports', 'System backup archives', 'Modification documentation', 'Training sessions']
		}
	];

	const processSteps = [
		{ phase: 'Discovery', detail: 'Requirements analysis, site survey, existing system review' },
		{ phase: 'Design', detail: 'Control philosophy, P&ID markup, equipment specifications' },
		{ phase: 'Implementation', detail: 'Panel build, programming, factory acceptance testing' },
		{ phase: 'Commissioning', detail: 'Site installation, loop checkout, operator training, validation' }
	];

	return (
		<section id="services" className="relative bg-white">
			{/* Section introduction */}
			<div className="section-padding-sm border-b border-industrial-200">
				<div className="container-editorial" ref={ref}>
					<div className="grid lg:grid-cols-12 gap-12">
						<div className="lg:col-span-7">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
							>
								<span className="mono-label mb-6 block">Service Offerings</span>
								<h2 className="mb-8">
									Engineering Services
									<span className="text-brand-orange"> for Industrial Control Systems</span>
								</h2>
								<p className="text-xl leading-relaxed text-industrial-600 measure-wide">
									Full-lifecycle support from initial system design through ongoing maintenance. 
									Technical expertise backed by rapid response and comprehensive documentation.
								</p>
							</motion.div>
						</div>

						<div className="lg:col-span-5 lg:pt-20">
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
								className="bg-industrial-50 border-l-4 border-brand-orange p-8"
							>
								<span className="mono-label block mb-4">Engineering Process</span>
								<p className="text-sm leading-relaxed text-industrial-700">
									Structured workflow ensures project success: requirements analysis, detailed design, 
									phased implementation with testing, and comprehensive handover documentation.
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
						className={`section-padding-sm border-b border-industrial-200 ${isEven ? 'bg-industrial-50' : 'bg-white'}`}
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

										<p className="text-lg leading-relaxed text-industrial-600 mb-10">
											{service.description}
										</p>

										{/* Deliverables */}
										<div className="bg-white border border-industrial-200 p-6">
											<span className="mono-label block mb-4">Key Deliverables</span>
											<div className="grid grid-cols-2 gap-3">
												{service.deliverables.map((item, i) => (
													<div key={i} className="flex items-start text-sm text-industrial-700">
														<span className="w-1 h-1 bg-brand-orange mt-2 mr-3 flex-shrink-0"></span>
														<span>{item}</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>

								{/* Capabilities column */}
								<div className={`lg:col-span-5 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
									<div className="space-y-6 lg:pt-32"
									>
										<span className="mono-label block mb-6">Technical Capabilities</span>
										{service.capabilities.map((cap, i) => (
											<div key={i} className="border-l-2 border-industrial-200 pl-6 pb-6">
												<h4 className="font-bold text-industrial-900 mb-2">{cap.label}</h4>
												<p className="text-sm text-industrial-600 leading-relaxed">
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
			<div className="section-padding bg-industrial-900 text-white">
				<div className="container-editorial">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
					>
						<span className="mono-label mb-8 block text-white/60">Implementation Methodology</span>
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
									<p className="text-sm text-white/70 leading-relaxed">
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
