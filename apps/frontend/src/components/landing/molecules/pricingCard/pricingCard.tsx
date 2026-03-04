import React from 'react';
import {CheckCircle, ArrowRight} from "lucide-react";
import {
    AtomButton,
    AtomCard,
    AtomCardContent,
    AtomCardDescription,
    AtomCardHeader,
    AtomCardTitle
} from "@/components/shared";

export interface IPricingPlan {
    title: string;
    description: string;
    price: string;
    period: string;
    features: string[];
    isPopular?: boolean;
}

interface IPricingCardProps {
    plan: IPricingPlan;
}

const PricingCard: React.FC<IPricingCardProps> = ({ plan }) => {
    return (
        <AtomCard
            className={
                plan.isPopular
                    ? "shadow-lg border-2 border-primary-300 relative bg-gradient-to-br from-primary-50 to-white"
                    : "shadow-lg border border-border"
            }
        >
            {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-lg">
                    Популярный
                </div>
            )}
            <AtomCardHeader className="pb-4">
                <AtomCardTitle className="text-2xl font-bold text-foreground">{plan.title}</AtomCardTitle>
                <AtomCardDescription className="text-muted-foreground">{plan.description}</AtomCardDescription>
            </AtomCardHeader>
            <AtomCardContent className="space-y-4">
                <div className="text-4xl font-extrabold text-foreground">
                    {plan.price} <span className="text-xl font-normal text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                    {plan.features.map(feature => (
                        <li key={`pricing-feature-${feature}`} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary-600 mr-2" /> {feature}
                        </li>
                    ))}
                </ul>
                <AtomButton className="w-full bg-primary-600 text-white hover:bg-primary-700 shadow-lg">
                    Выбрать тариф <ArrowRight className="ml-2 h-4 w-4" />
                </AtomButton>
            </AtomCardContent>
        </AtomCard>
    );
};

export default PricingCard;
