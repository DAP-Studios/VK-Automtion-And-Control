import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Zap, Network, Shield } from 'lucide-react';

export default function Industries() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const capabilities = [
		{
			icon: Cpu,
			title: 'Automation Systems',
			description: 'PLC/SCADA architecture from field I/O to supervisory control.'
		},
		{
			icon: Zap,
			title: 'Control Panels',
			description: 'Structured PLC programming and panel build standards.'
		},
		{
			icon: Network,
			title: 'Industrial Networking',
			description: 'Deterministic Ethernet with segmentation and secure access.'
		},
		{
			icon: Shield,
			title: 'Functional Safety',
			description: 'SIL/PL design, validation, and lifecycle testing.'
		}
	];

	return (
		<section id="industries" className="relative bg-industrial-50">
			<div className="section-padding-sm">
				<div className="container-editorial" ref={ref}>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					>
						<span className="mono-label mb-4 block">Industries</span>
						<h2 className="mb-6 max-w-3xl">
							Automation Engineering
							<span className="text-brand-orange"> for Core Disciplines</span>
						</h2>
						<p className="text-lg leading-relaxed text-industrial-600 max-w-2xl">
							Focused capability set for uptime, safety, and repeatable performance.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
					>
						{capabilities.map((capability) => {
							const Icon = capability.icon;

							return (
								<div
									key={capability.title}
									className="h-full border border-industrial-200 bg-white p-6"
								>
									<div className="mb-4 flex items-center space-x-3">
										<div className="p-2 border border-brand-orange/30">
											<Icon className="h-5 w-5 text-brand-orange" strokeWidth={1.5} />
										</div>
										<h3 className="text-lg font-bold text-industrial-900">
											{capability.title}
										</h3>
									</div>
									<p className="text-sm leading-relaxed text-industrial-600">
										{capability.description}
									</p>
								</div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
