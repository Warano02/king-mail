import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-around w-full py-16 text-sm bg-slate-50 text-gray-800/70 mt-5">
        <Image alt="logo" src={"/logo.png"} width={157} height={40} className="object-cover"/>
      <p className="mt-4 text-center">Copyright © {new Date().getFullYear()} <Link href="/">King Mail</Link>. All rights reservered.</p>
      <div className="flex items-center gap-4 mt-6">
        <Link href="#" className="font-medium text-gray-800 hover:text-black transition-all">
          Brand Guidelines
        </Link>
        <div className="h-4 w-px bg-black/20"></div>
        <Link href="#" className="font-medium text-gray-800 hover:text-black transition-all">
          Trademark Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer