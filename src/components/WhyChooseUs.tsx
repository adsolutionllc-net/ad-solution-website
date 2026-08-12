import { Icon } from '@/components/Icon';

const reasons = [
  { icon: 'Users', title: 'Experienced Recruiters', text: 'Technology domain specialists with 10+ years of US IT staffing — not generalists learning your stack on the job.' },
  { icon: 'Network', title: 'Extensive Talent Network', text: 'A curated database of 10,000+ vetted IT professionals, plus active sourcing on every major platform and community.' },
  { icon: 'Clock', title: 'Fast Hiring Process', text: 'Most roles see qualified submissions within 48–72 hours. We move at the speed your hiring plan demands.' },
  { icon: 'ShieldCheck', title: 'Pre-screened Candidates', text: 'Every submission is technically vetted, reference-checked, and culturally aligned before it reaches your inbox.' },
  { icon: 'Handshake', title: 'Trusted Vendor Network', text: '250+ vendor relationships and an established MSP/VMS presence keep your pipeline compliant and friction-free.' },
  { icon: 'Target', title: 'Client-Centric Recruitment', text: 'We tailor process, cadence, and reporting to your team — embedding as a partner, not a resume mill.' },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-light bg-grid-32 opacity-25" />
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl" />

      <div className="relative container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200 ring-1 ring-inset ring-white/15">
            <Icon name="Sparkles" className="h-3.5 w-3.5" />
            Why Choose AD Solution
          </span>
          <h2 className="reveal mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl">
            The difference is in the delivery
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-navy-200 text-pretty">
            Companies and candidates choose AD Solution because we treat recruitment as a craft —
            disciplined, transparent, and built on long-term relationships.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal group rounded-2xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-white/20"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-900/30 transition-transform duration-300 group-hover:scale-105">
                <Icon name={r.icon} className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-200">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
