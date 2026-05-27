"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  AtomCard, AtomCardContent, AtomCardDescription, AtomCardHeader, AtomCardTitle,
} from "@/components/shared"
import { FileText, Sparkles, Newspaper, BookOpen, RefreshCw } from "lucide-react"
import { apiFetch, type StatsResponse, type ContentType } from "@/lib"

const CONTENT_TYPE_LABELS: Record<ContentType, string> = {
  article: "Статья",
  news: "Новость",
  story: "Рассказ",
  rewrite: "Рерайт",
}

const CONTENT_TYPE_ICONS: Record<ContentType, typeof FileText> = {
  article: FileText,
  news: Newspaper,
  story: BookOpen,
  rewrite: RefreshCw,
}

const formatDate = (iso: string): string => {
  const date = new Date(iso)
  return date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default function DashboardPage() {
  const [data, setData] = useState<StatsResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    apiFetch<StatsResponse>("/api/v1/stats")
      .then((res) => {
        if (!cancelled) setData(res)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message ?? "Не удалось загрузить статистику")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (loading) {
    return <div className="text-muted-foreground">Загрузка…</div>
  }

  if (error || !data) {
    return <div className="text-destructive">Ошибка: {error}</div>
  }

  const byTypeMap = new Map(data.byType.map((row) => [row.contentType, row.count]))
  const orderedTypes: ContentType[] = ["article", "news", "story", "rewrite"]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AtomCard>
          <AtomCardHeader className="flex flex-row items-center justify-between pb-2">
            <AtomCardTitle className="text-sm font-medium text-muted-foreground">
              Всего генераций
            </AtomCardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </AtomCardHeader>
          <AtomCardContent>
            <div className="text-2xl font-bold">{data.total}</div>
            <p className="text-xs text-muted-foreground">за всё время</p>
          </AtomCardContent>
        </AtomCard>

        {orderedTypes.map((type) => {
          const Icon = CONTENT_TYPE_ICONS[type]
          return (
            <AtomCard key={type}>
              <AtomCardHeader className="flex flex-row items-center justify-between pb-2">
                <AtomCardTitle className="text-sm font-medium text-muted-foreground">
                  {CONTENT_TYPE_LABELS[type]}
                </AtomCardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </AtomCardHeader>
              <AtomCardContent>
                <div className="text-2xl font-bold">{byTypeMap.get(type) ?? 0}</div>
                <p className="text-xs text-muted-foreground">генераций этого типа</p>
              </AtomCardContent>
            </AtomCard>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AtomCard>
          <AtomCardHeader>
            <AtomCardTitle>Распределение по типам</AtomCardTitle>
            <AtomCardDescription>Доля каждого типа от общего числа</AtomCardDescription>
          </AtomCardHeader>
          <AtomCardContent>
            {data.total === 0 ? (
              <div className="text-sm text-muted-foreground">Пока нет данных</div>
            ) : (
              <div className="space-y-4">
                {orderedTypes.map((type) => {
                  const count = byTypeMap.get(type) ?? 0
                  const percentage = data.total > 0 ? Math.round((count / data.total) * 100) : 0
                  return (
                    <div key={type} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>{CONTENT_TYPE_LABELS[type]}</span>
                        <span className="text-muted-foreground">{count} ({percentage}%)</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </AtomCardContent>
        </AtomCard>

        <AtomCard>
          <AtomCardHeader>
            <AtomCardTitle>Последняя активность</AtomCardTitle>
            <AtomCardDescription>Ваши последние 5 генераций</AtomCardDescription>
          </AtomCardHeader>
          <AtomCardContent>
            {data.recent.length === 0 ? (
              <div className="text-sm text-muted-foreground">
                Пока пусто. <Link href="/dashboard/generate" className="text-primary hover:underline">Создать первую</Link>
              </div>
            ) : (
              <div className="space-y-4">
                {data.recent.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium">
                          {CONTENT_TYPE_LABELS[item.contentType]}
                        </span>
                        <span className="font-medium text-sm truncate">{item.topic}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{formatDate(item.createdAt)}</p>
                    </div>
                    <div className="text-sm text-muted-foreground shrink-0 ml-2">
                      ~{item.length} симв.
                    </div>
                  </div>
                ))}
              </div>
            )}
          </AtomCardContent>
        </AtomCard>
      </div>
    </div>
  )
}
