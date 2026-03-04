interface IFooterLinkItem {
    href: string;
    title: string;
}

interface IFooterLinkGroup {
    title: string;
    links: IFooterLinkItem[];
}

export const FOOTER_LINK_GROUPS: IFooterLinkGroup[] = [
    {
        title: 'Продукт',
        links: [
            { href: '#services', title: 'Услуги' },
            { href: '#pricing', title: 'Цены' },
            { href: '#', title: 'API' },
            { href: '#', title: 'Примеры текстов' },
        ],
    },
    {
        title: 'Компания',
        links: [
            { href: '#', title: 'О нас' },
            { href: '#', title: 'Блог' },
            { href: '#', title: 'Партнёрам' },
            { href: '#', title: 'Контакты' },
        ],
    },
    {
        title: 'Поддержка',
        links: [
            { href: '#', title: 'Справочный центр' },
            { href: '#', title: 'Связаться с нами' },
            { href: '#faq', title: 'Вопросы и ответы' },
        ],
    },
]
