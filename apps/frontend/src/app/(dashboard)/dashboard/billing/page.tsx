"use client"

import { useState } from "react"
import {
  AtomCard, AtomCardContent, AtomCardDescription, AtomCardFooter, AtomCardHeader, AtomCardTitle,
  AtomButton,
  AtomBadge,
  AtomTable, AtomTableBody, AtomTableCell, AtomTableHead, AtomTableHeader, AtomTableRow,
} from "@/components/shared"
import { Check, CreditCard, Download, Sparkles } from "lucide-react"
import { cn } from "@/utils"

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
      <AtomCard>
        <AtomCardHeader>
          <AtomCardTitle>Текущий тариф</AtomCardTitle>
          <AtomCardDescription>Управление вашей подпиской</AtomCardDescription>
        </AtomCardHeader>
        <AtomCardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">{currentPlan}</h3>
                <AtomBadge>Активен</AtomBadge>
              </div>
              <p className="text-sm text-muted-foreground">
                Следующее списание: 15 февраля 2024 - 990 руб.
              </p>
            </div>
            <div className="flex gap-2">
              <AtomButton variant="outline">Отменить подписку</AtomButton>
              <AtomButton>Изменить тариф</AtomButton>
            </div>
          </div>
        </AtomCardContent>
      </AtomCard>

      {/* Token Balance */}
      <AtomCard>
        <AtomCardHeader>
          <AtomCardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Баланс токенов
          </AtomCardTitle>
        </AtomCardHeader>
        <AtomCardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-4xl font-bold">14,580</p>
              <p className="text-sm text-muted-foreground">из 30,000 токенов осталось</p>
              <div className="h-2 w-full max-w-md rounded-full bg-muted">
                <div className="h-full w-[49%] rounded-full bg-primary" />
              </div>
            </div>
            <AtomButton variant="outline">Докупить токены</AtomButton>
          </div>
        </AtomCardContent>
      </AtomCard>

      {/* Plans */}
      <div>
        <h2 className="text-xl font-bold mb-4">Доступные тарифы</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <AtomCard
              key={plan.name}
              className={cn(
                "relative",
                plan.popular && "border-primary shadow-md"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <AtomBadge className="bg-primary">Популярный</AtomBadge>
                </div>
              )}
              <AtomCardHeader>
                <AtomCardTitle>{plan.name}</AtomCardTitle>
                <AtomCardDescription>
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground"> руб/мес</span>
                </AtomCardDescription>
              </AtomCardHeader>
              <AtomCardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </AtomCardContent>
              <AtomCardFooter>
                <AtomButton
                  className="w-full"
                  variant={plan.name === currentPlan ? "secondary" : "default"}
                  disabled={plan.name === currentPlan}
                >
                  {plan.name === currentPlan ? "Текущий тариф" : "Выбрать"}
                </AtomButton>
              </AtomCardFooter>
            </AtomCard>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <AtomCard>
        <AtomCardHeader>
          <AtomCardTitle>Способы оплаты</AtomCardTitle>
          <AtomCardDescription>Управление платежными методами</AtomCardDescription>
        </AtomCardHeader>
        <AtomCardContent>
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
              <AtomBadge variant="secondary">Основная</AtomBadge>
              <AtomButton variant="ghost" size="sm">Изменить</AtomButton>
            </div>
          </div>
          <AtomButton variant="outline" className="mt-4">
            Добавить способ оплаты
          </AtomButton>
        </AtomCardContent>
      </AtomCard>

      {/* Payment History */}
      <AtomCard>
        <AtomCardHeader>
          <AtomCardTitle>История платежей</AtomCardTitle>
          <AtomCardDescription>Все ваши транзакции</AtomCardDescription>
        </AtomCardHeader>
        <AtomCardContent>
          <div className="rounded-md border">
            <AtomTable>
              <AtomTableHeader>
                <AtomTableRow>
                  <AtomTableHead>Номер</AtomTableHead>
                  <AtomTableHead>Дата</AtomTableHead>
                  <AtomTableHead>Тариф</AtomTableHead>
                  <AtomTableHead className="text-right">Сумма</AtomTableHead>
                  <AtomTableHead>Статус</AtomTableHead>
                  <AtomTableHead className="w-[50px]"></AtomTableHead>
                </AtomTableRow>
              </AtomTableHeader>
              <AtomTableBody>
                {paymentHistory.map((payment) => (
                  <AtomTableRow key={payment.id}>
                    <AtomTableCell className="font-medium">{payment.id}</AtomTableCell>
                    <AtomTableCell>{payment.date}</AtomTableCell>
                    <AtomTableCell>{payment.plan}</AtomTableCell>
                    <AtomTableCell className="text-right">{payment.amount} руб.</AtomTableCell>
                    <AtomTableCell>
                      <AtomBadge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        Оплачено
                      </AtomBadge>
                    </AtomTableCell>
                    <AtomTableCell>
                      <AtomButton variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Скачать счет</span>
                      </AtomButton>
                    </AtomTableCell>
                  </AtomTableRow>
                ))}
              </AtomTableBody>
            </AtomTable>
          </div>
        </AtomCardContent>
      </AtomCard>
    </div>
  )
}
