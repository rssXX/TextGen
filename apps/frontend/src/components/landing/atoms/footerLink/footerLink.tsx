import React from 'react';
import Link from "next/link";

interface IFooterLinkProps {
    href: string;
    title: string;
}

const FooterLink: React.FC<IFooterLinkProps> = ({ href, title }) => {
    return (
        <li>
            <Link
                href={href}
                className="text-muted-foreground hover:text-primary-400 transition-colors"
                prefetch={false}
            >
                {title}
            </Link>
        </li>
    );
};

export default FooterLink;
