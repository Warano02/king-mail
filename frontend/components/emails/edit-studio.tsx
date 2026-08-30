"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import grapesjs, { type Editor } from "grapesjs"

import CodeMirror from "@uiw/react-codemirror"

import { html } from "@codemirror/lang-html"
import { css } from "@codemirror/lang-css"

import prettier from "prettier/standalone"

import parserHtml from "prettier/plugins/html"
import parserPostcss from "prettier/plugins/postcss"

import "grapesjs/dist/css/grapes.min.css"
import "grapesjs-preset-newsletter"

import { StudioHeader } from "./studio/studio-header"

import { template } from "./studio/mock-template"

import "./studio/studio.css"

type Device = "desktop" | "tablet" | "mobile"

type Mode = "visual" | "code"

export default function EmailStudio() {
  const editorRef = useRef<HTMLDivElement>(null)
  const stylesRef = useRef<HTMLDivElement>(null)
  const editorInstanceRef = useRef<Editor | null>(null)

  const [device, setDevice] = useState<Device>("desktop")
  const [mode, setMode] = useState<Mode>("visual")

  const [htmlCode, setHtmlCode] = useState("")
  const [cssCode, setCssCode] = useState("")

  const [livePreview, setLivePreview] = useState(false)
  const [combinedCode, setCombinedCode] = useState("")

  useEffect(() => {
    if (!editorRef.current || !stylesRef.current) return

    const editor = grapesjs.init({
      container: editorRef.current,
      height: "100%",
      width: "auto",
      fromElement: false,
      storageManager: false,
      panels: {
        defaults: []
      },
      plugins: ["gjs-preset-newsletter"],
      pluginsOpts: {
        "gjs-preset-newsletter": {}
      },
      deviceManager: {
        devices: [
          {
            id: "desktop",
            name: "Desktop",
            width: ""
          },
          {
            id: "tablet",
            name: "Tablet",
            width: "768px",
            widthMedia: "768px"
          },
          {
            id: "mobile",
            name: "Mobile",
            width: "375px",
            widthMedia: "375px"
          }
        ]
      },
      styleManager: {
        appendTo: stylesRef.current
      },
      components: template
    })

    editor.setDevice("desktop")

    editorInstanceRef.current = editor

    return () => {
      editorInstanceRef.current = null
      editor.destroy()
    }
  }, [])

  const formatHtml = async (value: string) => {
    return prettier.format(value, {
      parser: "html",
      plugins: [parserHtml],
      printWidth: 80,
      tabWidth: 2,
      useTabs: false
    })
  }

  const formatCss = async (value: string) => {
    return prettier.format(value, {
      parser: "css",
      plugins: [parserPostcss],
      printWidth: 80,
      tabWidth: 2,
      useTabs: false
    })
  }



  const parseCombinedCode = (value: string) => {
    const parser = new DOMParser()
    const document = parser.parseFromString(value, "text/html")

    const styleElement = document.querySelector("style")

    const extractedCss = styleElement?.textContent ?? ""

    styleElement?.remove()

    const extractedHtml = document.body.innerHTML

    return {
      html: extractedHtml,
      css: extractedCss
    }
  }

  const changeDevice = (nextDevice: Device) => {
    setDevice(nextDevice)
    editorInstanceRef.current?.setDevice(nextDevice)
  }

  const changeLivePreview = async (value: boolean) => {
    if (value) {
      const code = buildCombinedCode(htmlCode, cssCode)

      const formattedCode = await formatHtml(code)

      setCombinedCode(formattedCode)
      setLivePreview(true)

      return
    }

    const { html, css } = parseCombinedCode(combinedCode)

    const [formattedHtml, formattedCss] = await Promise.all([
      formatHtml(html),
      formatCss(css)
    ])

    setHtmlCode(formattedHtml)
    setCssCode(formattedCss)
    setLivePreview(false)
  }

  const changeMode = async (nextMode: Mode) => {
    const editor = editorInstanceRef.current

    if (!editor) return

    if (nextMode === "code") {
      const html = editor.getHtml()
      const css = editor.getCss() ?? ""

      const [formattedHtml, formattedCss] = await Promise.all([
        formatHtml(html),
        formatCss(css)
      ])

      setHtmlCode(formattedHtml)
      setCssCode(formattedCss)
    }

    if (nextMode === "visual") {
      let nextHtml = htmlCode
      let nextCss = cssCode

      if (livePreview) {
        const parsed = parseCombinedCode(combinedCode)

        nextHtml = parsed.html
        nextCss = parsed.css

        setHtmlCode(nextHtml)
        setCssCode(nextCss)
        setLivePreview(false)
      }

      editor.setComponents(nextHtml)
      editor.setStyle(nextCss)

      requestAnimationFrame(() => {
        editor.refresh()
      })
    }

    setMode(nextMode)
  }

  const handleCombinedCodeChange = (value: string) => {
    setCombinedCode(value)
  }

  const previewDocument = useMemo(() => {
    if (livePreview) {
      return combinedCode
    }

    return buildCombinedCode(htmlCode, cssCode)
  }, [combinedCode, htmlCode, cssCode, livePreview])

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <StudioHeader
        device={device}
        mode={mode}
        livePreview={livePreview}
        onDeviceChange={changeDevice}
        onModeChange={changeMode}
        onLivePreviewChange={changeLivePreview}
      />

      <main className="relative flex min-h-0 flex-1 overflow-hidden">
        <section
          className={`absolute inset-0 flex min-h-0 min-w-0 overflow-hidden bg-gray-100 transition-opacity ${mode === "visual"
            ? "z-10 opacity-100"
            : "pointer-events-none z-0 opacity-0"
            }`}
        >
          <section className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
            <div
              ref={editorRef}
              className="h-full w-full"
            />
          </section>

          <aside className="flex h-full w-72 shrink-0 flex-col overflow-hidden border-l bg-white">
            <div className="shrink-0 border-b px-4 py-3">
              <h2 className="text-sm font-semibold text-gray-900">
                Styles
              </h2>

              <p className="mt-0.5 text-xs text-gray-500">
                Customize your element
              </p>
            </div>

            <div
              ref={stylesRef}
              className="min-h-0 flex-1 overflow-y-auto"
            />
          </aside>
        </section>

        <section
          className={`absolute inset-0 flex min-h-0 min-w-0 overflow-hidden bg-[#282c34] transition-opacity ${mode === "code"
            ? "z-20 opacity-100"
            : "pointer-events-none z-0 opacity-0"
            }`}
        >
          {!livePreview ? (
            <>
              <aside className="flex min-h-0 min-w-0 flex-1 flex-col border-r border-white/10">
                <div className="flex h-11 shrink-0 items-center border-b border-white/10 bg-[#21252b] px-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-300">
                    HTML
                  </span>
                </div>

                <div className="code-editor-container min-h-0 flex-1 overflow-hidden">
                  <CodeMirror
                    className="code-editor"
                    value={htmlCode}
                    height="100%"
                    theme="dark"
                    extensions={[html()]}
                    onChange={setHtmlCode}
                    basicSetup={{
                      lineNumbers: true,
                      foldGutter: true,
                      dropCursor: false,
                      allowMultipleSelections: false,
                      indentOnInput: true
                    }}
                  />
                </div>
              </aside>

              <aside className="flex min-h-0 min-w-0 flex-1 flex-col">
                <div className="flex h-11 shrink-0 items-center border-b border-white/10 bg-[#21252b] px-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-300">
                    CSS
                  </span>
                </div>

                <div className="code-editor-container min-h-0 flex-1 overflow-hidden">
                  <CodeMirror
                    className="code-editor"
                    value={cssCode}
                    height="100%"
                    theme="dark"
                    extensions={[css()]}
                    onChange={setCssCode}
                    basicSetup={{
                      lineNumbers: true,
                      foldGutter: true,
                      dropCursor: false,
                      allowMultipleSelections: false,
                      indentOnInput: true
                    }}
                  />
                </div>
              </aside>
            </>
          ) : (
            <>
              <aside className="flex min-h-0 min-w-0 w-1/2 flex-col border-r border-white/10">
                <div className="flex h-11 shrink-0 items-center justify-between border-b border-white/10 bg-[#21252b] px-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-300">
                    HTML + CSS
                  </span>

                  <span className="text-[11px] text-gray-500">
                    Live editing
                  </span>
                </div>

                <div className="code-editor-container min-h-0 flex-1 overflow-hidden">
                  <CodeMirror
                    className="code-editor"
                    value={combinedCode}
                    height="100%"
                    theme="dark"
                    extensions={[html()]}
                    onChange={handleCombinedCodeChange}
                    basicSetup={{
                      lineNumbers: true,
                      foldGutter: true,
                      dropCursor: false,
                      allowMultipleSelections: false,
                      indentOnInput: true
                    }}
                  />
                </div>
              </aside>

              <aside className="flex min-h-0 min-w-0 w-1/2 flex-col bg-gray-100">
                <div className="flex h-11 shrink-0 items-center justify-between border-b bg-white px-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Live Preview
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Live
                  </span>
                </div>

                <div className="min-h-0 flex-1 overflow-auto p-8">
                  <div className="mx-auto h-full w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-sm">
                    <iframe
                      title="Email live preview"
                      srcDoc={previewDocument}
                      className="h-full w-full border-0"
                      sandbox="allow-same-origin"
                    />
                  </div>
                </div>
              </aside>
            </>
          )}
        </section>
      </main>
    </div>
  )
}

const buildCombinedCode = (html: string, css: string) => {
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
}
