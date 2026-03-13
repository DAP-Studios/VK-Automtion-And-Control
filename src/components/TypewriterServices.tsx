import { useEffect, useState } from 'react';

const services = ['PLC Programming', 'SCADA Development', 'HMI Design', 'VFD Commissioning', 'Panel Automation'];

export default function TypewriterServices() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentService = services[serviceIndex];
    const typingDelay = isDeleting ? 45 : 95;
    const shouldPause = !isDeleting && displayText === currentService;
    const pauseDelay = shouldPause ? 1200 : typingDelay;

    const timer = window.setTimeout(() => {
      if (!isDeleting && displayText === currentService) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setServiceIndex((current) => (current + 1) % services.length);
        return;
      }

      setDisplayText((current) =>
        isDeleting ? currentService.slice(0, current.length - 1) : currentService.slice(0, current.length + 1)
      );
    }, pauseDelay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [displayText, isDeleting, serviceIndex]);

  return (
    <div className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-200 sm:mb-12 sm:text-xl md:text-[25px]">
      Serving{' '}
      <span className="font-semibold text-orange-300">{displayText}</span>
      <span className="ml-1 inline-block h-6 w-px translate-y-1 bg-orange-300 animate-pulse" />
    </div>
  );
}