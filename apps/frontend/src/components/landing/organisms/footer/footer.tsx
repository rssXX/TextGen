import React from 'react';
import {Sparkles} from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-muted text-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="footerGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#footerGrid)" />
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-20 w-16 h-16 bg-primary-400 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-10 w-12 h-12 bg-primary-300 rounded-full blur-lg"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <div className="flex items-center mb-4">
                            <Sparkles className="h-8 w-8 text-primary-400" />
                            <span className="ml-2 text-2xl font-bold">TextGen</span>
                        </div>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                            Сервис для генерации качественного контента с использованием искусственного интеллекта.
                            Статьи, новости, рассказы и рерайт.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                                <span className="text-white text-sm font-bold">vk</span>
                            </div>
                            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                                <span className="text-white text-sm font-bold">tg</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">Продукт</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#services" className="text-muted-foreground hover:text-primary-400 transition-colors">
                                    Услуги
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-muted-foreground hover:text-primary-400 transition-colors">
                                    Цены
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors">
                                    API
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors">
                                    Примеры текстов
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">Компания</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors">
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors">
                                    Блог
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors">
                                    Партнёрам
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors">
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">Поддержка</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors">
                                    Справочный центр
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors">
                                    Связаться с нами
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-muted-foreground hover:text-primary-400 transition-colors">
                                    Вопросы и ответы
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="border-t border-border pt-8 mb-8">
                    <div className="max-w-md">
                        <h3 className="text-foreground font-semibold mb-2">Подпишитесь на новости</h3>
                        <p className="text-muted-foreground text-sm mb-4">Получайте советы по созданию контента и новости сервиса.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Введите ваш email"
                                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary-500 text-sm"
                            />
                            {/*<Button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 text-sm">Подписаться</Button>*/}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} TextGen. Все права защищены.</p>
                    <div className="flex gap-6 text-sm">
                        <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors">
                            Политика конфиденциальности
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors">
                            Условия использования
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;