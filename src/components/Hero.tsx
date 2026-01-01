import { useEffect, useState } from "react";
import { Cpu, Zap, Shield } from "lucide-react";

const PARTNER_BASE = [
  { name: "Siemens", logo: "src/assets/partners/siemens.png" },
  { name: "Allen Bradley", logo: "src/assets/partners/allenbradley.png" },
  { name: "Schneider", logo: "src/assets/partners/schneider.png" },
  { name: "Mitsubishi", logo: "src/assets/partners/mitsubishi.png" },
  // { name: "WinCC", logo: "src/assets/partners/wincc.png" },
  { name: "WinTech", logo: "src/assets/partners/wintech.png" },
  { name: "Invt", logo: "src/assets/partners/invt.png" },
  { name: "ABB", logo: "src/assets/partners/abb.png" },
  { name: "Wecon", logo: "src/assets/partners/wecon.png" },
  { name: "Delta", logo: "src/assets/partners/delta.png" },
  { name: "Omron", logo: "src/assets/partners/omron.png" },
];

// Create partners with proper spacing - reduced count to prevent overlapping
const PARTNERS = Array(2)
  .fill(PARTNER_BASE)
  .flat()
  .map((p, i) => ({ ...p, key: i, _rand: Math.random() }));

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <style>{`
        @keyframes orbit1Fast {
          from { --orb-rot: 0deg; }
          to { --orb-rot: 360deg; }
        }
        @keyframes orbit2Medium {
          from { --orb-rot: 0deg; }
          to { --orb-rot: -360deg; }
        }
        @keyframes orbit3Slow {
          from { --orb-rot: 0deg; }
          to { --orb-rot: 360deg; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes electronGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(249, 115, 22, 0.4)); }
          50% { filter: drop-shadow(0 0 8px rgba(249, 115, 22, 0.8)); }
        }
        @keyframes particleGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-electron-glow { animation: electronGlow 2s ease-in-out infinite; }
        .animate-particle-glow { animation: particleGlow 2s ease-in-out infinite; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {/* Breadcrumb Navigation for SEO */}
      <nav className="fixed top-24 left-0 right-0 z-20 bg-white/80 backdrop-blur-sm border-b border-orange-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="#home" className="text-orange-600 hover:text-orange-700 font-semibold">Home</a>
            <span className="text-gray-400">/</span>
            <a href="#products" className="hover:text-orange-600 transition-colors">Products</a>
            <span className="text-gray-400">/</span>
            <a href="#services" className="hover:text-orange-600 transition-colors">Services</a>
            <span className="text-gray-400">/</span>
            <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
            <span className="text-gray-400">/</span>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 font-sans mt-20 pt-20 sm:pt-24 lg:pt-0"
      >
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/40 to-blue-50/20 -z-30" />
        
        {/* 3D Floor Grid */}
        <div 
          className="absolute w-full h-[150%] -bottom-1/2 -z-20 opacity-[0.06] pointer-events-none"
          style={{ 
              backgroundImage: 'linear-gradient(to right, #f97316 1px, transparent 1px), linear-gradient(to bottom, #f97316 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              transform: 'perspective(1000px) rotateX(60deg)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)'
          }}
        />

        {/* Main Layout */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center w-full pb-12 lg:h-full">
          
          {/* LEFT: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 z-20">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] animate-fade-in-up">
              Future of <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Industrial <br className="sm:hidden" />Control
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed px-2 sm:px-0 animate-fade-in-up animation-delay-100">
              We engineer intelligent automation systems using the world's best technology. 
              From <span className="font-semibold text-slate-800">PLC Logic</span> to <span className="font-semibold text-slate-800">Cloud SCADA</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto animate-fade-in-up animation-delay-200">
              <a 
                href="#contact" 
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl text-center text-sm sm:text-base active:scale-95"
              >
                Start Project
              </a>
              <a 
                href="tel:+917096799555" 
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:border-orange-500 hover:text-orange-600 hover:bg-white transition-all text-center text-sm sm:text-base active:scale-95"
              >
                 +91 70967 99555
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full sm:max-w-lg mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200 animate-fade-in-up animation-delay-300">
              { [
                { icon: Cpu, label: "Automation" },
                { icon: Zap, label: "Electrical" },
                { icon: Shield, label: "Safety" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 sm:gap-2 group cursor-pointer hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 sm:w-6 h-5 sm:h-6 text-slate-400 group-hover:text-orange-600 transition-colors" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: The Atom Animation */}
          <div className="relative flex items-center justify-center h-[350px] sm:h-[450px] lg:h-[600px] w-full perspective-container mt-8 lg:mt-0 animate-fade-in">
            
            {/* Nucleus Core - Central Logo */}
            <div className="absolute z-20 w-32 sm:w-40 lg:w-56 h-32 sm:h-40 lg:h-56 rounded-full">
              {/* Outer Glow - Large 200px blur */}
              <div className="absolute inset-0 bg-orange-500/60 blur-[200px] rounded-full animate-pulse" style={{ animationDuration: '5s' }} />
              {/* Medium Glow */}
              <div className="absolute inset-0 bg-orange-500/50 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-yellow-400/40 blur-[60px] rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
              
              {/* Logo - Centered */}
              <img
                src="src/assets/logo.png"
                alt="VK Automation Logo"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 object-contain drop-shadow-xl"
                draggable={false}
              />
            </div>

            {/* Orbital Shells - 3 Orbital Paths */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-fade-in animation-delay-200">
              {/* Orbit 1 - Fast (1.3x nucleus size) */}
              <div className="absolute rounded-full opacity-40 hover:opacity-60 transition-opacity duration-300"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${(isMobile ? 220 : 380) * 0.95}px`,
                  height: `${(isMobile ? 220 : 380) * 0.95}px`,
                  marginLeft: `${-(isMobile ? 220 : 380) * 0.95 / 2}px`,
                  marginTop: `${-(isMobile ? 220 : 380) * 0.95 / 2}px`,
                  border: '1px solid rgba(249, 115, 22, 0.2)',
                  animation: 'orbit1Fast 10s linear infinite',
                }}
              />
              
              {/* Orbit 2 - Medium (1.8x nucleus size) */}
              <div className="absolute rounded-full opacity-40 hover:opacity-60 transition-opacity duration-300"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${(isMobile ? 220 : 380) * 1.51}px`,
                  height: `${(isMobile ? 220 : 380) * 1.51}px`,
                  marginLeft: `${-(isMobile ? 220 : 380) * 1.51 / 2}px`,
                  marginTop: `${-(isMobile ? 220 : 380) * 1.51 / 2}px`,
                  border: '1px solid rgba(249, 115, 22, 0.2)',
                  animation: 'orbit2Medium 15s linear infinite',
                }}
              />
              
              {/* Orbit 3 - Slow (2.3x nucleus size) */}
              <div className="absolute rounded-full opacity-40 hover:opacity-60 transition-opacity duration-300"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${(isMobile ? 220 : 380) * 1.985}px`,
                  height: `${(isMobile ? 220 : 380) * 1.985}px`,
                  marginLeft: `${-(isMobile ? 220 : 380) * 1.985 / 2}px`,
                  marginTop: `${-(isMobile ? 220 : 380) * 1.985 / 2}px`,
                  border: '1px solid rgba(249, 115, 22, 0.2)',
                  animation: 'orbit3Slow 20s linear infinite',
                }}
              />

              {/* Rotating Orbit Containers */}
              {[0, 1, 2].map((orbitIndex) => {
                const coreRadius = isMobile ? 170 : 380;
                const orbitMultipliers = isMobile ? [0.9, 1.35, 1.75] : [0.95, 1.51, 1.985];
                const orbitRadius = coreRadius * orbitMultipliers[orbitIndex];
                const orbitAnimations = ['orbit1Fast 10s linear infinite', 'orbit2Medium 15s linear infinite', 'orbit3Slow 20s linear infinite'];
                
                const partnersInOrbit = PARTNERS.filter((_, i) => i % 3 === orbitIndex);
                const partnersPerOrbit = Math.ceil(PARTNERS.length / 3);

                return (
                  <div
                    key={`orbit-${orbitIndex}`}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: `${orbitRadius}px`,
                      height: `${orbitRadius}px`,
                      marginLeft: `${-orbitRadius / 2}px`,
                      marginTop: `${-orbitRadius / 2}px`,
                      animation: orbitAnimations[orbitIndex],
                      transform: 'rotate(var(--orb-rot, 0deg))',
                      transformOrigin: 'center',
                    }}
                  >
                    {partnersInOrbit.map((partner, idx) => {
                      const positionInOrbit = (idx / partnersPerOrbit) * 360;
                      const angle = positionInOrbit;

                      return (
                        <div
                          key={partner.key}
                          className="absolute transition-all duration-300 hover:scale-125 hover:drop-shadow-2xl"
                          style={{
                            left: '50%',
                            top: '50%',
                            width: '0',
                            height: '0',
                            transform: `rotate(${angle}deg) translateX(${orbitRadius / 2}px) rotate(calc(-1 * (var(--orb-rot, 0deg) + ${angle}deg)))`,
                          }}
                        >
                          {/* Electron Particle - Stays upright while orbiting */}
                          <div className="flex items-center justify-center animate-electron-glow">
                            {partner.logo ? (
                              <img
                                src={partner.logo}
                                alt={partner.name + ' logo'}
                                className="h-7 sm:h-8 lg:h-10 max-w-[36px] sm:max-w-[40px] lg:max-w-[48px] object-contain opacity-90 drop-shadow-md hover:drop-shadow-lg transition-all"
                                draggable={false}
                                loading="lazy"
                              />
                            ) : (
                              <span className="text-[9px] sm:text-[11px] font-bold text-slate-700 whitespace-nowrap">
                                {partner.name}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {/* Cyan particles between brands - within rotating orbit */}
                    {PARTNERS.filter((_, i) => i % 3 === orbitIndex).map((_, idx) => {
                      const partnersPerOrbit = Math.ceil(PARTNERS.length / 3);
                      const positionInOrbit = ((idx + 0.5) / partnersPerOrbit) * 360;
                      const angle = positionInOrbit;

                      return (
                        <div
                          key={`cyan-${orbitIndex}-${idx}`}
                          className="absolute"
                          style={{
                            left: '50%',
                            top: '50%',
                            width: '0',
                            height: '0',
                            transform: `rotate(${angle}deg) translateX(${orbitRadius / 2}px)`,
                          }}
                        >
                          {/* Cyan Particle between brands */}
                          <div className="w-1.5 sm:w-2 lg:w-2.5 h-1.5 sm:h-2 lg:h-2.5 bg-cyan-400 rounded-full animate-particle-glow"
                            style={{
                              boxShadow: '0 0 8px rgba(34, 211, 238, 0.9), 0 0 16px rgba(6, 182, 212, 0.5)',
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      {/* Floating WhatsApp Button - Mobile Optimized */}
      <a
        href="https://wa.me/917096799555?text=Hello%20VK%20Automation%20and%20Control%2C%20I%20am%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center  bg-green-500 hover:bg-green-400 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
        style={{ boxShadow: '0 4px 4px rgba(34,197,94,0.25)' }}
      >
        {/* WhatsApp PNG Icon */}
        <img 
          src="src/assets/image.png" 
          alt="WhatsApp" 
          className="w-10 sm:w-11 h-10 sm:h-11" 
        />
      </a>
      </section>
    </>
  );
};

export default Hero;