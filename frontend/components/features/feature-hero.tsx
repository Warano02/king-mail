import Link from "next/link"

function FeaturesHero() {
    return (
        <section className="w-full">
            <div className="relative flex min-h-155 w-full items-center justify-center overflow-hidden bg-gray-900 px-5 py-24 text-center sm:min-h-170 sm:px-8 lg:min-h-190 lg:px-12">
                <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=85"
                    alt="A team working together around a laptop"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/55" />

                <div className="relative z-10 mx-auto w-full max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Everything you need to make emails people want to read.
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7 lg:text-lg">
                        From your first idea to the final preview, King Mail gives
                        you a simple place to create, customize, and perfect every
                        email you send.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href="/auth"
                            className="w-full rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 sm:w-auto"
                        >
                            Start creating
                        </Link>

                        <Link
                            href="/templates"
                            className="w-full rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
                        >
                            Explore templates
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesHero
