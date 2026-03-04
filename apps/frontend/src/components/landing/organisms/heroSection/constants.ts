import {BookOpen, FileText, Newspaper, RefreshCw} from "lucide-react";
import {IHeroService} from "@/components/landing/molecules/heroServiceCards/heroServiceCards";

export const HERO_SERVICES: IHeroService[] = [
    {
        icon: FileText,
        title: 'Статьи',
        subtitle: 'SEO-оптимизированные',
    },
    {
        icon: Newspaper,
        title: 'Новости',
        subtitle: 'Актуальные и свежие',
    },
    {
        icon: BookOpen,
        title: 'Рассказы',
        subtitle: 'Творческий контент',
    },
    {
        icon: RefreshCw,
        title: 'Рерайт',
        subtitle: 'Уникализация текста',
    },
];
