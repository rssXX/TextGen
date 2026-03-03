import {OrganismFooter, OrganismHeader} from "@/components/landing";


export default function LandingLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
            <OrganismHeader />
            {children}
            <OrganismFooter />
        </div>
    );
}
