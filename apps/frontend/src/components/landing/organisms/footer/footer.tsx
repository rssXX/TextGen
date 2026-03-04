import {
    MoleculeFooterBackground,
    MoleculeFooterFloatingElements,
    MoleculeFooterBrand,
    MoleculeFooterLinkGroup,
    MoleculeFooterNewsletter,
    MoleculeFooterBottomBar,
} from "@/components/landing";
import {FOOTER_LINK_GROUPS} from "./constants";

const Footer = () => {
    return (
        <footer className="bg-muted text-foreground relative overflow-hidden">
            <MoleculeFooterBackground />

            <MoleculeFooterFloatingElements />

            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <MoleculeFooterBrand />

                    {FOOTER_LINK_GROUPS.map(group => (
                        <MoleculeFooterLinkGroup
                            key={`footer-group-${group.title}`}
                            title={group.title}
                            links={group.links}
                        />
                    ))}
                </div>

                <MoleculeFooterNewsletter />

                <MoleculeFooterBottomBar />
            </div>
        </footer>
    );
};

export default Footer;
