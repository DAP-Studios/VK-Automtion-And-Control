import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Contact form submission:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to transform your industrial processes? Let's discuss your automation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Phone/WhatsApp</h4>
                  <p className="text-gray-600">+91 70967 99555</p>
                  <p className="text-gray-600">
                    <a href="https://wa.me/message/H3XPDIMPNLRZL1" className="text-orange-500 hover:text-orange-600 transition-colors">
                      WhatsApp Chat
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">vk.automation24@gmail.com</p>
                  <p className="text-gray-600">info.vkautomation@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-3">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Address</h4>
                  <p className="text-gray-600">
                    Shop No-02, Bajarang Complex, Near Prime Hotel, <br />
                    Morarji Circle Road, Gunjan, Vapi. India - 396195
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-3">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">24/7 Emergency Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-3">
                  <Globe className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Service Areas</h4>
                  <p className="text-gray-600">Pan India Service</p>
                  <p className="text-gray-600">International Projects Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-orange-500/40 rounded-lg px-4 py-3 text-gray-900 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-orange-500/40 rounded-lg px-4 py-3 text-gray-900 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-orange-500/40 rounded-lg px-4 py-3 text-gray-900 focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-50 border border-orange-500/40 rounded-lg px-4 py-3 text-gray-900 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your automation requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-center">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-center">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;