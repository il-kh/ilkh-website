import Link from 'next/link'
import Image from 'next/image'
import DateYear from '@/components/date-year'
import type { MarkdownItem, CompetencyMetadata } from '@/components/md/utils'

type ServiceItemProps = {
  allCompetencies?: MarkdownItem<CompetencyMetadata>[];
  [key: string]: any;
};

export default function ServiceItem({ allCompetencies = [], ...props }: ServiceItemProps) {

  return (
    <article className="h-full flex flex-col space-y-5" data-aos="fade-up">
      {props.metadata.thumbnail &&
        <Link className="block group overflow-hidden" href={`/services/${props.slug}`}>
          <Image className="w-full aspect-16/9 md:aspect-27/17 object-cover group-hover:scale-105 transition duration-700 ease-out" src={props.metadata.thumbnail} width={540} height={340} alt={props.metadata.title} />
        </Link>
      }
      <div className="grow flex flex-col">
        <header>
          <h3 className="headline headline-h2 mb-3">
            <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href={`/services/${props.slug}`}>{props.metadata.title}</Link>
          </h3>
        </header>
      </div>
    </article>
  )
}