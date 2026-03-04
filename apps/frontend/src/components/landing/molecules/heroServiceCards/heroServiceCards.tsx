import React from 'react';
import {AtomHeroServiceCard} from "@/components/landing";
import {LucideIcon} from "lucide-react";

export interface IHeroService {
    icon: LucideIcon;
    title: string;
    subtitle: string;
}

interface IHeroServiceCardsProps {
    services: IHeroService[];
}

const HeroServiceCards: React.FC<IHeroServiceCardsProps> = ({ services }) => {
    return (
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {services.map(service => (
                <AtomHeroServiceCard
                    key={`hero-service-${service.title}`}
                    icon={service.icon}
                    title={service.title}
                    subtitle={service.subtitle}
                />
            ))}
        </div>
    );
};

export default HeroServiceCards;
