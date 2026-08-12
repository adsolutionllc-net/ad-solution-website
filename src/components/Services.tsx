import { services } from '@/data/content';
import { Icon } from '@/components/Icon';

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-navy-50/50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow">
            <Icon name="Briefcase" className="h-3.5 w-3.5" />
            Our Services
          </span>
          <h2 className="reveal mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
            Staffing solutions for every hiring scenario
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-navy-600 text-pretty">
            From a single critical contractor to a full recruitment process outsourced engagement,
            we flex to how you hire — speed, quality, and transparency, every time.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="reveal card group relative overflow-hidden p-7 hover:-translate-y-1.5 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              {/* gradient accent on hover */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-100 to-accent-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 text-brand-300 shadow-lg shadow-navy-900/20 transition-transform duration-300 group-hover:scale-105">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>

              <h3 className="relative mt-5 font-display text-lg font-bold text-navy-900">
                {service.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-navy-600">
                {service.description}
              </p>

              <a
                href="#contact"
                className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                Learn more
                <Icon name="ArrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
