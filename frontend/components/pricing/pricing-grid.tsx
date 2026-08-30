import Link from "next/link"
import { Check, Sparkles } from "lucide-react"

const plans = [
    {
        name: "Free",
        description: "A simple way to start creating and sending beautiful emails.",
        price: "$0",
        period: "forever",
        features: [
            "Email Studio",
            "All email templates",
            "Live preview",
            "3 SMTP configurations",
            "50 AI credits / month",
            "7-day sending history"
        ],
        button: "Get started",
        highlighted: false
    },
    {
        name: "Pro",
        description: "More room to create, automate, and send without limits getting in the way.",
        price: "$5",
        period: "per month",
        features: [
            "Everything in Free",
            "10 SMTP configurations",
            "King Mail SMTP",
            "500 AI credits / month",
            "30-day sending history",
            "Priority support"
        ],
        button: "Start with Pro",
        highlighted: true
    },
    {
        name: "Business",
        description: "For teams and businesses that need more flexibility as they grow.",
        price: "$12",
        period: "per month",
        features: [
            "Everything in Pro",
            "Unlimited SMTP configurations",
            "King Mail SMTP",
            "Unlimited AI credits",
            "Unlimited sending history",
            "Priority support"
        ],
        button: "Choose Business",
        highlighted: false
    }
]

function PricingGrid() {
    return (

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                        Choose the plan that fits the way you send.
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
                        Whether you're sending your first campaign or managing emails for a growing business, King Mail gives you the tools you need without making you pay for features you don't use.
                    </p>
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500"> <span>No long-term commitment</span> <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" /> <span>Cancel anytime</span> <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" /> <span>Start for free</span> </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 ${plan.highlighted
                                ? "border-indigo-600 bg-gray-950 text-white shadow-xl shadow-indigo-100 lg:-translate-y-2"
                                : "border-gray-200 bg-white text-gray-950 hover:-translate-y-1 hover:shadow-lg"
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                                        <Sparkles size={12} />
                                        Most popular
                                    </div>
                                </div>
                            )}

                            <div>
                                <h2 className="text-lg font-semibold">
                                    {plan.name}
                                </h2>

                                <p
                                    className={`mt-2 min-h-12 text-sm leading-6 ${plan.highlighted
                                        ? "text-white/60"
                                        : "text-gray-500"
                                        }`}
                                >
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mt-8 flex items-end gap-2">
                                <span className="text-5xl font-bold tracking-tight">
                                    {plan.price}
                                </span>

                                <span
                                    className={`pb-1.5 text-sm ${plan.highlighted
                                        ? "text-white/50"
                                        : "text-gray-400"
                                        }`}
                                >
                                    {plan.period}
                                </span>
                            </div>

                            <Link
                                href="/auth"
                                className={`mt-8 flex h-11 items-center justify-center rounded-xl text-sm font-semibold transition ${plan.highlighted
                                    ? "bg-white text-gray-950 hover:bg-gray-100"
                                    : "bg-gray-950 text-white hover:bg-gray-800"
                                    }`}
                            >
                                {plan.button}
                            </Link>

                            <div
                                className={`my-7 h-px ${plan.highlighted
                                    ? "bg-white/10"
                                    : "bg-gray-100"
                                    }`}
                            />

                            <p
                                className={`text-xs font-semibold uppercase tracking-wider ${plan.highlighted
                                    ? "text-white/40"
                                    : "text-gray-400"
                                    }`}
                            >
                                What's included
                            </p>

                            <ul className="mt-5 space-y-4">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className={`flex items-start gap-3 text-sm ${plan.highlighted
                                            ? "text-white/80"
                                            : "text-gray-600"
                                            }`}
                                    >
                                        <span
                                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.highlighted
                                                ? "bg-indigo-500/20 text-indigo-300"
                                                : "bg-indigo-50 text-indigo-600"
                                                }`}
                                        >
                                            <Check
                                                size={12}
                                                strokeWidth={2.5}
                                            />
                                        </span>

                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingGrid
