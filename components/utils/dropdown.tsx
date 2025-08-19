'use client'

import { useRef, useState } from "react";
import { Transition } from '@headlessui/react'

type DropdownProps = {
  children: React.ReactNode;
  title: React.ReactNode;
};

export default function Dropdown({ children, title }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleFocusOut = (e: React.FocusEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.relatedTarget as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  return (
    <li
      className="group relative flex items-center"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div className="flex items-center">
        {title}
        <svg
          className="w-3 h-3 fill-current text-slate-400 dark:text-slate-500 cursor-pointer shrink-0 ml-1"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </div>
      <span className="absolute left-0 top-full origin-top-left"> 
        <Transition
          ref={dropdownRef}
          show={dropdownOpen}
          as="div"
          className="origin-top-left absolute top-full left-0 min-w-[12rem] w-max bg-white py-2 px-2 rounded-sm shadow-lg transform transition ease-out data-enter:data-closed:-translate-y-2 data-closed:opacity-0"
          onBlur={handleFocusOut}
        >
          {children}
        </Transition>
      </span>
    </li>
  )
}