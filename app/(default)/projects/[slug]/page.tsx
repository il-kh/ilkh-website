import type { Metadata } from 'next'
import { getProjects, getServices } from '@/components/md/utils'
import { notFound } from 'next/navigation'
import ProjectContent from '@/components/project-content'

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

  if (!project) return undefined;

  const { title, summary, thumbnail } = project.metadata;
  const description = summary
    ? String(summary).slice(0, 160).trimEnd()
    : project.content.replace(/^#+\s.+$/gm, '').replace(/[*_`#\[\]]/g, '').trim().slice(0, 160).trimEnd();

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${params.slug}/`,
    },
    openGraph: {
      title: `${title} | Inros Lackner Cambodia`,
      description,
      url: `https://inros-lackner.com.kh/projects/${params.slug}/`,
      images: thumbnail ? [{ url: thumbnail, alt: title }] : undefined,
    },
  };
}

export default async function SingleProject(
  props: {
    params: Promise<{ slug: string }>
  }
) {
  const params = await props.params;
  const project = getProjects().find((project) => project.slug === params.slug);
  const allServices = getServices();

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

  // Resolve metadata for services dynamically
  const servicesWithMetadata = (project.metadata.services ?? [])
    .map((service: { service: string }) => {
      const fullService = allServices.find((s) => s.slug === service.service);
      if (!fullService) return null;
      return {
        ...service,
        slug: fullService.slug,
        metadata: fullService.metadata,
      };
    })
    .filter((s): s is NonNullable<typeof s> => s !== null);

  return <ProjectContent project={project} implementationPeriod={implementationPeriod} allImages={allImages} servicesWithMetadata={servicesWithMetadata} />;
}