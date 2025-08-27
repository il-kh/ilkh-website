export const metadata = {
  title: 'Services - ILKH',
  description: 'Page description',
}

import ILBlueGradHero from '@/components/il-blue-grad-hero'
import ServiceClusterItem from '@/components/servicecluster-item';
import { getServiceClusters } from '@/components/md/utils'

export default function ServiceClusters() {
  const allServiceClusters = getServiceClusters();

  // Sort service clusters by the "order" field (ascending)
  const sortedServiceClusters = allServiceClusters.slice().sort(
    (a, b) => (a.metadata.order ?? 0) - (b.metadata.order ?? 0)
  );

  return (
    <>
      <ILBlueGradHero
        headline="Our Services"
        subline="Practical Engineering Skills That Drive Reliable, Cost-Effective Solutions."
      />

      <section>
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Service Clusters */}
            <div className="max-w-xl mx-auto md:max-w-none space-y-20">

              {sortedServiceClusters.map((serviceCluster) => (
                <ServiceClusterItem key={serviceCluster.slug} {...serviceCluster} />
              ))}
  
            </div>
  
          </div>
        </div>
      </section>
    </>
  )
}
