import React from 'react';
import {AtomFeatureCard} from "@/components/landing";
import {FEATURES_ITEMS} from "./constants";

const FeaturesSection = () => {
    return (
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
                    {FEATURES_ITEMS.map(feature => (
                        <AtomFeatureCard
                            key={`feature-${feature.title}`}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
