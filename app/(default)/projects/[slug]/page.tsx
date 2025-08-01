import type { Metadata } from 'next'
import { getProjects } from '@/components/md/utils'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import DateMonthYear from '@/components/date-month-year'
import { CustomMD } from '@/components/md/md'
import Separator from '@/components/separator'

export async function generateStaticParams() {
  const allProjects = getProjects();

  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>
  }
): Promise<Metadata | undefined> {
  const params = await props.params;
  const project = getProjects().find((project) => project.slug === params.slug);

  if (!project) {
    return;
  }

  const { title, summary: description } = project.metadata;

  return {
    title,
    description,
  };
}

export default async function SingleProject(
  props: {
    params: Promise<{ slug: string }>
  }
) {
  const params = await props.params;
  const project = getProjects().find((project) => project.slug === params.slug);

  if (!project) notFound();

  return (
    <>
      <article>
        <header className="relative">

          {/* Dark background */}
          <div className="absolute inset-0 bg-[#002240] pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_70%,_0_70%)]" aria-hidden="true"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 md:pt-40 pb-8">
              <div className="max-w-3xl mx-auto">

                <div className="mb-8">
                  {/* Title and excerpt */}
                  <div className="text-center md:text-left">
                    <Link className="inline-flex font-semibold text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out group mb-2" href="/projects" data-aos="fade-down"><span className="tracking-normal text-blue-600 group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">&lt;-</span> Back to Projects</Link>
                    <h1 className="h2 font-playfair-display text-slate-100 mb-6">{project.metadata.title}</h1>
                  </div>
                  {/* Project meta */}
                  <div className="md:flex md:items-center md:justify-between mt-3" data-aos="fade-up">
                    {/* Date meta */}
                    <div className="flex items-center justify-center">
                      <div>
                        <span className="text-slate-600">Implementation period: </span>
                        <span className="text-slate-400">
                          <DateMonthYear dateString={project.metadata.dateStart} />
                        </span>
                        <span className="text-slate-600"> to </span>
                        <span className="text-slate-400">
                          {project.metadata.dateEnd
                            ? <DateMonthYear dateString={project.metadata.dateEnd} />
                            : "ongoing"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article image */}
                {project.metadata.thumbnail &&
                  <figure>
                    <Image className="w-full" src={project.metadata.thumbnail} width={768} height={432} priority alt={project.metadata.title} />
                  </figure>
                }

              </div>
            </div>
          </div>
        </header>

        {/* Article content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <div className="mb-8">
              <article className="prose text-lg text-slate-500 max-w-none prose-lg prose-p:leading-normal prose-headings:font-playfair-display prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-slate-900 prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
                <CustomMD source={project.content} />
              </article>
            </div>

          </div>
        </div>
      </article>
      
    </>
  )
}