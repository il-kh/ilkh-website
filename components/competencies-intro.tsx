import Image from 'next/image'
import CompetencyMainImage from '@/public/images/competencies-main.jpg'

export default function CompetenciesIntro() {  
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-[#002240] pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_50%,_0_50%)]" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h1 className="headline headline-h1-light mb-4">Our Competencies</h1>
            <p className="subline subline-h2-light">Practical Engineering Skills That Drive Reliable, Cost-Effective Solutions.</p>
          </div>

        </div>
      </div>
    </section>
  )
}