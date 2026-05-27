"use client"

import { useEffect, useState, useCallback } from "react"
import {
  AtomCard, AtomCardContent, AtomCardDescription, AtomCardHeader, AtomCardTitle,
  AtomButton,
  AtomInput,
  AtomSelect, AtomSelectContent, AtomSelectItem, AtomSelectTrigger, AtomSelectValue,
  AtomTable, AtomTableBody, AtomTableCell, AtomTableHead, AtomTableHeader, AtomTableRow,
  AtomDropdownMenu, AtomDropdownMenuContent, AtomDropdownMenuItem, AtomDropdownMenuTrigger,
  AtomBadge,
  AtomSheet, AtomSheetContent, AtomSheetHeader, AtomSheetTitle, AtomSheetDescription,
} from "@/components/shared"
import { Search, MoreHorizontal, Eye, Copy, Trash2 } from "lucide-react"
import {
  apiFetch,
  ApiError,
  type GenerationsListResponse,
  type GenerationListItem,
  type GenerationDetail,
  type ContentType,
} from "@/lib"

const TYPE_LABELS: Record<ContentType, string> = {
  article: "Статья",
  news: "Новость",
  story: "Рассказ",
  rewrite: "Рерайт",
}

const TYPE_COLORS: Record<ContentType, string> = {
  article: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  news: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  story: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  rewrite: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
}

const PAGE_SIZE = 20

