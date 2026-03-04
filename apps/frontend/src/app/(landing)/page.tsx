import {
    OrganismHeroSection,
    OrganismStatsSection,
    OrganismFeaturesSection,
    OrganismServicesSection,
    OrganismPricingSection,
    OrganismCtaSection,
    OrganismFaqSection,
} from "@/components/landing";

export default function Home() {
    return (
        <main>
            <OrganismHeroSection />
            <OrganismStatsSection />
            <OrganismFeaturesSection />
            <OrganismServicesSection />
            <OrganismPricingSection />
            <OrganismCtaSection />
            <OrganismFaqSection />
        </main>
    );
}
