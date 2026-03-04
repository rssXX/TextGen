import React from 'react';
import {LucideIcon, CheckCircle} from "lucide-react";
import {
    AtomCard,
    AtomCardContent,
    AtomCardDescription,
    AtomCardHeader,
    AtomCardTitle
} from "@/components/shared";

export interface IServiceData {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
}

interface IServiceCardProps {
    service: IServiceData;
}

const ServiceCard: React.FC<IServiceCardProps> = ({ service }) => {
    const Icon = service.icon;

    return (
        <AtomCard className="shadow-lg border border-border hover:shadow-xl transition-shadow">
            <AtomCardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <AtomCardTitle className="text-xl text-foreground">{service.title}</AtomCardTitle>
                <AtomCardDescription className="text-muted-foreground">
                    {service.description}
                </AtomCardDescription>
            </AtomCardHeader>
            <AtomCardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map(feature => (
                        <li key={`service-feature-${feature}`} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary-600 mr-2" /> {feature}
                        </li>
                    ))}
                </ul>
            </AtomCardContent>
        </AtomCard>
    );
};

export default ServiceCard;
