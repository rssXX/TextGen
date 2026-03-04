import React from 'react';
import {ArrowRight} from "lucide-react";
import {AtomButton} from "@/components/shared";
import {MoleculeCtaBackground} from "@/components/landing";

const CtaSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
            <MoleculeCtaBackground />

            <div className="container px-4 md:px-6 text-center relative z-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Готовы создавать качественный контент?
                </h2>
                <p className="mt-4 max-w-xl mx-auto text-primary-100">
                    Присоединяйтесь к тысячам авторов, которые уже используют TextGen для создания уникальных текстов.
                </p>
                <div className="mt-8">
                    <AtomButton size="lg" className="bg-card text-primary-700 hover:bg-gray-100 shadow-xl">
                        Начать бесплатно прямо сейчас <ArrowRight className="ml-2 h-5 w-5" />
                    </AtomButton>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
