import Image from 'next/image'
import Link from 'next/link'
import PartnerImage01 from '@/public/images/partners/groundsearch.png'

export default async function PartnerContent() {

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 md:pt-24 pb-8">
        <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0" data-aos="fade-up">
          {/* Content */}
          <div className="md:min-w-[30rem]" data-aos="fade-left">
            <div className="text-std border-l-2 border-slate-800 pl-4 mb-8">
              <a href="https://groundsearch.biz/">Groundsearch</a> is a company with 30 years of experience that helps people find things underground. They use special technologies to help engineers and people looking for resources like minerals and water. They also help people find underground hazards like voids and weak spots. They work with existing projects to map resources and find geological hazards. If you need help with something underground, contact Groundsearch.
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center items-center" data-aos="fade-right">
            <Link href="https://groundsearch.biz/" className="relative">
              <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
              <Image className="mx-auto md:max-w-none" src={PartnerImage01} width={540} height={405} alt="GroundSearch Asia"/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}