import React from 'react';
import {AtomHeaderNavberLink} from "@/components/landing";

const LINKS = [
    {
        href: '#services',
        title: 'Услуги',
    },
    {
        href: '#pricing',
        title: 'Цены',
    },
    {
        href: '#faq',
        title: 'Вопросы',
    }
]

const HeaderNavbar = () => {
    return (
        <nav className="hidden lg:flex gap-6 items-center">
            {LINKS.map(link => (
                <AtomHeaderNavberLink
                    key={`navbar-link-${link.href}`}
                    href={link.href}
                    title={link.title}
                />
            ))}
        </nav>
    );
};

export default HeaderNavbar;