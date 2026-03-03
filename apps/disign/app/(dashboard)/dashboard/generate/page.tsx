"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
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
    // Simulate generation
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
          <Card>
            <CardHeader>
              <CardTitle>Тип контента</CardTitle>
              <CardDescription>Выберите, что вы хотите создать</CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>

          {/* Generation Parameters */}
          <Card>
            <CardHeader>
              <CardTitle>Параметры генерации</CardTitle>
              <CardDescription>Настройте параметры для создания контента</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {contentType === "rewrite" ? (
                <div className="space-y-2">
                  <Label htmlFor="sourceText">Исходный текст</Label>
                  <Textarea
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
                    <Label htmlFor="topic">Тема</Label>
                    <Input
                      id="topic"
                      placeholder="О чем будет ваш текст?"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="keywords">Ключевые слова (через запятую)</Label>
                    <Input
                      id="keywords"
                      placeholder="SEO, оптимизация, контент"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label>Тон текста</Label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="formal">Формальный</SelectItem>
                    <SelectItem value="neutral">Нейтральный</SelectItem>
                    <SelectItem value="friendly">Дружелюбный</SelectItem>
                    <SelectItem value="professional">Профессиональный</SelectItem>
                    <SelectItem value="creative">Творческий</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Длина текста (символов)</Label>
                <Select value={length} onValueChange={setLength}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500">500 - Короткий</SelectItem>
                    <SelectItem value="1000">1,000 - Небольшой</SelectItem>
                    <SelectItem value="1500">1,500 - Средний</SelectItem>
                    <SelectItem value="2500">2,500 - Длинный</SelectItem>
                    <SelectItem value="4000">4,000 - Очень длинный</SelectItem>
                    <SelectItem value="5000">5,000 - Максимальный</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="text-sm font-medium">Примерный расход токенов</p>
                  <p className="text-xs text-muted-foreground">Зависит от сложности контента</p>
                </div>
                <Badge variant="secondary" className="text-lg">
                  ~{estimatedTokens.toLocaleString()}
                </Badge>
              </div>

              <Button onClick={handleGenerate} disabled={isGenerating} className="w-full" size="lg">
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
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Output Section */}
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Результат</CardTitle>
                <CardDescription>Сгенерированный текст</CardDescription>
              </div>
              {generatedText && (
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={handleCopy}>
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Копировать</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Скачать</span>
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            {generatedText ? (
              <Tabs defaultValue="preview" className="h-full">
                <TabsList>
                  <TabsTrigger value="preview">Превью</TabsTrigger>
                  <TabsTrigger value="raw">Текст</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="h-[calc(100%-40px)] overflow-auto">
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
                </TabsContent>
                <TabsContent value="raw" className="h-[calc(100%-40px)]">
                  <Textarea
                    value={generatedText}
                    onChange={(e) => setGeneratedText(e.target.value)}
                    className="h-full min-h-[400px] resize-none font-mono text-sm"
                  />
                </TabsContent>
              </Tabs>
            ) : (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center text-muted-foreground">
                <Sparkles className="h-12 w-12 mb-4 opacity-50" />
                <p className="text-lg font-medium">Здесь появится ваш текст</p>
                <p className="text-sm">Заполните параметры слева и нажмите "Сгенерировать"</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
