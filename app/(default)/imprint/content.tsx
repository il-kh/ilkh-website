'use client';

import { useState, useEffect } from 'react';

export default function ContactContent() {
  const [emailHref, setEmailHref] = useState('javascript:void(0)');

  useEffect(() => {
    const obfuscated = "to-/";
    const realEmail = obfuscated
      .replace('-', 'fo@')
      .replaceAll('-', '.')
      .replace('/', 'inros-lackner.com.kh')
      .replace('to', 'mailto:in');
    
    setEmailHref(realEmail);
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto pt-32 px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <div>
              <h2 className="headline headline-h2 mb-4">Imprint</h2>
              <div className="text-std mb-6">
                <strong>Publisher</strong><br />
                <span className="block mt-2">
                  Inros Lackner (Cambodia) Co., Ltd.<br />
                  #41, Street 588<br />
                  Sangkat Boeung Kak II,  Khan Toul Kork<br />
                  120408 Phnom Penh, Cambodia<br />
                </span>
                <span className="block mt-2">
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:+855 23 984 284" className="text-gray-700 hover:underline">+855 23 984 284</a>
                </span>
                <span className="block mt-2">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href={emailHref}
                    className="text-gray-700 hover:underline"
                    rel="nofollow noindex"
                  >
                    click here
                  </a>
                </span>
              </div>
              <div className="text-std mb-6">
                <strong>Court of registration</strong><br />
                <span className="block mt-2">
                  <span className="font-semibold">Ministry of Commerce registration number:</span>{" "}
                  <p>00014157</p>
                </span>
                <span className="block mt-2">
                  <span className="font-semibold">VAT TIN:</span>{" "}
                  <p>L001-100063306</p>
                </span>
              </div>
              <div className="text-std mb-6">
                <strong>Company management authorised to represent the company</strong><br />
                <span className="block mt-2">
                  Rainer Ernst Israel (Director)
                </span>
              </div>
              <div className="text-std mb-6">
                <strong>Non-liability</strong><br />
                <span className="block mt-2">
                  <p>All contents of this website have been carefully compiled and checked for mistakes. However, since the occurrence of mistakes cannot be ruled out, Inros Lackner (Cambodia) Co., Ltd. and it shareholders, associates and agents assume no liability for any damages or losses caused by the use of or any trust placed in information on this website. Changes and additions may be made at any time without advance notice.</p>
                  <p>All links have been checked for illegal or unlawful content, but due to the fact that the content available at such links is constantly being further developed, we take no responsibility for such content.</p>
                </span>
              </div>
              <div className="text-std mb-6">
                <strong>Copyright</strong><br />
                <span className="block mt-2">
                  <p>© Inros Lackner (Cambodia) Co.,Ltd.</p>
                  <p>All rights reserved. Text, pictures, graphics, animations and videos, and their presentation on the website of INROS LACKNER SE and INROS LACKNER CAMBODIA, are protected by copyright and other protection laws. The content of this website may not, for commercial purposes, be copied, disseminated, changed or made available to third parties. Some of the pictures on the website are subject to the copyright of third parties.</p>
                </span>
              </div>
              <div className="text-std mb-6">
                <strong>Data privacy</strong><br />
                <span className="block mt-2">
                  <p>As the operator of this website, we take the protection of your personal information very seriously. We handle your personal information in confidence and in accordance with the applicable legal data protection requirements and this data privacy statement. The use of our website is generally possible without providing personal information. Where personal information (e.g. name, address or email address) is collected, this is done, wherever possible, on a voluntary basis. Such data shall not be provided to third parties without your express approval.</p>
                  <p>We would advise that data transmission via the Internet (e.g. in email communications) can exhibit security vulnerabilities. Complete protection of data against third party access is not possible.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}