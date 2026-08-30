
function Story() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <div className="relative">
                        <div className="overflow-hidden rounded-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                                alt="Team collaborating around a table"
                                className="h-105 w-full object-cover sm:h-130"
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-4 hidden w-52 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:block">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 5h16v14H4V5Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="m4 7 8 6 8-6"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Email ready
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Designed your way
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xl">
                        <span className="text-sm font-semibold text-indigo-600">
                            Made for creators
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Your ideas deserve better emails.
                        </h2>

                        <p className="mt-6 text-base leading-7 text-gray-500 sm:text-lg">
                            Whether you're launching a product, keeping customers updated, or
                            simply sharing something worth reading, create emails that feel
                            personal and look professional.
                        </p>

                        <div className="mt-8 space-y-5">
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                                    <span className="text-sm font-semibold text-gray-900">01</span>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Start with your idea
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-500">
                                        Begin from scratch or choose a template that matches what you
                                        have in mind.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                                    <span className="text-sm font-semibold text-gray-900">02</span>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Make it yours
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-500">
                                        Design visually or jump into the code when you want complete
                                        control.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                                    <span className="text-sm font-semibold text-gray-900">03</span>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Send something people remember
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-500">
                                        Preview your email across devices and make sure everything is
                                        exactly where it should be.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story