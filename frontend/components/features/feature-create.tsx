import Image from "next/image"

function FeaturesCreate() {
    return (
        <section className="overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <div className="relative overflow-hidden rounded-3xl bg-gray-100">
                    <div className="aspect-4/3">
                        <Image
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                            alt="Team working together on a project"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    <div className="absolute inset-0 bg-black/5" />

                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
                        <p className="text-xs font-medium text-gray-500">
                            Your workspace
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                            From idea to ready-to-send email.
                        </p>
                    </div>
                </div>

                <div className="max-w-xl">
                    <span className="text-sm font-semibold text-indigo-600">
                        Built for creating
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Everything starts with a blank canvas.
                    </h2>

                    <p className="mt-6 text-base leading-7 text-gray-500 sm:text-lg">
                        King Mail gives you the freedom to build emails your way,
                        without getting lost in complicated tools or unnecessary
                        settings.
                    </p>

                    <div className="mt-10 space-y-7">
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-semibold text-indigo-600">
                                01
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    Build visually
                                </h3>

                                <p className="mt-1.5 text-sm leading-6 text-gray-500">
                                    Design your email visually and see your changes
                                    as you make them.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-semibold text-indigo-600">
                                02
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    Write your own code
                                </h3>

                                <p className="mt-1.5 text-sm leading-6 text-gray-500">
                                    Switch to code whenever you need more control
                                    over your HTML and CSS.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-semibold text-indigo-600">
                                03
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    Preview before sending
                                </h3>

                                <p className="mt-1.5 text-sm leading-6 text-gray-500">
                                    Check how your email looks across different
                                    screen sizes before it leaves your hands.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesCreate
