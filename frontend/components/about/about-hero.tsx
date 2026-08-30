import Image from "next/image"

function AboutHero() {
    return (
        <section className="w-full overflow-hidden">
            <div className="relative flex min-h-155 w-full items-center justify-center bg-gray-950 px-5 py-24 sm:min-h-170 sm:px-8 lg:min-h-180 lg:px-12">
                <Image
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85"
                    alt="A team working together"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
                    <span className="text-sm font-semibold text-indigo-300">
                        Why King Mail exists
                    </span>

                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Creating an email shouldn't be the end of the journey.
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7 lg:text-lg">
                        We built King Mail to bring everything together. Find a
                        starting point, make it yours, preview the result, and
                        send it without having to jump between different tools.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
