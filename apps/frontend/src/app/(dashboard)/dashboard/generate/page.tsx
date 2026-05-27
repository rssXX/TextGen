"use client"

import { useState } from "react"
import { flushSync } from "react-dom"
import {
    AtomCard, AtomCardContent, AtomCardDescription, AtomCardHeader, AtomCardTitle,
    AtomButton,
    AtomInput,
    AtomLabel,
    AtomTextarea,
    AtomSelect, AtomSelectContent, AtomSelectItem, AtomSelectTrigger, AtomSelectValue,
    AtomTabs, AtomTabsContent, AtomTabsList, AtomTabsTrigger,
} from "@/components/shared"
import { Sparkles, Copy, Download, RotateCcw, FileText, Newspaper, BookOpen, RefreshCw } from "lucide-react"
import { API_BASE_URL, type ContentType, type Tone } from "@/lib"

interface ContentTypeOption {
    value: ContentType
    label: string
    icon: typeof FileText
    description: string
}

const contentTypes: ContentTypeOption[] = [
    { value: "article", label: "Статья", icon: FileText, description: "Информационные и обучающие статьи" },
    { value: "news", label: "Новость", icon: Newspaper, description: "Новостные материалы и пресс-релизы" },
    { value: "story", label: "Рассказ", icon: BookOpen, description: "Короткие истории и рассказы" },
    { value: "rewrite", label: "Рерайт", icon: RefreshCw, description: "Переработка существующего текста" },
]

