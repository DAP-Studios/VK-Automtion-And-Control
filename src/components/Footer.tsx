// import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white border-t border-orange-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">VK Automation And Control - Industrial Automation Company Vapi, Gujarat</h2>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <img src="/fin.png" alt="VK Automation And Control - Industrial Automation Company Vapi Gujarat" className="w-10 h-10"/>
                <div className="absolute inset-0 w-8 h-8 bg-orange-400/20 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">VK Automation and Control</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Leading provider of industrial automation solutions in Vapi, Gujarat. Specializing in PLC SCADA HMI programming (Siemens, Allen Bradley, Schneider Electric, Mitsubishi, Delta, Omron), VFD drives, control panel manufacturing for chemical, pharma, textile &amp; manufacturing industries across India. <strong>5+ years experience, 51+ projects completed, 24/7 support available</strong>.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="bg-orange-500/10 hover:bg-orange-500 p-3 rounded-lg transition-colors">
                <Facebook className="w-5 h-5 text-orange-500 hover:text-white" />
              </a>

              <a href="https://maps.app.goo.gl/Sdpbb3MV3jwyxN238" aria-label="Google Maps Location" target="_blank" rel="noopener noreferrer" className="bg-orange-500/10 hover:bg-orange-500 p-3 rounded-lg transition-colors">
                <MapPin className="w-5 h-5 text-orange-500 hover:text-white" />
              </a>

              <a href="https://www.linkedin.com/in/vk-automation-and-control-91542a380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="bg-orange-500/10 hover:bg-orange-500 p-3 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5 text-orange-500 hover:text-white" />
              </a>
            
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-600 hover:text-orange-600 transition-colors font-semibold">Home - VK Automation</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-orange-600 transition-colors font-semibold">PLC &amp; SCADA Products</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors font-semibold">Automation Services</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors font-semibold">About VK Automation</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors font-semibold">Contact &amp; Quote</a></li>
              <li><a href="https://maps.app.goo.gl/Sdpbb3MV3jwyxN238" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 transition-colors font-semibold">Our Location</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-600">+91 70967 99555</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-600">info@vkautomationandcontrol.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <span className="text-gray-600">Shop No-02, Bajarang Complex, Near Prime Hotel, <br />
                    Morarji Circle Road, Gunjan, Vapi. India - 396195</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-500/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2026 VK Automation And Control. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
