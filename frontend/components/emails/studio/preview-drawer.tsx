"use client"

import { useMemo, useState } from "react"

import { Monitor, Smartphone, Tablet } from "lucide-react"

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer"

type Device = "desktop" | "tablet" | "mobile"

type PreviewDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  html: string
  css: string
}

export function PreviewDrawer({
  open,
  onOpenChange,
  html,
  css
}: PreviewDrawerProps) {
  const [device, setDevice] = useState<Device>("desktop")

  const previewDocument = useMemo(() => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
${css}
  </style>
</head>
<body>
${html}
</body>
</html>`
  }, [html, css])

  const devices = [
    {
      id: "desktop" as const,
      label: "Desktop",
      icon: Monitor,
      width: "100%"
    },
    {
      id: "tablet" as const,
      label: "Tablet",
      icon: Tablet,
      width: "768px"
    },
    {
      id: "mobile" as const,
      label: "Mobile",
      icon: Smartphone,
      width: "375px"
    }
  ]

  const activeDevice = devices.find(item => item.id === device)

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      swipeDirection="left"
    >
      <DrawerContent className="flex h-full w-full max-w-5xl flex-col rounded-none">
        <DrawerHeader className="shrink-0 border-b px-5 py-4">
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-base font-semibold">
              Email Preview
            </DrawerTitle>

            <div className="flex items-center rounded-lg border bg-gray-50 p-1">
              {devices.map(({ id, label, icon: Icon }) => {
                const active = device === id

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setDevice(id)}
                    className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition ${
                      active
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
          </div>
        </DrawerHeader>

        <div className="min-h-0 flex-1 overflow-auto bg-gray-100 p-8">
          <div
            className="mx-auto transition-[width] duration-200"
            style={{
              width: activeDevice?.width ?? "100%",
              maxWidth: "100%"
            }}
          >
            <div className="min-h-[calc(100vh-150px)] overflow-hidden rounded-lg bg-white shadow-sm">
              <iframe
                title="Email preview"
                srcDoc={previewDocument}
                className="block min-h-[calc(100vh-150px)] w-full border-0 bg-white"
                sandbox="allow-same-origin"
              />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
