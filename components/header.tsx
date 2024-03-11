"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navs = [
    {
      href: "/photos/street",
      label: "Street",
    },
    {
      href: "/photos/commercial",
      label: "Commercial",
    },
    {
      href: "/photos/food",
      label: "Food",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap py-6">
      <h1 className="font-bold text-2xl">Piyush Gogawale</h1>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center py-2 rounded text-black-500 hover:text-black-400"
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>
      <div
        className={`w-full block  lg:flex lg:w-auto lg:space-x-4  lg:bg-transparent  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {navs.map((nav) => {
          const isActive = pathname.startsWith(nav.href);
          console.log(isActive, pathname, nav.href);

          return (
            <Link
              className={`${
                isActive ? "font-bold" : ""
              } block mt-1 lg:inline-block hover:font-bold bg-gray-900 lg:bg-white text-white lg:text-black px-2 py-1 rounded`}
              key={nav.href}
              href={nav.href}
            >
              {nav.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
