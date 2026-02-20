import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  details: string[];
}

const Services = () => {
  const services: Service[] = [
    {
      title: 'System Design & Engineering',
      description: 'Custom control system architecture for your process requirements.',
      details: ['Process analysis', 'PLC programming', 'SCADA design', 'Network integration', 'Performance modeling'],
    },
    {
      title: 'Installation & Commissioning',
      description: 'Professional installation and full system commissioning.',
      details: ['Hardware setup', 'Cable management', 'System validation', 'Operator training', 'Documentation'],
    },
    {
      title: 'Technical Support',
      description: '24/7 expert support and preventive maintenance programs.',
      details: ['Remote support', 'Preventive maintenance', 'Diagnostics', 'Spare parts', 'Performance optimization'],
    },
  ];

  return (
    <section id="services" className="w-full bg-graphite py-20 md:py-32 lg:py-40 border-b border-gray-700">
      <div className="px-6 md:px-8 lg:px-12 max-w-measure">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <p className="mono-label text-gray-500 mb-6">Lifecycle Services</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-white mb-8">
            Professional Services
          </h2>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            From system design through operations, comprehensive engineering services.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start border-b border-gray-700 pb-16 md:pb-20"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {service.description}
                </p>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-6">Includes</h4>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-3 text-base">
                      <span className="text-gray-600">—</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-gray-700"
        >
          <p className="text-gray-300 mb-4 text-lg">Ready to discuss your project?</p>
          <a
            href="#contact"
            className="text-white font-mono border-b border-gray-600 hover:border-white transition-colors duration-200"
          >
            → Contact engineering team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
