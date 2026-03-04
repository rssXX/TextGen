import React from 'react';
import {LucideIcon} from "lucide-react";

interface IFeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const FeatureCard: React.FC<IFeatureCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm border border-border">
            <Icon className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
};

export default FeatureCard;
