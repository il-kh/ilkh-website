export const metadata = {
  title: 'Competencies - ILKH',
  description: 'Page description',
}

import ILBlueGradHero from '@/components/il-blue-grad-hero'
import Content from './content'

export default function Partners() {

  return (
    <>
      <ILBlueGradHero
        headline="Our Partners"
        subline="Partnerships that add value to every project."
      />

      <section>
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Corporate Partners */}
            <div className="max-w-xl mx-auto md:max-w-none space-y-20">
              <>
                <Content />
              </>
            </div>
  
          </div>
        </div>
      </section>
    </>
  )
}
