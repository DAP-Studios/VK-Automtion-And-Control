// import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "1.5+" },
    { icon: Users, label: "Projects Completed", value: "200+" },
    { icon: Clock, label: "Support Hours", value: "24/7" },
    { icon: Target, label: "Client Satisfaction", value: "98%" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About VK Automation And Control
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Leading the future of industrial automation with cutting-edge technology and innovative solutions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              VK Automation And Control is a premier provider of industrial automation solutions, specializing in 
              PLC systems, SCADA development, and comprehensive control systems. With over 15 years of experience, 
              we've successfully delivered automation solutions across various industries including manufacturing, 
              power generation, water treatment, and process industries.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of certified engineers and technicians are committed to delivering reliable, efficient, 
              and cost-effective automation solutions that help our clients optimize their operations and 
              achieve their business objectives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
                className="border-2 border-cyan-500 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400/70 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg mb-4">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Siemens S7 Series",
              "Allen Bradley",
              "Schneider Electric",
              "Mitsubishi PLCs",
              "WinCC SCADA",
              "WinTech ",
              "Invt PLC",
              "Wonderware",
              "Ignition SCADA"
            ].map((expertise, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg py-4 px-6 text-cyan-600 font-semibold hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {expertise}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;