const formatDate = (iso: string): string => {
  const date = new Date(iso)
  return date.toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [page, setPage] = useState(1)
  const [data, setData] = useState<GenerationsListResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [viewing, setViewing] = useState<GenerationDetail | null>(null)
  const [viewingLoading, setViewingLoading] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams()
      params.set("page", String(page))
      params.set("pageSize", String(PAGE_SIZE))
      if (searchQuery.trim()) params.set("search", searchQuery.trim())
      if (typeFilter !== "all") params.set("type", typeFilter)
      const res = await apiFetch<GenerationsListResponse>(`/api/v1/generations?${params.toString()}`)
      setData(res)
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Не удалось загрузить историю")
    } finally {
      setLoading(false)
    }
  }, [page, searchQuery, typeFilter])

  useEffect(() => {
    const timeout = setTimeout(() => {
      void load()
    }, 250)
    return () => clearTimeout(timeout)
  }, [load])

  const handleDelete = async (id: string) => {
    if (!confirm("Удалить эту генерацию?")) return
    try {
      await apiFetch(`/api/v1/generations/${id}`, { method: "DELETE" })
      await load()
    } catch (err) {
      alert(err instanceof ApiError ? err.message : "Ошибка удаления")
    }
  }

  const handleView = async (item: GenerationListItem) => {
    setViewingLoading(true)
    try {
      const detail = await apiFetch<GenerationDetail>(`/api/v1/generations/${item.id}`)
      setViewing(detail)
    } catch (err) {
      alert(err instanceof ApiError ? err.message : "Ошибка загрузки")
    } finally {
      setViewingLoading(false)
    }
  }

  const handleCopy = async (item: GenerationListItem) => {
    try {
      const detail = await apiFetch<GenerationDetail>(`/api/v1/generations/${item.id}`)
      await navigator.clipboard.writeText(detail.content)
    } catch (err) {
      alert(err instanceof ApiError ? err.message : "Ошибка копирования")
    }
  }

  const totalPages = data ? Math.max(1, Math.ceil(data.total / PAGE_SIZE)) : 1

  return (
    <div className="space-y-6">
      <AtomCard>
        <AtomCardHeader>
          <AtomCardTitle>История генераций</AtomCardTitle>
          <AtomCardDescription>Все ваши сгенерированные тексты</AtomCardDescription>
        </AtomCardHeader>
        <AtomCardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <AtomInput
                placeholder="Поиск по теме..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setPage(1)
                }}
                className="pl-9"
              />
            </div>
            <AtomSelect
              value={typeFilter}
              onValueChange={(v) => {
                setTypeFilter(v)
                setPage(1)
              }}
            >
              <AtomSelectTrigger className="w-full sm:w-[180px]">
                <AtomSelectValue placeholder="Тип контента" />
              </AtomSelectTrigger>
              <AtomSelectContent>
                <AtomSelectItem value="all">Все типы</AtomSelectItem>
                <AtomSelectItem value="article">Статьи</AtomSelectItem>
                <AtomSelectItem value="news">Новости</AtomSelectItem>
                <AtomSelectItem value="story">Рассказы</AtomSelectItem>
                <AtomSelectItem value="rewrite">Рерайт</AtomSelectItem>
              </AtomSelectContent>
            </AtomSelect>
          </div>

          {error && <div className="text-destructive mb-4">{error}</div>}

          <div className="rounded-md border">
            <AtomTable>
              <AtomTableHeader>
                <AtomTableRow>
                  <AtomTableHead>Тема</AtomTableHead>
                  <AtomTableHead>Тип</AtomTableHead>
                  <AtomTableHead className="text-right">Длина</AtomTableHead>
                  <AtomTableHead>Дата</AtomTableHead>
                  <AtomTableHead>Статус</AtomTableHead>
                  <AtomTableHead className="w-[50px]"></AtomTableHead>
                </AtomTableRow>
              </AtomTableHeader>
              <AtomTableBody>
                {loading && (
                  <AtomTableRow>
                    <AtomTableCell colSpan={6} className="text-center text-muted-foreground py-8">
                      Загрузка…
                    </AtomTableCell>
                  </AtomTableRow>
                )}
                {!loading && data?.items.map((item) => (
                  <AtomTableRow key={item.id}>
                    <AtomTableCell className="font-medium max-w-[300px] truncate">
                      {item.topic}
                    </AtomTableCell>
                    <AtomTableCell>
                      <AtomBadge variant="secondary" className={TYPE_COLORS[item.contentType]}>
                        {TYPE_LABELS[item.contentType]}
                      </AtomBadge>
                    </AtomTableCell>
                    <AtomTableCell className="text-right">{item.length.toLocaleString("ru-RU")}</AtomTableCell>
                    <AtomTableCell className="text-muted-foreground">{formatDate(item.createdAt)}</AtomTableCell>
                    <AtomTableCell>
                      {item.status === "done" && <span className="text-green-700 dark:text-green-400 text-sm">готово</span>}
                      {item.status === "streaming" && <span className="text-amber-700 dark:text-amber-400 text-sm">в процессе</span>}
                      {item.status === "error" && <span className="text-destructive text-sm">ошибка</span>}
                    </AtomTableCell>
                    <AtomTableCell>
                      <AtomDropdownMenu>
                        <AtomDropdownMenuTrigger asChild>
                          <AtomButton variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Действия</span>
                          </AtomButton>
                        </AtomDropdownMenuTrigger>
                        <AtomDropdownMenuContent align="end">
                          <AtomDropdownMenuItem onSelect={() => handleView(item)} className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            Просмотр
                          </AtomDropdownMenuItem>
                          <AtomDropdownMenuItem onSelect={() => handleCopy(item)} className="flex items-center gap-2">
                            <Copy className="h-4 w-4" />
                            Копировать
                          </AtomDropdownMenuItem>
                          <AtomDropdownMenuItem onSelect={() => handleDelete(item.id)} className="flex items-center gap-2 text-destructive">
                            <Trash2 className="h-4 w-4" />
                            Удалить
                          </AtomDropdownMenuItem>
                        </AtomDropdownMenuContent>
                      </AtomDropdownMenu>
                    </AtomTableCell>
                  </AtomTableRow>
                ))}
                {!loading && data?.items.length === 0 && (
                  <AtomTableRow>
                    <AtomTableCell colSpan={6} className="text-center text-muted-foreground py-8">
                      Ничего не найдено
                    </AtomTableCell>
                  </AtomTableRow>
                )}
              </AtomTableBody>
            </AtomTable>
          </div>

          <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
            <span>
              {data ? `Страница ${data.page} из ${totalPages} — всего ${data.total} записей` : ""}
            </span>
            <div className="flex gap-2">
              <AtomButton
                variant="outline"
                size="sm"
                disabled={page <= 1 || loading}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                Назад
              </AtomButton>
              <AtomButton
                variant="outline"
                size="sm"
                disabled={page >= totalPages || loading}
                onClick={() => setPage((p) => p + 1)}
              >
                Вперёд
              </AtomButton>
            </div>
          </div>
        </AtomCardContent>
      </AtomCard>

      <AtomSheet open={!!viewing || viewingLoading} onOpenChange={(open) => { if (!open) setViewing(null) }}>
        <AtomSheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
          <AtomSheetHeader>
            <AtomSheetTitle>{viewing?.topic ?? "Загрузка…"}</AtomSheetTitle>
            {viewing && (
              <AtomSheetDescription>
                {TYPE_LABELS[viewing.contentType]} · {formatDate(viewing.createdAt)}
              </AtomSheetDescription>
            )}
          </AtomSheetHeader>
          {viewing && (
            <div className="px-4 pb-6 whitespace-pre-wrap text-sm leading-relaxed">{viewing.content}</div>
          )}
        </AtomSheetContent>
      </AtomSheet>
    </div>
  )
}
