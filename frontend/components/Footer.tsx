import Image from "next/image"
import Link from "next/link"

function Footer() {
    const productLinks = [
        { label: "Templates", href: "/templates" },
        { label: "Email Studio", href: "/studio" },
        { label: "AI Assistant", href: "/ai" },
    ]

    const companyLinks = [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
    ]

    const legalLinks = [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
    ]

    return (
        <footer className="border-t border-gray-200 bg-slate-50 mt-12">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
                    <div className="max-w-sm">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo.png"
                                alt="King Mail"
                                width={157}
                                height={40}
                                className=" object-contain"
                            />
                        </Link>

                        <p className="mt-5 text-sm leading-6 text-gray-500">
                            A simpler way to create emails that look good,
                            feel personal, and are ready to send.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                            Product
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">
                            {productLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="w-fit text-sm text-gray-500 transition hover:text-gray-900"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                            Company
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">
                            {companyLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="w-fit text-sm text-gray-500 transition hover:text-gray-900"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                            Legal
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="w-fit text-sm text-gray-500 transition hover:text-gray-900"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-5 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} <Link href={"https://felix-warano.vercel.app"} className="text-primary font-bold">Felix Warano</Link> . All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <Link
                            href="/brand"
                            className="text-xs font-medium text-gray-500 transition hover:text-gray-900"
                        >
                            Brand Guidelines
                        </Link>

                        <Link
                            href="/trademark"
                            className="text-xs font-medium text-gray-500 transition hover:text-gray-900"
                        >
                            Trademark Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
