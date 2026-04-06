export const metadata = {
  title: 'Home - Inros Lackner Cambodia',
  description: 'Page description',
}

import IlkhHeroMain from '@/components/ilkh-hero-main'
import CompetencyTiles from '@/components/competency-tiles'
import IlkhAboutShort from '@/components/ilkh-about-short'
import ProjectShowcase from '@/components/project-showcase'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <IlkhHeroMain />
      <CompetencyTiles />
      <IlkhAboutShort />
      <ProjectShowcase />
      <Cta />
    </>
  )
}
