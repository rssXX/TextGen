"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Sparkles, Clock, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Всего генераций",
    value: "247",
    description: "+12% за месяц",
    icon: FileText,
  },
  {
    title: "Использовано токенов",
    value: "15,420",
    description: "из 20,000 доступных",
    icon: Sparkles,
  },
  {
    title: "Среднее время",
    value: "3.2 сек",
    description: "на генерацию",
    icon: Clock,
  },
  {
    title: "Качество текстов",
    value: "94%",
    description: "положительных оценок",
    icon: TrendingUp,
  },
]

const recentActivity = [
  { type: "Статья", title: "10 способов улучшить продуктивность", date: "Сегодня, 14:32", tokens: 1250 },
  { type: "Новость", title: "Обзор технологических трендов 2024", date: "Сегодня, 11:15", tokens: 850 },
  { type: "Рерайт", title: "Переработка маркетингового текста", date: "Вчера, 18:45", tokens: 620 },
  { type: "Рассказ", title: "Короткая история о путешествии", date: "Вчера, 15:20", tokens: 1840 },
  { type: "Статья", title: "Введение в машинное обучение", date: "2 дня назад", tokens: 2100 },
]

const usageByType = [
  { type: "Статьи", count: 89, percentage: 36 },
  { type: "Новости", count: 67, percentage: 27 },
  { type: "Рерайт", count: 52, percentage: 21 },
  { type: "Рассказы", count: 39, percentage: 16 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Usage by Type */}
        <Card>
          <CardHeader>
            <CardTitle>Использование по типам</CardTitle>
            <CardDescription>Распределение генераций за последний месяц</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {usageByType.map((item) => (
                <div key={item.type} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>{item.type}</span>
                    <span className="text-muted-foreground">{item.count} ({item.percentage}%)</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Последняя активность</CardTitle>
            <CardDescription>Ваши недавние генерации</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium">
                        {item.type}
                      </span>
                      <span className="font-medium text-sm truncate max-w-[200px]">{item.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.tokens} токенов
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Token Usage Card */}
      <Card>
        <CardHeader>
          <CardTitle>Использование токенов</CardTitle>
          <CardDescription>Текущий баланс и расход за период</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Осталось токенов</p>
              <p className="text-3xl font-bold">4,580</p>
            </div>
            <div className="h-4 flex-1 max-w-md rounded-full bg-muted">
              <div className="h-full w-[77%] rounded-full bg-primary" />
            </div>
            <div className="space-y-1 text-right">
              <p className="text-sm text-muted-foreground">Использовано</p>
              <p className="text-3xl font-bold">15,420</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Ваш тариф обновится через 12 дней. Следующее пополнение: 20,000 токенов.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
