export const metadata = {
  title: 'About - ILKH',
  description: 'Page description',
}

import Ilkh from '@/components/ilkh-about'
import Stats from '@/components/stats'
import Content from './content'
import TeamAndLocations from '@/components/team'

export default function About() {
  return (
    <>
      <Ilkh />
      <Stats />
      <Content />
      <TeamAndLocations />
    </>
  )
}
