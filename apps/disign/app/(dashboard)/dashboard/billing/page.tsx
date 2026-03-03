"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Check, CreditCard, Download, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Стартовый",
    price: 490,
    tokens: 10000,
    features: [
      "10,000 токенов в месяц",
      "Все типы контента",
      "Базовая поддержка",
      "История генераций",
    ],
    popular: false,
  },
  {
    name: "Профессиональный",
    price: 990,
    tokens: 30000,
    features: [
      "30,000 токенов в месяц",
      "Все типы контента",
      "Приоритетная поддержка",
      "Расширенная история",
      "API доступ",
    ],
    popular: true,
  },
  {
    name: "Бизнес",
    price: 2490,
    tokens: 100000,
    features: [
      "100,000 токенов в месяц",
      "Все типы контента",
      "Персональный менеджер",
      "Неограниченная история",
      "API доступ",
      "Приоритетная генерация",
    ],
    popular: false,
  },
]

const paymentHistory = [
  { id: "INV-001", date: "15 янв 2024", plan: "Профессиональный", amount: 990, status: "paid" },
  { id: "INV-002", date: "15 дек 2023", plan: "Профессиональный", amount: 990, status: "paid" },
  { id: "INV-003", date: "15 ноя 2023", plan: "Стартовый", amount: 490, status: "paid" },
  { id: "INV-004", date: "15 окт 2023", plan: "Стартовый", amount: 490, status: "paid" },
]

export default function BillingPage() {
  const [currentPlan] = useState("Профессиональный")

  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle>Текущий тариф</CardTitle>
          <CardDescription>Управление вашей подпиской</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">{currentPlan}</h3>
                <Badge>Активен</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Следующее списание: 15 февраля 2024 - 990 руб.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Отменить подписку</Button>
              <Button>Изменить тариф</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Token Balance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Баланс токенов
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-4xl font-bold">14,580</p>
              <p className="text-sm text-muted-foreground">из 30,000 токенов осталось</p>
              <div className="h-2 w-full max-w-md rounded-full bg-muted">
                <div className="h-full w-[49%] rounded-full bg-primary" />
              </div>
            </div>
            <Button variant="outline">Докупить токены</Button>
          </div>
        </CardContent>
      </Card>

      {/* Plans */}
      <div>
        <h2 className="text-xl font-bold mb-4">Доступные тарифы</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative",
                plan.popular && "border-primary shadow-md"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary">Популярный</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground"> руб/мес</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.name === currentPlan ? "secondary" : "default"}
                  disabled={plan.name === currentPlan}
                >
                  {plan.name === currentPlan ? "Текущий тариф" : "Выбрать"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Способы оплаты</CardTitle>
          <CardDescription>Управление платежными методами</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-14 items-center justify-center rounded bg-muted">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Visa **** 4242</p>
                <p className="text-sm text-muted-foreground">Истекает 12/25</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Основная</Badge>
              <Button variant="ghost" size="sm">Изменить</Button>
            </div>
          </div>
          <Button variant="outline" className="mt-4">
            Добавить способ оплаты
          </Button>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>История платежей</CardTitle>
          <CardDescription>Все ваши транзакции</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Номер</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Тариф</TableHead>
                  <TableHead className="text-right">Сумма</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.plan}</TableCell>
                    <TableCell className="text-right">{payment.amount} руб.</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        Оплачено
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Скачать счет</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
