import Image from "next/image"

function FeaturesAI() {
    return (
        <section className="overflow-hidden bg-gray-50 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <div className="order-2 max-w-xl lg:order-1">
                    <span className="text-sm font-semibold text-indigo-600">
                        Create with AI
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        You bring the idea. King Mail helps shape it.
                    </h2>

                    <p className="mt-6 text-base leading-7 text-gray-500 sm:text-lg">
                        Not sure how to structure your email? Tell King Mail what
                        you want to say and let AI help you turn your thoughts
                        into something clear, useful, and ready to customize.
                    </p>

                    <div className="mt-10 space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Start with a simple prompt
                            </h3>

                            <p className="mt-1.5 text-sm leading-6 text-gray-500">
                                Describe your goal, your audience, or simply what
                                you want your email to say.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Get a strong starting point
                            </h3>

                            <p className="mt-1.5 text-sm leading-6 text-gray-500">
                                Generate a structure and copy that you can edit,
                                rearrange, and make your own.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Keep control of the final result
                            </h3>

                            <p className="mt-1.5 text-sm leading-6 text-gray-500">
                                AI gets you moving faster, but you decide what
                                ultimately goes into your email.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="order-1 relative lg:order-2">
                    <div className="relative overflow-hidden rounded-3xl">
                        <div className="aspect-4/3">
                            <Image
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85"
                                alt="Creative team working together"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 55vw"
                            />
                        </div>

                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:left-8 sm:right-auto sm:max-w-sm">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-xs font-semibold text-indigo-600">
                                AI
                            </div>

                            <span className="text-xs font-medium text-gray-500">
                                Your assistant
                            </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-gray-700">
                            "Create a welcome email for new customers that feels
                            warm, simple, and personal."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesAI
