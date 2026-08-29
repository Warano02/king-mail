import { cn } from "@/lib/utils"
import { Heart } from "lucide-react"
import { Button } from "./ui/button"

function Donate({ position = "right" }: { position?: "left" | "right" }) {
    return (
        <div
            className={cn(
                "fixed top-0 z-50 flex h-screen w-12 items-center justify-center pointer-events-none",
                position === "left" ? "left-0" : "right-0"
            )}
        >
            <Button
                className={cn(
                    "pointer-events-auto group flex items-center gap-2 bg-primary px-4 py-2.5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:gap-3",
                    position === "left"
                        ? "rounded-r-full"
                        : "rounded-l-full",
                    position === "left"
                        ? "rotate-90"
                        : "-rotate-90"
                )}
            >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                    <Heart
                        size={13}
                        className="transition-all duration-300 group-hover:fill-white"
                    />
                </span>

                <span className="text-xs font-semibold tracking-wide">
                    Donate
                </span>
            </Button>
        </div>
    )
}

export default Donate
