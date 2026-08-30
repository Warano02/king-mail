import Image from "next/image"

function ContactHero() {
    return (
        <section className="w-full overflow-hidden">
            <div className="relative flex min-h-140 w-full items-center justify-center bg-gray-950 px-5 py-24 sm:min-h-155 sm:px-8 lg:min-h-170 lg:px-12">
                <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85"
                    alt="People having a conversation around a table"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
                    <span className="text-sm font-semibold text-indigo-300">
                        Get in touch
                    </span>

                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Have a question?
                        <span className="block">
                            We'd love to hear from you.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7 lg:text-lg">
                        Whether you need help with King Mail, have an idea to
                        share, or simply want to talk about what you're building,
                        our inbox is open.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactHero
