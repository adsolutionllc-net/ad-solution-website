import { talentAreas } from '@/data/content';
import { Icon } from '@/components/Icon';

const accents = [
  'from-brand-500 to-brand-700',
  'from-accent-500 to-accent-700',
  'from-navy-600 to-navy-800',
  'from-brand-600 to-accent-600',
  'from-navy-700 to-brand-700',
  'from-accent-600 to-brand-700',
];

export function TalentAreas() {
  return (
    <section id="talent" className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow">
            <Icon name="BrainCircuit" className="h-3.5 w-3.5" />
            Talent Areas
          </span>
          <h2 className="reveal mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
            Our Technology Expertise
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-navy-600 text-pretty">
            Our recruiters are specialists across key IT domains, with a strong understanding of modern technologies, certifications, and role requirements. We connect you with skilled professionals who are the right fit for your business needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {talentAreas.map((area, i) => (
            <article
              key={area.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              {/* Top gradient band */}
              <div className={`relative h-28 bg-gradient-to-br ${accents[i % accents.length]} overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-light bg-grid-32 opacity-30" />
                <div className="absolute -right-6 -bottom-6 opacity-20">
                  <Icon name={area.icon} className="h-28 w-28 text-white" />
                </div>
                <div className="absolute left-6 top-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-inset ring-white/25 backdrop-blur">
                    <Icon name={area.icon} className="h-6 w-6" />
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-base font-bold leading-snug text-navy-900">
                  {area.title}
                </h3>
                <ul className="mt-4 grid gap-2">
                  {area.roles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-sm text-navy-600">
                      <Icon name="CheckCircle2" className="h-4 w-4 shrink-0 text-brand-500" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
