export const metadata = {
  title: 'About Us',
  description: 'Inros Lackner (Cambodia) Co., Ltd. is a subsidiary of Inros Lackner SE, a leading German engineering group. We bring international engineering expertise and deep local knowledge to infrastructure, building, and environmental projects across Cambodia.',
  alternates: {
    canonical: '/about/',
  },
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
