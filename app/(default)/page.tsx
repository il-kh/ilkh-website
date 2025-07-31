export const metadata = {
  title: 'Home - Inros Lackner Cambodia',
  description: 'Page description',
}

import IlkhHome from '@/components/ilkh-home'
import ServiceBlocks from '@/components/service-blocks'
import IlkhAboutShort from '@/components/ilkh-about-short'
import ProjectShowcase from '@/components/project-showcase'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <IlkhHome />
      <ServiceBlocks />
      <IlkhAboutShort />
      <ProjectShowcase />
      <Cta />
    </>
  )
}
