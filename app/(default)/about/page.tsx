export const metadata = {
  title: 'About - ILKH',
  description: 'Page description',
}

import IlkhHeroCompany from '@/components/ilkh-hero-company'
import Stats from '@/components/stats'
import Content from './content'
import TeamAndLocations from '@/components/team'

export default function About() {
  return (
    <>
      <IlkhHeroCompany />
      <Stats />
      <Content />
      <TeamAndLocations />
    </>
  )
}
