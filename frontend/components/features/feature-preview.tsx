import Image from "next/image"

function FeaturesPreview() {
    return (
        <section className="overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                <div className="relative overflow-hidden rounded-3xl bg-gray-100">
                    <div className="aspect-4/3">
                        <Image
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85"
                            alt="Person checking emails on different devices"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                    </div>

                    <div className="absolute inset-0 bg-black/10" />

                    <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2 sm:bottom-6 sm:left-6 sm:right-auto">
                        <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
                            Desktop
                        </span>

                        <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
                            Tablet
                        </span>

                        <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
                            Mobile
                        </span>
                    </div>
                </div>

                <div className="max-w-xl">
                    <span className="text-sm font-semibold text-indigo-600">
                        Preview everywhere
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Know exactly what people will see.
                    </h2>

                    <p className="mt-6 text-base leading-7 text-gray-500 sm:text-lg">
                        An email that looks great on your screen should look just
                        as good on someone else's. Preview your work across
                        different screen sizes before you send it.
                    </p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                        <div>
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-sm font-semibold text-gray-700">
                                01
                            </div>

                            <h3 className="font-semibold text-gray-900">
                                Check every detail
                            </h3>

                            <p className="mt-1.5 text-sm leading-6 text-gray-500">
                                Spot spacing, images, typography, and layout
                                issues before your audience does.
                            </p>
                        </div>

                        <div>
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-sm font-semibold text-gray-700">
                                02
                            </div>

                            <h3 className="font-semibold text-gray-900">
                                Switch devices instantly
                            </h3>

                            <p className="mt-1.5 text-sm leading-6 text-gray-500">
                                Move between desktop, tablet, and mobile views
                                without leaving your workspace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesPreview
