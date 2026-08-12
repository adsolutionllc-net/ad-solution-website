import { clients } from '@/data/content';
import { Icon } from '@/components/Icon';

export function ClientNetwork() {
  return (
    <section className="relative py-20 sm:py-24 bg-navy-50/50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow">
            <Icon name="Handshake" className="h-3.5 w-3.5" />
            Client & Vendor Network
          </span>
          <h2 className="reveal mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
            Trusted by leading clients & vendor partners
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-navy-600 text-pretty">
            We serve Fortune 500 enterprises, mid-market leaders, and consulting firms across
            financial services, healthcare, telecom, and technology.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className="reveal group flex items-center gap-3 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white p-2 ring-1 ring-inset ring-navy-100 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </span>
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-bold text-navy-900">{client.name}</p>
                <p className="truncate text-xs font-medium text-navy-400">{client.tag}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-sm text-navy-500">
          And 250+ additional vendor partners across the US IT staffing ecosystem.
        </p>
      </div>
    </section>
  );
}