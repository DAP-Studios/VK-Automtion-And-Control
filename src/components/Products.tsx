import React, { useState } from 'react';
import { Cpu, Zap, Settings, Monitor, Shield, Wrench, X, CheckCircle, Star, Users, LucideIcon } from 'lucide-react';

// Define TypeScript interfaces
interface DetailedInfo {
  overview: string;
  specifications: string[];
  applications: string[];
  benefits: string[];
}

interface Product {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
  detailedInfo: DetailedInfo;
}

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      icon: Cpu,
      title: "PLC Systems",
      description: "Advanced Programmable Logic Controllers for industrial automation and process control",
      features: ["Siemens S7 Series", "Allen Bradley", "Schneider Electric", "Custom Programming"],
      image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=500",
      detailedInfo: {
        overview: "Our PLC systems provide robust, reliable control solutions for complex industrial processes. With support for multiple protocols and extensive I/O capabilities, these systems ensure seamless integration with existing infrastructure.",
        specifications: [
          "Operating Temperature: -40°C to +70°C",
          "Memory Capacity: Up to 8MB program memory",
          "I/O Points: Up to 65,536 digital and analog points",
          "Communication: Ethernet, Profibus, Modbus protocols",
          "Programming: Ladder Logic, Function Block, Structured Text"
        ],
        applications: [
          "Manufacturing Process Control",
          "Water Treatment Plants",
          "Power Generation Facilities", 
          "Food & Beverage Processing",
          "Automotive Assembly Lines"
        ],
        benefits: [
          "99.9% system reliability",
          "Reduced maintenance costs by 40%",
          "Improved production efficiency",
          "Real-time diagnostics and monitoring"
        ]
      }
    },
    {
      icon: Monitor,
      title: "HMI & SCADA",
      description: "Human Machine Interface and Supervisory Control systems for real-time monitoring",
      features: ["Touch Screen Panels", "Data Visualization", "Remote Monitoring", "Alarm Management"],
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500",
      detailedInfo: {
        overview: "Intuitive HMI and SCADA solutions that provide operators with comprehensive visibility and control over industrial processes through advanced visualization and data analytics.",
        specifications: [
          "Screen Sizes: 7\" to 24\" industrial touchscreens",
          "Resolution: Full HD 1920x1080 display",
          "Response Time: <10ms touch response",
          "Operating System: Windows 10 IoT or Linux embedded",
          "Connectivity: Ethernet, Wi-Fi, 4G/5G cellular"
        ],
        applications: [
          "Oil & Gas Pipeline Monitoring",
          "Building Management Systems",
          "Smart Grid Control Centers",
          "Chemical Process Monitoring",
          "Remote Site Supervision"
        ],
        benefits: [
          "Enhanced operator efficiency",
          "Reduced response time to alarms",
          "Historical data trending and analysis",
          "Mobile accessibility and notifications"
        ]
      }
    },
    {
      icon: Zap,
      title: "Power Distribution",
      description: "Electrical panels, switchgear, and power distribution solutions",
      features: ["MCC Panels", "Distribution Boards", "Motor Control Centers", "Power Factor Correction"],
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=500",
      detailedInfo: {
        overview: "Comprehensive power distribution solutions designed to ensure reliable, safe, and efficient electrical power delivery across industrial facilities with advanced protection and monitoring capabilities.",
        specifications: [
          "Voltage Rating: 415V to 33kV systems",
          "Current Rating: Up to 6300A main bus",
          "Short Circuit Rating: Up to 100kA",
          "IP Rating: IP54/IP65 enclosure protection",
          "Standards: IEC 61439, IEEE C37 compliance"
        ],
        applications: [
          "Heavy Industrial Plants",
          "Commercial Buildings",
          "Data Centers",
          "Mining Operations",
          "Marine & Offshore Platforms"
        ],
        benefits: [
          "Enhanced electrical safety",
          "Reduced power losses by 15%",
          "Simplified maintenance procedures",
          "Advanced fault detection and isolation"
        ]
      }
    },
    {
      icon: Settings,
      title: "Drive Systems",
      description: "Variable Frequency Drives and motor control solutions",
      features: ["AC/DC Drives", "Servo Motors", "Speed Control", "Energy Efficiency"],
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500",
      detailedInfo: {
        overview: "High-performance drive systems that optimize motor control for maximum efficiency, precision, and reliability across diverse industrial applications.",
        specifications: [
          "Power Range: 0.5kW to 2MW drive capacity",
          "Efficiency: >97% energy efficiency rating",
          "Control Methods: Vector control, DTC, FOC",
          "Communication: EtherCAT, CANopen, Profinet",
          "Protection: IP20 to IP66 available"
        ],
        applications: [
          "Conveyor Systems",
          "Pump & Fan Control",
          "Crane & Hoist Applications",
          "Machine Tool Automation",
          "HVAC Systems"
        ],
        benefits: [
          "Up to 50% energy savings",
          "Precise speed and torque control",
          "Reduced mechanical wear",
          "Improved process quality"
        ]
      }
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Industrial safety and protection systems for hazardous environments",
      features: ["Emergency Stops", "Safety Relays", "Light Curtains", "Safety PLCs"],
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500",
      detailedInfo: {
        overview: "Comprehensive safety solutions designed to protect personnel and equipment in industrial environments, ensuring compliance with international safety standards and regulations.",
        specifications: [
          "Safety Integrity Level: SIL 3/PLe certified",
          "Response Time: <10ms emergency stop response",
          "Detection Range: Up to 70m safety light curtains",
          "Operating Temperature: -40°C to +85°C",
          "Standards: ISO 13849, IEC 61508 compliant"
        ],
        applications: [
          "Automated Manufacturing Lines",
          "Robotic Work Cells",
          "Material Handling Systems",
          "Press & Stamping Operations",
          "Hazardous Area Protection"
        ],
        benefits: [
          "Zero workplace accidents target",
          "Compliance with safety regulations",
          "Reduced insurance costs",
          "Enhanced operational confidence"
        ]
      }
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Comprehensive maintenance and support services for industrial systems",
      features: ["Preventive Maintenance", "24/7 Support", "System Upgrades", "Training Programs"],
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=500",
      detailedInfo: {
        overview: "Expert maintenance and support services that maximize system uptime, extend equipment life, and ensure optimal performance through proactive maintenance strategies.",
        specifications: [
          "Response Time: <4 hours emergency response",
          "Availability: 24/7/365 technical support",
          "Coverage: Global service network",
          "Expertise: Certified technicians and engineers",
          "Documentation: Comprehensive service reports"
        ],
        applications: [
          "Planned Maintenance Programs",
          "Emergency Repair Services",
          "System Modernization",
          "Performance Optimization",
          "Technical Training & Certification"
        ],
        benefits: [
          "99.5% system uptime guarantee",
          "Predictive maintenance capabilities",
          "Reduced operational costs",
          "Extended equipment lifespan"
        ]
      }
    }
  ];

  const openModal = (product: Product): void => {
    setSelectedProduct(product);
  };

  const closeModal = (): void => {
    setSelectedProduct(null);
  };

  const handleRequestQuote = (): void => {
    // Close modal first
    closeModal();
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Major brands/companies for SEO
  const brands = [
    {
      name: "Siemens",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Siemens-logo.svg",
      url: "https://new.siemens.com/",
    },
    {
      name: "Allen Bradley",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Allen-Bradley_logo.svg",
      url: "https://www.rockwellautomation.com/",
    },
    {
      name: "Schneider Electric",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Schneider_Electric_2007.svg",
      url: "https://www.se.com/",
    },
    {
      name: "Mitsubishi Electric",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Mitsubishi_Electric_logo.svg",
      url: "https://www.mitsubishielectric.com/",
    },
    {
      name: "Wonderware",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Wonderware_logo.svg",
      url: "https://www.aveva.com/en/solutions/wonderware/",
    },
    {
      name: "Invt PLC",
      logo: "https://www.invt.com/themes/invt/images/logo.png",
      url: "https://www.invt.com/",
    },
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
            VK Automation And Control offers a comprehensive range of industrial automation products and solutions, including PLC systems, SCADA, HMI panels, drive systems, power distribution, safety systems, and maintenance services. We partner with leading brands like Siemens, Allen Bradley, Schneider Electric, Mitsubishi, and more to deliver reliable, efficient, and innovative automation for manufacturing, process, and industrial sectors in India.
          </p>
        </div>

        {/* Brands/Companies Section for SEO */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Brands We Work With</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                title={brand.name}
              >
                <img
                  src={brand.logo}
                  alt={brand.name + ' logo'}
                  className="h-12 w-auto mb-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
                <span className="text-gray-700 text-sm font-medium">{brand.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: Product, index: number) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="group bg-white backdrop-blur-sm border border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-400/70 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title + ' - ' + product.description + ' | VK Automation And Control'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
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
                    {product.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => openModal(product)}
                    className="mt-6 w-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/40 text-cyan-600 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Schema.org Product/Brand Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': 'Industrial Automation Solutions',
          'brand': brands.map(b => ({
            '@type': 'Brand',
            'name': b.name,
            'url': b.url,
            'logo': b.logo
          })),
          'description': 'VK Automation And Control provides PLC, SCADA, HMI, drive systems, and industrial automation solutions in India. We work with top brands like Siemens, Allen Bradley, Schneider Electric, Mitsubishi, and more.',
          'url': 'https://vkautomationandcontrol.in/#products',
        })}
      </script>

      {/* Modal Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="relative p-6 border-b border-gray-200">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg p-3">
                  <selectedProduct.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{selectedProduct.title}</h3>
                  <p className="text-gray-600 mt-1">{selectedProduct.description}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Star className="w-5 h-5 text-cyan-500 mr-2" />
                  Overview
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProduct.detailedInfo.overview}
                </p>
              </div>

              {/* Technical Specifications */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="w-5 h-5 text-cyan-500 mr-2" />
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProduct.detailedInfo.specifications.map((spec: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Monitor className="w-5 h-5 text-cyan-500 mr-2" />
                  Key Applications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProduct.detailedInfo.applications.map((app: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 text-cyan-500 mr-2" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProduct.detailedInfo.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">
                  Interested in this product? Get a personalized quote tailored to your specific requirements.
                </p>
              </div>
              <button 
                onClick={handleRequestQuote}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
