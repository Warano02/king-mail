import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

function TemplatesCTA() {
    return (
        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-19">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 px-6 py-20 text-center sm:px-10 lg:px-20 lg:py-24">
                    <div className="absolute -left-32 -top-32 size-72 rounded-full bg-indigo-500/20 blur-3xl" />
                    <div className="absolute -bottom-32 -right-32 size-72 rounded-full bg-violet-500/20 blur-3xl" />

                    <div className="relative z-10 mx-auto max-w-2xl">
                        <span className="text-sm font-medium text-indigo-300">
                            Looking for something specific?
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Can't find the template you need?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                            Tell us what you are looking for. We are always
                            working on new templates and would love to hear
                            what would be useful to you.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                            >
                                Tell us what you need
                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>

                            <Link
                                href="/auth"
                                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
                            >
                                Start creating
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TemplatesCTA
