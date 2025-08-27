import { getCompetencies } from '@/components/md/utils'
import CompetencySingleTile from './competency-single-tile';

export default function CompetencyTiles() {
  const allCompetencies = getCompetencies();

  // Sort competencies by the "order" field (ascending)
  const sortedCompetencies = allCompetencies.slice().sort(
    (a, b) => (a.metadata.order ?? 0) - (b.metadata.order ?? 0)
  );

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

            {/* Competency tiles */}
            {sortedCompetencies.map((competency) => (
              <CompetencySingleTile key={competency.slug} {...competency} />
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}