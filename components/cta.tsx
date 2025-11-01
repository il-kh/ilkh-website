import Link from 'next/link'

export default function Cta() {
  return (
    <section id="cta" className="bg-slate-100">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="relative max-w-3xl mx-auto text-center">

            <div className="relative">
              <h2 className="headline headline-h2 mb-4">Shaping the Built Environment in Cambodia.</h2>
              <p className="text-std mb-8">
                ILKH has been providing civil and structural engineering services to public and private sector clients in Cambodia,
                Vietnam and Germany and offers a wide range of expertise,
                which has continuously been expanded throughout the company history. The company provides services in the fields of hydraulic
                engineering and port logistics, geotechnical investigations, integrated building design, energy and environmental engineering and infrastructure design.
                ILKH is a member of the GBC (German Business in Cambodia) and the European Chamber of Commerce in Cambodia.
              </p>
              <p className="text-std mb-8">
                Please click below on the thumbnails to <b>download</b> our company brochures and learn more about our services and projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative text-center group">
                  <a href="/documents/ILKH_Company_Profile_250822_Infrastructure.pdf" download>
                    <h2 className="headline headline-h2 mb-4 absolute top-10 left-1/2 -translate-x-1/2 !bg-white px-4 z-10">
                      Infra Brochure
                    </h2>
                    <img
                      src="/images/brochures/infra-thumbnail.jpg"
                      alt="Company Brochure Infra"
                      className="w-full max-w-[300px] h-auto mb-2 rounded shadow-lg group-hover:scale-105 transition duration-700 ease-out mx-auto"
                    />
                  </a>
                </div>
                <div className="relative text-center group">
                  <a href="/documents/ILKH_Company_Profile_250822_Buildings.pdf" download>
                    <h2 className="headline headline-h2 mb-4 absolute top-10 left-1/2 -translate-x-1/2 !bg-white px-4 z-10">
                      Buildings Brochure
                    </h2>
                    <img
                      src="/images/brochures/buildings-thumbnail.jpg"
                      alt="Company Brochure Buildings"
                      className="w-full max-w-[300px] h-auto mb-2 rounded shadow-lg group-hover:scale-105 transition duration-700 ease-out mx-auto"
                    />
                  </a>
                </div>
                <div className="relative text-center group">
                  <a href="/documents/ILKH_Construction_Quality_Assurance.pdf" download>
                    <h2 className="headline headline-h2 mb-4 absolute top-10 left-1/2 -translate-x-1/2 !bg-white px-4 z-10">
                      QA Brochure
                    </h2>
                    <img
                      src="/images/brochures/qa-thumbnail.jpg"
                      alt="Company Brochure QA Services"
                      className="w-full max-w-[300px] h-auto mb-2 rounded shadow-lg group-hover:scale-105 transition duration-700 ease-out mx-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}