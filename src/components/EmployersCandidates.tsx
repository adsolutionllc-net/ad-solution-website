import { Icon } from '@/components/Icon';

const employerImg = '/clients/employers.jpg';

const employerServices = [
  { icon: 'Briefcase', title: 'IT Staffing', text: 'Full-spectrum technology staffing across contract, contract-to-hire, and permanent roles.' },
  { icon: 'Clock', title: 'Contract Staffing', text: 'Rapid access to vetted contractors for projects, backfills, and skill-gap coverage.' },
  { icon: 'UserCheck', title: 'Permanent Hiring', text: 'Direct-hire placement of core team members aligned to your culture and roadmap.' },
  { icon: 'Crown', title: 'Executive Search', text: 'Retained search for senior IT leadership — CIO, CTO, VP Engineering, and beyond.' },
  { icon: 'Network', title: 'RPO', text: 'Outsource your entire recruitment function and scale hiring without scaling overhead.' },
];

const candidateOffers = [
  { icon: 'FileText', title: 'Resume Marketing', text: 'We actively market your profile to the right employers and vendors — not just job boards.' },
  { icon: 'Send', title: 'Submit Resume', text: 'One submission puts you in front of recruiters sourcing for hundreds of active US IT roles.' },
  { icon: 'Compass', title: 'Career Guidance', text: 'Tailored advice on skills, certifications, and market positioning to grow your career.' },
  { icon: 'CalendarCheck', title: 'Interview Scheduling', text: 'We coordinate every interview, prep you beforehand, and debrief with you after.' },
  { icon: 'Search', title: 'Current Openings', text: 'Access to exclusive roles you will not find on public boards — contract and permanent.' },
];

export function EmployersCandidates({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x">
        {/* EMPLOYERS */}
        <div id="employers" className="scroll-mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-100 to-navy-100 opacity-60 blur-2xl" />
            <img
              src={employerImg}
              alt="Hiring managers discussing staffing strategy"
              className="relative rounded-3xl shadow-lift ring-1 ring-navy-100 object-cover w-full h-[420px]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-4 shadow-lift ring-1 ring-navy-100">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white">
                  <Icon name="Clock" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-extrabold text-navy-900 leading-none">48–72h</p>
                  <p className="mt-1 text-xs font-medium text-navy-500">Avg. first submission</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="reveal eyebrow">
              <Icon name="Building2" className="h-3.5 w-3.5" />
              For Employers
            </span>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              Scale your IT teams with confidence
            </h2>
            <p className="reveal mt-4 text-base leading-relaxed text-navy-600 text-pretty">
              Whether you need one contractor for a six-week project or a recruitment partner to own
              a 40-seat program, we deliver pre-screened, technically vetted talent — fast.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {employerServices.map((s) => (
                <div key={s.title} className="reveal flex gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-50 text-brand-600">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-navy-900">{s.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-navy-500">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button type="button" onClick={() => onNavigate('request-talent')} className="reveal btn-primary mt-8">
              Request Talent
              <Icon name="ArrowRight" className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

        {/* CANDIDATES */}
        <div id="candidates" className="scroll-mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="reveal eyebrow">
              <Icon name="Users" className="h-3.5 w-3.5" />
              For Candidates
            </span>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              Your next IT role, with a partner who gets it
            </h2>
            <p className="reveal mt-4 text-base leading-relaxed text-navy-600 text-pretty">
              We don't just place resumes — we manage careers. From resume marketing to interview
              prep and offer negotiation, we're in your corner at every step.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {candidateOffers.map((s) => (
                <div key={s.title} className="reveal flex gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-50 text-accent-700">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-navy-900">{s.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-navy-500">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => onNavigate('openings')} className="btn-secondary">
                Find Jobs
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => onNavigate('resume')} className="btn-primary">
                Submit Resume
                <Icon name="Send" className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-100 to-brand-100 opacity-60 blur-2xl" />
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Candidate in a career consultation with a recruiter"
              className="relative rounded-3xl shadow-lift ring-1 ring-navy-100 object-cover w-full h-[420px]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 right-6 rounded-2xl bg-navy-900 p-4 shadow-lift">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500 text-white">
                  <Icon name="Handshake" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-extrabold text-white leading-none">1:1</p>
                  <p className="mt-1 text-xs font-medium text-navy-200">Dedicated recruiter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
