import {OrganismFooter, OrganismHeader} from "@/components/landing";


export default function LandingLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-background text-foreground">
            <OrganismHeader />
            {children}
            <OrganismFooter />
        </div>
    );
}
