import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="w-full bg-graphite py-20 md:py-32 lg:py-40 border-b border-gray-700">
      <div className="px-6 md:px-8 lg:px-12 max-w-measure">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <p className="mono-label text-gray-500 mb-6">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-white mb-8">
            Contact
          </h2>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            Discuss your automation project with our engineering team. Response within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-mono text-gray-500 uppercase tracking-wider mb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-gray-500 uppercase tracking-wider mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-gray-500 uppercase tracking-wider mb-3">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-gray-500 uppercase tracking-wider mb-3">
                Project Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white font-mono border-b border-gray-600 hover:border-white transition-colors duration-200 mt-8"
            >
              → Submit inquiry
            </button>
          </form>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <p className="mono-label text-gray-500 mb-4">Email</p>
              <a
                href="mailto:info@vkautomationandcontrol.in"
                className="text-white text-lg border-b border-gray-600 hover:border-white transition-colors"
              >
                info@vkautomationandcontrol.in
              </a>
            </div>

            <div>
              <p className="mono-label text-gray-500 mb-4">Phone</p>
              <a
                href="tel:+919999999999"
                className="text-white text-lg border-b border-gray-600 hover:border-white transition-colors"
              >
                +91 9999 999 999
              </a>
            </div>

            <div>
              <p className="mono-label text-gray-500 mb-4">Location</p>
              <p className="text-gray-300">
                Bangalore, India
              </p>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm">
                We respond to all inquiries within 24 hours. 
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
