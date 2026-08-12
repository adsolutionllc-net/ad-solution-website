import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/Icon';
import { supabase } from '@/lib/supabaseClient';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inquiryOptions = [
  { value: 'employer', label: 'I\'m an Employer' },
  { value: 'job_seeker', label: 'I\'m a Job Seeker' },
];

const contactInfo = [
  { icon: 'Phone', label: 'Phone', value: '+1 (973) 576-8963', href: 'tel:+19735768963' },
  { icon: 'Mail', label: 'Email', value: 'info@adsolutionllc.net', href: 'mailto:info@adsolutionllc.net' },
  { icon: 'MapPin', label: 'Office', value: 'BEVERWYCK RD Parsippany, NJ 07054', href: '#map' },
  { icon: 'Linkedin', label: 'LinkedIn', value: 'linkedin.com/company/ad-solutionllc', href: 'https://www.linkedin.com/company/ad-solutionit/' },
];

const inputClass =
  'w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30';

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-navy-800">
        {label}
        {required && <span className="ml-0.5 text-brand-600">*</span>}
      </label>
      {children}
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: (data.get('name') as string)?.trim() || null,
      email: (data.get('email') as string)?.trim() || null,
      phone: (data.get('phone') as string)?.trim() || null,
      company: (data.get('company') as string)?.trim() || null,
      inquiry_type: (data.get('inquiry_type') as string) || 'general',
      message: (data.get('message') as string)?.trim() || null,
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, phone number, and message.');
      return;
    }

    try {
      const { error } = await supabase.from('contact_submissions').insert(payload);
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? `Something went wrong: ${err.message}`
          : 'Something went wrong. Please try again or email us directly.'
      );
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-navy-900">
      <div className="absolute inset-0 bg-grid-light bg-grid-32 opacity-25" />
      <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />

      <div className="relative container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <span className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200 ring-1 ring-inset ring-white/15">
              <Icon name="Mail" className="h-3.5 w-3.5" />
              Contact Us
            </span>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl">
              Let's build your next great team together
            </h2>
            <p className="reveal mt-4 text-base leading-relaxed text-navy-200 text-pretty">
              Tell us what you need — talent, a career move, or a partnership. Our team responds
              within one business day.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactInfo.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="reveal group flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/20 text-brand-300 ring-1 ring-inset ring-brand-400/30">
                      <Icon name={c.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-300">{c.label}</p>
                      <p className="mt-0.5 text-sm font-medium text-white break-words">{c.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Map */}
            <div id="map" className="reveal mt-6 overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10">
              <iframe
                title="AD Solution office location — Parsippany, NJ"
                src="https://www.google.com/maps?q=Beverwyck+Rd,+Parsippany,+NJ+07054&output=embed"
                className="h-80 w-full grayscale-[0.2] contrast-[1.05]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal">
            <div className="rounded-3xl bg-white p-6 shadow-lift sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-green-50 text-green-600">
                    <Icon name="CheckCircle2" className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm text-navy-600">
                    Thank you for reaching out. A member of our team will get back to you within one
                    business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-secondary mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                      <Icon name="Send" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy-900">Send Us a Message</h3>
                      <p className="text-xs text-navy-500">We'll get back to you within one business day</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" htmlFor="name" required>
                      <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Jane Doe" />
                    </Field>
                    <Field label="Email" htmlFor="email" required>
                      <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@company.com" />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone" htmlFor="phone" required>
                      <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="+1 (214) 555-0142" />
                    </Field>
                    <Field label="Company" htmlFor="company">
                      <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} placeholder="Optional" />
                    </Field>
                  </div>

                  <Field label="I am a..." htmlFor="inquiry_type">
                    <select id="inquiry_type" name="inquiry_type" className={inputClass} defaultValue="employer">
                      {inquiryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message" htmlFor="message" required>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us a bit about what you need — a role you're hiring for, a job you're looking for, or anything else."
                    />
                  </Field>

                  {status === 'error' && (
                    <div className="flex items-start gap-2 rounded-xl bg-red-50 p-3.5 text-sm text-red-700 ring-1 ring-inset ring-red-100">
                      <Icon name="AlertCircle" className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
                    {status === 'submitting' ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Icon name="Send" className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-navy-400">
                    By submitting, you agree to be contacted about your inquiry. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}