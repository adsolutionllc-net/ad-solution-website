import { useEffect, useState, useRef } from 'react';
import { Icon } from '@/components/Icon';

const navLinks = [
  { label: 'Home',        href: '#home',       page: 'home' },
  { label: 'About Us',    href: '#about',      page: 'home' },
  { label: 'Services',    href: '#services',   page: 'home' },
  { label: 'Employers',   href: '#employers',  page: 'home' },
  { label: 'Job Seekers', href: '#candidates', page: 'home' },
  { label: 'Contact',     href: '#contact',    page: 'home' },
];

type HeaderProps = {
  onNavigate?: (page: string, scrollTarget?: string) => void;
  activePage?: string;
};

export function Header({ onNavigate, activePage = 'home' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  function scrollTo(hash: string) {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function handleNavClick(link: (typeof navLinks)[number]) {
    setOpen(false);

    // Openings page
    if (link.page === 'openings') {
      onNavigate?.('openings');
      return;
    }

    // Home with a hash
    if (activePage === 'home') {
      // Already on home — just scroll
      if (link.href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (link.href) {
        scrollTo(link.href);
      }
    } else {
      // On a sub-page — navigate home, then scroll after mount
      onNavigate?.('home', link.href ?? undefined);
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-soft border-b border-navy-100/70'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between gap-4 py-3.5">
        {/* Logo */}
        <button
          type="button"
          onClick={() => {
          setOpen(false);
          onNavigate?.('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-0 shrink-0"
          aria-label="AD Solution home"
        >
          {/* <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-brand-300 shadow-lg shadow-navy-900/20 ring-1 ring-inset ring-white/10"> */}
            {/* <span className="font-display text-base font-extrabold leading-none tracking-tight">AD</span> */}
            <img
            src="/adlogo.png"
            alt="AD Solution"
            className="h-12 w-12 object-contain"
          />
          {/* </span> */}
          <span className="flex flex-col leading-none">
            <span className={`font-display text-lg font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-navy-900' : 'text-white'}`}>
              Solution
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5 xl:gap-1 min-w-0">
          {navLinks.map((link) => {
            const active = link.page !== 'home' && link.page === activePage;
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link)}
                className={`shrink-0 whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm ${
                  active
                    ? scrolled
                      ? 'bg-brand-50 text-brand-700'
                      : 'bg-white/15 text-white'
                    : scrolled
                    ? 'text-navy-700 hover:bg-navy-50 hover:text-navy-900'
                    : 'text-navy-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex shrink-0 items-center gap-2 xl:gap-3">
          <button
            type="button"
            onClick={() => onNavigate?.('openings')}
            className={`btn-primary inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 py-3 text-[13px] font-semibold transition-colors xl:px-5 xl:text-sm ${
              scrolled ? 'text-white-700 hover:bg-navy-50' : 'text-navy-100 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon name="Search" className="h-4 w-4" />
            Find Jobs
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('request-talent')}
            className="btn-primary shrink-0 whitespace-nowrap !px-4 !py-3 text-[13px] xl:!px-6 xl:text-sm"
          >
            Request Talent
            <Icon name="ArrowRight" className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden grid h-10 w-10 place-items-center rounded-xl ring-1 ring-inset transition-colors ${
            open || scrolled
              ? 'bg-navy-50 text-navy-800 ring-navy-200'
              : 'bg-white/10 text-white ring-white/20 hover:bg-white/20'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'X' : 'Menu'} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-navy-100 shadow-lift`}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50"
            >
              {link.label}
              <Icon name="ChevronRight" className="h-4 w-4 text-navy-300" />
            </button>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-3">
            <button type="button" onClick={() => { onNavigate?.('openings'); setOpen(false); }} className="btn-primary w-full">
              Find Jobs
            </button>
            <button type="button" onClick={() => { onNavigate?.('request-talent'); setOpen(false); }} className="btn-primary w-full">
              Request Talent
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
