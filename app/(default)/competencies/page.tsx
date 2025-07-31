export const metadata = {
  title: 'Competencies - ILKH',
  description: 'Page description',
}

import CompetenciesIntro from '@/components/competencies-intro'
import CompetencyBlocks from '@/components/competency-blocks'

export default function Competencies() {
  return (
    <>
      <CompetenciesIntro />
      <CompetencyBlocks />
    </>
  )
}
