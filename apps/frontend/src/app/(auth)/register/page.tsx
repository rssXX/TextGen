"use client"

import {useState} from "react"
import Link from "next/link"
import {useRouter} from "next/navigation"
import {FileText, Eye, EyeOff} from "lucide-react"
import {
    AtomButton,
    AtomCard,
    AtomCardContent,
    AtomCardDescription,
    AtomCardFooter,
    AtomCardHeader,
    AtomCardTitle,
    AtomLabel, AtomInput, AtomCheckbox,
} from "@/components/shared";
import {authClient} from "@/lib";

export default function RegisterPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [agreedToTerms, setAgreedToTerms] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setErrors({})

        if (formData.password !== formData.confirmPassword) {
            setErrors({confirmPassword: "Пароли не совпадают"})
            return
        }

        if (!agreedToTerms) {
            setErrors({terms: "Необходимо принять условия использования"})
            return
        }

        setIsLoading(true)

        const result = await authClient.signUp.email({
            email: formData.email,
            password: formData.password,
            name: formData.name,
            callbackURL: "/dashboard",
        })

        setIsLoading(false)

        if (result.error) {
            const message = result.error.message ?? "Ошибка при регистрации"
            if (message.toLowerCase().includes("email")) {
                setErrors({email: message})
            } else if (message.toLowerCase().includes("password")) {
                setErrors({password: message})
            } else {
                setErrors({general: message})
            }
            return
        }

        router.push("/dashboard")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-8">
            <AtomCard className="w-full max-w-md">
                <AtomCardHeader className="text-center">
                    <Link href="/" className="inline-flex items-center justify-center gap-2 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <FileText className="h-5 w-5 text-primary-foreground"/>
                        </div>
                        <span className="text-xl font-bold">TextGen</span>
                    </Link>
                    <AtomCardTitle className="text-2xl">Создать аккаунт</AtomCardTitle>
                    <AtomCardDescription>
                        Заполните форму для регистрации
                    </AtomCardDescription>
                </AtomCardHeader>
                <form onSubmit={handleSubmit}>
                    <AtomCardContent className="space-y-4">
                        <div className="space-y-2">
                            <AtomLabel htmlFor="name">Имя</AtomLabel>
                            <AtomInput
                                id="name"
                                type="text"
                                placeholder="Введите ваше имя"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <AtomLabel htmlFor="email">Email</AtomLabel>
                            <AtomInput
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                        </div>
                        <div className="space-y-2">
                            <AtomLabel htmlFor="password">Пароль</AtomLabel>
                            <div className="relative">
                                <AtomInput
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Минимум 8 символов"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    minLength={8}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4"/> : <Eye className="h-4 w-4"/>}
                                </button>
                            </div>
                            {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                        </div>
                        <div className="space-y-2">
                            <AtomLabel htmlFor="confirmPassword">Подтвердите пароль</AtomLabel>
                            <div className="relative">
                                <AtomInput
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Повторите пароль"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                    minLength={8}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff className="h-4 w-4"/> : <Eye className="h-4 w-4"/>}
                                </button>
                            </div>
                            {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
                        </div>
                        <div className="flex items-start gap-2">
                            <AtomCheckbox
                                id="terms"
                                checked={agreedToTerms}
                                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                            />
                            <AtomLabel htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                                Я согласен с{" "}
                                <Link href="/terms" className="text-primary hover:underline">
                                    условиями использования
                                </Link>{" "}
                                и{" "}
                                <Link href="/privacy" className="text-primary hover:underline">
                                    политикой конфиденциальности
                                </Link>
                            </AtomLabel>
                            {errors.terms && <p className="text-sm text-destructive">{errors.terms}</p>}
                        </div>
                        {errors.general && <p className="text-sm text-destructive text-center">{errors.general}</p>}
                    </AtomCardContent>
                    <AtomCardFooter className="flex flex-col gap-4">
                        <AtomButton type="submit" className="w-full" disabled={isLoading || !agreedToTerms}>
                            {isLoading ? "Регистрация..." : "Зарегистрироваться"}
                        </AtomButton>
                        <p className="text-sm text-center text-muted-foreground">
                            Уже есть аккаунт?{" "}
                            <Link href="/login" className="text-primary hover:underline font-medium">
                                Войти
                            </Link>
                        </p>
                    </AtomCardFooter>
                </form>
            </AtomCard>
        </div>
    )
}
