import React from 'react';
import {MoleculeServiceCard} from "@/components/landing";
import {SERVICES_DATA} from "./constants";

const ServicesSection = () => {
    return (
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
                    {SERVICES_DATA.map(service => (
                        <MoleculeServiceCard
                            key={`service-${service.title}`}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
