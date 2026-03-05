import React from 'react';
import {AtomButton} from "@/components/shared";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

const HeaderButtonAuth = () => {
    return (
        <div className="flex items-center gap-3">
            <Link
                href="/login"
                className="text-sm bg-primary-50 text-primary-700 hover:bg-primary-100 rounded-full px-4 py-2 font-medium border border-primary-200"
            >
                Войти
            </Link>
            <Link
                href="/register"
                className="inline-flex items-center text-nowrap text-sm bg-primary-600 text-white hover:bg-primary-700 rounded-full px-4 py-2 font-medium shadow-lg">
                Начать бесплатно <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
        </div>
    );
};

export default HeaderButtonAuth;