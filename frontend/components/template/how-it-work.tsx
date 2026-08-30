import Image from "next/image"

function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Pick something you like",
            description:
                "Start with a template that already feels close to what you want to say.",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
            alt: "People working together around a table"
        },
        {
            number: "02",
            title: "Make it yours",
            description:
                "Change the content, images, colors and layout until the email feels like your own.",
            image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",
            alt: "Person working on a laptop"
        },
        {
            number: "03",
            title: "Get it ready to send",
            description:
                "Preview your email, connect your SMTP configuration and send it when everything looks right.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
            alt: "Person using a laptop"
        }
    ]

    return (
        <section className="overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold text-indigo-600">
                        From template to inbox
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Creating an email can be this simple.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
                        Find a starting point, make a few changes, and get your
                        email ready to go without starting from a blank screen.
                    </p>
                </div>

                <div className="mt-16 grid gap-10 md:grid-cols-3 lg:mt-20 lg:gap-8">
                    {steps.map((step) => (
                        <article key={step.number} className="group">
                            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                                <div className="relative aspect-4/3 overflow-hidden">
                                    <Image
                                        src={step.image}
                                        alt={step.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/5" />

                                    <span className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur-sm">
                                        {step.number}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    {step.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
