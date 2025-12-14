import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <Link href="/" className="inline-flex text-slate-600 transition duration-150 ease-in-out" aria-label="ILKH">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <image href="/icons/IL_Logo_small.png" width="32" height="32" />
                </svg>
              </Link>
            </div>
            <div className="text-lg font-bold text-slate-800">Engineering for the Future of Cambodia.</div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">ILKH</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">Overview</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">Service Areas</a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Resources</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <Link href="/" className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Links</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="https://www.inros-lackner.de/en" target="_blank" className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">Inros Lackner SE</a>
              </li>
              <li>
                <a href="https://www.il-hilft.de/en" target="_blank" className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">Inros Lackner hilft</a>
              </li>
              <li>
                <a href="/partners" className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">Corporate Partners</a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Company</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="/contact" className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">Careers</a>
              </li>
              <li>
                <a href="/imprint" className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">Imprint</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">

          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out"
                href="https://www.linkedin.com/company/inros-lackner-cambodia"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 0h-15A2.5 2.5 0 0 0 0 2.5v15A2.5 2.5 0 0 0 2.5 20h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 0zm-11.25 17.5h-2.5v-8.75h2.5v8.75zm-1.25-10a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm12.5 10h-2.5v-4.375c0-1.042-.021-2.375-1.438-2.375-1.438 0-1.562 1.125-1.562 2.292v4.458h-2.5v-8.75h2.396v1.196h.034c.333-.625 1.146-1.292 2.354-1.292 2.521 0 2.988 1.667 2.988 3.833v5.013z"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out"
                href="https://www.facebook.com/inroslacknercambodia/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" />
                </svg>
              </a>
            </li>
            <li>
              <a className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out" href="#0" aria-label="Telegram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.96 2.336a.421.421 0 0 0-.291-.308 1.543 1.543 0 0 0-.788.054S1.358 8.194.358 8.87c-.215.145-.288.23-.324.33-.173.485.366.694.366.694l4.517 1.428a.506.506 0 0 0 .229-.013c1.026-.63 10.332-6.335 10.873-6.527.083-.024.148 0 .131.061-.215.732-8.257 7.664-8.301 7.706a.16.16 0 0 0-.06.143l-.422 4.28s-.176 1.331 1.196 0a38.082 38.082 0 0 1 2.374-2.11c1.553 1.041 3.224 2.192 3.945 2.794.245.23.576.354.916.342.426-.05.774-.35.876-.754 0 0 3.192-12.471 3.298-14.142.011-.162.025-.268.027-.38.005-.13-.008-.26-.04-.387Z" />
                </svg>
              </a>
            </li>
            <li>
              <a 
                className="text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out" 
                href="https://github.com/il-kh" 
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.041 0C4.52 0 0 4.612 0 10.25c0 4.526 2.845 8.37 6.862 9.737.502.085.669-.257.669-.513v-1.708c-2.761.598-3.347-1.367-3.347-1.367-.419-1.196-1.088-1.537-1.088-1.537-1.004-.598 0-.598 0-.598 1.004.085 1.506 1.025 1.506 1.025.92 1.537 2.343 1.11 2.929.854.084-.683.335-1.11.67-1.367-2.26-.256-4.603-1.11-4.603-5.039 0-1.11.419-2.05 1.004-2.733 0-.342-.418-1.367.168-2.733 0 0 .836-.257 2.76 1.025.838-.257 1.674-.342 2.511-.342.837 0 1.674.085 2.51.342 1.925-1.367 2.762-1.025 2.762-1.025.586 1.452.167 2.477.084 2.733.669.683 1.004 1.623 1.004 2.733 0 3.93-2.343 4.783-4.603 5.04.335.341.67.939.67 1.879v2.818c0 .256.167.598.67.513 4.016-1.367 6.86-5.21 6.86-9.737C20.084 4.612 15.565 0 10.042 0Z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-slate-500 mr-4">© Inros Lackner (Cambodia) Co.,Ltd. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
