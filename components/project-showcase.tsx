import Image from 'next/image'
import Link from 'next/link'
import { getProjects } from '@/components/md/utils'

export default function ProjectShowcase() {
  // Get all projects
  const allProjects = getProjects();

  // Filter for showcase projects
  const showcaseProjects = allProjects
    .filter(project => project.metadata.isShowcase)
    .sort((a, b) => new Date(b.metadata.dateStart).getTime() - new Date(a.metadata.dateStart).getTime())
    .slice(0, 3);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[#002240] pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_100%,_0_100%)] h-96 md:h-auto md:mb-64" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="headline headline-h1-light">Project Showcase</h2>
          </div>
          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-10 items-start">
            {showcaseProjects.map((project, idx) => (
              <article key={project.slug} data-aos="fade-up" data-aos-delay={idx * 100}>
                <Link className="relative block group mt-8 mb-4 overflow-hidden" href={`/projects/${project.slug}`}>
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div>
                  <div className="overflow-hidden">
                    <Image
                      className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={project.metadata.thumbnail}
                      width={342}
                      height={342}
                      alt={project.metadata.title}
                    />
                  </div>
                </Link>
                <h3 className="h4 font-playfair-display mb-2">
                  <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href={`/projects/${project.slug}`}>
                    {project.metadata.title}
                  </Link>
                </h3>
                <p className="text-lg text-slate-500">{project.metadata.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}