"use client"
import Link from "next/link"
import EmailCard from "../emails/email-card"
import { Button } from "../ui/button"
import { MoveLeft, MoveRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function Category() {
    const carrouselRef = useRef<HTMLDivElement>(null)
    const [scroll, setScroll] = useState(0)
    const [csr, setcsr] = useState(true)
    const [csl, setcsl] = useState(true)
    const move = (dir: "left" | "right") => {

    }
    useEffect(() => {
        if (!carrouselRef.current) return
        const handleScroll = (e: Event) => {
            const c = carrouselRef.current
            if (!c) return
            console.log(c.scrollLeft, c.scrollWidth)

            setcsr(c.scrollLeft <= c.scrollWidth)
            setcsl(c.scrollLeft >= 0)
        }
        carrouselRef.current.addEventListener("scroll", handleScroll)
        return carrouselRef.current.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section className="px-6 mx-auto max-w-7xl space-y-5">

            <div className="flex justify-between w-full">
                <h1 className="text-2xl font-bold tracking-tight text-primary italic ">TikTok Mail</h1>
                <Link href={"/templates/jk"} className="hover:text-primary">View All</Link>
            </div>

            <div className="space-y-4">
                <div ref={carrouselRef} className="flex gap-2 w-full overflow-scroll  no-scrollbar">
                    {
                        Array.from({ length: 10 }).map((_, idx) => <EmailCard key={idx} />)
                    }
                </div>

                <div className="flex gap-2 w-full justify-end items-center">
                    <Button disabled={!csl} className={"size-9 rounded-full disabled:cursor-not-allowed"} onClick={() => move("left")}>
                        <MoveLeft size={24} />
                    </Button>

                    <Button disabled={!csr} className={"size-9 rounded-full disabled:cursor-not-allowed"} onClick={() => move("right")}>
                        <MoveRight size={24} />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Category