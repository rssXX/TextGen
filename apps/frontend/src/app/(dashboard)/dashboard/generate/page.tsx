"use client"

import { useState } from "react"
import {
  AtomCard, AtomCardContent, AtomCardDescription, AtomCardHeader, AtomCardTitle,
  AtomButton,
  AtomInput,
  AtomLabel,
  AtomTextarea,
  AtomSelect, AtomSelectContent, AtomSelectItem, AtomSelectTrigger, AtomSelectValue,
  AtomTabs, AtomTabsContent, AtomTabsList, AtomTabsTrigger,
  AtomBadge,
} from "@/components/shared"
import { Sparkles, Copy, Download, RotateCcw, FileText, Newspaper, BookOpen, RefreshCw } from "lucide-react"

const contentTypes = [
  { value: "article", label: "Статья", icon: FileText, description: "Информационные и обучающие статьи" },
  { value: "news", label: "Новость", icon: Newspaper, description: "Новостные материалы и пресс-релизы" },
  { value: "story", label: "Рассказ", icon: BookOpen, description: "Короткие истории и рассказы" },
  { value: "rewrite", label: "Рерайт", icon: RefreshCw, description: "Переработка существующего текста" },
]

export default function GeneratePage() {
  const [contentType, setContentType] = useState("article")
  const [topic, setTopic] = useState("")
  const [keywords, setKeywords] = useState("")
  const [length, setLength] = useState("1500")
  const [tone, setTone] = useState("neutral")
  const [sourceText, setSourceText] = useState("")
  const [generatedText, setGeneratedText] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const estimatedTokens = Math.round(parseInt(length) * 1.3)

  const handleGenerate = async () => {
    setIsGenerating(true)
    setTimeout(() => {
      setGeneratedText(`# ${topic || "Сгенерированный текст"}\n\nЭто пример сгенерированного текста. В реальном приложении здесь будет контент, созданный с помощью ИИ на основе ваших параметров.\n\nЛорем ипсум долор сит амет, консектетур адиписицинг элит. Сед до эйусмод темпор инцидидунт ут лаборе эт долоре магна аликва. Ут эним ад миним вениам, квис ноструд экзерцитатион улламко лаборис ниси ут аликвип экс эа коммодо консеквуэт.\n\nДуис ауте ируре долор ин репрехендерит ин волуптате велит эссе циллум долоре еу фугиат нулла париатур. Экзептеур синт оккаекат купидатат нон пройдент, сунт ин кульпа куи оффициа дезерунт моллит аним ид эст лаборум.`)
      setIsGenerating(false)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Content Type Selection */}
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
                    <type.icon className={`h-5 w-5 ${contentType === type.value ? "text-primary" : "text-muted-foreground"}`} />
                    <div>
                      <p className="font-medium">{type.label}</p>
                      <p className="text-xs text-muted-foreground">{type.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </AtomCardContent>
          </AtomCard>

          {/* Generation Parameters */}
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
                  <div className="space-y-2">
                    <AtomLabel htmlFor="keywords">Ключевые слова (через запятую)</AtomLabel>
                    <AtomInput
                      id="keywords"
                      placeholder="SEO, оптимизация, контент"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <AtomLabel>Тон текста</AtomLabel>
                <AtomSelect value={tone} onValueChange={setTone}>
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
                    <AtomSelectItem value="500">500 - Короткий</AtomSelectItem>
                    <AtomSelectItem value="1000">1,000 - Небольшой</AtomSelectItem>
                    <AtomSelectItem value="1500">1,500 - Средний</AtomSelectItem>
                    <AtomSelectItem value="2500">2,500 - Длинный</AtomSelectItem>
                    <AtomSelectItem value="4000">4,000 - Очень длинный</AtomSelectItem>
                    <AtomSelectItem value="5000">5,000 - Максимальный</AtomSelectItem>
                  </AtomSelectContent>
                </AtomSelect>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="text-sm font-medium">Примерный расход токенов</p>
                  <p className="text-xs text-muted-foreground">Зависит от сложности контента</p>
                </div>
                <AtomBadge variant="secondary" className="text-lg">
                  ~{estimatedTokens.toLocaleString()}
                </AtomBadge>
              </div>

              <AtomButton onClick={handleGenerate} disabled={isGenerating} className="w-full" size="lg">
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

        {/* Output Section */}
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
                  <AtomButton variant="outline" size="icon">
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
                <p className="text-sm">Заполните параметры слева и нажмите "Сгенерировать"</p>
              </div>
            )}
          </AtomCardContent>
        </AtomCard>
      </div>
    </div>
  )
}
