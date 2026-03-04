import React from 'react';
import {MoleculePricingCard} from "@/components/landing";
import {PRICING_PLANS} from "./constants";

const PricingSection = () => {
    return (
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
                    {PRICING_PLANS.map(plan => (
                        <MoleculePricingCard
                            key={`pricing-${plan.title}`}
                            plan={plan}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
