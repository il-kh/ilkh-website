import Link from 'next/link'
import Image from 'next/image'
import DateYear from '@/components/date-year'
import type { MarkdownItem, CompetencyMetadata } from '@/components/md/utils'

type ProjectItemProps = {
  allCompetencies?: MarkdownItem<CompetencyMetadata>[];
  [key: string]: any;
};

export default function ProjectItem({ allCompetencies = [], ...props }: ProjectItemProps) {
  // Find the competency title by value
  const competencyObj = allCompetencies.find(
    (c) => c.metadata.value === props.metadata.competency
  );
  const competencyTitle = competencyObj ? competencyObj.metadata.title : props.metadata.competency;

  return (
    <article className="h-full flex flex-col space-y-5" data-aos="fade-up">
      {props.metadata.thumbnail &&
        <Link className="block group overflow-hidden" href={`/projects/${props.slug}`}>
          <Image className="w-full aspect-16/9 md:aspect-27/17 object-cover group-hover:scale-105 transition duration-700 ease-out" src={props.metadata.thumbnail} width={540} height={340} alt={props.metadata.title} />
        </Link>
      }
      <div className="grow flex flex-col">
        <header>
          <h3 className="headline headline-h2 mb-3">
            <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href={`/projects/${props.slug}`}>{props.metadata.title}</Link>
          </h3>
        </header>
        <p className="subline-medium grow">{props.metadata.summary}</p>
        <footer className="flex items-center mt-4">
          <div>
            <a className="subline hover:text-blue-600 transition duration-150 ease-in-out" href="#0">{competencyTitle}</a>
            <span className="subline"> &#40; </span>
            <span className="subline">
              <DateYear dateString={props.metadata.dateStart} />
            </span>
            {props.metadata.dateEnd && new Date(props.metadata.dateEnd).getFullYear() > new Date(props.metadata.dateStart).getFullYear() ? (
              <>
                <span className="subline"> to </span>
                <span className="subline">
                  <DateYear dateString={props.metadata.dateEnd} />
                </span>
              </>
            ) : (
              !props.metadata.dateEnd ? (
                <span className="subline">, ongoing</span>
              ) : (
                <span className="subline"></span>
              )
            )}
            <span className="subline"> &#41;</span>
          </div>
        </footer>
      </div>
    </article>
  )
}