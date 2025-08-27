export const metadata = {
  title: 'Competencies - ILKH',
  description: 'Page description',
}

import ILBlueGradHero from '@/components/il-blue-grad-hero'
import CompetencyItem from '@/components/competency-item';
import { getCompetencies } from '@/components/md/utils'

export default function Competencies() {
  const allCompetencies= getCompetencies();

  return (
    <>
      <ILBlueGradHero
        headline="Our Competencies"
        subline="Practical Engineering Skills That Drive Reliable, Cost-Effective Solutions."
      />

      <section>
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Competencies */}
            <div className="max-w-xl mx-auto md:max-w-none space-y-20">
              {allCompetencies.map((competency) => (
                <CompetencyItem key={competency.slug} {...competency} />
              ))}
  
            </div>
  
          </div>
        </div>
      </section>
    </>
  )
}
