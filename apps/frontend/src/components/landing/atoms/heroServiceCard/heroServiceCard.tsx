import React from 'react';
import {LucideIcon} from "lucide-react";

interface IHeroServiceCardProps {
    icon: LucideIcon;
    title: string;
    subtitle: string;
}

const HeroServiceCard: React.FC<IHeroServiceCardProps> = ({ icon: Icon, title, subtitle }) => {
    return (
        <div className="bg-card rounded-xl shadow-lg border border-border p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                <Icon className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
    );
};

export default HeroServiceCard;
