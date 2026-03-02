import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Clients() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

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

	return (
		<section className="section-padding bg-white border-t border-industrial-200">
			<div className="container-wide" ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="max-w-3xl mb-16"
				>
					<span className="mono-label mb-4 block">Technology Partners</span>
					<h2 className="mb-6">Certified Technology Partners</h2>
					<div className="orange-line mb-6"></div>
					<p className="text-lg text-industrial-600 leading-relaxed">
						Certified partnerships with leading automation manufacturers for faster support
						and proven integration paths.
					</p>
				</motion.div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-1">
					{partners.map((partner, index) => (
						<motion.div
							key={partner.name}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							className="bg-industrial-50 border border-industrial-200 p-8 hover:border-brand-orange transition-colors duration-300 flex flex-col items-center justify-center text-center"
						>
							<div className="font-bold text-industrial-900 mb-2">{partner.name}</div>
							<div className="text-xs mono-label">{partner.category}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
