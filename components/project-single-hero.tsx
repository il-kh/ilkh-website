import Link from "next/link";

export default function ProjectSingleHero({
  headline,
  subline,
}: {
  headline: string;
  subline: string;
}) {
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
            <Link
              className="inline-flex font-semibold text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out group mb-2"
              href="/projects"
              data-aos="fade-down"
            >
              <span className="tracking-normal text-gray-400 group-hover:text-gray-200 group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">
                &lt;-
              </span>
              Back to Projects
            </Link>
            <h1 className="headline headline-h1-light mb-4">{headline}</h1>
            <p className="subline subline-h2-light mb-8">{subline}</p>
          </div>

        </div>
      </div>
    </section>
  )
}