export const metadata = {
  title: 'Competency - ILKH',
  description: 'Page description',
}

import Ilkh from './ilkh'
import Stats from '@/components/stats'
import Content from './content'
import RelatedStories from '@/components/related-stories'

export default function CompetencySingle() {
  return (
    <>
      <Ilkh />
      <Stats />
      <Content />
      <RelatedStories />
    </>
  )
}
