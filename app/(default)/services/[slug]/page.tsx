import type { Metadata } from 'next'
import { getServices } from '@/components/md/utils'
import { notFound } from 'next/navigation'
import ServiceContent from '@/components/service-content'

export async function generateStaticParams() {
  const allServices = getServices();

  return allServices.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>
  }
): Promise<Metadata | undefined> {
  const params = await props.params;
  const service = getServices().find((service) => service.slug === params.slug);

  if (!service) return undefined;

  const { title, thumbnail } = service.metadata;
  // Use first 160 chars of body content as description fallback
  const rawDescription = service.content.replace(/^#+\s.+$/gm, '').replace(/[*_`#\[\]]/g, '').trim();
  const description = rawDescription.slice(0, 160).trimEnd();

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${params.slug}/`,
    },
    openGraph: {
      title: `${title} | Inros Lackner Cambodia`,
      description,
      url: `https://inros-lackner.com.kh/services/${params.slug}/`,
      images: thumbnail ? [{ url: thumbnail, alt: title }] : undefined,
    },
  };
}

export default async function SingleService(
  props: {
    params: Promise<{ slug: string }>
  }
) {
  const params = await props.params;
  const service = getServices().find((service) => service.slug === params.slug);

  if (!service) notFound();

  // Create array of all images (thumbnail + gallery)
  const allImages = [
    service.metadata.thumbnail,
    ...(service.metadata.gallery?.map(item => item.image) || [])
  ].filter(Boolean);

  return <ServiceContent service={service} allImages={allImages} />;
}