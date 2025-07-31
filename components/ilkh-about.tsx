import Image from 'next/image'
import ilkhImage from '@/public/images/about-ilkh.jpg'
import TeamImage from '@/public/images/ilkh-team-01.jpg'

export default function ilkhAbout() {  
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-[#002240] pointer-events-none -z-10 mb-48 lg:mb-0 lg:h-[30rem]" aria-hidden="true">
        <div className="w-full h-full" data-aos="fade">
          <Image className="opacity-10 w-full h-full object-cover" src={ilkhImage} width={1440} height={497} priority alt="ilkh" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h1 className="headline headline-h1-light">We combine local expertise and international engineering know-how.</h1>
          </div>

          {/* ilkh image */}
          <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="100">
            <Image className="mx-auto w-full h-auto flex-shrink-0 filter saturate-50" src={TeamImage} width={1024} height={576} priority={false} alt="ILKH Team" />
          </div>

        </div>
      </div>
    </section>
  )
}