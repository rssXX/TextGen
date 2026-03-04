import {BookOpen, FileText, Newspaper, RefreshCw} from "lucide-react";
import {IServiceData} from "@/components/landing/molecules/serviceCard/serviceCard";

export const SERVICES_DATA: IServiceData[] = [
    {
        icon: FileText,
        title: 'Статьи',
        description: 'SEO-оптимизированные статьи для блогов и сайтов',
        features: ['Любая тематика', 'SEO-оптимизация', 'Структурирование'],
    },
    {
        icon: Newspaper,
        title: 'Новости',
        description: 'Актуальные новостные материалы и пресс-релизы',
        features: ['Информативный стиль', 'Пресс-релизы', 'Новостные ленты'],
    },
    {
        icon: BookOpen,
        title: 'Рассказы',
        description: 'Творческие тексты и художественные произведения',
        features: ['Любые жанры', 'Сценарии', 'Истории'],
    },
    {
        icon: RefreshCw,
        title: 'Рерайт',
        description: 'Переписывание текста с сохранением смысла',
        features: ['Глубокий рерайт', 'Уникализация', 'Сохранение смысла'],
    },
];
