import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/Icon';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
// import { ScrollToTop } from '@/components/ScrollToTop';
import { supabase } from '@/lib/supabaseClient';
import type { Job } from '@/data/content';

type Status = 'idle' | 'submitting' | 'success' | 'error';

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

export function JobDetailPage({
  job,
  onNavigate,
}: {
  job: Job;
  onNavigate: (page: string) => void;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      job_title: job.title,
      job_location: job.location,
      full_name: (data.get('full_name') as string)?.trim() || null,
      email: (data.get('email') as string)?.trim() || null,
      phone: (data.get('phone') as string)?.trim() || null,
      linkedin_url: normalizeUrl((data.get('linkedin_url') as string)?.trim() || null),
      years_experience: (data.get('years_experience') as string)?.trim() || null,
      employment_type: job.type || null,
      preferred_location: (data.get('preferred_location') as string)?.trim() || null,
      work_authorization: (data.get('work_authorization') as string) || null,
      key_skills: (data.get('key_skills') as string)?.trim() || null,
      resume_link: normalizeUrl((data.get('resume_link') as string)?.trim() || null),
      cover_note: (data.get('cover_note') as string)?.trim() || null,
    };

    if (!payload.full_name || !payload.email || !payload.phone || !payload.linkedin_url) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, phone number, and LinkedIn profile before submitting.');
      return;
    }

    try {
      const { error } = await supabase.from('job_applications').insert(payload);
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

  const typeColor =
    job.type === 'Contract'
      ? 'bg-brand-50 text-brand-700 ring-brand-100'
      : job.type === 'Contract-to-Hire'
      ? 'bg-accent-50 text-accent-700 ring-accent-100'
      : 'bg-emerald-50 text-emerald-700 ring-emerald-100';

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} activePage="openings" />

      {/* Hero banner */}
      <section className="relative overflow-hidden bg-navy-900 pt-32 pb-16">
        <div className="absolute inset-0 bg-grid-light bg-grid-32 opacity-30" />
        <div className="absolute inset-0 bg-radial-fade opacity-60" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" />

        <div className="relative container-x">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-navy-300">
            <button type="button" onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <Icon name="ChevronRight" className="h-4 w-4 text-navy-500" />
            <button type="button" onClick={() => onNavigate('openings')} className="hover:text-white transition-colors">
              Job Openings
            </button>
            <Icon name="ChevronRight" className="h-4 w-4 text-navy-500" />
            <span className="font-semibold text-brand-400">{job.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${typeColor}`}>
              {job.type}
            </span>
            {job.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-100">
                <Icon name="Star" className="h-3 w-3 fill-amber-500 text-amber-500" />
                Featured
              </span>
            )}
          </div>

          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {job.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-navy-200">
            <span className="flex items-center gap-2">
              <Icon name="MapPin" className="h-4 w-4 text-brand-400" />
              {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Clock" className="h-4 w-4 text-brand-400" />
              {job.experience} experience
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            {/* Job description */}
            <div className="lg:col-span-3">
              {job.description && (
                <div className="mb-8">
                  <h2 className="font-display text-lg font-bold text-navy-900">About This Role</h2>
                  <p className="mt-3 text-base leading-relaxed text-navy-600">{job.description}</p>
                </div>
              )}

              {job.responsibilities && job.responsibilities.length > 0 && (
                <div className="mb-8">
                  <h2 className="font-display text-lg font-bold text-navy-900">Responsibilities</h2>
                  <ul className="mt-3 grid gap-2.5">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-navy-600">
                        <Icon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.requirements && job.requirements.length > 0 && (
                <div className="mb-8">
                  <h2 className="font-display text-lg font-bold text-navy-900">Requirements</h2>
                  <ul className="mt-3 grid gap-2.5">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-navy-600">
                        <Icon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="font-display text-lg font-bold text-navy-900">Required Skills</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <span key={s} className="rounded-lg bg-navy-50 px-3 py-1.5 text-sm font-medium text-navy-600 ring-1 ring-inset ring-navy-100">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Application form */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 rounded-3xl border border-navy-100 bg-white p-6 shadow-lift sm:p-8">
                {status === 'success' ? (
                  <div className="flex flex-col items-center py-6 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
                      <Icon name="CheckCircle2" className="h-8 w-8" />
                    </span>
                    <h2 className="mt-5 font-display text-xl font-bold text-navy-900">Application Sent!</h2>
                    <p className="mt-2 text-sm text-navy-600">
                      Thanks for applying to <strong>{job.title}</strong>. A recruiter will review your
                      profile and reach out within one business day.
                    </p>
                    <button type="button" onClick={() => onNavigate('openings')} className="btn-primary mt-6 w-full">
                      Browse more roles
                      <Icon name="ArrowRight" className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                        <Icon name="Send" className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="font-display text-lg font-bold text-navy-900">Apply for this role</h2>
                        <p className="text-xs text-navy-500">Takes less than 2 minutes</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="grid gap-4">
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
                      <Field label="Years of Experience" htmlFor="years_experience">
                        <input id="years_experience" name="years_experience" type="text" className={inputClass} placeholder="e.g. 7" />
                      </Field>
                      <Field label="Work Authorization" htmlFor="work_authorization">
                        <select id="work_authorization" name="work_authorization" className={inputClass} defaultValue="">
                          <option value="" disabled>Select…</option>
                          {authorizationOptions.map((a) => (
                            <option key={a.value} value={a.value}>{a.label}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Resume Link (Google Drive, Dropbox, etc.)" htmlFor="resume_link">
                        <input id="resume_link" name="resume_link" type="text" className={inputClass} placeholder="drive.google.com/…" />
                      </Field>
                      <Field label="Cover Note" htmlFor="cover_note">
                        <textarea
                          id="cover_note"
                          name="cover_note"
                          rows={3}
                          className={`${inputClass} resize-none`}
                          placeholder="Anything you'd like our recruiters to know…"
                        />
                      </Field>

                      {status === 'error' && (
                        <div className="flex items-start gap-2 rounded-xl bg-red-50 p-3.5 text-sm text-red-700 ring-1 ring-inset ring-red-100">
                          <Icon name="AlertCircle" className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-primary w-full py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {status === 'submitting' ? (
                          <>
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            Submitting…
                          </>
                        ) : (
                          <>
                            Submit Application
                            <Icon name="Send" className="h-5 w-5" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-navy-400">
                        By applying, you agree to be contacted about this opportunity. Your information is never shared with third parties.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  );
}