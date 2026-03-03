import React from 'react';
import {Sparkles} from "lucide-react";
import Link from "next/link";

const HeaderLogo = () => {
    return (
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
            <Sparkles className="h-6 w-6 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-foreground">TextGen</span>
        </Link>
    );
};

export default HeaderLogo;