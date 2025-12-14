'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CustomMD } from '@/components/md/md';
import ProjectSingleHero from '@/components/project-single-hero';
import Link from 'next/link';

interface Service {
  slug: string;
  metadata?: {
    title: string;
  };
}

export default function ProjectContent({ project, implementationPeriod, allImages, servicesWithMetadata }: {
  project: {
    metadata: {
      title: string;
      thumbnail: string;
      services?: Service[];
    };
    content: string;
  };
  implementationPeriod: string;
  allImages: string[];
  servicesWithMetadata: Service[];
}) {
  const [currentImage, setCurrentImage] = useState(project.metadata.thumbnail);

  return (
    <>
      <ProjectSingleHero
        headline={project.metadata.title}
        subline={implementationPeriod}
      />
      <section>
        {/* Large image */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40 pb-8">
            <div className="max-w-3xl mx-auto">
              {/* Article image */}
              {currentImage && (
                <figure className="relative -mt-20 md:-mt-64 z-10 mb-6 flex justify-center">
                  <div className="relative max-w-2xl max-h-96 md:max-h-[32rem] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      className="w-auto h-auto max-w-full max-h-96 md:max-h-[32rem] object-contain"
                      src={currentImage}
                      width={768}
                      height={432}
                      priority
                      alt={project.metadata.title}
                      key={currentImage}
                    />
                  </div>
                </figure>
              )}

              {/* Horizontal Gallery Below Image */}
              {allImages.length > 1 && (
                <div className="mb-2">
                  <div className="flex gap-3 overflow-x-auto pt-2 pb-6 scrollbar-hide justify-center">
                    {allImages.map((image, index) => (
                      <button
                        key={`${image}-${index}`}
                        onClick={() => setCurrentImage(image)}
                        className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-md ${
                          currentImage === image 
                            ? 'ring-4 ring-blue-500 shadow-md' 
                            : 'ring-1 ring-slate-200 hover:ring-slate-300'
                        }`}
                        aria-label={`View image ${index + 1}`}
                      >
                        <Image
                          src={image}
                          alt={`${project.metadata.title} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80px, 96px"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Article content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <article className="prose text-std max-w-none prose-lg prose-p:leading-normal prose-headings:text-std-heading prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:text-std prose-strong:text-std-bold prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
                <CustomMD source={project.content} />
              </article>
              {/* Services Section - Only show if there are services */}
              {servicesWithMetadata.length > 0 && (
                <div className="py-8 md:py-8">
                  <div className="py-8 md:py-8">
                    <h2 className="text-2xl font-bold mb-6">Related Services</h2>
                    <div className="flex flex-wrap gap-4">
                      {servicesWithMetadata.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 hover:text-gray-900 transition-colors duration-200"
                        >
                          {service.metadata?.title || 'Service title unavailable'}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}