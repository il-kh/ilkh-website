import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header({ mode = 'dark' }: {
  mode?: string
}) {
  return (
    <header className={"fixed top-0 left-0 w-full z-30 bg-white ${mode !== 'light' && 'dark'}"}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link href="/about" className="main-nav-item text-slate-800 dark:text-slate-400 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Company</Link>
              </li>
              <li>
                <Link href="/competencies" className="main-nav-item text-slate-800 dark:text-slate-400 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Competencies</Link>
              </li>
              <li>
                <Link href="#" className="main-nav-item text-slate-800 dark:text-slate-400 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Services</Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Projects">
                {/* 2nd level: hover */}
                <li>
                  <Link href="/projects" className="font-medium text-sm text-gray-600 hover:text-slate-600 flex py-2 px-5 leading-tight">Integrated Building Design</Link>
                </li>
                <li>
                  <Link href="/projects" className="font-medium text-sm text-gray-600 hover:text-slate-600 flex py-2 px-5 leading-tight">Infrastructure & Environment</Link>
                </li>
              </Dropdown>
            </ul>

            {/* Contact */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/contact" className="main-nav-item dark:text-slate-300 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group">
                  Contact <span className="tracking-normal text-slate-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
