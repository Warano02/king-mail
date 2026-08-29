"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy", href: "/privacy" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 md:px-8 lg:px-12">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/5 bg-white/85 px-5 py-3 shadow-sm backdrop-blur-xl md:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={157}
            height={40}
            className="h-9 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-950"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/auth"
          className="group hidden items-center gap-2 rounded-xl bg-gray-950 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 md:flex"
        >
          Log In
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div
          className={`absolute left-0 top-[calc(100%+8px)] w-full overflow-hidden rounded-2xl border border-black/5 bg-white/95 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex flex-col p-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-950"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="group mt-2 flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 py-3 text-sm font-medium text-white"
            >
              Log In
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
