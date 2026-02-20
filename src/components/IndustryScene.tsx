const IndustryCore = () => {
  return (
    <div className="relative w-full h-[520px]">
      <svg viewBox="0 0 900 520" className="w-full h-full">

        {/* DATA FLOW BACKGROUND */}
        <path d="M100 80 H800" className="data-flow" />
        <path d="M100 120 H800" className="data-flow delay-1" />

        {/* CONVEYOR */}
        <path d="M120 360 H780" className="conveyor" />

        {/* MOVING BOXES */}
        <rect x="150" y="330" width="32" height="32" rx="5" className="box" />
        <rect x="250" y="330" width="32" height="32" rx="5" className="box delay-1" />
        <rect x="350" y="330" width="32" height="32" rx="5" className="box delay-2" />

        {/* MACHINES */}
        <rect x="200" y="260" width="90" height="60" rx="8" className="machine" />
        <rect x="420" y="260" width="90" height="60" rx="8" className="machine" />
        <rect x="640" y="260" width="90" height="60" rx="8" className="machine" />

        {/* ROBOT ARMS */}
        <line x1="245" y1="260" x2="245" y2="220" className="robot-arm" />
        <line x1="465" y1="260" x2="465" y2="220" className="robot-arm delay-1" />
        <line x1="685" y1="260" x2="685" y2="220" className="robot-arm delay-2" />

        {/* PLC CORE */}
        <rect x="380" y="120" width="140" height="90" rx="12" className="plc" />
        <text x="410" y="170" fill="#38bdf8" fontSize="14">PLC CORE</text>

        {/* PLC LEDS */}
        <circle cx="405" cy="145" r="5" className="led blink" />
        <circle cx="425" cy="145" r="5" className="led blink delay-1" />
        <circle cx="445" cy="145" r="5" className="led blink delay-2" />

        {/* SENSOR NODES */}
        <circle cx="245" cy="220" r="10" className="node pulse" />
        <circle cx="465" cy="220" r="10" className="node pulse delay-1" />
        <circle cx="685" cy="220" r="10" className="node pulse delay-2" />

        {/* DATA LINES */}
        <line x1="245" y1="220" x2="380" y2="165" className="data-line" />
        <line x1="465" y1="220" x2="450" y2="165" className="data-line" />
        <line x1="685" y1="220" x2="520" y2="165" className="data-line" />

      </svg>
    </div>
  );
};

export default IndustryCore;
