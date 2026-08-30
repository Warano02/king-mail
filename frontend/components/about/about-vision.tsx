import Image from "next/image"

function AboutVision() {
    return (
        <section className="w-full overflow-hidden bg-gray-950 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="relative overflow-hidden rounded-[2rem]">
                    <Image
                        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
                        alt="Team discussing ideas together"
                        width={1400}
                        height={1050}
                        className="h-full min-h-105 w-full object-cover sm:min-h-130"
                    />
                </div>

                <div className="max-w-xl">
                    <span className="text-sm font-semibold text-indigo-300">
                        Where we're going
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        We want email creation to feel less like work.
                    </h2>

                    <p className="mt-6 text-base leading-7 text-white/65 sm:text-lg">
                        Email is still one of the simplest ways to reach people,
                        but the tools around it can make the process unnecessarily
                        complicated.
                    </p>

                    <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg">
                        King Mail is being built around a simple idea: give people
                        the tools they need to create something good, without
                        making them become experts in every tool involved.
                    </p>

                    <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg">
                        And we are only getting started.
                    </p>

                    <div className="mt-8 border-l border-indigo-400 pl-5">
                        <p className="text-lg font-medium leading-7 text-white">
                            Better emails should come from better tools, not
                            more complicated ones.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutVision
