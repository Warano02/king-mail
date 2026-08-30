"use client"

import { useEffect, useState } from "react"

import Link from "next/link"

import { ArrowUpRight } from "lucide-react"

import { Skeleton } from "@/components/ui/skeleton"

import { sleep } from "@/lib/utils"

type TemplateItem = {
    id: string
    name: string
    description: string
    image: string
}

const mockTemplates: TemplateItem[] = [
    {
        id: "1",
        name: "Product announcement",
        description: "Launch something new with confidence.",
        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: "2",
        name: "Weekly newsletter",
        description: "Keep your audience close and informed.",
        image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: "3",
        name: "Special offer",
        description: "Turn an offer into something people want.",
        image:
            "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: "4",
        name: "Welcome email",
        description: "Make a great first impression.",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: "5",
        name: "Event invitation",
        description: "Give your next event the attention it deserves.",
        image:
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: "6",
        name: "Product update",
        description: "Share what's new without overcomplicating it.",
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
    }
]

async function fetchTemplates(): Promise<TemplateItem[]> {
    await sleep(1500)

    return mockTemplates
}

function TemplateSkeleton() {
    return (
        <div>
            <Skeleton className="aspect-4/3 w-full rounded-2xl" />

            <div className="mt-4 space-y-2">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
            </div>
        </div>
    )
}

function TemplateCard({ template }: { template: TemplateItem }) {
    return (
        <Link
            href={`/templates/${template.id}`}
            className="group block"
        >
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                <div className="aspect-4/3 overflow-hidden bg-white">
                    <img
                        src={template.image}
                        alt={template.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/25">
                    <span className="flex translate-y-2 items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        Use template
                        <ArrowUpRight size={14} />
                    </span>
                </div>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold text-gray-900">
                    {template.name}
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                    {template.description}
                </p>
            </div>
        </Link>
    )
}

function Template() {
    const [templates, setTemplates] = useState<TemplateItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true

        const loadTemplates = async () => {
            try {
                const data = await fetchTemplates()

                if (mounted) {
                    setTemplates(data)
                }
            } finally {
                if (mounted) {
                    setLoading(false)
                }
            }
        }

        loadTemplates()

        return () => {
            mounted = false
        }
    }, [])

    return (
        <section className="overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold text-indigo-600">
                            Templates
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Start with something great.
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
                            You don't have to design every email from scratch.
                            Pick a template, make it yours, and get your message
                            out there faster.
                        </p>
                    </div>

                    <Link
                        href="/templates"
                        className="group flex w-fit items-center gap-2 text-sm font-medium text-gray-900"
                    >
                        Explore all templates

                        <ArrowUpRight
                            size={15}
                            className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                        />
                    </Link>
                </div>

                <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {loading
                        ? Array.from({ length: 6 }).map((_, index) => (
                              <TemplateSkeleton key={index} />
                          ))
                        : templates.map((template) => (
                              <TemplateCard
                                  key={template.id}
                                  template={template}
                              />
                          ))}
                </div>
            </div>
        </section>
    )
}

export default Template
