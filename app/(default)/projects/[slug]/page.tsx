import type { Metadata } from 'next'
import { getProjects } from '@/components/md/utils'
import { notFound } from 'next/navigation'
import ProjectContent from '@/components/project-content'

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

  // Create array of all images (thumbnail + gallery)
  const allImages = [
    project.metadata.thumbnail,
    ...(project.metadata.gallery?.map(item => item.image) || [])
  ].filter(Boolean);

  return <ProjectContent project={project} implementationPeriod={implementationPeriod} allImages={allImages} />;
}