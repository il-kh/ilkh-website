import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block text-blue-600 transition duration-150 ease-in-out" aria-label="Inros Lackner (Cambodia) Co.,Ltd.">
      <svg className="w-64 h-32 fill-current" viewBox="0 0 164 32" xmlns="http://www.w3.org/2000/svg">
        <image href="/icons/II_Logo_address_wide.png" width="164" />
      </svg>
    </Link>
  )
}
