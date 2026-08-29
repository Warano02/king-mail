import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"

interface EMProps {
    className?: string
}

function EmailCard({ className }: EMProps) {
    return (
        <article
            className={cn(
                "group relative h-110 w-full overflow-hidden rounded-2xl border bg-muted shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                className
            )}
        >
            <div className="absolute inset-0 z-10 flex flex-col justify-end bg-black/60 p-5 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                        <Mail size={17} />
                    </div>

                    <h2 className="text-lg font-semibold text-white">
                        TikTok Certification Email
                    </h2>

                    <p className="mt-1 text-sm text-white/70">
                        Professional email template
                    </p>

                    <Link href="/email/yu" className="mt-5 block">
                        <Button className="w-full rounded-xl">
                            Personalize
                            <ArrowUpRight size={16} />
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="relative h-full w-full bg-muted">
                <Image
                    src="/to.jpg"
                    alt="TikTok Certification Email"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
            </div>
        </article>
    )
}

export default EmailCard
