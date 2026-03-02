import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
	return (
		<footer className="bg-industrial-900 text-industrial-300">
			<div className="container-wide py-16">
				<div className="grid md:grid-cols-4 gap-12 mb-12">
					{/* Company */}
					<div>
					<img src={logo} alt="VK Automation and Control" className="h-10 w-auto mb-4 brightness-0 invert" />
						<p className="text-sm leading-relaxed">
							Industrial automation and control systems since 2010.
							Precision-engineered solutions built for uptime and long service life.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-white font-bold mb-4">Quick Links</h4>
						<nav className="space-y-2 text-sm">
							<a href="#about" className="block hover:text-brand-orange transition-colors">About Us</a>
							<a href="#products" className="block hover:text-brand-orange transition-colors">Products</a>
							<a href="#industries" className="block hover:text-brand-orange transition-colors">Industries</a>
							<a href="#services" className="block hover:text-brand-orange transition-colors">Services</a>
							<a href="#contact" className="block hover:text-brand-orange transition-colors">Contact</a>
						</nav>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-white font-bold mb-4">Services</h4>
						<ul className="space-y-2 text-sm">
							<li>System Design</li>
							<li>PLC Programming</li>
							<li>HMI/SCADA</li>
							<li>Installation</li>
							<li>Technical Support</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-white font-bold mb-4">Contact</h4>
						<div className="space-y-3 text-sm">
							<div className="flex items-start space-x-3">
								<Mail className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
								<a href="mailto:info.vkautomationadncontrol@gmail.com" className="hover:text-brand-orange transition-colors">
									info.vkautomationadncontrol@gmail.com
								</a>
							</div>
							<div className="flex items-start space-x-3">
								<Phone className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
								<a href="tel:+917949338324" className="hover:text-brand-orange transition-colors">
									+91 7949338324 
								</a>
							</div>
							<div className="flex items-start space-x-3">
								<MapPin className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
								<address className="not-italic">
								Ground Floor, Shop No 2, Bajrang Complex<br />
								Vapi Prime Hotel, Char Rasta<br />
								Vapi, Valsad-396195, Gujarat, India
								</address>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-industrial-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
					<div>
						© {new Date().getFullYear()} VK Automation. All rights reserved.
					</div>
					<div className="flex space-x-6">
						<a href="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
						<a href="/terms" className="hover:text-brand-orange transition-colors">Terms of Service</a>
						<a href="/iso" className="hover:text-brand-orange transition-colors">ISO 9001:2015 Certified</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
