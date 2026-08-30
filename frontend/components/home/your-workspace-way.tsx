function YourWorkspaceWay() {
    return (
        <section className="overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div className="max-w-lg">
                        <span className="text-sm font-semibold text-indigo-600">
                            Your creative workspace
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Everything you need to build an email you’re proud of.
                        </h2>

                        <p className="mt-6 text-base leading-7 text-gray-500 sm:text-lg">
                            Design your emails visually, fine-tune every detail with code, and
                            see exactly how your work looks before it reaches someone's inbox.
                        </p>

                        <div className="mt-8 space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-900">
                                    01
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Design visually
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-500">
                                        Build layouts and customize your content without fighting with
                                        HTML.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-900">
                                    02
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Jump into the code
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-500">
                                        Need more control? Edit your HTML and CSS directly whenever
                                        you want.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-900">
                                    03
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Preview before you send
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-500">
                                        Check your email on desktop, tablet, and mobile before it goes
                                        out.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 shadow-2xl">
                            <div className="flex h-11 items-center gap-2 border-b border-white/10 bg-gray-900 px-4">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

                                <span className="ml-3 text-xs text-gray-500">
                                    Email Studio
                                </span>
                            </div>

                            <div className="grid min-h-105 grid-cols-[1fr_180px] bg-gray-100">
                                <div className="flex items-center justify-center p-6 sm:p-10">
                                    <div className="w-full max-w-md overflow-hidden rounded-md bg-white shadow-lg">
                                        <div className="h-20 bg-indigo-600" />

                                        <div className="space-y-4 p-6">
                                            <div className="mx-auto h-5 w-2/3 rounded bg-gray-200" />

                                            <div className="space-y-2">
                                                <div className="h-3 w-full rounded bg-gray-100" />
                                                <div className="h-3 w-5/6 rounded bg-gray-100" />
                                                <div className="h-3 w-4/6 rounded bg-gray-100" />
                                            </div>

                                            <div className="mx-auto h-9 w-32 rounded bg-indigo-600" />

                                            <div className="space-y-2 pt-4">
                                                <div className="h-2.5 w-full rounded bg-gray-100" />
                                                <div className="h-2.5 w-4/5 rounded bg-gray-100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden border-l border-gray-200 bg-white p-4 sm:block">
                                    <div className="mb-5">
                                        <div className="h-3 w-16 rounded bg-gray-200" />
                                    </div>

                                    <div className="space-y-3">
                                        <div className="h-8 rounded border border-gray-200" />
                                        <div className="h-8 rounded border border-gray-200" />
                                        <div className="h-8 rounded border border-gray-200" />
                                        <div className="h-8 rounded border border-gray-200" />
                                    </div>

                                    <div className="mt-8">
                                        <div className="h-3 w-20 rounded bg-gray-200" />
                                    </div>

                                    <div className="mt-4 space-y-3">
                                        <div className="h-8 rounded border border-gray-200" />
                                        <div className="h-8 rounded border border-gray-200" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-xl sm:block">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                                    ✓
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-gray-900">
                                        Responsive
                                    </p>

                                    <p className="text-[11px] text-gray-500">
                                        Ready for every screen
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

export default YourWorkspaceWay