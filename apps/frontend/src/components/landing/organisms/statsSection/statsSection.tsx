import React from 'react';
import {AtomStatItem} from "@/components/landing";
import {STATS_ITEMS} from "./constants";

const StatsSection = () => {
    return (
        <section className="w-full py-12 bg-card border-b border-border">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {STATS_ITEMS.map(stat => (
                        <AtomStatItem
                            key={`stat-${stat.value}`}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
