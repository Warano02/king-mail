import Link from "next/link"
function AboutCTA() {
    return (
        <section className="w-full overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-indigo-600 px-6 py-20 text-center sm:px-10 lg:px-20 lg:py-24">
                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-2xl">
                    <span className="text-sm font-semibold text-indigo-100">
                        Ready when you are
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Your next email can start here.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
                        Find a template, make it yours, and send something you're
                        proud of.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href="/templates"
                            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
                        >
                            Browse templates
                        </Link>

                        <Link
                            href="/auth"
                            className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                            Start creating
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCTA
