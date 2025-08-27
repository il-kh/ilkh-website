import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import AOSInit from '@/components/aos-init'
import { getCompetencies, getServiceClusters } from '@/components/md/utils'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const allCompetencies = getCompetencies();
  const allServiceClusters = getServiceClusters();

  const sortedCompetencies = allCompetencies.slice().sort(
    (a, b) => (a.metadata.order ?? 0) - (b.metadata.order ?? 0)
  );

  const sortedServiceClusters = allServiceClusters.slice().sort(
    (a, b) => (a.metadata.order ?? 0) - (b.metadata.order ?? 0)
  );

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <AOSInit />
      <Header allCompetencies={sortedCompetencies} allServiceClusters={sortedServiceClusters} />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}