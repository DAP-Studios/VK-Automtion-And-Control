import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

	return (
		<section id="about" className="relative bg-white">
			<style>{`
				@keyframes scrollInfinite {
					0% { transform: translateX(0); }
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
			{/* Company story - editorial layout */}
			<div className="section-padding !pt-0">
				<div className="container-editorial" ref={ref}>

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
									VK Automation builds control systems for reliable, safe operation
									in demanding manufacturing and process environments.
								</p>
								<p>
									We start with requirements and constraints, then design PLC architectures,
									VFD strategies, and HMI/SCADA interfaces that keep operations transparent
									and diagnosable.
								</p>
								<p>
									Every system ships with IEC 61131-3 documentation, schematics, network
									topology, and commissioning procedures to keep it supportable long term.
								</p>
							</motion.div>
						</div>

						{/* Right: Key capabilities + Image */}
						<div className="lg:col-span-4 space-y-8">
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
											<span className="text-sm">{item}</span>
										</motion.li>
									))}
								</ul>
							</motion.div>

							{/* Company facilities visualization */}
							{/* <motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="relative aspect-square bg-gradient-to-br from-industrial-50 to-industrial-100 border border-industrial-200 rounded-lg overflow-hidden flex items-center justify-center"
							>
								{/* Abstract facilities graphic 
								<svg viewBox="0 0 400 400" className="w-full h-full opacity-[0.15] absolute inset-0">
									<g stroke="#E67E22" strokeWidth="2" fill="none">
										{/* Building blocks 
										<rect x="50" y="50" width="150" height="200" />
										<rect x="200" y="100" width="150" height="150" />
										<rect x="100" y="300" width="200" height="80" />
										{/* Antennas/equipment 
										<line x1="130" y1="50" x2="130" y2="20" />
										<line x1="280" y1="100" x2="280" y2="30" />
										{/* Internal divisions 
										<line x1="50" y1="150" x2="200" y2="150" />
										<line x1="125" y1="50" x2="125" y2="250" />
										<circle cx="280" cy="175" r="30" />
									</g>
								</svg>
								<div className="relative z-10 text-center">
									<p className="font-mono text-xs text-industrial-600 font-semibold uppercase tracking-wider">
										Vapi, Gujarat
									</p>
									<p className="text-sm text-industrial-500 mt-2">Industrial Facility</p>
								</div>
							</motion.div> */}
						</div>
					</div>
				</div>
				</div>
	

			{/* Brands we serve - carousel */}
			<div className="section-padding-sm bg-white border-t border-industrial-200">
				<div className="container-editorial">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="mb-8"
					>
						<span className="mono-label mb-4 block">Brands We Serve</span>
						<h3 className="text-2xl mb-3">Technology Partners</h3>
						<p className="text-industrial-600">
							Certified integration across leading automation platforms.
						</p>
					</motion.div>

					<div className="relative overflow-hidden bg-industrial-50 py-8 border-y border-industrial-200">
						<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-industrial-50 via-industrial-50 to-transparent z-10 pointer-events-none" />
						<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-industrial-50 via-industrial-50 to-transparent z-10 pointer-events-none" />

						<div className="animate-scroll-infinite">
							{[...partners, ...partners].map((partner, i) => (
								<div
									key={`${partner.name}-${i}`}
									className="flex-shrink-0 w-36 h-20 mx-5 flex items-center justify-center bg-white border-2 border-industrial-200 rounded-lg p-4 hover:border-brand-orange hover:shadow-lg transition-all duration-300"
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
						<h3 className="text-2xl">Three Decades of Practical Engineering</h3>
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

