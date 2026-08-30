import Image from "next/image"

function PricingHero() {
    return (
        <section className="w-full overflow-hidden">
            <div className="relative flex min-h-155 w-full items-center justify-center px-5 py-24 sm:min-h-170 sm:px-8 lg:min-h-180 lg:px-12">
                <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85"
                    alt="People working together around a table"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
                    <span className="text-sm font-semibold text-indigo-300">
                        Simple pricing
                    </span>

                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Choose how you want to create and send.
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg">
                        Start for free with your own SMTP configuration, or choose
                        a plan that gives you more room to create and lets King Mail
                        handle your email delivery.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href="#pricing"
                            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                        >
                            See plans
                        </a>

                        <a
                            href="/auth"
                            className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                            Start for free
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingHero
