import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    'Siemens',
    'Allen Bradley',
    'Schneider Electric',
    'Mitsubishi',
    'Delta Electronics',
    'Omron',
    'Rockwell Automation',
    'ABB',
  ];

  return (
    <section id="clients" className="w-full bg-graphite py-20 md:py-32 lg:py-40 border-b border-gray-700">
      <div className="px-6 md:px-8 lg:px-12 max-w-measure">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mono-label text-gray-500 mb-6">Technology Partners</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white">
            Certified Integrations
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="px-6 py-4 border border-gray-700 text-center"
            >
              <p className="text-gray-400 text-sm font-mono">{client}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
