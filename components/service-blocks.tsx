export default function ServiceBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* Lines decoration */}
            <div className="absolute inset-0 -my-8 md:-my-12 pointer-events-none hidden md:flex" aria-hidden="true">
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
            </div>

            {/* 1st item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="100">
              <a href="/competencies" className="group block focus:outline-none">
                <div className="relative flex flex-col items-center transition duration-300 ease-in-out group-hover:bg-[#002240] group-hover:text-white" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                  <svg viewBox="0 0 164 164" className="w-36 h-36 overflow-hidden group-hover:invert">
                    <image href="/icons/Integrated_building_design.svg" width="164" height="164" />
                  </svg>
                  <span className="headline block mt-4 text-center transition duration-300 group-hover:invert group-hover:text-white">
                    Integrated Building Design
                  </span>
                </div>
              </a>
            </div>

            {/* 2nd item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="100">
              <a href="/competencies" className="group block focus:outline-none">
                <div className="relative flex flex-col items-center transition duration-300 ease-in-out group-hover:bg-[#002240] group-hover:text-white" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                  <svg viewBox="0 0 164 164" className="w-36 h-36 overflow-hidden group-hover:invert">
                    <image href="/icons/Infrastrukturplanung_rgb.svg" width="164" height="164" />
                  </svg>
                  <span className="headline block mt-4 text-center transition duration-300 group-hover:invert group-hover:text-white">
                    Infrastructure & Environment
                  </span>
                </div>
              </a>
            </div>

            {/* 3rd item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="200">
              <a href="/competencies" className="group block focus:outline-none">
                <div className="relative flex flex-col items-center transition duration-300 ease-in-out group-hover:bg-[#002240] group-hover:text-white" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                  <svg viewBox="0 0 164 164" className="w-36 h-36 overflow-hidden group-hover:invert">
                    <image href="/icons/Tragwerksplanung_rgb.svg" width="164" height="164" />
                  </svg>
                  <span className="headline block mt-4 text-center transition duration-300 group-hover:invert group-hover:text-white">
                    Structural Engineering & Building Assessment
                  </span>
                </div>
              </a>
            </div>

            {/* 4th item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="300">
              <a href="/competencies" className="group block focus:outline-none">
                <div className="relative flex flex-col items-center transition duration-300 ease-in-out group-hover:bg-[#002240] group-hover:text-white" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                  <svg viewBox="0 0 164 164" className="w-36 h-36 overflow-hidden group-hover:invert">
                    <image href="/icons/Grundbau_Geotechnik_rgb.svg" width="164" height="164" />
                  </svg>
                  <span className="headline block mt-4 text-center transition duration-300 group-hover:invert group-hover:text-white">
                    Geotechnical Engineering & Ground Investigation
                  </span>
                </div>
              </a>
            </div>

            {/* 5th item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="400">
              <a href="/competencies" className="group block focus:outline-none">
                <div className="relative flex flex-col items-center transition duration-300 ease-in-out group-hover:bg-[#002240] group-hover:text-white" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                  <svg viewBox="0 0 164 164" className="w-36 h-36 overflow-hidden group-hover:invert">
                    <image href="/icons/Projektsteuerung_Baumanagement_rgb.svg" width="164" height="164" />
                  </svg>
                  <span className="headline block mt-4 text-center transition duration-300 group-hover:invert group-hover:text-white">
                    Project Management & Construction Supervision
                  </span>
                </div>
              </a>
            </div>

            {/* 6th item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="500">
              <a href="/competencies" className="group block focus:outline-none">
                <div className="relative flex flex-col items-center transition duration-300 ease-in-out group-hover:bg-[#002240] group-hover:text-white" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                  <svg viewBox="0 0 164 164" className="w-36 h-36 overflow-hidden group-hover:invert">
                    <image href="/icons/Geoinformationssysteme_Vermessung_rgb.svg" width="164" height="164" />
                  </svg>
                  <span className="headline block mt-4 text-center transition duration-300 group-hover:invert group-hover:text-white">
                    Surveying & Geo-Information Systems
                  </span>
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}