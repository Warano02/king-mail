import Image from "next/image"

import { ArrowUpRight, Check } from "lucide-react"

function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Start with an idea",
            description:
                "Choose a template that fits your message, or start with a blank canvas when you already know what you want.",
        },
        {
            number: "02",
            title: "Make it yours",
            description:
                "Change the content, colors, images and layout until the email feels right for your brand.",
        },
        {
            number: "03",
            title: "Send with confidence",
            description:
                "Preview your email across devices, make the final adjustments, and get it ready for your audience.",
        },
    ]

    return (
        <section className="overflow-hidden bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
                    <div className="relative overflow-hidden rounded-3xl">
                        <Image
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
                            alt="People working together"
                            width={1400}
                            height={1050}
                            className="h-105 w-full object-cover sm:h-130"
                        />

                        <div className="absolute inset-0 bg-black/10" />

                        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm">
                            <div className="flex items-start gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white">
                                    <Check size={17} />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Ready to send
                                    </p>

                                    <p className="mt-1 text-sm leading-5 text-gray-500">
                                        Your email looks great on every screen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-sm font-semibold text-indigo-600">
                            How it works
                        </span>

                        <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            From a simple idea to an email worth opening.
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
                            Creating a beautiful email shouldn't feel like a
                            technical project. Everything you need is right
                            where you need it.
                        </p>

                        <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className="flex gap-5 py-6"
                                >
                                    <span className="shrink-0 pt-0.5 text-xs font-semibold tracking-wider text-gray-400">
                                        {step.number}
                                    </span>

                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            {step.title}
                                        </h3>

                                        <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/templates"
                            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
                        >
                            Find a template to get started

                            <ArrowUpRight
                                size={15}
                                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
