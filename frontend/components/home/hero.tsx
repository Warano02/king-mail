import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

function Hero() {
  return (
  <div className="bg-[url(/gradientBackground.png)] bg-cover bg-center text-sm text-gray-500">
        <div className="flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-12 text-center sm:px-6 lg:pb-24 lg:pt-36">
          <div className="mb-6 flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-gray-500/20 bg-white/40 p-1 pl-3 text-xs text-gray-700 shadow-sm backdrop-blur-sm sm:pl-4 sm:text-sm">
            <p>Create better emails, faster.</p>

            <Link
              href="/templates"
              className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-gray-500/20 bg-white px-3 py-1.5 transition hover:bg-gray-50"
            >
              <span>Explore templates</span>

              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Create beautiful emails.
            <span className="block text-indigo-600">
              Without starting from scratch.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl px-2 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 md:text-lg">
            Design, customize, and preview responsive emails with a powerful visual
            editor and full HTML & CSS control. From your first idea to a
            production-ready email, everything happens in one place.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3 pt-8 sm:w-auto sm:flex-row sm:gap-4">
            <Link
              href="/auth"
              className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/25 sm:w-auto"
            >
              Start creating for free
              <ArrowUpRight size={16} className="ml-2" />
            </Link>

            <Link
              href="/features"
              className="group flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-medium text-gray-700 transition-colors hover:text-gray-950 sm:w-auto"
            >
              See how it works
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-14 w-full max-w-6xl px-0 sm:mt-16 sm:px-4 lg:mt-20">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-1.5 shadow-2xl shadow-gray-900/10 backdrop-blur-md sm:rounded-3xl sm:p-2">
              <div className="overflow-hidden rounded-xl border border-black/5 bg-gray-50 sm:rounded-2xl">
                <div className="flex h-8 items-center gap-1.5 border-b border-black/5 bg-white px-3 sm:h-10 sm:px-4">
                  <span className="h-2 w-2 rounded-full bg-gray-300 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-gray-300 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-gray-300 sm:h-2.5 sm:w-2.5" />
                </div>

                <div className="flex aspect-video items-center justify-center bg-gray-100">
                  <span className="text-xs text-gray-400 sm:text-sm">
                    Email Studio Preview
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Hero