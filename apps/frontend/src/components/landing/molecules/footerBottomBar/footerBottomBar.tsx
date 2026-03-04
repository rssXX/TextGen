import React from 'react';
import Link from "next/link";

const FooterBottomBar = () => {
    return (
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} TextGen. Все права защищены.</p>
            <div className="flex gap-6 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors" prefetch={false}>
                    Политика конфиденциальности
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary-400 transition-colors" prefetch={false}>
                    Условия использования
                </Link>
            </div>
        </div>
    );
};

export default FooterBottomBar;
