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