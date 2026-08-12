import { Icon } from '@/components/Icon';
import { useAppNavigate } from '@/hooks/useAppNavigate';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Careers', href: '#openings' },
  { label: 'Employers', href: '#employers' },
  { label: 'Job Seekers', href: '#candidates' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'Contract Staffing', href: '#services' },
  { label: 'Contract-to-Hire', href: '#services' },
  { label: 'Direct Hire / Permanent', href: '#services' },
  { label: 'Offshore Recruitment', href: '#services' },
  { label: 'Recruitment Process Outsourcing', href: '#services' },
];

const contactStrip = [
  { icon: 'Phone', label: 'Call us', value: '+1 (973) 576-8963' },
  { icon: 'Mail', label: 'Email us', value: 'info@adsolutionllc.net' },
  { icon: 'MapPin', label: 'Visit us', value: 'BEVERWYCK RD Parsippany, NJ 07054' },
];

const socialLinks = [
  { icon: 'Linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/ad-solutionit/', external: true },
  { icon: 'Mail', label: 'Email', href: 'mailto:info@adsolutionllc.net', external: false },
  { icon: 'Phone', label: 'Phone', href: 'tel:+19735768963', external: false },
];

export function Footer() {
  const navigate = useAppNavigate();

  return (
    <footer className="relative bg-navy-950 text-navy-200">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="container-x py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <button type="button" onClick={() => navigate('home')} className="flex items-center gap-2">
              <img src="/adlogo.png" alt="AD Solution" className="h-12 w-12 object-contain" />
              <span className="font-display text-lg font-extrabold tracking-tight text-white">Solution</span>
            </button>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-300">
              We help organizations build high-performing technology teams by bringing specialized
              expertise and exceptional talent together where it matters most.
            </p>

            <p className="mt-4 max-w-sm text-sm font-bold leading-relaxed text-white">
              The right talent. The right expertise. The right impact.
            </p>

            <div className="mt-7 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-navy-200 ring-1 ring-inset ring-white/10 transition-all hover:bg-brand-600 hover:text-white hover:ring-brand-500"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 lg:col-span-8 lg:gap-14 lg:pl-28">
            <FooterCol title="Quick Links" links={quickLinks} navigate={navigate} />
            <FooterCol title="Services" links={serviceLinks} navigate={navigate} />
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-6">
          {contactStrip.map((c) => (
            <div key={c.label} className="flex items-center gap-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-brand-400 ring-1 ring-inset ring-white/10">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">{c.label}</p>
                <p className="mt-0.5 truncate text-sm font-medium text-white">{c.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-navy-400">
            © {new Date().getFullYear()} AD Solution. All rights reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  navigate,
}: {
  title: string;
  links: { label: string; href: string }[];
  navigate: (page: string, scrollTarget?: string) => void;
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <button
              type="button"
              onClick={() => navigate('home', link.href)}
              className="text-sm text-navy-300 transition-colors hover:text-brand-300"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}