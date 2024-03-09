"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navs = [
    {
      href: "/street",
      label: "Street",
    },
    {
      href: `/commercial`,
      label: "Commercial",
    },
    {
      href: "/food",
      label: "Food",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap py-6">
        <h1 className="font-bold text-xl">Piyush Gogawale</h1>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center  py-2 rounded text-black-500 hover:text-black-400"
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>
        <div
          className={`w-full block  lg:flex lg:w-auto lg:space-x-4  lg:bg-transparent  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navs.map((nav) => (
            <Link
              className="block mt-1 lg:inline-block hover:font-bold bg-gray-900 text-white px-2 py-1 rounded"
              key={nav.href}
              href={nav.href}
            >
              {nav.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
