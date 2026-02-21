import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		message: ''
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Handle form submission
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<section id="contact" className="section-padding bg-white relative">
			{/* Orange accent line top */}
			<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-40"></div>

			<div className="container-wide" ref={ref}>
				<div className="grid lg:grid-cols-2 gap-16">
					{/* Left: Form */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
					>
						<span className="mono-label mb-4 block">Get In Touch</span>
						<h2 className="mb-6">Request Technical Consultation</h2>
						<div className="orange-line mb-8"></div>
						<p className="text-lg text-industrial-600 leading-relaxed mb-12">
							Contact our engineering team for project consultations, technical specifications, 
							or system design requirements.
						</p>

						<form onSubmit={handleSubmit} className="space-y-8">
							<div>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Name"
									required
									className="w-full pb-3 text-industrial-900 placeholder:text-industrial-400"
								/>
							</div>

							<div>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Email Address"
									required
									className="w-full pb-3 text-industrial-900 placeholder:text-industrial-400"
								/>
							</div>

							<div>
								<input
									type="text"
									name="company"
									value={formData.company}
									onChange={handleChange}
									placeholder="Company"
									className="w-full pb-3 text-industrial-900 placeholder:text-industrial-400"
								/>
							</div>

							<div>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Project Requirements"
									required
									rows={6}
									className="w-full pb-3 text-industrial-900 placeholder:text-industrial-400 resize-none"
								/>
							</div>

							<button
								type="submit"
								className="inline-flex items-center space-x-3 border-2 border-brand-orange bg-brand-orange text-white hover:bg-orange-dark hover:border-orange-dark px-8 py-3 text-sm font-medium uppercase tracking-wide transition-all duration-300"
							>
								<span>Submit Request</span>
								<Send size={18} />
							</button>
						</form>
					</motion.div>

					{/* Right: Contact info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="lg:pl-12"
					>
						<div className="bg-industrial-50 p-12 border border-industrial-200">
							<h3 className="text-2xl font-bold mb-8 text-industrial-900">Contact Information</h3>

							<div className="space-y-8">
								<div className="flex items-start space-x-4">
									<div className="p-3 bg-white border border-industrial-200">
										<Mail className="w-5 h-5 text-brand-orange" />
									</div>
									<div>
										<div className="mono-label mb-2">Email</div>
										<a href="mailto:info@vkauto.com" className="text-industrial-900 hover:text-brand-orange">
											info@vkauto.com
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="p-3 bg-white border border-industrial-200">
										<Phone className="w-5 h-5 text-brand-orange" />
									</div>
									<div>
										<div className="mono-label mb-2">Phone</div>
										<a href="tel:+1234567890" className="text-industrial-900 hover:text-brand-orange">
											+1 (234) 567-890
										</a>
										<div className="text-sm text-industrial-600 mt-1">24/7 Emergency Support</div>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="p-3 bg-white border border-industrial-200">
										<MapPin className="w-5 h-5 text-brand-orange" />
									</div>
									<div>
										<div className="mono-label mb-2">Address</div>
										<address className="not-italic text-industrial-900">
											Ground Floor, Shop No 2, Bajrang Complex<br />
											Vapi Prime Hotel, Char Rasta<br />
											Vapi, Valsad-396195, Gujarat, India
										</address>
									</div>
								</div>
							</div>

							<div className="mt-12 pt-8 border-t border-industrial-200">
								<div className="mono-label mb-3">Business Hours</div>
								<div className="text-sm text-industrial-700 space-y-1">
									<div>Monday - Friday: 8:00 AM - 6:00 PM</div>
									<div>Saturday: 9:00 AM - 2:00 PM</div>
									<div className="text-brand-orange font-medium">Emergency Support: 24/7</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
