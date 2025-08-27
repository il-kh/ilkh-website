import Link from 'next/link'
import Image from 'next/image'

export default function ServiceClusterItem({ ...props }) {
  return (
    <article className="h-full flex flex-col space-y-5" data-aos="fade-up">
      <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
        {/* Content */}
        <div className="md:min-w-[30rem]" data-aos="fade-left">
          <h2 className="headline headline-h2 mb-4">
            <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href={`/services/${props.slug}`}>{props.metadata.title}</Link>
          </h2>
          <blockquote className="subline-large">{props.metadata.subline}</blockquote>
          <p className="text-std border-l-2 border-slate-800 pl-4 mb-8">{props.content}</p>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center" data-aos="fade-right">
          <Link href={`/services/${props.slug}`} className="group block focus:outline-none">
            <div className="relative flex flex-col items-center mb-4 md:mb-0 transition duration-300 ease-in-out group-hover:bg-[#002240] group-hover:text-white w-32 h-32 md:w-48 md:h-48">
              <Image
                src={props.metadata.icon}
                width={192}
                height={192}
                alt={props.metadata.title}
                className="object-contain group-hover:invert w-full h-full"
                priority
              />
            </div>
          </Link>
        </div>

      </div>
    </article>
  )
}
