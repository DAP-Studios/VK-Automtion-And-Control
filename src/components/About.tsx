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
		{ year: '2019', milestone: 'VK Automation started with a focus on PLC programming, panels, and industrial control work.' },
		{ year: '2020', milestone: 'Delivered early retrofit and commissioning projects for local manufacturing units.' },
		{ year: '2022', milestone: 'Expanded into end-to-end SCADA, drive, and control panel integration services.' },
		{ year: '2026', milestone: 'Crossed 200+ system deliveries through practical, founder-led execution.' }
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

	const aboutHighlights = [
		{ value: '2019', label: 'Company Started' },
		{ value: '200+', label: 'Systems Delivered' },
		{ value: 'Multi-Brand', label: 'Project Experience' }
	];

	return (
		<section id="about" aria-labelledby="about-heading" className="relative section-light">
			{/* Animated background orbs */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -left-64 top-0 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(230,126,34,0.4) 0%, transparent 70%)', animation: 'float 8s ease-in-out infinite' }} />
				<div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(230,126,34,0.3) 0%, transparent 70%)', animation: 'float 10s ease-in-out infinite 2s' }} />
				<div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)' }} />
			</div>
			{/* Subtle grid overlay */}
			<div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
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
			<div className="section-padding-sm pt-10 md:pt-14 relative z-10">
				<div className="container-editorial" ref={ref}>

					{/* Story content - asymmetrical columns */}
					<div className="grid lg:grid-cols-12 gap-y-10 lg:gap-8 items-start">

						<div className="lg:col-span-3">
							<motion.div
								initial={{ opacity: 0, y: 24 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, delay: 0.1 }}
										className="glass-card rounded-2xl p-6 md:p-8 min-h-[320px] lg:min-h-[420px] flex flex-col justify-between border-t border-brand-orange/20"
							>
								<div className="space-y-4">
									<span className="text-xs uppercase tracking-[0.28em] text-brand-orange/70">Why VK</span>
											<p className="text-xl md:text-2xl leading-snug text-industrial-900">
										Built for plants that need practical automation support without heavy enterprise overhead.
									</p>
								</div>
										<div className="space-y-4 border-t border-stone-200 pt-5">
									{aboutHighlights.map((item) => (
												<div key={item.label} className="flex items-end justify-between gap-4 border-b border-stone-200 pb-3 last:border-b-0 last:pb-0">
											<span className="text-2xl md:text-3xl font-semibold text-brand-orange">{item.value}</span>
													<span className="max-w-[10rem] text-right text-xs uppercase tracking-[0.18em] text-industrial-500">{item.label}</span>
										</div>
									))}
								</div>
							</motion.div>
						</div>

						{/* Center: Main narrative */}
						<div className="lg:col-span-5 lg:pt-10">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, delay: 0.2 }}
							className="space-y-5 text-base md:text-lg leading-relaxed"
						>
							<div className="space-y-3 pb-2">
								<span className="mono-label block text-brand-orange/70">About VK Automation</span>
									<h2 id="about-heading" className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight max-w-4xl text-industrial-900">
									Industrial Automation,{' '}
									<span className="gradient-text">PLC Programming</span>,{' '}and SCADA Integration
								</h2>
							</div>
									<p className="text-lg md:text-xl leading-relaxed text-industrial-600">
								VK Automation is an industrial automation company, started in 2019, delivering PLC programming,
								SCADA development, VFD commissioning, and control system integration for
								manufacturing and process plants.
							</p>
							<p className="text-industrial-500">
								The team focuses on site realities first, then designs PLC architectures,
								HMI and SCADA interfaces, industrial networking, and VFD strategies that keep
								operations visible, stable, and easier to troubleshoot after handover.
							</p>
						</motion.div>
						</div>

						{/* Right: Key capabilities + Image */}
						<div className="lg:col-span-4 space-y-6 lg:pt-4">
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.8, delay: 0.4 }}
									className="glass-card rounded-2xl p-7 md:p-8 border-l-4 border-brand-orange min-h-[320px] lg:min-h-[420px] flex flex-col justify-center"
							>
									<h3 className="text-lg font-bold mb-5 text-industrial-900">Core Capabilities</h3>
									<ul className="space-y-3 text-industrial-600">
									{[
										'PLC and SCADA programming (IEC 61131-3)',
										'VFD commissioning and drive integration',
										'Industrial networking (Profibus, Profinet, Modbus)',
										'Panel design, fabrication, and installation',
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
			<div className="section-padding-sm border-t border-stone-100">
				<div className="container-editorial">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="mb-6"
					>
					<span className="mono-label mb-4 block text-brand-orange/70">Brands We Serve</span>
					<h3 className="text-2xl text-industrial-900 mb-3">Platforms We Work With</h3>
					<p className="text-industrial-500">
								Hands-on integration experience across widely used automation platforms.
						</p>
					</motion.div>

<div className="relative overflow-hidden py-8 border-y border-stone-200">
					<div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f8f6f2, transparent)' }} />
					<div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #f8f6f2, transparent)' }} />

						<div className="animate-scroll-infinite">
							{[...partners, ...partners].map((partner, i) => (
								<div
									key={`${partner.name}-${i}`}
								className="flex-shrink-0 w-36 h-20 mx-4 flex items-center justify-center rounded-lg p-4 border border-stone-200 bg-white hover:border-brand-orange/50 transition-all duration-300"
									title={partner.name}
								>
									<img
										src={partner.logo}
										alt={partner.name}
									className="max-w-full max-h-full object-contain opacity-75 hover:opacity-100 transition-all duration-300"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Timeline section */}
			<div className="section-padding-sm border-t border-stone-100">
				<div className="container-editorial" ref={timelineRef}>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={timelineInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="mb-10"
					>
						<span className="mono-label mb-4 block text-brand-orange/70">Company Evolution</span>
						<h3 className="text-2xl text-industrial-900">Built Step by Step Since 2019</h3>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{timeline.map((item, i) => (
							<motion.div
								key={item.year}
								initial={{ opacity: 0, y: 20 }}
								animate={timelineInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: i * 0.15 }}
								className="relative pl-6 pr-4 py-6 rounded-xl border border-stone-200 bg-white min-h-[180px] glow-card"
							>
								<div className="absolute -left-[5px] top-6 w-3 h-3 rounded-full bg-brand-orange shadow-lg" style={{ boxShadow: '0 0 12px rgba(230,126,34,0.6)' }}></div>
								<div className="font-mono text-2xl font-bold text-brand-orange mb-2">
									{item.year}
								</div>
								<p className="text-sm text-industrial-500 leading-relaxed">
									{item.milestone}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Engineering philosophy */}
			<div className="section-padding-sm border-t border-stone-100">
				<div className="container-editorial">
					<div className="grid lg:grid-cols-3 gap-8">
						{[
							{
								title: 'Practical Engineering',
								items: ['IEC 61131-3 PLC programming', 'Industrial networking and drive integration', 'Clear schematics, IO lists, and documentation', 'Commissioning focused on maintainability']
							},
							{
								title: 'Project Methodology',
								items: ['Requirements analysis', 'System architecture design', 'Factory acceptance testing', 'Site commissioning & validation']
							},
							{
								title: 'Long-Term Support',
								items: ['Remote diagnostic support', 'On-site troubleshooting when required', 'Preventive maintenance planning', 'System upgrade engineering']
							}
						].map((column, i) => (
							<motion.div
								key={column.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.6, delay: i * 0.15 }}
								className="glass-card rounded-2xl border border-stone-200 p-6 md:p-8 min-h-[250px] glow-card"
							>
								<h4 className="text-xl font-bold mb-4 text-industrial-900">{column.title}</h4>
								<ul className="space-y-2 text-industrial-500">
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
