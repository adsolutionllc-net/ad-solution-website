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
  { value: 'any', label: 'Open / Any' },
];

const authorizationOptions = [
  { value: 'us-citizen', label: 'US Citizen' },
  { value: 'green-card', label: 'Green Card (Permanent Resident)' },
  { value: 'h1b', label: 'H-1B' },
  { value: 'opt', label: 'OPT / CPT' },
  { value: 'other', label: 'Other / Prefer to discuss' },
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

function normalizeUrl(value: string | null): string | null {
  if (!value) return null;
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export function SendResumePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      full_name: (data.get('full_name') as string)?.trim() || null,
      email: (data.get('email') as string)?.trim() || null,
      phone: (data.get('phone') as string)?.trim() || null,
      linkedin_url: normalizeUrl((data.get('linkedin_url') as string)?.trim() || null),
      target_role: (data.get('target_role') as string)?.trim() || null,
      years_experience: (data.get('years_experience') as string)?.trim() || null,
      employment_type: (data.get('employment_type') as string) || null,
      preferred_location: (data.get('preferred_location') as string)?.trim() || null,
      work_authorization: (data.get('work_authorization') as string) || null,
      key_skills: (data.get('key_skills') as string)?.trim() || null,
      resume_link: normalizeUrl((data.get('resume_link') as string)?.trim() || null),
      cover_note: (data.get('cover_note') as string)?.trim() || null,
    };

    if (!payload.full_name || !payload.email || !payload.phone || !payload.linkedin_url) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, phone number and  LinkedIn profile before submitting.');
      return;
    }

    try {
      const { error } = await supabase.from('resume_submissions').insert(payload);
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
      <Header onNavigate={onNavigate} activePage="resume" />

      {/* Hero banner */}
      <section className="relative overflow-hidden bg-navy-900 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-light bg-grid-32 opacity-30" />
        <div className="absolute inset-0 bg-radial-fade opacity-60" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" />

        <div className="relative container-x text-center">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-navy-300">
            <button type="button" onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <Icon name="ChevronRight" className="h-4 w-4 text-navy-500" />
            <button type="button" onClick={() => onNavigate('openings')} className="hover:text-white transition-colors">
              Job Openings
            </button>
            <Icon name="ChevronRight" className="h-4 w-4 text-navy-500" />
            <span className="font-semibold text-brand-400">Send Your Resume</span>
          </nav>

          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl">
            Send Your Resume &amp;{' '}
            <span className="text-brand-400">Get Noticed</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
            Don't wait for the perfect listing. Submit your profile and our recruiters will match you
            to the right opportunity — actively and proactively.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: 'UserCheck', label: 'Dedicated Recruiter Assigned' },
              { icon: 'Lock', label: 'Your Data is Confidential' },
              { icon: 'Clock', label: 'Response Within 1 Business Day' },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-navy-200 backdrop-blur-sm"
              >
                <Icon name={b.icon} className="h-4 w-4 text-brand-400" />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            {status === 'success' ? (
              <div className="flex flex-col items-center rounded-3xl border border-green-100 bg-green-50 py-16 text-center shadow-card">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-green-100 text-green-600">
                  <Icon name="CheckCircle2" className="h-10 w-10" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-navy-900">Resume Received!</h2>
                <p className="mt-3 max-w-md text-base text-navy-600">
                  Thank you for reaching out. A recruiter from AD Solution will review your profile and
                  get back to you within one business day.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-secondary"
                  >
                    Submit another profile
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('openings')}
                    className="btn-primary"
                  >
                    Browse open roles
                    <Icon name="ArrowRight" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-navy-100 bg-white p-8 shadow-lift sm:p-10">
                <div className="mb-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                    <Icon name="FileText" className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-navy-900">Your Profile</h2>
                    <p className="text-sm text-navy-500">Tell us about yourself and what you're looking for</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-6">
                  {/* Personal info */}
                  <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-navy-400">Personal Information</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Full Name" htmlFor="full_name" required>
                        <input id="full_name" name="full_name" type="text" required autoComplete="name" className={inputClass} placeholder="Jane Doe" />
                      </Field>
                      <Field label="Email" htmlFor="email" required>
                        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@email.com" />
                      </Field>
                      <Field label="Phone" htmlFor="phone" required>
                        <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="+1 (214) 555-0142" />
                      </Field>
                      <Field label="LinkedIn Profile" htmlFor="linkedin_url" required>
                        <input id="linkedin_url" name="linkedin_url" type="text" required className={inputClass} placeholder="linkedin.com/in/your-name" />
                      </Field>
                    </div>
                  </div>

                  <hr className="border-navy-100" />

                  {/* Career info */}
                  <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-navy-400">Career Details</p>
                    <div className="grid gap-4">
                      <Field label="Target Role / Job Title" htmlFor="target_role">
                        <input id="target_role" name="target_role" type="text" className={inputClass} placeholder="e.g. Senior Java Developer, ServiceNow Developer" />
                      </Field>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Years of Experience" htmlFor="years_experience">
                          <input id="years_experience" name="years_experience" type="text" className={inputClass} placeholder="e.g. 7" />
                        </Field>
                        <Field label="Employment Type Preference" htmlFor="employment_type">
                          <select id="employment_type" name="employment_type" className={inputClass} defaultValue="">
                            <option value="" disabled>Select…</option>
                            {employmentTypes.map((t) => (
                              <option key={t.value} value={t.value}>{t.label}</option>
                            ))}
                          </select>
                        </Field>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Key Skills" htmlFor="key_skills">
                          <input id="key_skills" name="key_skills" type="text" className={inputClass} placeholder="e.g. Java, Spring Boot, AWS, Kafka" />
                        </Field>
                        <Field label="Preferred Location" htmlFor="preferred_location">
                          <input id="preferred_location" name="preferred_location" type="text" className={inputClass} placeholder="e.g. Dallas TX, Remote, Open" />
                        </Field>
                      </div>
                      <Field label="Work Authorization" htmlFor="work_authorization">
                        <select id="work_authorization" name="work_authorization" className={inputClass} defaultValue="">
                          <option value="" disabled>Select…</option>
                          {authorizationOptions.map((a) => (
                            <option key={a.value} value={a.value}>{a.label}</option>
                          ))}
                        </select>
                      </Field>
                    </div>
                  </div>

                  <hr className="border-navy-100" />

                  {/* Resume & note */}
                  <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-navy-400">Resume &amp; Cover Note</p>
                    <div className="grid gap-4">
                      <Field label="Resume Link (Google Drive, Dropbox, etc.)" htmlFor="resume_link">
                        <input id="resume_link" name="resume_link" type="text" className={inputClass} placeholder="drive.google.com/…" />
                      </Field>
                      <Field label="Cover Note" htmlFor="cover_note">
                        <textarea
                          id="cover_note"
                          name="cover_note"
                          rows={4}
                          className={`${inputClass} resize-none`}
                          placeholder="Briefly describe your background, goals, and anything else our recruiters should know…"
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
                        Submit My Resume
                        <Icon name="Send" className="h-5 w-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-navy-400">
                    By submitting, you agree to be contacted about relevant opportunities. Your information is never shared with third parties.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  );
}