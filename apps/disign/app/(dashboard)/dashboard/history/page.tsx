"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Search, MoreHorizontal, Eye, Copy, Trash2, Download } from "lucide-react"

const historyData = [
  {
    id: "1",
    title: "10 способов улучшить продуктивность",
    type: "Статья",
    tokens: 1250,
    date: "2024-01-15 14:32",
    status: "completed",
  },
  {
    id: "2",
    title: "Обзор технологических трендов 2024",
    type: "Новость",
    tokens: 850,
    date: "2024-01-15 11:15",
    status: "completed",
  },
  {
    id: "3",
    title: "Переработка маркетингового текста",
    type: "Рерайт",
    tokens: 620,
    date: "2024-01-14 18:45",
    status: "completed",
  },
  {
    id: "4",
    title: "Короткая история о путешествии",
    type: "Рассказ",
    tokens: 1840,
    date: "2024-01-14 15:20",
    status: "completed",
  },
  {
    id: "5",
    title: "Введение в машинное обучение",
    type: "Статья",
    tokens: 2100,
    date: "2024-01-13 10:00",
    status: "completed",
  },
  {
    id: "6",
    title: "Новости финансового рынка",
    type: "Новость",
    tokens: 780,
    date: "2024-01-12 16:30",
    status: "completed",
  },
  {
    id: "7",
    title: "SEO-оптимизация контента",
    type: "Рерайт",
    tokens: 540,
    date: "2024-01-12 09:15",
    status: "completed",
  },
  {
    id: "8",
    title: "Фантастический рассказ о будущем",
    type: "Рассказ",
    tokens: 2350,
    date: "2024-01-11 20:00",
    status: "completed",
  },
  {
    id: "9",
    title: "Как начать свой бизнес",
    type: "Статья",
    tokens: 1680,
    date: "2024-01-11 14:20",
    status: "completed",
  },
  {
    id: "10",
    title: "Обзор новых гаджетов",
    type: "Новость",
    tokens: 920,
    date: "2024-01-10 12:00",
    status: "completed",
  },
]

const typeColors: Record<string, string> = {
  "Статья": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "Новость": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "Рерайт": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  "Рассказ": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
}

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredData = historyData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || item.type === typeFilter
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>История генераций</CardTitle>
          <CardDescription>Все ваши сгенерированные тексты</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по названию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Тип контента" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все типы</SelectItem>
                <SelectItem value="Статья">Статьи</SelectItem>
                <SelectItem value="Новость">Новости</SelectItem>
                <SelectItem value="Рерайт">Рерайт</SelectItem>
                <SelectItem value="Рассказ">Рассказы</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Название</TableHead>
                  <TableHead>Тип</TableHead>
                  <TableHead className="text-right">Токены</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium max-w-[300px] truncate">
                      {item.title}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={typeColors[item.type]}>
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{item.tokens.toLocaleString()}</TableCell>
                    <TableCell className="text-muted-foreground">{item.date}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Действия</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            Просмотр
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Copy className="h-4 w-4" />
                            Копировать
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Скачать
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                            <Trash2 className="h-4 w-4" />
                            Удалить
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Ничего не найдено
            </div>
          )}

          {/* Pagination info */}
          <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
            <span>Показано {filteredData.length} из {historyData.length} записей</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Назад
              </Button>
              <Button variant="outline" size="sm" disabled>
                Вперед
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
