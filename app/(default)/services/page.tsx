import { getCompetencies, getServices } from '@/components/md/utils'
import ServiceItem from '@/components/service-item'
import ServicesHero from '@/components/services-hero';

export const metadata = {
  title: 'Services - ILKH',
  description: 'Page description',
}

export default function Services() {
  const allCompetencies = getCompetencies();
  const allServices = getServices();

  // Sort competencies by order
  const sortedCompetencies = allCompetencies.slice().sort(
    (a, b) => (a.metadata.order ?? 0) - (b.metadata.order ?? 0)
  );

  return (
    <>
      <ServicesHero />

      {/* All Services */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16 space-y-16">

            {/* Dynamic Competency Groups */}
            {sortedCompetencies.map((competency) => {
              // Filter services for this competency by value (slug)
              const servicesForCompetency = allServices.filter(
                (service) => service.metadata.competency === competency.metadata.value
              );
              if (servicesForCompetency.length === 0) return null;
              return (
                <div id={competency.metadata.value} key={competency.metadata.value}>
                  <h2 className="headline headline-h1 text-center md:text-left mb-8">{competency.metadata.title}</h2>
                  <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                    {servicesForCompetency.map((post) => (
                      <ServiceItem key={post.slug} {...post} allCompetencies={sortedCompetencies} />
                    ))}
                  </div>
                </div>
              );
            })}

            {/* See All Services */}
            <div className="text-center">
              <button className="btn text-white bg-blue-600 hover:bg-blue-700 group">
                See All Services <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}