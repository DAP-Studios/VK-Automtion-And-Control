import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { navItems, siteConfig } from '../lib/siteConfig';

const services = ['PLC Programming', 'SCADA and HMI Development', 'VFD Commissioning', 'Industrial Networking', 'Lifecycle Support'];

export default function Footer() {
	return (
		<footer className="bg-stone-100 border-t border-stone-200 text-industrial-900">
			<div className="container-wide pb-10 pt-20">
				<div className="mb-12 rounded-[2rem] border border-stone-200 bg-white p-8 md:p-10">
					<div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
						<div>
						<span className="section-kicker text-industrial-500">Start the Conversation</span>
						<h2 className="mt-4 max-w-3xl font-display text-3xl text-industrial-900 md:text-5xl">
								Need a control system partner that can design, commission, and support the full lifecycle?
							</h2>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
							<a
								href={siteConfig.phoneHref}
								className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-industrial-700 transition hover:border-brand-orange hover:text-brand-orange"
							>
								{siteConfig.phoneDisplay}
							</a>
							<Link
								to="/contact"
								className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-dark"
							>
								Request Consultation
								<ArrowUpRight className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>

				<div className="grid gap-10 border-b border-stone-200 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
					<div>
						<img src={logo} alt={siteConfig.name} className="h-11 w-auto" />
						<p className="mt-5 max-w-md text-base leading-relaxed text-industrial-600">
							{siteConfig.shortName} delivers industrial automation engineering, PLC programming, SCADA integration, and support for manufacturing and process facilities across Gujarat and beyond.
						</p>
					</div>

					<div>
						<h3 className="mb-4 text-base font-semibold text-industrial-900">Navigation</h3>
						<nav className="space-y-3 text-sm text-industrial-600">
							{navItems.map((item) => (
								<Link key={item.href} to={item.href} className="block transition hover:text-brand-orange">
									{item.label}
								</Link>
							))}
						</nav>
					</div>

					<div>
						<h3 className="mb-4 text-base font-semibold text-industrial-900">Expertise</h3>
						<ul className="space-y-3 text-sm text-industrial-600">
							{services.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="mb-4 text-base font-semibold text-industrial-900">Contact</h3>
						<div className="space-y-4 text-sm text-industrial-600">
							<div className="flex items-start gap-3">
								<Mail className="mt-0.5 h-4 w-4 text-brand-orange" />
								<a href={siteConfig.emailHref} className="transition hover:text-brand-orange">
									{siteConfig.email}
								</a>
							</div>
							<div className="flex items-start gap-3">
								<Phone className="mt-0.5 h-4 w-4 text-brand-orange" />
								<a href={siteConfig.phoneHref} className="transition hover:text-brand-orange">
									{siteConfig.phoneDisplay}
								</a>
							</div>
							<div className="flex items-start gap-3">
								<MapPin className="mt-0.5 h-4 w-4 text-brand-orange" />
								<address className="not-italic">
									{siteConfig.addressLines.map((line) => (
										<div key={line}>{line}</div>
									))}
								</address>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-3 pt-8 text-sm text-industrial-500 md:flex-row md:items-center md:justify-between">
					<div>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
					<div>Industrial automation company in {siteConfig.city}, {siteConfig.region}.</div>
				</div>
			</div>
		</footer>
	);
}
