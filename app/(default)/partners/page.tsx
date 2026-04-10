export const metadata = {
  title: 'Our Partners',
  description: 'ILKH works with trusted local and international partners to deliver high-quality engineering projects across Cambodia. Explore our strategic partnerships in infrastructure, building design, and environmental services.',
  alternates: {
    canonical: '/partners/',
  },
}

import IlkhHeroBlueGrad from '@/components/ilkh-hero-blue-grad'
import Content from './content'

export default function Partners() {

  return (
    <>
      <IlkhHeroBlueGrad
        headline="Our Partners"
        subline="Partnerships that add value to every project."
        hrefText='Back to Home'
        hrefValue='/'
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
