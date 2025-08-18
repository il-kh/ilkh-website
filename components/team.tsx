import Image from 'next/image'
import TeamImage01 from '@/public/images/ilkh-team-02.jpg'
import TeamImage02 from '@/public/images/ilkh-team-03.jpg'
import TeamImage03 from '@/public/images/ilkh-team-04.jpg'
import LocationsImage from '@/public/images/il-locations.png'

export default function Team() {  
  return (
    <section className="bg-slate-100">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="headline headline-h2 font-playfair-display text-slate-800">Staff - International know-how and local expertise</h2>
            <p className="text-std mb-8">
              We currently have a team of more than 70 Cambodian and European engineers and technicians. 
              The combination international know-how and local expertise puts us in the position to develop appropriate, cost-efficient solutions for our clients. 
              At the same time our clients and partners profit from our inside knowledge and commitment to  Cambodian society. 
              Our engineers have a wide range of the latest hard and software at their disposal and years of experience in applying it.
            </p>
          </div>
        </div>
      </div>

      {/* Images container */}
      <div className="-ml-28 -mr-28 mb-8 md:mb-16">
        <div className="max-w-[1652px] mx-auto flex items-center space-x-2 md:space-x-4">
          <div className="relative w-1/3" data-aos="fade-right">
            <Image className="aspect-3/2 object-cover" src={TeamImage01} width={540} height={360} alt="Team 01" />
            <div className="absolute inset-0 bg-linear-to-r from-slate-100" aria-hidden="true"></div>
          </div>
          <div className="relative w-1/3" data-aos="fade">
            <Image className="aspect-3/2 object-cover" src={TeamImage02} width={540} height={360} alt="Team 02" />
          </div>
          <div className="relative w-1/3" data-aos="fade-left">
            <Image className="aspect-3/2 object-cover" src={TeamImage03} width={540} height={360} alt="Team 03" />
            <div className="absolute inset-0 bg-linear-to-l from-slate-100" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Line */}
          <div className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-300" aria-hidden="true"></div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="headline headline-h2 font-playfair-display text-slate-800">Locations and affiliated companies</h2>
            <p className="text-std mb-8">
              INROS LACKNER CAMBODIA (ILKH) is an affiliated company of INROS LACKNR SE of Germany. 
              This gives us access to a large pool of international experts of a company that has been serving international clients for more than eight decades.
            </p>
          </div>

          {/* Section content */}
          <div className="max-w-3xl mx-auto">
            <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
              <Image className="mx-auto shadow-2xl" src={LocationsImage} width={768} alt="Locations" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}