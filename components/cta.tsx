import Link from 'next/link'

export default function Cta() {
  return (
    <section className="bg-slate-100">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="relative max-w-3xl mx-auto text-center">

            <div className="relative">
              <h2 className="headline headline-h2 mb-4">Shaping the Built Environment in Cambodia.</h2>
              <p className="text-std mb-8">
                ILKH has been providing civil and structural engineering services to public and private sector clients in Cambodia,
                Vietnam and Germany and offers a wide range of expertise,
                which has continuously been expanded throughout the company history. The company provides services in the fields of hydraulic
                engineering and port logistics, integrated building design, energy and environmental engineering and infrastructure design.
                ILKH is a member of the GBC (German Business in Cambodia) and the European Chamber of Commerce in Cambodia.
              </p>
              <p className="text-std mb-8">
                Please click below to download our company brochure and learn more about our services and projects.
              </p>
              <div>
                <a
                  className="btn text-[#0d0d0d] bg-white hover:text-[#f4f4f4] hover:bg-[#002240] group border border-black"
                  href="/documents/ILKH_Company%20Profile%20240715_infra.pdf"
                  download
                >
                  Company Brochure Infra
                  <span className="tracking-normal text-gray-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}