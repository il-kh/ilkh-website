export const metadata = {
  title: 'Service Clusters',
  description: 'Discover how ILKH organises its engineering services in Cambodia into focused clusters: design & planning, geotechnical field tests, digital design & analysis, engineering assessment, construction support, and environmental & geospatial services.',
  alternates: {
    canonical: '/service-clusters/',
  },
}

import IlkhHeroBlueGrad from '@/components/ilkh-hero-blue-grad'
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
      <IlkhHeroBlueGrad
        headline="Our Services"
        subline="Practical Engineering Skills That Drive Reliable, Cost-Effective Solutions."
        hrefText='Back to Home'
        hrefValue='/'
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
