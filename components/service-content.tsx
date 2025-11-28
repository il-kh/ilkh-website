'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CustomMD } from '@/components/md/md'
import ServiceSingleHero from '@/components/service-single-hero'

export default function ServiceContent({ service, allImages }: {
  service: any;
  allImages: string[];
}) {
  const [currentImage, setCurrentImage] = useState(service.metadata.thumbnail);

  return (
    <>
      <ServiceSingleHero
        headline={service.metadata.title}
        subline=""
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
                      alt={service.metadata.title}
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
                          alt={`${service.metadata.title} - Image ${index + 1}`}
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
                <CustomMD source={service.content} />
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}