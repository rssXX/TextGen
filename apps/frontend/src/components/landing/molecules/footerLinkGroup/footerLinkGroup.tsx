import React from 'react';
import {AtomFooterLink} from "@/components/landing";

interface IFooterLinkGroupProps {
    title: string;
    links: { href: string; title: string }[];
}

const FooterLinkGroup: React.FC<IFooterLinkGroupProps> = ({ title, links }) => {
    return (
        <div>
            <h3 className="text-foreground font-semibold mb-4">{title}</h3>
            <ul className="space-y-2 text-sm">
                {links.map(link => (
                    <AtomFooterLink
                        key={`footer-link-${link.href}-${link.title}`}
                        href={link.href}
                        title={link.title}
                    />
                ))}
            </ul>
        </div>
    );
};

export default FooterLinkGroup;
