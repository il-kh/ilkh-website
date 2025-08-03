export default function ProjectsHero() {  
  return (
    <section className="relative">

      {/* Dark background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#002240] to-[#009cb4] pointer-events-none -z-10"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="headline headline-h1-light mb-4">Our Projects</h1>
            <p className="subline subline-h2-light mb-8">Explore our diverse range of projects that showcase our expertise and commitment to excellence.</p>
          </div>

        </div>
      </div>
    </section>
  )
}