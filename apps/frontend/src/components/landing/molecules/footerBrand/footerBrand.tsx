import React from 'react';
import {Sparkles} from "lucide-react";
import Link from "next/link";

const FooterBrand = () => {
    return (
        <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4" prefetch={false}>
                <Sparkles className="h-8 w-8 text-primary-400" />
                <span className="ml-2 text-2xl font-bold">TextGen</span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Сервис для генерации качественного контента с использованием искусственного интеллекта.
                Статьи, новости, рассказы и рерайт.
            </p>
            <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                    <span className="text-white text-sm font-bold">vk</span>
                </div>
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                    <span className="text-white text-sm font-bold">tg</span>
                </div>
            </div>
        </div>
    );
};

export default FooterBrand;
