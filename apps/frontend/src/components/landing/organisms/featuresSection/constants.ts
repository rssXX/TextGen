import {Clock, Shield, Zap} from "lucide-react";
import {LucideIcon} from "lucide-react";

interface IFeatureItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const FEATURES_ITEMS: IFeatureItem[] = [
    {
        icon: Zap,
        title: 'Быстрая генерация',
        description: 'Получите готовый текст за считанные секунды. Никакого ожидания — только результат.',
    },
    {
        icon: Shield,
        title: '100% уникальность',
        description: 'Каждый текст проверяется на уникальность. Гарантируем отсутствие плагиата.',
    },
    {
        icon: Clock,
        title: 'Экономия времени',
        description: 'Автоматизируйте рутинные задачи по написанию текстов и сосредоточьтесь на важном.',
    },
];
