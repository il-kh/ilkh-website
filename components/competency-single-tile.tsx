import Link from 'next/link'
import Image from 'next/image'

export default function CompetencySingleTile({ ...props }) {
  return (
    <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="100">
      <a href={`/competencies/${props.slug}`} className="group block focus:outline-none">
        <div className="relative flex flex-col items-center transition duration-300 ease-in-out group-hover:bg-[#002240] group-hover:text-white" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          <Image src={props.metadata.icon} width="164" height="164" alt={props.metadata.title} className="w-30 h-30 group-hover:invert"/>
          <span className="headline headline-h2 block mt-4 text-center transition duration-300 group-hover:invert group-hover:text-white">
            {props.metadata.title}
          </span>
        </div>
      </a>
    </div>
  )
}
