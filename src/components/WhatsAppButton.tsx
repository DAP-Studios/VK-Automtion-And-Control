import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';

const whatsappNumber = siteConfig.phoneDisplay.replace(/\D/g, '');
const whatsappMessage = encodeURIComponent('Hello, I need help with industrial automation services.');

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[80] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#20bd5a]"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}