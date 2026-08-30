import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

function PricingCTA() {
    return (
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gray-950 px-6 py-16 text-center sm:px-10 sm:py-20">
                <div className="mx-auto max-w-2xl">
                    <span className="text-sm font-semibold text-indigo-400">
                        Start today
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Your next great email is closer than you think.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                        Create your first email, explore the templates, and see
                        what you can build with King Mail. Start free and upgrade
                        only when you need more.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href="/auth"
                            className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-100"
                        >
                            Start creating
                            <ArrowUpRight
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>

                        <Link
                            href="/templates"
                            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                            Browse templates
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingCTA
