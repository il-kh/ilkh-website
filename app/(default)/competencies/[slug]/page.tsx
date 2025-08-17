import type { Metadata } from 'next'
import { getCompetencies, getProjects } from '@/components/md/utils'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CustomMD } from '@/components/md/md'
import ILBlueGradHero from '@/components/il-blue-grad-hero'

export async function generateStaticParams() {
  const allCompetencies = getCompetencies();

  return allCompetencies.map((competency) => ({
    slug: competency.slug,
  }))
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>
  }
): Promise<Metadata | undefined> {
  const params = await props.params;
  const competency = getCompetencies().find((competency) => competency.slug === params.slug);

  if (!competency) {
    return;
  }

  const { title, summary: description } = competency.metadata;

  return {
    title,
    description,
  };
}

export default async function SingleCompetency(
  props: {
    params: Promise<{ slug: string }>
  }
) {
  const params = await props.params;
  const competency = getCompetencies().find((competency) => competency.slug === params.slug);

  if (!competency) notFound();

  return (
    <>
      <ILBlueGradHero
        headline={competency.metadata.title}
        subline={competency.metadata.subline}
      />
      <section>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 md:pt-24 pb-8">
          <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0" data-aos="fade-up">
            {/* Content */}
            <div className="md:min-w-[30rem]" data-aos="fade-left">
              <div className="text-std border-l-2 border-slate-800 pl-4 mb-8">
                <CustomMD source={competency.content} />
              </div>
            </div>
            {/* Image */}
            <div className="flex justify-center items-center" data-aos="fade-right">
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                <Image className="mx-auto md:max-w-none" src={competency.metadata.image} width={540} height={405} alt={competency.metadata.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}