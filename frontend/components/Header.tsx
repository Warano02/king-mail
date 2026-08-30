"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"
import { useEffect, useState } from "react"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Templates", href: "/templates" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 md:px-8 lg:px-12">
      <nav
        className={`relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 md:px-6 ${scrolled
          ? "border border-black/5 bg-white/85 shadow-sm backdrop-blur-xl"
          : "border border-transparent bg-transparent shadow-none"
          }`}
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={157}
            height={70}
            className="object-contain"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${scrolled
                ? "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
                : "text-gray-700 hover:bg-black/5 hover:text-gray-950"
                }`}
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
          <DrawerTrigger>
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl border text-gray-700 transition md:hidden ${scrolled
                ? "border-gray-200 bg-white/80 hover:bg-gray-100"
                : "border-black/10 bg-white/20 hover:bg-white/40"
                }`}
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
