import {
    ArrowLeft,
    Code2,
    Eye,
    Laptop,
    Save,
    Send,
    Smartphone,
    Tablet
} from "lucide-react"

type Device = "desktop" | "tablet" | "mobile"

type Mode = "visual" | "code"

type StudioHeaderProps = {
    device: Device
    mode: Mode
    livePreview: boolean
    onDeviceChange: (device: Device) => void
    onModeChange: (mode: Mode) => void
    onLivePreviewChange: (value: boolean) => void
}

export function StudioHeader({
    device,
    mode,
    livePreview,
    onDeviceChange,
    onModeChange,
    onLivePreviewChange
}: StudioHeaderProps) {
    const devices = [
        {
            id: "desktop" as const,
            label: "Desktop",
            icon: Laptop
        },
        {
            id: "tablet" as const,
            label: "Tablet",
            icon: Tablet
        },
        {
            id: "mobile" as const,
            label: "Mobile",
            icon: Smartphone
        }
    ]

    return (
        <header className="relative flex h-14 shrink-0 items-center justify-between border-b bg-white px-4">
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 text-sm text-gray-700 transition hover:text-gray-950">
                    <ArrowLeft size={18} />
                    Templates
                </button>

                <div className="h-5 w-px bg-border" />

                <span className="text-sm font-medium text-gray-900">
                    Email Studio
                </span>
            </div>

            {mode === "visual" && (
                <div className="absolute left-1/2 flex -translate-x-1/2 items-center rounded-lg border bg-gray-50 p-1">
                    {devices.map(({ id, label, icon: Icon }) => {
                        const active = device === id

                        return (
                            <button
                                key={id}
                                onClick={() => onDeviceChange(id)}
                                className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition ${active
                                        ? "bg-white text-gray-900 shadow-sm"
                                        : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                <Icon size={15} />
                                {label}
                            </button>
                        )
                    })}
                </div>
            )}

            {mode === "code" && (
                <div className="absolute left-1/2 flex -translate-x-1/2 items-center rounded-lg border bg-gray-50 p-1">
                    <button
                        onClick={() => onLivePreviewChange(false)}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${!livePreview
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        Code
                    </button>

                    <button
                        onClick={() => onLivePreviewChange(true)}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${livePreview
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        Live Preview
                    </button>
                </div>
            )}

            <div className="flex items-center gap-2">
                <button
                    onClick={() =>
                        onModeChange(mode === "code" ? "visual" : "code")
                    }
                    className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition ${mode === "code"
                            ? "border-gray-900 bg-gray-900 text-white"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                >
                    <Code2 size={16} />
                    {mode === "code" ? "Visual" : "Code"}
                </button>

                <button className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50">
                    <Eye size={16} />
                    Preview
                </button>

                <button className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50">
                    <Save size={16} />
                    Save
                </button>

                <button className="flex items-center gap-2 rounded-md bg-black px-3 py-2 text-sm text-white transition hover:bg-gray-800">
                    <Send size={16} />
                    Send
                </button>
            </div>
        </header>
    )
}
