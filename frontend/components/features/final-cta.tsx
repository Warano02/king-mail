import Link from "next/link"

function FeaturesCTA() {
    return (
        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gray-950 px-6 py-20 text-center sm:px-10 lg:px-20 lg:py-24">
                <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
                <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-2xl">
                    <span className="text-sm font-medium text-indigo-400">
                        Ready when you are
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Your next email can start here.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                        Create from scratch, start with a template, or let AI help
                        you get moving. Either way, you're in control.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href="/auth"
                            className="w-full rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-gray-950 transition hover:bg-gray-100 sm:w-auto"
                        >
                            Start creating
                        </Link>

                        <Link
                            href="/templates"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
                        >
                            Explore templates
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesCTA
