import { useEffect, useState, useRef } from "react";
import { Cpu, Zap, Shield } from "lucide-react";

const PARTNER_BASE = [
  { name: "Siemens", logo: "src/assets/partners/siemens.png" },
  { name: "Allen Bradley", logo: "src/assets/partners/allenbradley.png" },
  { name: "Schneider", logo: "src/assets/partners/schneider.png" },
  { name: "Mitsubishi", logo: "src/assets/partners/mitsubishi.png" },
  // { name: "WinCC", logo: "src/assets/partners/wincc.png" },
  { name: "WinTech", logo: "src/assets/partners/wintech.png" },
  { name: "Invt", logo: "src/assets/partners/invt.png" },
  { name: "Wonderware", logo: "src/assets/partners/wonderware.png" },
  { name: "Wecon", logo: "src/assets/partners/wecon.png" },
  { name: "Delta", logo: "src/assets/partners/delta.png" },
  { name: "Omron", logo: "src/assets/partners/omron.png" },
];

// Repeat the base array to create even more particles (swarm), and assign a random offset for each
const PARTNERS = Array(12)
  .fill(PARTNER_BASE)
  .flat()
  .map((p, i) => ({ ...p, key: i, _rand: Math.random() }));

const Hero = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number | undefined>();
  
  // --- 3D SPHERE MATH ENGINE ---
  // This rotates the cloud slightly every frame
  const animate = () => {
    setRotation(prev => ({
      x: prev.x + 0.002, // Vertical rotation speed
      y: prev.y + 0.003  // Horizontal rotation speed
    }));
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Helper to project 3D coordinates onto the 2D screen
  // Returns { x, y, scale, opacity, zIndex }
  const getPosition = (index: number, total: number) => {
    // Add randomness to phi/theta for each particle
    const rand = PARTNERS[index]?._rand || 0;
    const phi = Math.acos(-1 + (2 * index + rand * 2) / total);
    const theta = Math.sqrt(total * Math.PI) * phi + rand * Math.PI * 2;

    const radius = 320; // Further increased size of the sphere for more distance between particles

    // 1. Initial Position on Sphere
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    // 2. Rotate the Sphere (Apply Rotation Matrix)
    const rx = rotation.x;
    const ry = rotation.y;

    // Rotate around Y axis
    const y1 = y * Math.cos(rx) - z * Math.sin(rx);
    const z1 = z * Math.cos(rx) + y * Math.sin(rx);
    
    // Rotate around X axis
    const x1 = x * Math.cos(ry) - z1 * Math.sin(ry);
    const z2 = z1 * Math.cos(ry) + x * Math.sin(ry);

    // 3. Project to 2D (Perspective)
    const perspective = 400;
    const scale = perspective / (perspective - z2); // Things closer get bigger
    const alpha = (z2 + radius) / (2 * radius); // Things in back get transparent

    return {
      x: x1,
      y: y1,
      scale: scale,
      opacity: Math.max(0.2, alpha), // Minimum opacity 0.2
      zIndex: Math.floor(scale * 100)
    };
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 font-sans"
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
      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center h-full pt-20 pb-12">
        
        {/* LEFT: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-20">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold tracking-wider uppercase animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            System Integrator
          </div> */}

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Industrial Control
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            We engineer intelligent automation systems using the world's best technology. 
            From <span className="font-semibold text-slate-800">PLC Logic</span> to <span className="font-semibold text-slate-800">Cloud SCADA</span>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <a href="#contact" className="px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5">
              Start Project
            </a>
            <a href="tel:+917096799555" className="px-8 py-3.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:border-orange-500 hover:text-orange-600 hover:bg-white transition-all">
               +91 70967 99555
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full max-w-lg mt-8 pt-8 border-t border-slate-200">
             {[
               { icon: Cpu, label: "Automation" },
               { icon: Zap, label: "Electrical" },
               { icon: Shield, label: "Safety" },
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
                 <item.icon className="w-6 h-6 text-slate-400 group-hover:text-orange-600 transition-colors" />
                 <span className="text-xs font-bold text-slate-500">{item.label}</span>
               </div>
             ))}
          </div>
        </div>

        {/* RIGHT: The 3D Cloud Animation */}
        <div className="relative flex items-center justify-center h-[600px] w-full perspective-container">
          
          {/* 1. Center Static Logo */}
          <div className="absolute z-10 w-56 h-56 bg-transparent rounded-full shadow-2xl flex items-center justify-center border-[8px] border-orange-50/70 backdrop-blur-md">
            <div className="relative z-10 text-center flex items-center justify-center w-full h-full">
              <img
                src="src/assets/logo.png"
                alt="VK Automation Logo"
                className="w-48 h-48 object-contain mx-auto"
                draggable={false}
              />
            </div>
            {/* Core Glow - even stronger and more vibrant */}
            <div className="absolute inset-0 bg-orange-500/70 blur-[120px] rounded-full animate-pulse opacity-90" />
            <div className="absolute inset-0 bg-yellow-400/40 blur-[60px] rounded-full animate-pulse opacity-60" />
          </div>

          {/* 2. Floating 3D Partners */}
          <div className="absolute top-1/2 left-1/2 w-0 h-0 preserve-3d z-0">
            {PARTNERS.map((partner, i) => {
              const pos = getPosition(i, PARTNERS.length);
              return (
                <div
                  key={i}
                  className="absolute top-0 left-0 flex items-center justify-center transition-transform duration-75 ease-linear will-change-transform"
                  style={{
                    transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${pos.scale})`,
                    opacity: pos.opacity,
                    zIndex: pos.zIndex,
                  }}
                >
                  <div
                    className="flex items-center justify-center glass-particle group transition-transform duration-75 ease-linear will-change-transform cursor-default select-none"
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name + ' logo'}
                        className="h-3 max-w-[18px] object-contain mx-auto"
                        draggable={false}
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-slate-600 whitespace-nowrap group-hover:text-orange-600">
                        {partner.name}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* 1. Center Static Logo (z-10)
          <div className="absolute z-10 w-36 h-36 bg-white rounded-full shadow-2xl flex items-center justify-center border-[6px] border-orange-50/50 backdrop-blur-sm">
            <div className="relative z-10 text-center flex items-center justify-center w-full h-full">
              <img
                src="src/assets/logo.png"
                alt="VK Automation Logo"
                className="w-33 h-33 object-contain mx-auto"
                draggable={false}
              />
            </div>
            Core Glow 
            <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full animate-pulse" />
          </div> */}

        </div>
      </div>
    {/* Floating WhatsApp Button */}
    <a
      href="https://wa.me/917096799555?text=Hello%20VK%20Automation%20and%20Control%2C%20I%20am%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 z-50 flex items-center gap-1 px-1 py-2 bg-green-500 hover:bg-green-400 text-green-100 font-bold rounded-full shadow-lg transition-all duration-200 group"
      style={{ boxShadow: '0 4px 4px rgba(34,197,94,0.25)' }}
    >
      {/* WhatsApp PNG Icon */}
      <img src="src/assets/image.png" alt="WhatsApp" className="w-9 h-9 ml-1 mr-1" />
    </a>
    </section>
  );
};

export default Hero;