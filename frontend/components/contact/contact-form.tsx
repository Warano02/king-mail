"use client"

import { useState } from "react"
import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react"
import { toast } from "sonner"
import { sleep } from "@/lib/utils"

function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = event.target

        setForm((current) => ({
            ...current,
            [name]: value
        }))
    }

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        if (loading) return

        setLoading(true)

        try {
            await sleep(1500)

            toast.success("Message sent successfully.", {
                description:
                    "Thanks for reaching out. We'll get back to you soon."
            })

            setForm({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
        } catch {
            toast.error("Something went wrong.", {
                description:
                    "We couldn't send your message. Please try again."
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div className="flex flex-col justify-center">
                    <span className="text-sm font-semibold text-indigo-600">
                        Let's talk
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                        We're here to help.
                    </h2>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                        Have a question about King Mail, found something that
                        could be better, or simply want to share an idea? Send
                        us a message and we'll get back to you.
                    </p>

                    <div className="mt-10 space-y-6">
                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                <Mail size={19} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    General questions
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Questions about the platform, templates,
                                    pricing, or getting started.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                <MessageCircle size={19} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Feedback & ideas
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Tell us what you love, what feels difficult,
                                    or what you'd like to see next.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                <Send size={19} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Partnerships
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Working on something interesting? We'd be
                                    happy to hear about it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-gray-900"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/10"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-gray-900"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/10"
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="text-sm font-medium text-gray-900"
                            >
                                What can we help with?
                            </label>

                            <select
                                id="subject"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/10"
                                required
                                disabled={loading}
                            >
                                <option value="" disabled>
                                    Select a topic
                                </option>
                                <option value="general">
                                    General question
                                </option>
                                <option value="support">
                                    Technical support
                                </option>
                                <option value="feedback">
                                    Feedback or suggestion
                                </option>
                                <option value="partnership">
                                    Partnership
                                </option>
                                <option value="other">
                                    Something else
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="text-sm font-medium text-gray-900"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us a little more..."
                                rows={7}
                                className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/10"
                                required
                                disabled={loading}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 text-sm font-semibold text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send message
                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </>
                            )}
                        </button>

                        <p className="text-center text-xs leading-5 text-gray-400">
                            We usually get back to messages within a few
                            business days.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
