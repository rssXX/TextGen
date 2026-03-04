"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FileText, Eye, EyeOff } from "lucide-react"
import {
    AtomCard,
    AtomCardHeader,
    AtomCardTitle,
    AtomCardDescription,
    AtomCardContent,
    AtomButton, AtomCardFooter,
    AtomLabel, AtomInput,
} from "@/components/shared";

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login - replace with actual auth logic
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <AtomCard className="w-full max-w-md">
        <AtomCardHeader className="text-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">TextGen</span>
          </Link>
          <AtomCardTitle className="text-2xl">Вход в аккаунт</AtomCardTitle>
          <AtomCardDescription>
            Введите свои данные для входа в систему
          </AtomCardDescription>
        </AtomCardHeader>
        <form onSubmit={handleSubmit}>
          <AtomCardContent className="space-y-4">
            <div className="space-y-2">
              <AtomLabel htmlFor="email">Email</AtomLabel>
              <AtomInput
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <AtomLabel htmlFor="password">Пароль</AtomLabel>
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Забыли пароль?
                </Link>
              </div>
              <div className="relative">
                <AtomInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Введите пароль"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </AtomCardContent>
          <AtomCardFooter className="flex flex-col gap-4">
            <AtomButton type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Вход..." : "Войти"}
            </AtomButton>
            <p className="text-sm text-center text-muted-foreground">
              Нет аккаунта?{" "}
              <Link href="/register" className="text-primary hover:underline font-medium">
                Зарегистрироваться
              </Link>
            </p>
          </AtomCardFooter>
        </form>
      </AtomCard>
    </div>
  )
}
