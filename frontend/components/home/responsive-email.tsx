function ResponsiveEmails() {
    return (
        <section className="overflow-hidden bg-gray-950 px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl">
                        <span className="text-sm font-semibold text-indigo-400">
                            Made to look good
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            One email. Every screen.
                        </h2>

                        <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
                            Create your email once and make sure it looks right
                            whether your audience opens it on a laptop, tablet,
                            or phone.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-medium">
                                    01
                                </div>

                                <div>
                                    <h3 className="font-semibold text-white">
                                        Design visually
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-400">
                                        Build and customize your email without
                                        having to fight with code.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-medium">
                                    02
                                </div>

                                <div>
                                    <h3 className="font-semibold text-white">
                                        Check every device
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-400">
                                        Switch between desktop, tablet, and
                                        mobile views before you hit send.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-medium">
                                    03
                                </div>

                                <div>
                                    <h3 className="font-semibold text-white">
                                        Send with confidence
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-400">
                                        What you see in the editor is what you
                                        expect your audience to receive.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="absolute -inset-10 rounded-full bg-indigo-500/10 blur-3xl" />

                        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm sm:p-6">
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                                    Responsive preview
                                </div>
                            </div>

                            <div className="mt-6 flex items-end justify-center gap-4 sm:gap-6">
                                <div className="w-24 rounded-t-xl border border-white/10 bg-white/10 p-1.5 sm:w-28">
                                    <div className="h-44 overflow-hidden rounded-lg bg-white sm:h-52">
                                        <div className="h-12 bg-indigo-500" />
                                        <div className="p-3">
                                            <div className="h-2.5 w-3/4 rounded bg-gray-200" />
                                            <div className="mt-3 h-2 w-full rounded bg-gray-100" />
                                            <div className="mt-1.5 h-2 w-5/6 rounded bg-gray-100" />
                                            <div className="mt-5 h-7 w-16 rounded bg-gray-900" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-32 rounded-t-xl border border-white/10 bg-white/10 p-1.5 sm:w-40">
                                    <div className="h-56 overflow-hidden rounded-lg bg-white sm:h-64">
                                        <div className="h-16 bg-indigo-500" />
                                        <div className="p-4">
                                            <div className="h-3 w-3/4 rounded bg-gray-200" />
                                            <div className="mt-4 h-2.5 w-full rounded bg-gray-100" />
                                            <div className="mt-2 h-2.5 w-5/6 rounded bg-gray-100" />
                                            <div className="mt-6 h-20 rounded-lg bg-gray-100" />
                                            <div className="mt-5 h-8 w-20 rounded bg-gray-900" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-20 rounded-t-xl border border-white/10 bg-white/10 p-1 sm:w-24">
                                    <div className="h-36 overflow-hidden rounded-lg bg-white sm:h-44">
                                        <div className="h-10 bg-indigo-500" />
                                        <div className="p-2.5">
                                            <div className="h-2 w-3/4 rounded bg-gray-200" />
                                            <div className="mt-2.5 h-1.5 w-full rounded bg-gray-100" />
                                            <div className="mt-1 h-1.5 w-5/6 rounded bg-gray-100" />
                                            <div className="mt-4 h-5 w-12 rounded bg-gray-900" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResponsiveEmails
