import { Link } from 'react-router-dom';
import { featuredJobs } from '@/data/content';
import { Icon } from '@/components/Icon';

function JobCard({
  job,
  delay,
}: {
  job: (typeof featuredJobs)[number];
  delay: number;
}) {
  return (
    <article
      className="reveal card group flex flex-col p-6 hover:-translate-y-1.5 hover:shadow-lift"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
              {job.type}
            </span>
            {job.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                <Icon name="Star" className="h-3 w-3" />
                Featured
              </span>
            )}
          </div>
          <h3 className="mt-3 font-display text-lg font-bold text-navy-900 group-hover:text-brand-700 transition-colors">
            {job.title}
          </h3>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          <Icon name="Briefcase" className="h-5 w-5" />
        </span>
      </div>

      <dl className="mt-4 grid gap-2.5 text-sm">
        <div className="flex items-center gap-2 text-navy-600">
          <Icon name="MapPin" className="h-4 w-4 text-navy-400" />
          {job.location}
        </div>
        <div className="flex items-center gap-2 text-navy-600">
          <Icon name="Clock" className="h-4 w-4 text-navy-400" />
          {job.experience}
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-navy-50 px-2 py-1 text-xs font-medium text-navy-600 ring-1 ring-inset ring-navy-100"
          >
            {skill}
          </span>
        ))}
      </div>

      <Link
        to={`/openings/${job.id}`}
        className="btn-primary mt-6 w-full py-2.5 text-sm"
      >
        Apply Now
        <Icon name="ArrowRight" className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function FeaturedJobs({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section id="openings" className="relative py-20 sm:py-28 bg-navy-50/50">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="reveal eyebrow">
              <Icon name="Search" className="h-3.5 w-3.5" />
              Featured Open Positions
            </span>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              Hot roles we are hiring for right now
            </h2>
            <p className="reveal mt-4 text-base leading-relaxed text-navy-600 text-pretty">
              Browse a selection of our active US IT openings. Don't see your role? Submit your resume
              and we'll match you to the right opportunity.
            </p>
          </div>
          <button type="button" onClick={() => onNavigate('openings')} className="reveal btn-secondary shrink-0">
            View all openings
            <Icon name="ArrowUpRight" className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job, i) => (
            <JobCard key={job.id} job={job} delay={(i % 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
