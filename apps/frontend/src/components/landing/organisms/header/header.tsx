import React from 'react';
import {ArrowRight, Menu} from "lucide-react";
import {AtomButton} from "@/components/shared";
import {MoleculeHeaderButtonAuth, MoleculeHeaderLogo, MoleculeHeaderNavbar} from "@/components/landing";

const Header = () => {
    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
            <div
                className="bg-card rounded-full shadow-xl border border-border px-6 py-3 flex items-center justify-between">
                <MoleculeHeaderLogo/>
                <MoleculeHeaderNavbar/>
                <MoleculeHeaderButtonAuth />
                {/*TODO: сделать меню для мобилки*/}
                <AtomButton variant="ghost" className="lg:hidden">
                    <Menu className="h-6 w-6"/>
                    <span className="sr-only">Меню</span>
                </AtomButton>
            </div>
        </header>
    );
};

export default Header;