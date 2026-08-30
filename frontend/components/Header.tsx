"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"
import { useState } from "react"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"

function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Templates", href: "/templates" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 md:px-8 lg:px-12">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/5 bg-white/85 px-5 py-3 shadow-sm backdrop-blur-xl md:px-6">
        <Link href="/" className="shrink-0">
          <Image src="/logo.png" alt="Logo" width={157} height={70} className=" object-contain" />
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
          className="group hidden items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-600 md:flex"
        >
          Get Started
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-100 md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu size={20} />
            </span>
          </DrawerTrigger>

          <DrawerContent className="px-5 pb-8 md:hidden">
            <DrawerHeader className="px-0 pb-4">
              <DrawerTitle className="text-left text-lg font-semibold">
                Menu
              </DrawerTitle>
            </DrawerHeader>

            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-950"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/auth"
                onClick={() => setOpen(false)}
                className="group mt-3 flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 py-3.5 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Get Started
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>

  )
}

export default Header
