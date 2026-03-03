import React from 'react';
import Link from "next/link";
import {ArrowRight, Menu, Sparkles} from "lucide-react";
import {AtomButton} from "@/components/shared";

const Header = () => {
    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
            <div className="bg-card rounded-full shadow-xl border border-border px-6 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center justify-center" prefetch={false}>
                    <Sparkles className="h-6 w-6 text-primary-600" />
                    <span className="ml-2 text-xl font-bold text-foreground">TextGen</span>
                </Link>
                <nav className="hidden lg:flex gap-6 items-center">
                    <Link
                        href="#services"
                        className="text-sm font-medium hover:text-primary-600 transition-colors text-muted-foreground"
                        prefetch={false}
                    >
                        Услуги
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-sm font-medium hover:text-primary-600 transition-colors text-muted-foreground"
                        prefetch={false}
                    >
                        Цены
                    </Link>
                    <Link
                        href="#faq"
                        className="text-sm font-medium hover:text-primary-600 transition-colors text-muted-foreground"
                        prefetch={false}
                    >
                        Вопросы
                    </Link>
                </nav>
                <div className="flex items-center gap-3">
                    <AtomButton
                        variant="ghost"
                        className="text-sm bg-primary-50 text-primary-700 hover:bg-primary-100 rounded-full px-4 py-2 font-medium border border-primary-200"
                    >
                        Войти
                    </AtomButton>
                    <AtomButton className="text-sm bg-primary-600 text-white hover:bg-primary-700 rounded-full px-4 py-2 font-medium shadow-lg">
                        Начать бесплатно <ArrowRight className="ml-2 h-4 w-4" />
                    </AtomButton>
                </div>
                {/*TODO: сделать меню для мобилки*/}
                <AtomButton variant="ghost" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Меню</span>
                </AtomButton>
            </div>
        </header>
    );
};

export default Header;