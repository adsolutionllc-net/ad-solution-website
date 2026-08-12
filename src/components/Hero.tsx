import { Icon } from '@/components/Icon';

const heroImg =
  'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600';

const trustBadges = [
  { icon: 'ShieldCheck', label: 'Pre-screened candidates' },
  { icon: 'Clock', label: 'Avg. 5-day submission SLA' },
  { icon: 'Target', label: '98% client satisfaction' },
];

export function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28">
      {/* Background image with overlays */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Recruitment team collaborating in a modern office"
          className="h-full w-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-navy-800/85" />
        <div className="absolute inset-0 bg-grid-light bg-grid-32 opacity-40" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />
      </div>

      <div className="relative container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <h1 className="reveal mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              Connecting Top Technology Talent with{' '}
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent-300 bg-clip-text text-transparent">
                Leading Organizations
              </span>{' '}
              Across the United States
            </h1>

            <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-navy-100 text-pretty sm:text-lg">
              We bring deep technology expertise and a focused understanding of the talent market to help organizations build stronger teams, solve critical hiring needs, and stay ahead in a rapidly evolving industry.
            </p>

            <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onNavigate('request-talent')}
                className="btn-primary text-base"
              >
                Request Talent
                <Icon name="ArrowRight" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('openings')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 backdrop-blur transition-all duration-300 hover:bg-white/15 hover:ring-white/30"
              >
                Explore Jobs
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </button>
            </div>

            <ul className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {trustBadges.map((b) => (
                <li key={b.label} className="flex items-center gap-2 text-sm text-navy-100">
                  <Icon name={b.icon} className="h-4 w-4 text-brand-300" />
                  {b.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Floating card / visual */}
          <div className="lg:col-span-5">
            <div className="reveal relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/20 to-accent-500/10 blur-2xl" />
              <div className="relative rounded-3xl bg-white/10 p-2 ring-1 ring-inset ring-white/15 backdrop-blur-md shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Recruiters reviewing candidates"
                  className="h-72 w-full rounded-2xl object-cover sm:h-80"
                  loading="lazy"
                />
              </div>

              {/* Floating stat chip */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block animate-float-slow">
                <div className="rounded-2xl bg-white p-4 shadow-lift ring-1 ring-navy-100">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name="Users" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-xl font-extrabold text-navy-900">10,000+</p>
                      <p className="text-xs font-medium text-navy-500">Candidates in network</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating placement chip */}
              <div className="absolute -top-5 -right-4 hidden sm:block animate-float-slow [animation-delay:1.5s]">
                <div className="rounded-2xl bg-white p-3.5 shadow-lift ring-1 ring-navy-100">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-50 text-accent-600">
                      <Icon name="TrendingUp" className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-navy-900">1,000+ Placements</p>
                      <p className="text-[11px] text-navy-500">Delivered nationwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute inset-x-0 bottom-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full sm:h-16" aria-hidden="true">
          <path d="M0,40 C240,80 480,0 720,30 C960,60 1200,20 1440,50 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}