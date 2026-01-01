// import React from 'react';
import { Code, Wrench, Headphones, BookOpen, Zap, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "System Integration",
      description: "Complete automation system design and integration services",
      details: ["Custom PLC Programming", "SCADA Development", "System Architecture", "Protocol Integration"]
    },
    {
      icon: Wrench,
      title: "Installation & Commissioning",
      description: "Professional installation and commissioning of automation systems",
      details: ["On-site Installation", "System Testing", "Performance Optimization", "Documentation"]
    },
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support and maintenance services",
      details: ["Remote Diagnostics", "Emergency Response", "Preventive Maintenance", "System Monitoring"]
    },
    {
      icon: BookOpen,
      title: "Training & Consultation",
      description: "Comprehensive training programs and technical consultation",
      details: ["Operator Training", "Technical Workshops", "System Optimization", "Best Practices"]
    },
    {
      icon: Zap,
      title: "Upgrades & Modernization",
      description: "Legacy system upgrades and modernization services",
      details: ["System Migration", "Technology Upgrades", "Performance Enhancement", "Future-proofing"]
    },
    {
      icon: Shield,
      title: "Safety Compliance",
      description: "Industrial safety compliance and certification services",
      details: ["Safety Audits", "Compliance Testing", "Risk Assessment", "Certification Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Industrial Automation Services &amp; Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive automation services from design to deployment and beyond. VK Automation And Control provides end-to-end <strong>system integration</strong>, <strong>PLC programming</strong>, <strong>SCADA development</strong>, <strong>HMI panel design</strong>, professional <strong>installation and commissioning</strong>, <strong>24/7 technical support</strong>, <strong>automation training programs</strong>, <strong>system upgrades</strong> and <strong>industrial safety compliance</strong> services throughout Vapi, Gujarat and India. Our certified engineers deliver reliable automation solutions for manufacturing, chemical, pharmaceutical and industrial process control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 hover:border-orange-400/70 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl mb-4 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                </div>

                <div className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-3"></div>
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-orange-500/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        const el = document.getElementById('products');
                        if (el instanceof HTMLElement) {
                          const hadTabIndex = el.hasAttribute('tabindex');
                          if (!hadTabIndex) el.setAttribute('tabindex', '-1');
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          el.focus();
                          if (!hadTabIndex) el.removeAttribute('tabindex');
                        } else {
                          window.location.hash = '#products';
                        }
                      }}
                      className="w-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/40 text-cyan-600 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 text-sm">
                      View Products
                    </button>
                    <button
                      onClick={() => {
                        const el = document.getElementById('contact');
                        if (el instanceof HTMLElement) {
                          const hadTabIndex = el.hasAttribute('tabindex');
                          if (!hadTabIndex) el.setAttribute('tabindex', '-1');
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          el.focus();
                          if (!hadTabIndex) el.removeAttribute('tabindex');
                        } else {
                          window.location.hash = '#contact';
                        }
                      }}
                      className="w-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/40 text-orange-600 py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 text-sm">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;