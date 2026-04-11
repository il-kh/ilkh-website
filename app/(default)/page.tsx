export const metadata = {
  title: 'Inros Lackner Cambodia | Civil Engineering Consultancy',
  description: 'Inros Lackner Cambodia delivers multi-disciplinary engineering services in Cambodia: civil engineering, structural engineering, geotechnical investigations, topographic surveys, BIM, construction supervision, and infrastructure planning.',
  alternates: {
    canonical: '/',
  },
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
