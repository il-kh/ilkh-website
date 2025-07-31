'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import IlkhCollageImage from '@/public/images/ilkh-collage-01.jpg'

export default function IlkhAboutShort() {

  const [tab, setTab] = useState<number>(1)

  return (
    <section className="relative">

      <div className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <p className="subline mb-4">Inros Lackner Cambodia</p>
            <h2 className="headline headline-h2 mb-4">Engineering for the Future of Cambodia since 2002</h2>
            <p className="text-std">
              INROS LACKNER (CAMBODIA) CO LTD (ILKH) is an affiliated 
              company of INROS LACKNR SE of Germany. ILKH was founded in 
              2002 in Phnom Penh and is an 100% foreign owned company under 
              the investment law of Cambodia. 
              ILKH has been providing civil and structural engineering services to 
              public and private sector clients in Cambodia, Vietnam and Germany 
              and currently employs 70 engineers and technicians.
            </p>
          </div>

          {/* Section content */}
          <div className="max-w-3xl mx-auto">
            <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
              <Image className="mx-auto shadow-2xl" src={IlkhCollageImage} width={768} height={474} alt="Features home 01" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}