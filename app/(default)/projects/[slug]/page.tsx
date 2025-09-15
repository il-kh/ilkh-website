import type { Metadata } from 'next'
import { getProjects } from '@/components/md/utils'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CustomMD } from '@/components/md/md'
import ProjectSingleHero from '@/components/project-single-hero'

export async function generateStaticParams() {
  const allProjects = getProjects();

  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function SingleProject(
  props: {
    params: Promise<{ slug: string }>
  }
) {
  const params = await props.params;
  const project = getProjects().find((project) => project.slug === params.slug);

  if (!project) notFound();

  // Construct the "Implementation period" string
  const implementationPeriod = (() => {
    const startYear = project.metadata.dateStart
      ? new Date(String(project.metadata.dateStart)).getFullYear()
      : null;
    const endYear = project.metadata.dateEnd
      ? new Date(String(project.metadata.dateEnd)).getFullYear()
      : null;

    if (startYear && endYear && endYear > startYear) {
      return `Implementation period: ${startYear} to ${endYear}`;
    } else if (startYear && !endYear) {
      return `Implementation period: ${startYear}, ongoing`;
    } else if (startYear) {
      return `Implementation period: ${startYear}`;
    } else {
      return "Implementation period: Not specified";
    }
  })();

  return (
    <>
      <ProjectSingleHero
        headline={project.metadata.title}
        subline={implementationPeriod}
      />
      <section>
        {/* Large image */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40 pb-8">
            <div className="max-w-3xl mx-auto">
              {/* Article image */}
              {project.metadata.thumbnail && (
                <figure className="relative -mt-20 md:-mt-64 z-10">
                  <Image
                    className="w-full rounded-lg shadow-lg"
                    src={project.metadata.thumbnail}
                    width={768}
                    height={432}
                    priority
                    alt={project.metadata.title}
                  />
                </figure>
              )}
            </div>
          </div>
        </div>

        {/* Article content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <div className="mb-8">
              <article className="prose text-std max-w-none prose-lg prose-p:leading-normal prose-headings:text-std-heading prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:text-std prose-strong:text-std-bold prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
                <CustomMD source={project.content} />
              </article>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}