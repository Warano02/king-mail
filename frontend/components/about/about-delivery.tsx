
import Image from "next/image"

function AboutDelivery() {
    return (
        <section className="w-full overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="order-2 max-w-xl lg:order-1">
                    <span className="text-sm font-semibold text-indigo-600">
                        Your email, your way
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                        We believe you should stay in control of your delivery.
                    </h2>

                    <p className="mt-6 text-base leading-7 text-gray-500 sm:text-lg">
                        Creating your email is only half of the job. That is why
                        King Mail gives you the freedom to decide how your emails
                        are delivered.
                    </p>

                    <div className="mt-8 space-y-6">
                        <div className="flex gap-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600">
                                01
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-950">
                                    Use your own SMTP
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    On the free plan, connect your existing SMTP
                                    configuration and send directly through your
                                    own email infrastructure.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600">
                                02
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-950">
                                    Let King Mail handle delivery
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    With eligible plans, you can use King Mail's
                                    delivery infrastructure and send without
                                    managing your own SMTP configuration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 relative overflow-hidden rounded-[2rem] lg:order-2">
                    <Image
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85"
                        alt="Person working on a laptop"
                        width={1400}
                        height={1050}
                        className="h-full min-h-105 w-full object-cover sm:min-h-130"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>
            </div>
        </section>
    )
}

export default AboutDelivery
