import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-graphite-dark border-t border-gray-700 py-16 md:py-20">
      <div className="px-6 md:px-8 lg:px-12 max-w-measure">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 md:mb-20 border-b border-gray-700 pb-16"
        >
          <div>
            <p className="text-white font-mono text-sm font-bold tracking-wider mb-6">VK AUTOMATION</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering-grade industrial automation and control systems.
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-wider mb-6">Navigation</p>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-wider mb-6">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@vkautomationandcontrol.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@vkautomationandcontrol.in
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">
                  Bangalore, India
                </p>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-gray-500 text-xs"
        >
          <p>© 2025 VK Automation and Control. All rights reserved.</p>
          <p>Engineered for precision and reliability.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
