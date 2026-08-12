import { stats } from '@/data/content';
import { useCountUp } from '@/hooks/useScrollReveal';

function StatItem({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { value: current, ref } = useCountUp<HTMLParagraphElement>(value);

  const display =
    value >= 1000 ? `${(current / 1000).toFixed(current >= 10000 ? 0 : 1)}K` : current.toString();

  return (
    <div
      className="reveal rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p ref={ref} className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
        {display}
        <span className="text-brand-600">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-navy-500">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative -mt-10 sm:-mt-12 z-10">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
