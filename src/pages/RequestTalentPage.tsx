import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/Icon';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const employmentTypes = [
  { value: 'contract', label: 'Contract' },
  { value: 'contract-to-hire', label: 'Contract-to-Hire' },
  { value: 'permanent', label: 'Permanent / Direct Hire' },
  { value: 'executive-search', label: 'Executive Search' },
  { value: 'any', label: 'Open / Any' },
];

const timelineOptions = [
  { value: 'immediate', label: 'Immediate (ASAP)' },
  { value: '1-2-weeks', label: '1–2 Weeks' },
  { value: '30-days', label: 'Within 30 Days' },
  { value: 'flexible', label: 'Flexible / Exploratory' },
];

const inputClass =
  'w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30';

const heroPoints = [
  { icon: 'Zap', title: '48–72 Hour Submissions', text: 'First vetted candidates in your inbox within days.' },
  { icon: 'ShieldCheck', title: 'Pre-Screened Talent', text: 'Every candidate is technically vetted before you see them.' },
  { icon: 'Users', title: '10,000+ Candidate Network', text: 'Tap into a deep, active IT talent pool across the US.' },
  { icon: 'Building2', title: '100+ Hiring Partners', text: 'Trusted by enterprises, mid-market, and startups.' },
];


const steps = [
  { icon: 'FileText', title: 'Share Your Requirement', text: 'Tell us the role, skills, timeline, and location. The more detail, the faster we deliver.' },
  { icon: 'Search', title: 'We Source & Screen', text: 'Our recruiters mine our network and market to find matching candidates — then vet them.' },
  { icon: 'Send', title: 'Review Submissions', text: 'Receive curated profiles with rate/salary, availability, and skill summaries within 48–72 hours.' },
  { icon: 'Handshake', title: 'Interview & Hire', text: 'We schedule interviews, coordinate feedback, and help close the offer — seamlessly.' },
];

const stats = [
  { value: '1,000+', label: 'Successful Placements' },
  { value: '48–72h', label: 'First Submission' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '100+', label: 'Hiring Partners' },
];

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

