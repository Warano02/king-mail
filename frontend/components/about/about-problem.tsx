import Image from "next/image"

function AboutProblem() {
    return (
        <section className="w-full overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="relative overflow-hidden rounded-[2rem]">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                        alt="People collaborating around a table"
                        width={1400}
                        height={1050}
                        className="h-full min-h-105 w-full object-cover sm:min-h-130"
                    />
                </div>

                <div className="max-w-xl">
                    <span className="text-sm font-semibold text-indigo-600">
                        The problem
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                        Too many tools for something that should feel simple.
                    </h2>

                    <div className="mt-6 space-y-5 text-base leading-7 text-gray-500">
                        <p>
                            Creating a good email often means moving from one tool
                            to another. You find a template somewhere, customize it
                            in another place, export the result, then figure out how
                            to actually send it.
                        </p>

                        <p>
                            The creation process and the delivery process are treated
                            like two completely different things.
                        </p>

                        <p>
                            We thought there should be a simpler way.
                        </p>
                    </div>

                    <div className="mt-8 border-l-2 border-indigo-500 pl-5">
                        <p className="text-lg font-medium leading-7 text-gray-900">
                            Your email is not finished when the design is ready.
                            It is finished when it reaches the people you created
                            it for.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProblem
