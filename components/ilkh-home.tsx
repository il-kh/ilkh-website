"use client";

import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  '/images/head_01.jpg',
  '/images/head_02.jpg',
  '/images/head_03.jpg',
]

export default function ilkhHome() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/1d0f7b9c1e8c-Header_1920x900_240703.jpg"
          alt="Header background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-[#002240]/60" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex items-center justify-center h-full">
          {/* ilkh content */}
          <div className="w-full">
            {/* Carousel */}
            <div className="overflow-hidden w-full rounded-lg shadow-lg">
              <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {images.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`Panorama ${i + 1}`}
                    width={960}
                    height={320}
                    className="w-full h-auto flex-shrink-0 opacity-80 filter grayscale"
                    priority={i === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}