export function RequestTalentPage({ onNavigate }: { onNavigate: (page: string) => void }) {
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
      message: (data.get('message') as string)?.trim() || null,
      role_needed: (data.get('role_needed') as string)?.trim() || null,
      num_openings: (data.get('num_openings') as string)?.trim() || null,
      employment_type: (data.get('employment_type') as string) || null,
      key_skills: (data.get('key_skills') as string)?.trim() || null,
      work_location: (data.get('work_location') as string)?.trim() || null,
      hiring_timeline: (data.get('hiring_timeline') as string) || null,
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.company) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, phone number, and company name before submitting.');
      return;
    }

    try {
      const { error } = await supabase.from('talent_requests').insert(payload);
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
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} activePage="request-talent" />

      {/* Hero with form */}
      <section className="relative overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-32">
        <div className="absolute inset-0 bg-grid-light bg-grid-32 opacity-25" />
        <div className="absolute inset-0 bg-radial-fade opacity-60" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" />

        <div className="relative container-x">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: pitch */}
            <div className="pt-4">
              {/* Breadcrumb */}
              <nav className="mb-6 flex items-center gap-2 text-sm text-navy-300">
                <button type="button" onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
                <Icon name="ChevronRight" className="h-4 w-4 text-navy-500" />
                <span className="font-semibold text-brand-400">Request Talent</span>
              </nav>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200 ring-1 ring-inset ring-white/15">
                <Icon name="Building2" className="h-3.5 w-3.5" />
                For Employers
              </span>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl">
                Request Talent &amp;{' '}
                <span className="text-brand-400">Scale Your IT Team</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-200 text-pretty sm:text-lg">
                Tell us what you need. We source, screen, and deliver pre-qualified IT
                professionals — contract, contract-to-hire, or permanent — within 48 to 72 hours.
              </p>

              {/* Hero points */}
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {heroPoints.map((p) => (
                  <li
                    key={p.title}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/20 text-brand-300 ring-1 ring-inset ring-brand-400/30">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{p.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-navy-300">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <div className="lg:pt-4">
              <div className="rounded-3xl bg-white p-6 shadow-lift sm:p-8">
                {status === 'success' ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-green-50 text-green-600">
                      <Icon name="CheckCircle2" className="h-10 w-10" />
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-bold text-navy-900">Request Received!</h2>
                    <p className="mt-3 max-w-sm text-sm text-navy-600">
                      Thank you for trusting AD Solution with your hiring need. A dedicated account
                      manager will contact you within one business day to review your requirement and
                      kick off the search.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <button type="button" onClick={() => setStatus('idle')} className="btn-secondary">
                        Submit another request
                      </button>
                      <button type="button" onClick={() => onNavigate('home')} className="btn-primary">
                        Back to Home
                        <Icon name="ArrowRight" className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                        <Icon name="Briefcase" className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="font-display text-lg font-bold text-navy-900">Tell Us What You Need</h2>
                        <p className="text-xs text-navy-500">Fields marked with * are required</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="grid gap-5">
                      {/* Contact info */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Full Name" htmlFor="name" required>
                          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Jane Doe" />
                        </Field>
                        <Field label="Work Email" htmlFor="email" required>
                          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@company.com" />
                        </Field>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Phone" htmlFor="phone" required>
                          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="+1 (214) 555-0142" />
                        </Field>
                        <Field label="Company" htmlFor="company" required>
                          <input id="company" name="company" type="text" required autoComplete="organization" className={inputClass} placeholder="Acme Corp" />
                        </Field>
                      </div>

                      <hr className="border-navy-100" />

                      {/* Hiring details */}
                      <div>
                        <p className="mb-3 flex items-center gap-2 text-sm font-bold text-navy-900">
                          <Icon name="Briefcase" className="h-4 w-4 text-brand-600" />
                          Your Hiring Requirement
                        </p>
                        <div className="grid gap-4">
                          <Field label="Role(s) needed" htmlFor="role_needed" required>
                            <input id="role_needed" name="role_needed" type="text" required className={inputClass} placeholder="e.g. Senior Java Developer, ServiceNow Developer" />
                          </Field>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Number of openings" htmlFor="num_openings">
                              <input id="num_openings" name="num_openings" type="text" className={inputClass} placeholder="e.g. 1, 3-5" />
                            </Field>
                            <Field label="Employment type" htmlFor="employment_type">
                              <select id="employment_type" name="employment_type" className={inputClass} defaultValue="">
                                <option value="" disabled>Select…</option>
                                {employmentTypes.map((t) => (
                                  <option key={t.value} value={t.value}>{t.label}</option>
                                ))}
                              </select>
                            </Field>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Key skills required" htmlFor="key_skills">
                              <input id="key_skills" name="key_skills" type="text" className={inputClass} placeholder="e.g. Java, Spring Boot, AWS" />
                            </Field>
                            <Field label="Work location" htmlFor="work_location">
                              <input id="work_location" name="work_location" type="text" className={inputClass} placeholder="e.g. Dallas, TX / Remote" />
                            </Field>
                          </div>
                          <Field label="Hiring timeline" htmlFor="hiring_timeline">
                            <select id="hiring_timeline" name="hiring_timeline" className={inputClass} defaultValue="">
                              <option value="" disabled>Select…</option>
                              {timelineOptions.map((t) => (
                                <option key={t.value} value={t.value}>{t.label}</option>
                              ))}
                            </select>
                          </Field>
                          <Field label="Additional details" htmlFor="message">
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              className={`${inputClass} resize-none`}
                              placeholder="Project context, must-have certifications, budget range, or anything else we should know."
                            />
                          </Field>
                        </div>
                      </div>

                      {status === 'error' && (
                        <div className="flex items-start gap-2 rounded-xl bg-red-50 p-3.5 text-sm text-red-700 ring-1 ring-inset ring-red-100">
                          <Icon name="AlertCircle" className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-primary w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {status === 'submitting' ? (
                          <>
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            Submitting…
                          </>
                        ) : (
                          <>
                            Submit Request
                            <Icon name="ArrowRight" className="h-5 w-5" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-navy-400">
                        We respond within one business day. Your information is confidential and never shared.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-navy-100 bg-navy-50/50 py-10">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-extrabold text-brand-600 sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-navy-500 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="mb-12 text-center">
            <span className="eyebrow">
              <Icon name="Workflow" className="h-3.5 w-3.5" />
              How It Works
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Four steps from request to hire
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-navy-600">
              A streamlined, transparent process designed to get you the right talent fast —
              without the noise of unqualified resumes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                <span className="absolute right-5 top-5 font-display text-4xl font-extrabold text-navy-100">
                  {i + 1}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-navy-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid-light bg-grid-32 opacity-20" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="relative container-x text-center">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl text-balance">
            Ready to fill your next IT role?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-navy-200">
            Submit your requirement now and receive vetted candidates within 48 to 72 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn-primary">
              Submit a Request
              <Icon name="ArrowRight" className="h-4 w-4" />
            </a>
            <button type="button" onClick={() => onNavigate('openings')} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20">
              View Open Roles
              <Icon name="Search" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  );
}