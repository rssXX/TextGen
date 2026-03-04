import React from 'react';
import {ArrowRight} from "lucide-react";
import {AtomButton} from "@/components/shared";
import {MoleculeHeroServiceCards} from "@/components/landing";
import {HERO_SERVICES} from "./constants";

const HeroSection = () => {
    return (
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-br from-primary-50 via-background to-primary-50/30">
            <div className="container px-4 md:px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 mb-4">
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
                    <p className="text-xs text-muted-foreground mt-2">Без привязки карты. Первые 5 текстов бесплатно.</p>
                </div>

                <MoleculeHeroServiceCards services={HERO_SERVICES} />
            </div>
        </section>
    );
};

export default HeroSection;
