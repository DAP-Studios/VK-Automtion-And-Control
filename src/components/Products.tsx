import React from 'react';
import { Cpu, Zap, Settings, Monitor, Shield, Wrench } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Cpu,
      title: "PLC Systems",
      description: "Advanced Programmable Logic Controllers for industrial automation and process control",
      features: ["Siemens S7 Series", "Allen Bradley", "Schneider Electric", "Custom Programming"],
      image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Monitor,
      title: "HMI & SCADA",
      description: "Human Machine Interface and Supervisory Control systems for real-time monitoring",
      features: ["Touch Screen Panels", "Data Visualization", "Remote Monitoring", "Alarm Management"],
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Zap,
      title: "Power Distribution",
      description: "Electrical panels, switchgear, and power distribution solutions",
      features: ["MCC Panels", "Distribution Boards", "Motor Control Centers", "Power Factor Correction"],
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Settings,
      title: "Drive Systems",
      description: "Variable Frequency Drives and motor control solutions",
      features: ["AC/DC Drives", "Servo Motors", "Speed Control", "Energy Efficiency"],
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Industrial safety and protection systems for hazardous environments",
      features: ["Emergency Stops", "Safety Relays", "Light Curtains", "Safety PLCs"],
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Comprehensive maintenance and support services for industrial systems",
      features: ["Preventive Maintenance", "24/7 Support", "System Upgrades", "Training Programs"],
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Cutting-edge automation solutions designed to optimize your industrial processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="group bg-white backdrop-blur-sm border border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-400/70 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 w-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/40 text-cyan-600 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;