import Link from "next/link";
import {
    FileText,
    Newspaper,
    BookOpen,
    RefreshCw,
    Sparkles,
    CheckCircle,
    ArrowRight,
    Menu,
    Zap,
    Clock,
    Shield
} from "lucide-react"

export default function Home() {
    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section
                className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-br from-primary-50 via-background to-primary-50/30">
                <div className="container px-4 md:px-6 text-center">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div
                            className="inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 mb-4">
                            Умная генерация контента с помощью ИИ
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground font-serif md:text-7xl text-balance">
                            Создавайте тексты быстро и качественно
                        </h1>
                        <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto text-pretty">
                            TextGen — это сервис для генерации статей, новостей, рассказов на любые темы, а также
                            профессионального рерайта текста. Экономьте время и получайте уникальный контент.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {/*<Button size="lg" className="text-white hover:bg-primary-700 bg-primary-600 shadow-xl px-8 py-3">*/}
                            {/*    Попробовать бесплатно <ArrowRight className="ml-2 h-5 w-5" />*/}
                            {/*</Button>*/}
                            {/*<Button*/}
                            {/*    variant="outline"*/}
                            {/*    size="lg"*/}
                            {/*    className="border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-3 bg-transparent"*/}
                            {/*>*/}
                            {/*    Узнать больше*/}
                            {/*</Button>*/}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Без привязки карты. Первые 5 текстов
                            бесплатно.</p>
                    </div>

                    {/* Service Cards instead of image */}
                    <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div
                            className="bg-card rounded-xl shadow-lg border border-border p-6 flex flex-col items-center text-center">
                            <div
                                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                                <FileText className="h-6 w-6 text-primary-600"/>
                            </div>
                            <h3 className="font-semibold text-foreground">Статьи</h3>
                            <p className="text-sm text-muted-foreground mt-1">SEO-оптимизированные</p>
                        </div>
                        <div
                            className="bg-card rounded-xl shadow-lg border border-border p-6 flex flex-col items-center text-center">
                            <div
                                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                                <Newspaper className="h-6 w-6 text-primary-600"/>
                            </div>
                            <h3 className="font-semibold text-foreground">Новости</h3>
                            <p className="text-sm text-muted-foreground mt-1">Актуальные и свежие</p>
                        </div>
                        <div
                            className="bg-card rounded-xl shadow-lg border border-border p-6 flex flex-col items-center text-center">
                            <div
                                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                                <BookOpen className="h-6 w-6 text-primary-600"/>
                            </div>
                            <h3 className="font-semibold text-foreground">Рассказы</h3>
                            <p className="text-sm text-muted-foreground mt-1">Творческий контент</p>
                        </div>
                        <div
                            className="bg-card rounded-xl shadow-lg border border-border p-6 flex flex-col items-center text-center">
                            <div
                                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                                <RefreshCw className="h-6 w-6 text-primary-600"/>
                            </div>
                            <h3 className="font-semibold text-foreground">Рерайт</h3>
                            <p className="text-sm text-muted-foreground mt-1">Уникализация текста</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-12 bg-card border-b border-border">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-primary-600">50K+</div>
                            <p className="text-sm text-muted-foreground mt-1">Сгенерированных текстов</p>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-primary-600">10K+</div>
                            <p className="text-sm text-muted-foreground mt-1">Довольных пользователей</p>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-primary-600">98%</div>
                            <p className="text-sm text-muted-foreground mt-1">Уникальность текстов</p>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-primary-600">24/7</div>
                            <p className="text-sm text-muted-foreground mt-1">Доступность сервиса</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="max-w-xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                            Почему выбирают TextGen?
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Мы предлагаем современные решения для создания качественного контента с использованием
                            передовых технологий ИИ.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div
                            className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm border border-border">
                            <Zap className="h-12 w-12 text-primary-600 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2 text-foreground">Быстрая генерация</h3>
                            <p className="text-muted-foreground">
                                Получите готовый текст за считанные секунды. Никакого ожидания — только результат.
                            </p>
                        </div>
                        <div
                            className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm border border-border">
                            <Shield className="h-12 w-12 text-primary-600 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2 text-foreground">100% уникальность</h3>
                            <p className="text-muted-foreground">
                                Каждый текст проверяется на уникальность. Гарантируем отсутствие плагиата.
                            </p>
                        </div>
                        <div
                            className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm border border-border">
                            <Clock className="h-12 w-12 text-primary-600 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2 text-foreground">Экономия времени</h3>
                            <p className="text-muted-foreground">
                                Автоматизируйте рутинные задачи по написанию текстов и сосредоточьтесь на важном.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-card">
                <div className="container px-4 md:px-6">
                    <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                            Наши услуги
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Выберите подходящий тип контента для ваших задач. Мы работаем с любыми темами и форматами.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Service 1 */}
                        {/*<Card className="shadow-lg border border-border hover:shadow-xl transition-shadow">*/}
                        {/*    <CardHeader>*/}
                        {/*        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">*/}
                        {/*            <FileText className="h-6 w-6 text-primary-600" />*/}
                        {/*        </div>*/}
                        {/*        <CardTitle className="text-xl text-foreground">Статьи</CardTitle>*/}
                        {/*        <CardDescription className="text-muted-foreground">*/}
                        {/*            SEO-оптимизированные статьи для блогов и сайтов*/}
                        {/*        </CardDescription>*/}
                        {/*    </CardHeader>*/}
                        {/*    <CardContent>*/}
                        {/*        <ul className="space-y-2 text-sm text-muted-foreground">*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Любая тематика*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> SEO-оптимизация*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Структурирование*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}

                        {/*/!* Service 2 *!/*/}
                        {/*<Card className="shadow-lg border border-border hover:shadow-xl transition-shadow">*/}
                        {/*    <CardHeader>*/}
                        {/*        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">*/}
                        {/*            <Newspaper className="h-6 w-6 text-primary-600" />*/}
                        {/*        </div>*/}
                        {/*        <CardTitle className="text-xl text-foreground">Новости</CardTitle>*/}
                        {/*        <CardDescription className="text-muted-foreground">*/}
                        {/*            Актуальные новостные материалы и пресс-релизы*/}
                        {/*        </CardDescription>*/}
                        {/*    </CardHeader>*/}
                        {/*    <CardContent>*/}
                        {/*        <ul className="space-y-2 text-sm text-muted-foreground">*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Информативный стиль*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Пресс-релизы*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Новостные ленты*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}

                        {/*/!* Service 3 *!/*/}
                        {/*<Card className="shadow-lg border border-border hover:shadow-xl transition-shadow">*/}
                        {/*    <CardHeader>*/}
                        {/*        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">*/}
                        {/*            <BookOpen className="h-6 w-6 text-primary-600" />*/}
                        {/*        </div>*/}
                        {/*        <CardTitle className="text-xl text-foreground">Рассказы</CardTitle>*/}
                        {/*        <CardDescription className="text-muted-foreground">*/}
                        {/*            Творческие тексты и художественные произведения*/}
                        {/*        </CardDescription>*/}
                        {/*    </CardHeader>*/}
                        {/*    <CardContent>*/}
                        {/*        <ul className="space-y-2 text-sm text-muted-foreground">*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Любые жанры*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Сценарии*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Истории*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}

                        {/*/!* Service 4 *!/*/}
                        {/*<Card className="shadow-lg border border-border hover:shadow-xl transition-shadow">*/}
                        {/*    <CardHeader>*/}
                        {/*        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">*/}
                        {/*            <RefreshCw className="h-6 w-6 text-primary-600" />*/}
                        {/*        </div>*/}
                        {/*        <CardTitle className="text-xl text-foreground">Рерайт</CardTitle>*/}
                        {/*        <CardDescription className="text-muted-foreground">*/}
                        {/*            Переписывание текста с сохранением смысла*/}
                        {/*        </CardDescription>*/}
                        {/*    </CardHeader>*/}
                        {/*    <CardContent>*/}
                        {/*        <ul className="space-y-2 text-sm text-muted-foreground">*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Глубокий рерайт*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Уникализация*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Сохранение смысла*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                            Простые и понятные цены
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Выберите тариф, который подходит именно вам. Без скрытых платежей.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                        {/*<Card className="shadow-lg border border-border">*/}
                        {/*    <CardHeader className="pb-4">*/}
                        {/*        <CardTitle className="text-2xl font-bold text-foreground">Стартовый</CardTitle>*/}
                        {/*        <CardDescription className="text-muted-foreground">*/}
                        {/*            Для начинающих авторов и блогеров*/}
                        {/*        </CardDescription>*/}
                        {/*    </CardHeader>*/}
                        {/*    <CardContent className="space-y-4">*/}
                        {/*        <div className="text-4xl font-extrabold text-foreground">*/}
                        {/*            590 ₽ <span className="text-xl font-normal text-muted-foreground">/мес</span>*/}
                        {/*        </div>*/}
                        {/*        <ul className="space-y-2 text-muted-foreground">*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> 20 текстов в месяц*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> До 3000 символов*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Базовый рерайт*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Email поддержка*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*        <Button className="w-full bg-primary-600 text-white hover:bg-primary-700 shadow-lg">*/}
                        {/*            Выбрать тариф <ArrowRight className="ml-2 h-4 w-4" />*/}
                        {/*        </Button>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                        {/*<Card className="shadow-lg border-2 border-primary-300 relative bg-gradient-to-br from-primary-50 to-white">*/}
                        {/*    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-lg">*/}
                        {/*        Популярный*/}
                        {/*    </div>*/}
                        {/*    <CardHeader className="pb-4">*/}
                        {/*        <CardTitle className="text-2xl font-bold text-foreground">Профессионал</CardTitle>*/}
                        {/*        <CardDescription className="text-muted-foreground">Для активных авторов и агентств</CardDescription>*/}
                        {/*    </CardHeader>*/}
                        {/*    <CardContent className="space-y-4">*/}
                        {/*        <div className="text-4xl font-extrabold text-foreground">*/}
                        {/*            1490 ₽ <span className="text-xl font-normal text-muted-foreground">/мес</span>*/}
                        {/*        </div>*/}
                        {/*        <ul className="space-y-2 text-muted-foreground">*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> 100 текстов в месяц*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> До 10000 символов*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Глубокий рерайт*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> SEO-оптимизация*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Приоритетная поддержка*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*        <Button className="w-full bg-primary-600 text-white hover:bg-primary-700 shadow-lg">*/}
                        {/*            Выбрать тариф <ArrowRight className="ml-2 h-4 w-4" />*/}
                        {/*        </Button>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                        {/*<Card className="shadow-lg border border-border">*/}
                        {/*    <CardHeader className="pb-4">*/}
                        {/*        <CardTitle className="text-2xl font-bold text-foreground">Безлимит</CardTitle>*/}
                        {/*        <CardDescription className="text-muted-foreground">*/}
                        {/*            Для крупных проектов и редакций*/}
                        {/*        </CardDescription>*/}
                        {/*    </CardHeader>*/}
                        {/*    <CardContent className="space-y-4">*/}
                        {/*        <div className="text-4xl font-extrabold text-foreground">*/}
                        {/*            4990 ₽ <span className="text-xl font-normal text-muted-foreground">/мес</span>*/}
                        {/*        </div>*/}
                        {/*        <ul className="space-y-2 text-muted-foreground">*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Безлимитные тексты*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Без ограничения символов*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Все виды контента*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> API доступ*/}
                        {/*            </li>*/}
                        {/*            <li className="flex items-center">*/}
                        {/*                <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Персональный менеджер*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*        <Button className="w-full bg-primary-600 text-white hover:bg-primary-700 shadow-lg">*/}
                        {/*            Выбрать тариф <ArrowRight className="ml-2 h-4 w-4" />*/}
                        {/*        </Button>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section
                className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-card rounded-full blur-xl"></div>
                    <div className="absolute top-32 right-20 w-16 h-16 bg-primary-300 rounded-full blur-lg"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-card rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-10 w-12 h-12 bg-primary-200 rounded-full blur-lg"></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-400 rounded-full blur-3xl"></div>
                </div>

                {/* Geometric Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)"/>
                    </svg>
                </div>

                <div className="container px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Готовы создавать качественный контент?
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto text-primary-100">
                        Присоединяйтесь к тысячам авторов, которые уже используют TextGen для создания уникальных
                        текстов.
                    </p>
                    <div className="mt-8">
                        {/*<Button size="lg" className="bg-card text-primary-700 hover:bg-gray-100 shadow-xl">*/}
                        {/*    Начать бесплатно прямо сейчас <ArrowRight className="ml-2 h-5 w-5" />*/}
                        {/*</Button>*/}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-card">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-foreground">
                        Часто задаваемые вопросы
                    </h2>
                    {/*<Accordion type="single" collapsible className="w-full">*/}
                    {/*    <AccordionItem value="item-1">*/}
                    {/*        <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary-600">*/}
                    {/*            Что такое TextGen?*/}
                    {/*        </AccordionTrigger>*/}
                    {/*        <AccordionContent className="text-muted-foreground">*/}
                    {/*            TextGen — это сервис для автоматической генерации текстов с использованием искусственного интеллекта.*/}
                    {/*            Мы создаем статьи, новости, рассказы и выполняем рерайт текстов на любые темы, обеспечивая высокую уникальность и качество.*/}
                    {/*        </AccordionContent>*/}
                    {/*    </AccordionItem>*/}
                    {/*    <AccordionItem value="item-2">*/}
                    {/*        <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary-600">*/}
                    {/*            Насколько уникальны тексты?*/}
                    {/*        </AccordionTrigger>*/}
                    {/*        <AccordionContent className="text-muted-foreground">*/}
                    {/*            Все тексты, созданные нашим сервисом, проходят проверку на уникальность. Мы гарантируем минимум*/}
                    {/*            95% уникальности для всех материалов. При необходимости можно запросить дополнительную обработку для повышения уникальности.*/}
                    {/*        </AccordionContent>*/}
                    {/*    </AccordionItem>*/}
                    {/*    <AccordionItem value="item-3">*/}
                    {/*        <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary-600">*/}
                    {/*            Есть ли бесплатный период?*/}
                    {/*        </AccordionTrigger>*/}
                    {/*        <AccordionContent className="text-muted-foreground">*/}
                    {/*            Да! Для новых пользователей мы предоставляем 5 бесплатных генераций текста без привязки карты.*/}
                    {/*            Это позволит вам оценить качество нашего сервиса перед покупкой подписки.*/}
                    {/*        </AccordionContent>*/}
                    {/*    </AccordionItem>*/}
                    {/*    <AccordionItem value="item-4">*/}
                    {/*        <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary-600">*/}
                    {/*            Какие темы вы поддерживаете?*/}
                    {/*        </AccordionTrigger>*/}
                    {/*        <AccordionContent className="text-muted-foreground">*/}
                    {/*            TextGen работает с любыми темами: технологии, здоровье, финансы, путешествия, образование,*/}
                    {/*            развлечения и многое другое. Просто укажите тему и ключевые слова — мы создадим качественный текст.*/}
                    {/*        </AccordionContent>*/}
                    {/*    </AccordionItem>*/}
                    {/*    <AccordionItem value="item-5">*/}
                    {/*        <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary-600">*/}
                    {/*            Можно ли использовать API?*/}
                    {/*        </AccordionTrigger>*/}
                    {/*        <AccordionContent className="text-muted-foreground">*/}
                    {/*            Да, API доступен на тарифе «Безлимит». Это позволяет интегрировать наш сервис в ваши собственные*/}
                    {/*            приложения и автоматизировать процесс создания контента.*/}
                    {/*        </AccordionContent>*/}
                    {/*    </AccordionItem>*/}
                    {/*</Accordion>*/}
                </div>
            </section>
        </main>
    );
}
