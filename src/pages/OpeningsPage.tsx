import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/Icon';
import { allJobs, type Job } from '@/data/content';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


const EMPLOYMENT_FILTERS = ['All', 'Contract', 'Contract-to-Hire', 'Permanent'];
const LOCATION_FILTERS = ['All Locations', 'On-site', 'Hybrid', 'Remote'];

function matchesLocation(job: Job, filter: string): boolean {
  if (filter === 'All Locations') return true;
  const loc = job.location.toLowerCase();
  if (filter === 'Remote') return loc.includes('remote');
  if (filter === 'Hybrid') return loc.includes('hybrid');
  if (filter === 'On-site') return !loc.includes('remote') && !loc.includes('hybrid');
  return true;
}

function JobCard({ job }: { job: Job }) {
  const typeColor =
    job.type === 'Contract'
      ? 'bg-brand-50 text-brand-700 ring-brand-100'
      : job.type === 'Contract-to-Hire'
      ? 'bg-accent-50 text-accent-700 ring-accent-100'
      : 'bg-emerald-50 text-emerald-700 ring-emerald-100';

  return (
    <article className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-start justify-between gap-3">
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

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-navy-900 group-hover:text-brand-700 transition-colors leading-snug">
          {job.title}
        </h3>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-600 ring-1 ring-inset ring-navy-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          <Icon name="Briefcase" className="h-5 w-5" />
        </span>
      </div>

      <dl className="mt-4 flex flex-col gap-2 text-sm text-navy-600">
        <div className="flex items-center gap-2">
          <Icon name="MapPin" className="h-4 w-4 shrink-0 text-navy-400" />
          {job.location}
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Clock" className="h-4 w-4 shrink-0 text-navy-400" />
          {job.experience} experience
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {job.skills.map((s) => (
          <span key={s} className="rounded-md bg-navy-50 px-2 py-1 text-xs font-medium text-navy-600 ring-1 ring-inset ring-navy-100">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-2">
        <Link
          to={`/openings/${job.id}`}
          className="btn-primary flex-1 py-2.5 text-sm"
        >
          Apply Now
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function OpeningsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [typeFilter, setTypeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [search, setSearch] = useState('');

  const filtered = allJobs.filter((j) => {
    const matchType = typeFilter === 'All' || j.type === typeFilter;
    const matchLoc = matchesLocation(j, locationFilter);
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      j.title.toLowerCase().includes(q) ||
      j.skills.some((s) => s.toLowerCase().includes(q)) ||
      j.location.toLowerCase().includes(q);
    return matchType && matchLoc && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} activePage="openings" />

      {/* Hero banner */}
      <section className="relative overflow-hidden bg-navy-900 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-light bg-grid-32 opacity-30" />
        <div className="absolute inset-0 bg-radial-fade opacity-60" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" />

        <div className="relative container-x text-center">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-navy-300">
            <button type="button" onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <Icon name="ChevronRight" className="h-4 w-4 text-navy-500" />
            <span className="font-semibold text-brand-400">Job Openings</span>
          </nav>

          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            Find a Job That{' '}
            <span className="text-brand-400">Truly Fits You</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-200 text-pretty sm:text-lg">
            AD Solution connects skilled IT professionals with the right employers.
            Every opening is screened, verified, and actively hiring — so you apply with confidence.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: 'ShieldCheck', label: 'Screened & Verified Positions' },
              { icon: 'Zap', label: 'Fast Response from Employers' },
              { icon: 'Building2', label: '100+ Hiring Companies' },
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

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#jobs-grid"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5"
            >
              <Icon name="Search" className="h-5 w-5" />
              View Open Roles
            </a>
            <button
              type="button"
              onClick={() => onNavigate('resume')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:bg-brand-700 hover:-translate-y-0.5"
            >
              <Icon name="Send" className="h-5 w-5" />
              Send Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Jobs grid */}
      <section id="jobs-grid" className="py-16 sm:py-20">
        <div className="container-x">
          {/* Section label */}
          <div className="mb-10 text-center">
            <span className="eyebrow">
              <Icon name="Building2" className="h-3.5 w-3.5" />
              Current Openings
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Explore Open Job Positions
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-navy-600">
              All listed positions are with verified employers across industries. Browse, apply, and
              let AD Solution connect you to your next career move.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Icon name="Search" className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
              <input
                type="search"
                placeholder="Search by role, skill, or location…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-navy-200 bg-white py-2.5 pl-10 pr-4 text-sm text-navy-900 placeholder:text-navy-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {EMPLOYMENT_FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setTypeFilter(f)}
                  className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    typeFilter === f
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                  }`}
                >
                  {f}
                </button>
              ))}
              <span className="mx-1 w-px self-stretch bg-navy-200" />
              {LOCATION_FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setLocationFilter(f)}
                  className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    locationFilter === f
                      ? 'bg-navy-800 text-white shadow-sm'
                      : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p className="mb-6 text-sm text-navy-500">
            Showing <span className="font-semibold text-navy-800">{filtered.length}</span> position{filtered.length !== 1 ? 's' : ''}
            {typeFilter !== 'All' || locationFilter !== 'All Locations' || search ? ' matching your filters' : ''}
          </p>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-navy-100 bg-navy-50 py-16 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-100 text-navy-400">
                <Icon name="SearchX" className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-navy-800">No positions match your filters</p>
                <p className="mt-1 text-sm text-navy-500">Try different keywords or clear the filters above.</p>
              </div>
              <button
                type="button"
                onClick={() => { setTypeFilter('All'); setLocationFilter('All Locations'); setSearch(''); }}
                className="btn-secondary py-2 text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-14 rounded-3xl bg-navy-900 p-8 text-center sm:p-12">
            <div className="mx-auto max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300 ring-1 ring-inset ring-white/15">
                <Icon name="Send" className="h-3.5 w-3.5" />
                Don't see your role?
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-white sm:text-3xl">
                Send us your resume anyway
              </h3>
              <p className="mt-3 text-base text-navy-200">
                Our recruiters actively match candidates to new openings every week. We'll keep your profile on file and reach out the moment the right role comes up.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('resume')}
                className="btn-primary mt-6"
              >
                Submit Your Resume
                <Icon name="ArrowRight" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  );
}
