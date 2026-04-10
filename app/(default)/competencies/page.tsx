export const metadata = {
  title: 'Engineering Competencies',
  description: 'Explore our core engineering competencies in Cambodia: structural engineering, geotechnical engineering, surveying & GIS, integrated building design, infrastructure & environment, and project management & construction supervision.',
  alternates: {
    canonical: '/competencies/',
  },
}

import IlkhHeroBlueGrad from '@/components/ilkh-hero-blue-grad'
import CompetencyItem from '@/components/competency-item';
import { getCompetencies } from '@/components/md/utils'

export default function Competencies() {
  const allCompetencies= getCompetencies();

  return (
    <>
      <IlkhHeroBlueGrad
        headline="Our Competencies"
        subline="Practical Engineering Skills That Drive Reliable, Cost-Effective Solutions."
        hrefText='Back to Home'
        hrefValue='/'
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
