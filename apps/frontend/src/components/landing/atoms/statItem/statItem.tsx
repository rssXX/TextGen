import React from 'react';

interface IStatItemProps {
    value: string;
    label: string;
}

const StatItem: React.FC<IStatItemProps> = ({ value, label }) => {
    return (
        <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-600">{value}</div>
            <p className="text-sm text-muted-foreground mt-1">{label}</p>
        </div>
    );
};

export default StatItem;
