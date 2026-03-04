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
import {
    AtomAccordion, AtomAccordionContent, AtomAccordionItem, AtomAccordionTrigger,
    AtomButton,
    AtomCard,
    AtomCardContent,
    AtomCardDescription,
    AtomCardHeader,
    AtomCardTitle
} from "@/components/shared";

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
                            <AtomButton size="lg" className="text-white hover:bg-primary-700 bg-primary-600 shadow-xl px-8 py-3">
                                Попробовать бесплатно <ArrowRight className="ml-2 h-5 w-5" />
                            </AtomButton>
                            <AtomButton
                                variant="outline"
                                size="lg"
                                className="border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-3 bg-transparent"
                            >
                                Узнать больше
                            </AtomButton>
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
                        <AtomCard className="shadow-lg border border-border hover:shadow-xl transition-shadow">
                            <AtomCardHeader>
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-primary-600" />
                                </div>
                                <AtomCardTitle className="text-xl text-foreground">Статьи</AtomCardTitle>
                                <AtomCardDescription className="text-muted-foreground">
                                    SEO-оптимизированные статьи для блогов и сайтов
                                </AtomCardDescription>
                            </AtomCardHeader>
                            <AtomCardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Любая тематика
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> SEO-оптимизация
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Структурирование
                                    </li>
                                </ul>
                            </AtomCardContent>
                        </AtomCard>

                        {/* Service 2 */}
                        <AtomCard className="shadow-lg border border-border hover:shadow-xl transition-shadow">
                            <AtomCardHeader>
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                    <Newspaper className="h-6 w-6 text-primary-600" />
                                </div>
                                <AtomCardTitle className="text-xl text-foreground">Новости</AtomCardTitle>
                                <AtomCardDescription className="text-muted-foreground">
                                    Актуальные новостные материалы и пресс-релизы
                                </AtomCardDescription>
                            </AtomCardHeader>
                            <AtomCardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Информативный стиль
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Пресс-релизы
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Новостные ленты
                                    </li>
                                </ul>
                            </AtomCardContent>
                        </AtomCard>

                        {/* Service 3 */}
                        <AtomCard className="shadow-lg border border-border hover:shadow-xl transition-shadow">
                            <AtomCardHeader>
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                    <BookOpen className="h-6 w-6 text-primary-600" />
                                </div>
                                <AtomCardTitle className="text-xl text-foreground">Рассказы</AtomCardTitle>
                                <AtomCardDescription className="text-muted-foreground">
                                    Творческие тексты и художественные произведения
                                </AtomCardDescription>
                            </AtomCardHeader>
                            <AtomCardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Любые жанры
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Сценарии
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Истории
                                    </li>
                                </ul>
                            </AtomCardContent>
                        </AtomCard>

                        {/* Service 4 */}
                        <AtomCard className="shadow-lg border border-border hover:shadow-xl transition-shadow">
                            <AtomCardHeader>
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                    <RefreshCw className="h-6 w-6 text-primary-600" />
                                </div>
                                <AtomCardTitle className="text-xl text-foreground">Рерайт</AtomCardTitle>
                                <AtomCardDescription className="text-muted-foreground">
                                    Переписывание текста с сохранением смысла
                                </AtomCardDescription>
                            </AtomCardHeader>
                            <AtomCardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Глубокий рерайт
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Уникализация
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> Сохранение смысла
                                    </li>
                                </ul>
                            </AtomCardContent>
                        </AtomCard>
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
                        <AtomCard className="shadow-lg border border-border">
                            <AtomCardHeader className="pb-4">
                                <AtomCardTitle className="text-2xl font-bold text-foreground">Стартовый</AtomCardTitle>
                                <AtomCardDescription className="text-muted-foreground">
                                    Для начинающих авторов и блогеров
                                </AtomCardDescription>
                            </AtomCardHeader>
                            <AtomCardContent className="space-y-4">
                                <div className="text-4xl font-extrabold text-foreground">
                                    590 ₽ <span className="text-xl font-normal text-muted-foreground">/мес</span>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> 20 текстов в месяц
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> До 3000 символов
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Базовый рерайт
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Email поддержка
                                    </li>
                                </ul>
                                <AtomButton className="w-full bg-primary-600 text-white hover:bg-primary-700 shadow-lg">
                                    Выбрать тариф <ArrowRight className="ml-2 h-4 w-4" />
                                </AtomButton>
                            </AtomCardContent>
                        </AtomCard>
                        <AtomCard className="shadow-lg border-2 border-primary-300 relative bg-gradient-to-br from-primary-50 to-white">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-lg">
                                Популярный
                            </div>
                            <AtomCardHeader className="pb-4">
                                <AtomCardTitle className="text-2xl font-bold text-foreground">Профессионал</AtomCardTitle>
                                <AtomCardDescription className="text-muted-foreground">Для активных авторов и агентств</AtomCardDescription>
                            </AtomCardHeader>
                            <AtomCardContent className="space-y-4">
                                <div className="text-4xl font-extrabold text-foreground">
                                    1490 ₽ <span className="text-xl font-normal text-muted-foreground">/мес</span>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> 100 текстов в месяц
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> До 10000 символов
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Глубокий рерайт
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> SEO-оптимизация
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Приоритетная поддержка
                                    </li>
                                </ul>
                                <AtomButton className="w-full bg-primary-600 text-white hover:bg-primary-700 shadow-lg">
                                    Выбрать тариф <ArrowRight className="ml-2 h-4 w-4" />
                                </AtomButton>
                            </AtomCardContent>
                        </AtomCard>
                        <AtomCard className="shadow-lg border border-border">
                            <AtomCardHeader className="pb-4">
                                <AtomCardTitle className="text-2xl font-bold text-foreground">Безлимит</AtomCardTitle>
                                <AtomCardDescription className="text-muted-foreground">
                                    Для крупных проектов и редакций
                                </AtomCardDescription>
                            </AtomCardHeader>
                            <AtomCardContent className="space-y-4">
                                <div className="text-4xl font-extrabold text-foreground">
                                    4990 ₽ <span className="text-xl font-normal text-muted-foreground">/мес</span>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Безлимитные тексты
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Без ограничения символов
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Все виды контента
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> API доступ
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> Персональный менеджер
                                    </li>
                                </ul>
                                <AtomButton className="w-full bg-primary-600 text-white hover:bg-primary-700 shadow-lg">
                                    Выбрать тариф <ArrowRight className="ml-2 h-4 w-4" />
                                </AtomButton>
                            </AtomCardContent>
                        </AtomCard>
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
                        <AtomButton size="lg" className="bg-card text-primary-700 hover:bg-gray-100 shadow-xl">
                            Начать бесплатно прямо сейчас <ArrowRight className="ml-2 h-5 w-5" />
                        </AtomButton>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-card">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-foreground">
                        Часто задаваемые вопросы
                    </h2>
                    <AtomAccordion type="single" collapsible className="w-full">
                        <AtomAccordionItem value="item-1">
                            <AtomAccordionTrigger className="text-lg font-medium text-foreground hover:text-primary-600">
                                Что такое TextGen?
                            </AtomAccordionTrigger>
                            <AtomAccordionContent className="text-muted-foreground">
                                TextGen — это сервис для автоматической генерации текстов с использованием искусственного интеллекта.
                                Мы создаем статьи, новости, рассказы и выполняем рерайт текстов на любые темы, обеспечивая высокую уникальность и качество.
                            </AtomAccordionContent>
                        </AtomAccordionItem>
                        <AtomAccordionItem value="item-2">
                            <AtomAccordionTrigger className="text-lg font-medium text-foreground hover:text-primary-600">
                                Насколько уникальны тексты?
                            </AtomAccordionTrigger>
                            <AtomAccordionContent className="text-muted-foreground">
                                Все тексты, созданные нашим сервисом, проходят проверку на уникальность. Мы гарантируем минимум
                                95% уникальности для всех материалов. При необходимости можно запросить дополнительную обработку для повышения уникальности.
                            </AtomAccordionContent>
                        </AtomAccordionItem>
                        <AtomAccordionItem value="item-3">
                            <AtomAccordionTrigger className="text-lg font-medium text-foreground hover:text-primary-600">
                                Есть ли бесплатный период?
                            </AtomAccordionTrigger>
                            <AtomAccordionContent className="text-muted-foreground">
                                Да! Для новых пользователей мы предоставляем 5 бесплатных генераций текста без привязки карты.
                                Это позволит вам оценить качество нашего сервиса перед покупкой подписки.
                            </AtomAccordionContent>
                        </AtomAccordionItem>
                        <AtomAccordionItem value="item-4">
                            <AtomAccordionTrigger className="text-lg font-medium text-foreground hover:text-primary-600">
                                Какие темы вы поддерживаете?
                            </AtomAccordionTrigger>
                            <AtomAccordionContent className="text-muted-foreground">
                                TextGen работает с любыми темами: технологии, здоровье, финансы, путешествия, образование,
                                развлечения и многое другое. Просто укажите тему и ключевые слова — мы создадим качественный текст.
                            </AtomAccordionContent>
                        </AtomAccordionItem>
                        <AtomAccordionItem value="item-5">
                            <AtomAccordionTrigger className="text-lg font-medium text-foreground hover:text-primary-600">
                                Можно ли использовать API?
                            </AtomAccordionTrigger>
                            <AtomAccordionContent className="text-muted-foreground">
                                Да, API доступен на тарифе «Безлимит». Это позволяет интегрировать наш сервис в ваши собственные
                                приложения и автоматизировать процесс создания контента.
                            </AtomAccordionContent>
                        </AtomAccordionItem>
                    </AtomAccordion>
                </div>
            </section>
        </main>
    );
}
