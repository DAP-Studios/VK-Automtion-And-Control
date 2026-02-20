import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	
	const timelineRef = useRef(null);
	const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

	const timeline = [
		{ year: '2010', milestone: 'Founded with focus on PLC programming and industrial control' },
		{ year: '2015', milestone: 'ISO 9001:2015 certification achieved' },
		{ year: '2018', milestone: 'Expanded to complete system integration services' },
		{ year: '2024', milestone: '500+ automation systems deployed across industries' }
	];

	return (
		<section id="about" className="relative bg-white">
			{/* Company story - editorial layout */}
			<div className="section-padding">
				<div className="container-editorial" ref={ref}>
					{/* Header with offset orange line */}
					<div className="grid lg:grid-cols-12 gap-16 mb-20">
						<div className="lg:col-span-1 hidden lg:block">
							<motion.div
								initial={{ scaleY: 0 }}
								animate={isInView ? { scaleY: 1 } : {}}
								transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
								className="orange-line-vertical origin-top"
							/>
						</div>
						
						<div className="lg:col-span-11">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
							>
								<span className="mono-label mb-6 block">Company Overview</span>
								<h2 className="mb-12 max-w-4xl">
									Building Industrial Control Systems
									<span className="text-brand-orange"> That Engineers Trust</span>
								</h2>
							</motion.div>
						</div>
					</div>

					{/* Story content - asymmetrical columns */}
					<div className="grid lg:grid-cols-12 gap-y-12 lg:gap-16">
						{/* Left: Large editorial number */}
						<div className="lg:col-span-2 hidden lg:block">
							<motion.div
								initial={{ opacity: 0 }}
								animate={isInView ? { opacity: 1 } : {}}
								transition={{ duration: 1, delay: 0.3 }}
								className="editorial-number sticky top-32"
							>
								01
							</motion.div>
						</div>

						{/* Center: Main narrative */}
						<div className="lg:col-span-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="space-y-6 text-lg leading-relaxed text-industrial-600"
							>
								<p className="text-xl leading-relaxed text-industrial-700">
									VK Automation specializes in industrial control systems engineered for 
									reliability, performance, and long-term maintainability in demanding 
									manufacturing and process environments.
								</p>
								<p>
									Our approach begins with systematic analysis of process requirements and 
									operational constraints. We design programmable logic controller architectures, 
									variable frequency drive configurations, and human-machine interfaces that 
									prioritize operational transparency and diagnostic accessibility.
								</p>
								<p>
									Every control system we deliver is documented to IEC 61131-3 standards with 
									complete electrical schematics, network topology diagrams, and commissioning 
									procedures. This engineering discipline ensures systems remain supportable 
									throughout their operational lifetime.
								</p>
							</motion.div>
						</div>

						{/* Right: Key capabilities */}
						<div className="lg:col-span-4">
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.8, delay: 0.4 }}
								className="bg-industrial-50 p-10 border-l-4 border-brand-orange"
							>
								<h3 className="text-lg font-bold mb-8 text-industrial-900">Core Capabilities</h3>
								<ul className="space-y-5 text-industrial-700">
									{[
										'PLC programming (Siemens, AB, Schneider)',
										'HMI/SCADA development',
										'VFD configuration & tuning',
										'Industrial networking (Ethernet/IP, Profinet)',
										'Safety system integration (SIL 3 / PLe)',
										'Complete system documentation'
									].map((item, i) => (
										<motion.li
											key={i}
											initial={{ opacity: 0, x: -10 }}
											animate={isInView ? { opacity: 1, x: 0 } : {}}
											transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
											className="flex items-start"
										>
											<span className="w-1 h-1 bg-brand-orange mt-2.5 mr-3 flex-shrink-0"></span>
											<span>{item}</span>
										</motion.li>
									))}
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			{/* Timeline section - visual separator */}
			<div className="section-padding-sm bg-industrial-50 border-y border-industrial-200">
				<div className="container-editorial" ref={timelineRef}>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={timelineInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="mb-16"
					>
						<span className="mono-label mb-4 block">Company Evolution</span>
						<h3 className="text-2xl">Three Decades of Engineering Excellence</h3>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{timeline.map((item, i) => (
							<motion.div
								key={item.year}
								initial={{ opacity: 0, y: 20 }}
								animate={timelineInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: i * 0.15 }}
								className="relative pl-8 border-l-2 border-brand-orange/30"
							>
								<div className="absolute -left-[9px] top-0 w-4 h-4 bg-brand-orange"></div>
								<div className="font-mono text-2xl font-bold text-brand-orange mb-3">
									{item.year}
								</div>
								<p className="text-sm text-industrial-700 leading-relaxed">
									{item.milestone}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Engineering philosophy - wide format */}
			<div className="section-padding-sm">
				<div className="container-editorial">
					<div className="grid lg:grid-cols-3 gap-16">
						{[
							{
								title: 'Engineering Standards',
								items: ['IEC 61131-3 PLC programming', 'ISO 13849 safety compliance', 'IEEE industrial networking', 'Complete technical documentation']
							},
							{
								title: 'Project Methodology',
								items: ['Requirements analysis', 'System architecture design', 'Factory acceptance testing', 'Site commissioning & validation']
							},
							{
								title: 'Long-Term Support',
								items: ['24/7 technical hotline', 'Remote diagnostic access', 'Preventive maintenance programs', 'System upgrade engineering']
							}
						].map((column, i) => (
							<motion.div
								key={column.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.6, delay: i * 0.15 }}
							>
								<h4 className="text-xl font-bold mb-6 text-industrial-900">{column.title}</h4>
								<ul className="space-y-3 text-industrial-600">
									{column.items.map((item, j) => (
										<li key={j} className="flex items-start">
											<span className="w-1.5 h-1.5 bg-brand-orange mt-2 mr-3 flex-shrink-0"></span>
											<span className="text-sm leading-relaxed">{item}</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

