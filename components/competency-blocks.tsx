import Link from 'next/link'
import Image from 'next/image'
import Competency01 from '@/public/images/integrated-building-thumbnail.jpg'
import Competency02 from '@/public/images/infrastructure-thumbnail.jpg'
import Competency03 from '@/public/images/structural-thumbnail.jpg'
import Competency04 from '@/public/images/geotech-thumbnail.jpg'
import Competency05 from '@/public/images/project-mgnt-thumbnail.jpg'

export default function CompetencyBlocks() {  
  return (
    <section>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Competencies */}
          <div className="max-w-xl mx-auto md:max-w-none space-y-20">

            {/* Integrated Building Design */}
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="headline headline-h2 mb-4">
                  <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href="#">Integrated Building Design: The art and craft of designing a building is collaborative.</Link>
                </h2>
                <p className="text-std border-l-2 border-slate-800 pl-4 mb-8">Building requirements are becoming ever more complex, and demand the know-how of experts. Our architects and engineers combine in their daily workflow aesthetic, functionality and economic aspects. They plan and design well-engineered, modern structures and optimize the energy efficiency of buildings. For more than a decade we have rendered architectural and engineering design services for a range of projects including hospitals, schools, office buildings, hotels, commercial buildings and factories. Besides the “greenfield” projects, the rehabilitation and retro-fitting of existing buildings has been important part of our work.  
                  The combination of local expertise and international know-how allows us to develop responsive and cost-effective solutions for our clients.</p>
                <div className="space-y-3">
                  <svg className="fill-blue-600" width="20" height="16" viewBox="0 0 20 16">
                    <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                  </svg>
                  <blockquote className="font-playfair-display text-slate-500 italic">In theory, theory and practice are the same. In practice, they are not. (A. Einstein)</blockquote>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  <Image className="mx-auto md:max-w-none" src={Competency01} width={540} height={405} alt="Customer 01" />
                </div>
                <button className="absolute group">
                  <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                    <circle className="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
                    <path className="text-blue-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                  </svg>
                </button>
              </div>

            </div>

            {/* Infrastructure & Environment */}
            <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="headline headline-h2 mb-4">
                  <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href="#">Infrastructure & Environment: Infrastructure connects people</Link>
                </h2>
                <p className="text-std border-l-2 border-slate-800 pl-4 mb-8">Residential and commercial areas must be connected by roads and adequately supplied with water and energy. Wastewater and solid waste must be disposed of in an environmentally sound manner. We offer a wide range of services, from infrastructure development planning to rehabilitation of existing facilities.
                  Our transportation, railway and road experts are responsible for the quality of the transport infrastructure and any required development or extension measures. This includes planning of roads, railway tracks, bridges, tunnels and noise protection walls – the dominant elements of today's transport networks.</p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  <Image className="mx-auto md:max-w-none" src={Competency02} width={540} height={405} alt="Customer 02" />
                </div>
                <button className="absolute group">
                  <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                    <circle className="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
                    <path className="text-blue-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                  </svg>
                </button>
              </div>

            </div>

            {/* Structural Engineering & Building Assessment */}
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="headline headline-h2 mb-4">
                  <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href="#">Structural Engineering & Building Assessment: Structural integrity matters</Link>
                </h2>
                <p className="text-std border-l-2 border-slate-800 pl-4 mb-8">Already in the early stages of the design process, our structural engineers collaborate closely with architects and other specialists in developing the optimal design for your structure. With the help of FEM software, architectural visions and engineering diligence are transformed into structural designs. 3D models enable the proposed concepts to be visualised long before they become reality.
                  Rehabilitation and retrofitting of existing structures is often the most economic option for our Clients. The remodelling and structural rehabilitation of a building, or civil structure is a challenging and exiting task for our architects and engineers and requires years of collective experience.
                  We have carried out structural building surveys and assessments for private sector clients and publicly financed organisations in Cambodia for more than a decade. The structures surveyed range from the temples of Angkor to colonial buildings to contemporary reinforced concrete and steel structures. Our engineers have a wide range of investigation equipment at their disposal and years of experience in applying it. </p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  <Image className="mx-auto md:max-w-none" src={Competency03} width={540} height={405} alt="Customer 03" />
                </div>
                <button className="absolute group">
                  <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                    <circle className="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
                    <path className="text-blue-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                  </svg>
                </button>
              </div>

            </div>

            {/* Geotechnical Engineering */}
            <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="headline headline-h2 mb-4">
                  <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href="#">Geotechnical Engineering: The foundation for successful building work</Link>
                </h2>
                <p className="text-std border-l-2 border-slate-800 pl-4 mb-8">Structures and civil engineering works of all kinds, including roads, bridges and buildings, are typically founded on naturally occurring subsoil. An accurate assessment of subsoil conditions, and a subsequent specialist analysis of the consequences for the construction project, are essential prerequisites for stability and durability.
                  In addition to these services, we also offer stability analyses for earth structures such as dykes and embankments, including any necessary water flow calculations, and design special foundations, however complex. A new field of activity is consulting services in relation to offshore wind farms, including the required cabling.</p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  <Image className="mx-auto md:max-w-none" src={Competency04} width={540} height={405} alt="Customer 02" />
                </div>
                <button className="absolute group">
                  <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                    <circle className="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
                    <path className="text-blue-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                  </svg>
                </button>
              </div>

            </div>

            {/* Project and construction management */}
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="headline headline-h2 mb-4">
                  <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href="#">Project and construction management: Goal-oriented quality assurance</Link>
                </h2>
                <p className="text-std border-l-2 border-slate-800 pl-4 mb-8">Communication, documentation, transparency and technical expertise – these are the four pillars of our project management system. In concrete terms, this means that we, for example in the role of General Planner on your project, offer technical expertise covering the complete range of services in construction planning and design, up to and including approvals and construction management. We also facilitate improved communication between the involved parties, not only for increased openness and accountability but also for enhanced stability throughout the project’s duration. This enables us to ensure that the delivered solution will be sustainable and fully in line with client requirements, and that the project, guided by us from the initial concept to the final approval, will be completed on time and within budget.
                  The use of a modern quality gate approach sets new standards in project management. With the help of clearly defined quality criteria, the decision on whether or not to proceed to the next project phase is taken at quality gate meetings. We think in a process-oriented way, we proactively manage the planning, design and construction processes, we evaluate any external and internal influences and react accordingly, and we strive to add value in any way possible. In close cooperation with all other involved parties, we thus lead the project to a successful completion. </p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  <Image className="mx-auto md:max-w-none" src={Competency05} width={540} height={405} alt="Customer 03" />
                </div>
                <button className="absolute group">
                  <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                    <circle className="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
                    <path className="text-blue-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                  </svg>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}