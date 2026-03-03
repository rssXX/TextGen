import React from 'react';
import Link from "next/link";

interface IHeaderNavberLinkProps {
    href: string;
    title: string;
}

const HeaderNavberLink: React.FC<IHeaderNavberLinkProps> = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="text-sm font-medium hover:text-primary-600 transition-colors text-muted-foreground"
            prefetch={false}
        >
            {title}
        </Link>
    );
};

export default HeaderNavberLink;