'use client';

import { useState, useEffect } from 'react';

export default function ContactContent() {
  const [emailHref, setEmailHref] = useState('javascript:void(0)');

  useEffect(() => {
    const obfuscated = "to-kh@";
    const realEmail = obfuscated
      .replace('-', 'lackner.')
      .replace('kh@', 'kh@gmail.com')
      .replace('to', 'mailto:inros');
    
    setEmailHref(realEmail);
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto pt-32 px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <div>
              <h2 className="headline headline-h2 mb-4">Contact</h2>
              <p className="text-std mb-6">
                We are here to assist you with any inquiries or project needs. Please feel free to reach out to us using the contact information below.
              </p>
              <div className="text-std mb-6">
                <strong>Inros Lackner (Cambodia) Co., Ltd.</strong><br />
                <span className="block mt-2">
                  #41, Street 588<br />
                  Sangkat Boeung Kak II,  Khan Toul Kork<br />
                  120408 Phnom Penh, Cambodia<br />
                </span>
                <span className="block mt-2">
                  <span className="font-semibold">Our location:</span>{" "}
                  <a href="https://maps.app.goo.gl/G4X5jaRZdSEJbyki7" target="_blank" className="text-gray-700 hover:underline">Google Maps</a>
                </span>
                <span className="block mt-2">
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:+855 23 984 284" className="text-gray-700 hover:underline">+855 23 984 284</a>{", "}
                  <a href="tel:+855 98 984 284" className="text-gray-700 hover:underline">+855 98 984 284</a>
                </span>
                <span className="block mt-2">
                  <span className="font-semibold">Email (Temporary contact):</span>{" "}
                  <a
                    href={emailHref}
                    className="text-gray-700 hover:underline"
                    rel="nofollow noindex"
                  >
                    click here
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}