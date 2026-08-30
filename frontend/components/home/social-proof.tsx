function SocialProof() {
    const points = [
        {
            title: "For marketers",
            description:
                "Move from an idea to a polished campaign without spending hours putting every detail together.",
        },
        {
            title: "For creators",
            description:
                "Create emails that feel like your brand instead of another generic newsletter.",
        },
        {
            title: "For teams",
            description:
                "Give everyone a simple place to create, edit, preview, and manage email content.",
        },
    ]

    return (
        <section className="overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold text-indigo-600">
                        Built for real work
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Less time fighting the editor.
                        <span className="block text-gray-400">
                            More time creating something people care about.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
                        Email creation should not feel like a technical project.
                        We are building a simpler way to turn ideas into emails
                        that are worth opening.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {points.map((point, index) => (
                        <div
                            key={point.title}
                            className="rounded-3xl border border-gray-200 bg-white p-7 sm:p-8"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-sm font-semibold text-gray-900">
                                0{index + 1}
                            </div>

                            <h3 className="mt-8 text-lg font-semibold text-gray-900">
                                {point.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 overflow-hidden rounded-3xl bg-gray-950 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-lg font-medium leading-8 text-white sm:text-xl">
                                “The best email tool is the one that gets out of
                                your way and lets you focus on the message.”
                            </p>

                            <p className="mt-4 text-sm text-gray-500">
                                Our approach to building the platform
                            </p>
                        </div>

                        <div className="flex shrink-0 items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-white/10" />

                            <div>
                                <div className="text-sm font-medium text-white">
                                    Simple by design
                                </div>

                                <div className="text-xs text-gray-500">
                                    Built around the creator
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialProof
