import { getProjects } from '@/components/md/utils'
import Link from 'next/link'
import Image from 'next/image'
import DateYear from '@/components/date-year'
import ProjectItem from '@/components/project-item'

export const metadata = {
  title: 'Projects - ILKH',
  description: 'Page description',
}

import ProjectsHero from '@/components/projects-hero'
import Tags from '@/components/project-tags'

export default function Projects() {
  const allProjects = getProjects();

  // Sort projects by date
  allProjects.sort((a, b) => {
    return (new Date(a.metadata.dateStart) > new Date(b.metadata.dateStart)) ? -1 : 1
  })
  
  // Slicing projects for demo purposes
  const featuredProject = allProjects[0]
  const latestProjects = allProjects.slice(1,4)
  const integrBuildDesignProjects = allProjects.filter(project => project.metadata.competency === 'Integrated Building Design')
  const infraEnviroProjects = allProjects.filter(project => project.metadata.competency === 'Infrastructure & Environment')
  const geotechnicalProjects = allProjects.filter(project => project.metadata.competency === 'Geotechnical Engineering')
  const projectManagementProjects = allProjects.filter(project => project.metadata.competency === 'Project Management & Construction Supervision')
  const surveyingProjects = allProjects.filter(project => project.metadata.competency === 'Surveying & Geo-Information Systems')

  return (
    <>
      <ProjectsHero />
      <Tags />

      {/* Featured project */}
      <section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16">

            <article className="max-w-sm mx-auto space-y-5 md:max-w-none md:flex md:items-center md:space-y-0 md:space-x-8 lg:space-x-16">
              {/* Image */}
              {featuredProject.metadata.thumbnail &&
                <Link className="relative block group overflow-hidden md:w-1/2" href={`/projects/${featuredProject.slug}`} data-aos="fade-down">
                  <Image className="w-full aspect-16/9 md:aspect-27/17 object-cover group-hover:scale-105 transition duration-700 ease-out" src={featuredProject.metadata.thumbnail} width={540} height={340} priority alt={featuredProject.metadata.title} />
                  <div className="absolute top-6 right-6">
                    <svg className="w-8 h-8" viewBox="0 0 32 32">
                      <circle className="fill-slate-900" fillOpacity=".48" cx="16" cy="16" r="16" />
                      <path className="fill-yellow-500" d="M21.954 14.29A.5.5 0 0 0 21.5 14h-5.36l.845-3.38a.5.5 0 0 0-.864-.446l-6 7A.5.5 0 0 0 10.5 18h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                    </svg>
                  </div>
                </Link>
              }
              {/* Content */}
              <div className="md:w-1/2" data-aos="fade-up">
                <header>
                  <h2 className="h4 md:text-4xl lg:text-5xl font-playfair-display mb-3">
                    <Link className="headline headline-h1 hover:underline hover:decoration-blue-100" href={`/projects/${featuredProject.slug}`}>{featuredProject.metadata.title}</Link>
                  </h2>
                </header>
                <p className="subline-large grow">{featuredProject.metadata.summary}</p>
                <footer className="flex items-center mt-4">
                  <div>
                    <a className="subline hover:text-blue-600 transition duration-150 ease-in-out" href="#0">{featuredProject.metadata.competency}</a>
                    <span className="subline"> &#40; </span>
                    <span className="subline">
                      <DateYear dateString={featuredProject.metadata.dateStart} />
                    </span>
                    {featuredProject.metadata.dateEnd && new Date(featuredProject.metadata.dateEnd).getFullYear() > new Date(featuredProject.metadata.dateStart).getFullYear() ? (
                      <>
                        <span className="subline"> to </span>
                        <span className="subline">
                          <DateYear dateString={featuredProject.metadata.dateEnd} />
                        </span>
                      </>
                    ) : (
                      !featuredProject.metadata.dateEnd ? (
                        <span className="subline">, ongoing</span>
                      ) : (
                        <span className="subline"></span>
                      )
                    )}
                    <span className="subline"> &#41;</span>
                  </div>
                </footer>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* All Projects */}
      <section className="bg-slate-50">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16 space-y-16">

            {/* Latest */}
            <div>
              <h2 className="headline headline-h1 text-center md:text-left mb-8">Latest</h2>

              {/* Projects container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {latestProjects.map((project, projectIndex) => (
                  <ProjectItem key={projectIndex} {...project} />
                ))}
              </div>
            </div>

            {/* Integrated Building Design */}
            <div id="integrated-building-design">
              <h2 className="headline headline-h1 text-center md:text-left mb-8">Integrated Building Design</h2>

              {/* Projects container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {integrBuildDesignProjects.map((post, projectIndex) => (
                  <ProjectItem key={projectIndex} {...post} />
                ))}
              </div>
            </div>

            {/* Infrastructure & Environment */}
            <div id="infrastructure-environment">
              <h2 className="headline headline-h1 text-center md:text-left mb-8">Infrastructure &amp; Environment</h2>

              {/* Projects container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {infraEnviroProjects.map((post, projectIndex) => (
                  <ProjectItem key={projectIndex} {...post} />
                ))}
              </div>
            </div>

            {/* Geotechnical Engineering */}
            <div id="geotechnical-engineering">
              <h2 className="headline headline-h1 text-center md:text-left mb-8">Geotechnical Engineering</h2>

              {/* Projects container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {geotechnicalProjects.map((post, projectIndex) => (
                  <ProjectItem key={projectIndex} {...post} />
                ))}
              </div>
            </div>

            {/* Project Management & Construction Supervision */}
            <div id="project-management-construction-supervision">
              <h2 className="headline headline-h1 text-center md:text-left mb-8">Project Management &amp; Construction Supervision</h2>

              {/* Projects container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {projectManagementProjects.map((post, projectIndex) => (
                  <ProjectItem key={projectIndex} {...post} />
                ))}
              </div>
            </div>

            {/* Surveying & Geo-Information Systems */}
            <div id="surveying-geo-information-systems">
              <h2 className="headline headline-h1 text-center md:text-left mb-8">Surveying &amp; Geo-Information Systems</h2>

              {/* Projects container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {surveyingProjects.map((post, projectIndex) => (
                  <ProjectItem key={projectIndex} {...post} />
                ))}
              </div>
            </div>

            {/* See All Projects */}
            <div className="text-center">
              <button className="btn text-white bg-blue-600 hover:bg-blue-700 group">
                See All Projects <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </button>
            </div>

          </div>

        </div>
      </section>      
    </>
  )
}
