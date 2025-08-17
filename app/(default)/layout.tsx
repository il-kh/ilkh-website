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

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <AOSInit />
      <Header allCompetencies={allCompetencies} allServiceClusters={allServiceClusters} />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}