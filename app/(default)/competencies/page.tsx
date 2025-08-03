export const metadata = {
  title: 'Competencies - ILKH',
  description: 'Page description',
}

import CompetenciesHero from '@/components/competency-hero'
import CompetencyBlocks from '@/components/competency-blocks'

export default function Competencies() {
  return (
    <>
      <CompetenciesHero />
      <CompetencyBlocks />
    </>
  )
}
