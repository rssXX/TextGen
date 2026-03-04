import {IPricingPlan} from "@/components/landing/molecules/pricingCard/pricingCard";

export const PRICING_PLANS: IPricingPlan[] = [
    {
        title: 'Стартовый',
        description: 'Для начинающих авторов и блогеров',
        price: '590 ₽',
        period: '/мес',
        features: [
            '20 текстов в месяц',
            'До 3000 символов',
            'Базовый рерайт',
            'Email поддержка',
        ],
    },
    {
        title: 'Профессионал',
        description: 'Для активных авторов и агентств',
        price: '1490 ₽',
        period: '/мес',
        isPopular: true,
        features: [
            '100 текстов в месяц',
            'До 10000 символов',
            'Глубокий рерайт',
            'SEO-оптимизация',
            'Приоритетная поддержка',
        ],
    },
    {
        title: 'Безлимит',
        description: 'Для крупных проектов и редакций',
        price: '4990 ₽',
        period: '/мес',
        features: [
            'Безлимитные тексты',
            'Без ограничения символов',
            'Все виды контента',
            'API доступ',
            'Персональный менеджер',
        ],
    },
];
