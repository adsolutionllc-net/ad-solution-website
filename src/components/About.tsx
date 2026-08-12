import { Icon } from '@/components/Icon';

const aboutImg = '/clients/employers.jpg';
const sideImg = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800';

const pillars = [
  { icon: 'Target', title: 'Specialized IT Focus', text: 'We recruit exclusively in technology — from software engineering to cybersecurity and platform delivery.' },
  { icon: 'Handshake', title: 'Partnership Mindset', text: 'We operate as an extension of your talent team, not a transactional vendor passing resumes.' },
  { icon: 'TrendingUp', title: 'Proven Outcomes', text: '1,000+ placements and a 98% client satisfaction rate across 100+ hiring partners nationwide.' },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative">
              <img
                src={aboutImg}
                alt="AD Solution recruitment team at work"
                className="rounded-3xl shadow-lift ring-1 ring-navy-100 object-cover w-full h-[440px]"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-6 hidden w-52 sm:block">
                <img
                  src={sideImg}
                  alt="Recruiter consulting with a candidate"
                  className="rounded-2xl shadow-lift ring-4 ring-white object-cover h-40 w-full"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-5 -left-5 hidden rounded-2xl bg-navy-900 px-5 py-4 text-white shadow-lift sm:block">
                <p className="font-display text-2xl font-extrabold leading-none">10+</p>
                <p className="mt-1 text-xs font-medium text-navy-200">Years in US IT staffing</p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="reveal eyebrow">
              <Icon name="Building2" className="h-3.5 w-3.5" />
              About AD Solution
            </span>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              Your trusted partner in US IT Recruitment & Staffing
            </h2>
            <p className="reveal mt-5 text-base leading-relaxed text-navy-600 text-pretty">
              AD Solution is a specialized IT recruitment and staffing firm focused on connecting organizations with highly skilled technology professionals. 
              Headquartered in New Jersey, we work with enterprises, mid-market companies, 
              and consulting organizations across the United States to address critical talent needs across today’s 
              evolving technology landscape.
            </p>
            <p className="reveal mt-4 text-base leading-relaxed text-navy-600 text-pretty">
             Our recruiters bring specialized knowledge across the technology domains we serve. 
             They understand the skills, technologies, and role requirements behind each search, 
             allowing us to identify qualified professionals, assess technical fit, 
             and deliver talent aligned with each organization’s goals. 
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="reveal rounded-2xl border border-navy-100 bg-navy-50/40 p-5"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-600 shadow-soft">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-display text-sm font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
