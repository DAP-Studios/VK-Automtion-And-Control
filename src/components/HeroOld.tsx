import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface CursorPosition {
  x: number;
  y: number;
}

const Hero = () => {
  const [show, setShow] = useState(false);
  const [, setCursorPos] = useState<CursorPosition>({ x: 0, y: 0 });
  const [, setMousePos] = useState<CursorPosition>({ x: 0, y: 0 });
  const glowRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setShow(true);
  }, []);

  // Cursor tracking for subtle glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setMousePos({ x: e.clientX, y: e.clientY });

      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }

      // Interactive SVG effect
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        svgRef.current.style.setProperty('--mouse-x', `${x}px`);
        svgRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pt-20 sm:pt-24">
      {/* Large decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -ml-40 -mb-40" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)]">
          {/* Left: Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-block">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider rounded-full">
                  ✓ Trusted by Industry Leaders
                </span>
              </div>
            </motion.div>

            {/* Main Headline - Large and Bold */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900"
            >
              Industrial Control
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text">
                Redefined
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Enterprise-grade automation solutions for chemical, pharma, textile, and manufacturing industries. 99.9% uptime guaranteed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                Explore Solutions
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all duration-300 text-center"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={show ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <svg 
              className="w-full h-auto max-w-md"
              viewBox="0 0 400 500" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
                </linearGradient>
              </defs>
              {/* Main shape */}
              <rect x="50" y="50" width="300" height="400" rx="20" fill="url(#grad1)" opacity="0.1" stroke="url(#grad1)" strokeWidth="2" />
              {/* Accent circles */}
              <motion.circle cx="200" cy="150" r="40" fill="#2563eb" animate={{ r: [40, 50, 40] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.circle cx="100" cy="300" r="30" fill="#f97316" animate={{ r: [30, 40, 30] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
              <motion.circle cx="300" cy="350" r="35" fill="#2563eb" animate={{ r: [35, 45, 35] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
              Enterprise-grade PLCs, VFDs, Servo Drives, and Control Systems engineered for precision, reliability, and maximum uptime.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Products
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 border-2 border-orange-300 text-orange-700 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 text-center hover:shadow-lg"
              >
                Contact Sales
              </motion.a>
            </motion.div>

            {/* Trust indicators - responsive grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8"
            >
              {[
                { label: "99.9%", desc: "Uptime" },
                { label: "10k+", desc: "Installations" },
                { label: "24/7", desc: "Support" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={show ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">{item.label}</span>
                  <span className="text-xs sm:text-sm text-gray-500 tracking-wide uppercase font-medium">{item.desc}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Enhanced SVG Animation - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={show ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative group w-full"
          >
            {/* Animated background glow around SVG */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-400/10 rounded-3xl blur-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <svg 
              ref={svgRef}
              className="w-full h-full max-w-md relative z-10 drop-shadow-lg"
              viewBox="0 0 400 500" 
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: 'drop-shadow(0 20px 25px rgba(37, 99, 235, 0.15))'
              }}
            >
              <defs>
                {/* Enhanced gradients - Blue and Orange */}
                <linearGradient id="abstractGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="abstractGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#fb923c" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#fdba74" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="abstractGradMix" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#f97316" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                </linearGradient>

                {/* Advanced filter with shadow */}
                <filter id="abstractGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Radial glows */}
                <radialGradient id="radialGlow" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="radialGlowOrange" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background energy field - Blue */}
              <motion.circle
                cx="200"
                cy="250"
                r="150"
                fill="url(#radialGlow)"
                animate={{ r: [140, 160, 140] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Background energy field - Orange accent */}
              <motion.circle
                cx="200"
                cy="250"
                r="100"
                fill="url(#radialGlowOrange)"
                animate={{ r: [90, 110, 90] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Top animated flowing orb - Enhanced */}
              <motion.g>
                <motion.circle
                  cx="200"
                  cy="100"
                  r="40"
                  fill="url(#abstractGrad1)"
                  filter="url(#abstractGlow)"
                  animate={{ 
                    y: [-20, 20, -20],
                    r: [40, 45, 40]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Orb glow ring */}
                <motion.circle
                  cx="200"
                  cy="100"
                  r="50"
                  fill="none"
                  stroke="url(#abstractGrad1)"
                  strokeWidth="1"
                  animate={{ 
                    opacity: [0, 0.6, 0],
                    r: [40, 60, 40]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              </motion.g>

              {/* Central animated lines flow down */}
              <motion.path
                d="M 200 140 Q 180 200 200 260 Q 220 320 200 380"
                stroke="url(#abstractGrad2)"
                strokeWidth="2.5"
                fill="none"
                filter="url(#abstractGlow)"
                animate={{ 
                  opacity: [0.3, 0.9, 0.3],
                  pathLength: [0, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ strokeLinecap: 'round' }}
              />

              {/* Left branching flow - Enhanced */}
              <motion.g
                animate={{ x: [-15, 0, -15], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  d="M 200 180 Q 140 200 120 240"
                  stroke="url(#abstractGrad1)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.7"
                  filter="url(#abstractGlow)"
                />
                <motion.circle 
                  cx="120" 
                  cy="240" 
                  r="12" 
                  fill="url(#abstractGrad1)" 
                  animate={{ r: [12, 18, 12] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.g>

              {/* Right branching flow - Enhanced */}
              <motion.g
                animate={{ x: [15, 0, 15], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <path
                  d="M 200 180 Q 260 200 280 240"
                  stroke="url(#abstractGrad2)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.7"
                  filter="url(#abstractGlow)"
                />
                <motion.circle 
                  cx="280" 
                  cy="240" 
                  r="12" 
                  fill="url(#abstractGrad2)"
                  animate={{ r: [12, 18, 12] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.g>

              {/* Enhanced pulsing nodes with orbits */}
              {[
                { x: 160, y: 280, delay: 0, size: 8 },
                { x: 200, y: 320, delay: 0.3, size: 10 },
                { x: 240, y: 280, delay: 0.6, size: 8 }
              ].map((node, i) => (
                <motion.g key={i}>
                  {/* Node orbit ring */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="20"
                    fill="none"
                    stroke="url(#abstractGrad1)"
                    strokeWidth="0.5"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Main node */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={node.size}
                    fill="url(#abstractGrad1)"
                    animate={{ 
                      r: [node.size, node.size + 4, node.size],
                      opacity: [0.8, 0.3, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
                    filter="url(#abstractGlow)"
                  />
                  {/* Glow pulse */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={node.size}
                    fill="none"
                    stroke="url(#abstractGrad1)"
                    strokeWidth="1"
                    animate={{ 
                      r: [node.size, node.size + 8, node.size],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: node.delay }}
                  />
                </motion.g>
              ))}

              {/* Bottom enhanced orb */}
              <motion.g>
                <motion.circle
                  cx="200"
                  cy="420"
                  r="35"
                  fill="url(#abstractGrad2)"
                  filter="url(#abstractGlow)"
                  animate={{ 
                    y: [15, -15, 15],
                    r: [35, 40, 35]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                {/* Bottom orb glow */}
                <motion.circle
                  cx="200"
                  cy="420"
                  r="45"
                  fill="none"
                  stroke="url(#abstractGrad2)"
                  strokeWidth="1"
                  animate={{ 
                    opacity: [0, 0.4, 0],
                    r: [35, 55, 35]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                />
              </motion.g>

              {/* Enhanced connecting data points with animations */}
              <motion.g opacity="0.6">
                <motion.line 
                  x1="160" y1="280" x2="200" y2="320" 
                  stroke="url(#abstractGrad1)" 
                  strokeWidth="1.5"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.line 
                  x1="200" y1="320" x2="240" y2="280" 
                  stroke="url(#abstractGrad2)" 
                  strokeWidth="1.5"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />
                <motion.line 
                  x1="200" y1="320" x2="200" y2="385" 
                  stroke="url(#abstractGrad1)" 
                  strokeWidth="1.5"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                />
              </motion.g>

              {/* Decorative corner elements */}
              <motion.g opacity="0.3">
                <motion.rect 
                  x="10" y="10" width="30" height="30" 
                  fill="none" stroke="url(#abstractGrad1)" 
                  strokeWidth="1"
                  animate={{ rotate: [0, 360], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.rect 
                  x="360" y="460" width="30" height="30" 
                  fill="none" stroke="url(#abstractGrad2)" 
                  strokeWidth="1"
                  animate={{ rotate: [0, -360], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              </motion.g>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom accent line with gradient animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animations */}
      <style>{`
        @keyframes signal-flow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.1;
          }
        }

        @keyframes float-card {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;