export default function GeneratePage() {
    const [contentType, setContentType] = useState<ContentType>("article")
    const [topic, setTopic] = useState("")
    const [keywords, setKeywords] = useState("")
    const [length, setLength] = useState("1500")
    const [tone, setTone] = useState<Tone>("neutral")
    const [sourceText, setSourceText] = useState("")
    const [generatedText, setGeneratedText] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const canSubmit = (() => {
        if (isGenerating) return false
        if (contentType === "rewrite") return sourceText.trim().length > 0
        return topic.trim().length > 0
    })()

    const handleGenerate = async () => {
        setError(null)
        try {
            setIsGenerating(true)
            setGeneratedText("")

            const response = await fetch(`${API_BASE_URL}/api/v1/generate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    contentType,
                    tone,
                    length: parseInt(length, 10),
                    topic: contentType === "rewrite" ? undefined : topic,
                    keywords: keywords.trim() || undefined,
                    sourceText: contentType === "rewrite" ? sourceText : undefined,
                }),
            })

            if (!response.ok) {
                const text = await response.text().catch(() => "")
                throw new Error(text || `HTTP ${response.status}`)
            }
            if (!response.body) throw new Error("No readable stream")

            const reader = response.body.getReader()
            const decoder = new TextDecoder("utf-8")
            let buffer = ""

            while (true) {
                const { done, value } = await reader.read()
                if (done) break

                buffer += decoder.decode(value, { stream: true })
                const parts = buffer.split("\n\n")
                buffer = parts.pop() ?? ""

                for (const part of parts) {
                    const lines = part.split("\n")
                    let eventType = ""
                    let data = ""

                    for (const line of lines) {
                        if (line.startsWith("event: ")) eventType = line.slice(7)
                        else if (line.startsWith("data: ")) data = line.slice(6)
                    }

                    if (eventType === "end") break
                    if (eventType === "error") {
                        throw new Error(safeJsonParse(data) ?? "Ошибка генерации")
                    }
                    if (eventType === "meta") continue
                    if (data) {
                        const chunk = safeJsonParse(data)
                        if (typeof chunk === "string") {
                            flushSync(() => {
                                setGeneratedText((prev) => prev + chunk)
                            })
                            await new Promise((r) => requestAnimationFrame(r))
                        }
                    }
                }
            }
        } catch (err) {
            const message = err instanceof Error ? err.message : "Ошибка генерации"
            setError(message)
        } finally {
            setIsGenerating(false)
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedText)
    }

    const handleDownload = () => {
        const blob = new Blob([generatedText], { type: "text/plain;charset=utf-8" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `textgen-${Date.now()}.txt`
        a.click()
        URL.revokeObjectURL(url)
    }

    return (
        <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-6">
                    <AtomCard>
                        <AtomCardHeader>
                            <AtomCardTitle>Тип контента</AtomCardTitle>
                            <AtomCardDescription>Выберите, что вы хотите создать</AtomCardDescription>
                        </AtomCardHeader>
                        <AtomCardContent>
                            <div className="grid grid-cols-2 gap-3">
                                {contentTypes.map((type) => (
                                    <button
                                        key={type.value}
                                        onClick={() => setContentType(type.value)}
                                        className={`flex flex-col items-start gap-2 rounded-lg border p-4 text-left transition-colors hover:bg-muted/50 ${
                                            contentType === type.value ? "border-primary bg-muted/50" : ""
                                        }`}
                                    >
                                        <type.icon
                                            className={`h-5 w-5 ${contentType === type.value ? "text-primary" : "text-muted-foreground"}`} />
                                        <div>
                                            <p className="font-medium">{type.label}</p>
                                            <p className="text-xs text-muted-foreground">{type.description}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </AtomCardContent>
                    </AtomCard>

                    <AtomCard>
                        <AtomCardHeader>
                            <AtomCardTitle>Параметры генерации</AtomCardTitle>
                            <AtomCardDescription>Настройте параметры для создания контента</AtomCardDescription>
                        </AtomCardHeader>
                        <AtomCardContent className="space-y-6">
                            {contentType === "rewrite" ? (
                                <div className="space-y-2">
                                    <AtomLabel htmlFor="sourceText">Исходный текст</AtomLabel>
                                    <AtomTextarea
                                        id="sourceText"
                                        placeholder="Вставьте текст, который нужно переработать..."
                                        value={sourceText}
                                        onChange={(e) => setSourceText(e.target.value)}
                                        rows={6}
                                    />
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-2">
                                        <AtomLabel htmlFor="topic">Тема</AtomLabel>
                                        <AtomInput
                                            id="topic"
                                            placeholder="О чем будет ваш текст?"
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                        />
                                    </div>
                                </>
                            )}

                            <div className="space-y-2">
                                <AtomLabel htmlFor="keywords">Ключевые слова (через запятую)</AtomLabel>
                                <AtomInput
                                    id="keywords"
                                    placeholder="SEO, оптимизация, контент"
                                    value={keywords}
                                    onChange={(e) => setKeywords(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <AtomLabel>Тон текста</AtomLabel>
                                <AtomSelect value={tone} onValueChange={(v) => setTone(v as Tone)}>
                                    <AtomSelectTrigger>
                                        <AtomSelectValue />
                                    </AtomSelectTrigger>
                                    <AtomSelectContent>
                                        <AtomSelectItem value="formal">Формальный</AtomSelectItem>
                                        <AtomSelectItem value="neutral">Нейтральный</AtomSelectItem>
                                        <AtomSelectItem value="friendly">Дружелюбный</AtomSelectItem>
                                        <AtomSelectItem value="professional">Профессиональный</AtomSelectItem>
                                        <AtomSelectItem value="creative">Творческий</AtomSelectItem>
                                    </AtomSelectContent>
                                </AtomSelect>
                            </div>

                            <div className="space-y-2">
                                <AtomLabel>Длина текста (символов)</AtomLabel>
                                <AtomSelect value={length} onValueChange={setLength}>
                                    <AtomSelectTrigger>
                                        <AtomSelectValue />
                                    </AtomSelectTrigger>
                                    <AtomSelectContent>
                                        <AtomSelectItem value="500">500 — Короткий</AtomSelectItem>
                                        <AtomSelectItem value="1000">1 000 — Небольшой</AtomSelectItem>
                                        <AtomSelectItem value="1500">1 500 — Средний</AtomSelectItem>
                                        <AtomSelectItem value="2500">2 500 — Длинный</AtomSelectItem>
                                        <AtomSelectItem value="4000">4 000 — Очень длинный</AtomSelectItem>
                                        <AtomSelectItem value="5000">5 000 — Максимальный</AtomSelectItem>
                                    </AtomSelectContent>
                                </AtomSelect>
                            </div>

                            {error && (
                                <div className="text-sm text-destructive">{error}</div>
                            )}

                            <AtomButton onClick={handleGenerate} disabled={!canSubmit} className="w-full" size="lg">
                                {isGenerating ? (
                                    <>
                                        <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
                                        Генерация...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Сгенерировать
                                    </>
                                )}
                            </AtomButton>
                        </AtomCardContent>
                    </AtomCard>
                </div>

                <AtomCard className="flex flex-col">
                    <AtomCardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <AtomCardTitle>Результат</AtomCardTitle>
                                <AtomCardDescription>Сгенерированный текст</AtomCardDescription>
                            </div>
                            {generatedText && (
                                <div className="flex gap-2">
                                    <AtomButton variant="outline" size="icon" onClick={handleCopy}>
                                        <Copy className="h-4 w-4" />
                                        <span className="sr-only">Копировать</span>
                                    </AtomButton>
                                    <AtomButton variant="outline" size="icon" onClick={handleDownload}>
                                        <Download className="h-4 w-4" />
                                        <span className="sr-only">Скачать</span>
                                    </AtomButton>
                                </div>
                            )}
                        </div>
                    </AtomCardHeader>
                    <AtomCardContent className="flex-1">
                        {generatedText ? (
                            <AtomTabs defaultValue="preview" className="h-full">
                                <AtomTabsList>
                                    <AtomTabsTrigger value="preview">Превью</AtomTabsTrigger>
                                    <AtomTabsTrigger value="raw">Текст</AtomTabsTrigger>
                                </AtomTabsList>
                                <AtomTabsContent value="preview" className="h-[calc(100%-40px)] overflow-auto">
                                    <div className="prose prose-sm max-w-none dark:prose-invert">
                                        {generatedText.split("\n").map((line, i) => {
                                            if (line.startsWith("# ")) {
                                                return <h1 key={i} className="text-2xl font-bold mt-0">{line.slice(2)}</h1>
                                            }
                                            if (line.startsWith("## ")) {
                                                return <h2 key={i} className="text-xl font-semibold">{line.slice(3)}</h2>
                                            }
                                            if (line.trim() === "") {
                                                return <br key={i} />
                                            }
                                            return <p key={i}>{line}</p>
                                        })}
                                    </div>
                                </AtomTabsContent>
                                <AtomTabsContent value="raw" className="h-[calc(100%-40px)]">
                                    <AtomTextarea
                                        value={generatedText}
                                        onChange={(e) => setGeneratedText(e.target.value)}
                                        className="h-full min-h-[400px] resize-none font-mono text-sm"
                                    />
                                </AtomTabsContent>
                            </AtomTabs>
                        ) : (
                            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center text-muted-foreground">
                                <Sparkles className="h-12 w-12 mb-4 opacity-50" />
                                <p className="text-lg font-medium">Здесь появится ваш текст</p>
                                <p className="text-sm">Заполните параметры слева и нажмите «Сгенерировать»</p>
                            </div>
                        )}
                    </AtomCardContent>
                </AtomCard>
            </div>
        </div>
    )
}

function safeJsonParse(raw: string): string | null {
    try {
        const parsed = JSON.parse(raw)
        return typeof parsed === "string" ? parsed : null
    } catch {
        return null
    }
}
