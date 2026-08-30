import Image from "next/image"

function AboutSolution() {
    return (
        <section className="w-full overflow-hidden bg-slate-50 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold text-indigo-600">
                        The King Mail approach
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                        Everything comes together in one place.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
                        Pick a starting point, shape your email exactly the way you
                        want, see how it looks, and get it ready to send without
                        constantly switching between tools.
                    </p>
                </div>

                <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl sm:mt-20">
                    <div className="absolute inset-0 bg-linear-to-br from-indigo-50/60 via-transparent to-violet-50/50" />

                    <div className="relative p-3 sm:p-5 lg:p-8">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=85"
                                alt="Email design workspace"
                                width={1800}
                                height={1100}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid gap-8 border-t border-gray-200 pt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:pt-16">
                    <div>
                        <span className="text-sm font-semibold text-gray-950">
                            01
                        </span>

                        <h3 className="mt-3 text-lg font-semibold text-gray-950">
                            Start with an idea
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Choose a template that fits your message or start from
                            scratch when you already know what you want to create.
                        </p>
                    </div>

                    <div>
                        <span className="text-sm font-semibold text-gray-950">
                            02
                        </span>

                        <h3 className="mt-3 text-lg font-semibold text-gray-950">
                            Make it yours
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Build and customize your email visually, or work directly
                            with the HTML and CSS when you want complete control.
                        </p>
                    </div>

                    <div>
                        <span className="text-sm font-semibold text-gray-950">
                            03
                        </span>

                        <h3 className="mt-3 text-lg font-semibold text-gray-950">
                            Send when it is ready
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Preview the final result and send your email without
                            leaving the workflow you used to create it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSolution
