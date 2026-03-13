import { FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const initialValues = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialValues);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');

  const functionEndpoint = useMemo(() => {
    const base = import.meta.env.VITE_SUPABASE_URL;
    return base ? `${base}/functions/v1/send-contact-email` : '';
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!functionEndpoint) {
      setSubmitState('error');
      setFeedback('Contact form is not configured. Please call or email us directly.');
      return;
    }

    try {
      setSubmitState('submitting');
      setFeedback('Sending your request...');

      const response = await fetch(functionEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitState('success');
      setFeedback('Thanks. Your request has been sent to our engineering team.');
      setFormData(initialValues);
    } catch {
      setSubmitState('error');
      setFeedback('Unable to send right now. Please call or email us and we will respond quickly.');
    }
  };

  return (
    <section id="contact" className="section-light section-padding-sm">
      <div className="container-wide">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2rem] border border-stone-200 p-7 md:p-10"
          >
            <span className="section-kicker" style={{ color: 'rgba(230,126,34,0.8)' }}>Contact VK Automation</span>
            <h2 className="mt-5 text-4xl font-semibold text-industrial-900 md:text-5xl">
              Start your <span className="gradient-text">Automation</span> consultation.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-industrial-500">
              Tell us about your line, process, or upgrade requirements. We will review your inputs and suggest a practical implementation path.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-industrial-700">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-industrial-900 placeholder:text-stone-400 outline-none transition focus:border-brand-orange/70"
                    placeholder="Your full name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-industrial-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-industrial-900 placeholder:text-stone-400 outline-none transition focus:border-brand-orange/70"
                    placeholder="name@company.com"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-industrial-700">
                Company
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-industrial-900 placeholder:text-stone-400 outline-none transition focus:border-brand-orange/70"
                  placeholder="Organization name"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-industrial-700">
                Project Requirements
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-industrial-900 placeholder:text-stone-400 outline-none transition focus:border-brand-orange/70"
                  placeholder="Share your process, controls scope, timeline, and challenges"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={submitState === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {submitState === 'submitting' ? 'Sending Request...' : 'Send Consultation Request'}
                </button>
                <span className="text-xs uppercase tracking-[0.16em] text-stone-400">Response within 1 business day</span>
              </div>

              {feedback ? (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    submitState === 'success'
                      ? 'border-emerald-500/40 text-emerald-400' 
                      : submitState === 'error'
                      ? 'border-red-500/40 text-red-400'
                      : 'border-stone-200 text-industrial-500'
                  }`}
                  style={{ background: 'rgba(255,255,255,0.85)' }}
                >
                  <div className="flex items-center gap-2">
                    {submitState === 'success' ? <CheckCircle2 className="h-4 w-4" /> : null}
                    <span>{feedback}</span>
                  </div>
                </div>
              ) : null}
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="glass-card rounded-[2rem] border border-brand-orange/20 p-7 text-industrial-900 md:p-10"
          >
            <span className="section-kicker text-industrial-500">Direct Contact</span>
            <h3 className="mt-5 text-3xl font-semibold text-industrial-900">Engineering support from Vapi, Gujarat.</h3>

            <div className="mt-7 space-y-5 text-sm text-industrial-700">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-brand-orange" />
                <a href={siteConfig.emailHref} className="transition hover:text-brand-orange">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brand-orange" />
                <a href={siteConfig.phoneHref} className="transition hover:text-brand-orange">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-orange" />
                <address className="not-italic text-industrial-600">
                  {siteConfig.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </div>
            </div>

            <div className="mt-8 border-t border-stone-200 pt-6">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-400">Support Window</div>
              <div className="mt-3 space-y-1 text-sm text-industrial-600">
                <div>Monday to Friday: 8:00 AM to 6:00 PM</div>
                <div>Saturday: 9:00 AM to 2:00 PM</div>
                <div className="pt-2 font-semibold text-brand-orange">Emergency support: 24/7 by phone</div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
