function FinalCta() {
    return (
        <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-[2rem] bg-indigo-600 px-6 py-20 text-center sm:px-10 lg:px-20 lg:py-24">
                    <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl" />

                    <div className="relative mx-auto max-w-3xl">
                        <span className="text-sm font-medium text-indigo-100">
                            Your next email starts here
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Have an idea?
                            <span className="block text-indigo-100">
                                Turn it into an email.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-indigo-100 sm:text-lg">
                            Start with a blank canvas, pick a template, or let
                            AI give you a hand. Create something you will be
                            happy to send.
                        </p>

                        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 sm:w-auto">
                                Create an email

                                <svg
                                    className="transition-transform duration-200 group-hover:translate-x-1"
                                    width="14"
                                    height="11"
                                    viewBox="0 0 14 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 5.5h11.5M8.5 1.5l4 4-4 4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <button className="w-full rounded-xl px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto">
                                Browse templates
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalCta
