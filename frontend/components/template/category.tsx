"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { MoveLeft, MoveRight } from "lucide-react"

import EmailCard from "../emails/email-card"
import { Button } from "../ui/button"

type CategoryProps = {
    title: string
    slug: string
}

function Category({ title, slug }: CategoryProps) {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const updateScrollState = () => {
        const carousel = carouselRef.current

        if (!carousel) return

        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth

        setCanScrollLeft(carousel.scrollLeft > 2)
        setCanScrollRight(carousel.scrollLeft < maxScrollLeft - 2)
    }

    const move = (direction: "left" | "right") => {
        const carousel = carouselRef.current

        if (!carousel) return

        const card = carousel.querySelector<HTMLElement>("[data-template-card]")

        if (!card) return

        const gap = 20
        const amount = card.offsetWidth + gap

        carousel.scrollBy({
            left: direction === "right" ? amount : -amount,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const carousel = carouselRef.current

        if (!carousel) return

        updateScrollState()

        carousel.addEventListener("scroll", updateScrollState, {
            passive: true
        })

        window.addEventListener("resize", updateScrollState)

        return () => {
            carousel.removeEventListener("scroll", updateScrollState)
            window.removeEventListener("resize", updateScrollState)
        }
    }, [])

    return (
        <section className="space-y-6">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                        {title}
                    </h2>

                    <p className="mt-1.5 text-sm text-gray-500">
                        Find a starting point and make it yours.
                    </p>
                </div>

                <Link href={`/templates/${slug}`} className="group flex shrink-0 items-center gap-1 text-xs font-medium text-gray-400 transition-colors hover:text-gray-700 sm:text-sm" >
                    View all <MoveRight size={14} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
            </div>

            <div className="space-y-4">
                <div
                    ref={carouselRef}
                    className="flex w-full gap-5 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
                >
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            data-template-card
                            className="w-70 shrink-0 sm:w-[320px]"
                        >
                            <EmailCard />
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-end gap-2">
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        disabled={!canScrollLeft}
                        onClick={() => move("left")}
                        className="cursor-pointer size-9 rounded-full border-gray-200 bg-white text-gray-500 shadow-none transition hover:bg-gray-50 hover:text-gray-900 disabled:opacity-30"
                        aria-label="Previous templates"
                    >
                        <MoveLeft size={16} strokeWidth={1.8} />
                    </Button>

                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        disabled={!canScrollRight}
                        onClick={() => move("right")}
                        className="cursor-pointer size-9 rounded-full border-gray-200 bg-white text-gray-500 shadow-none transition hover:bg-gray-50 hover:text-gray-900 disabled:opacity-30"
                        aria-label="Next templates"
                    >
                        <MoveRight size={16} strokeWidth={1.8} />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Category
