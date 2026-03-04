import React from 'react';

const FooterNewsletter = () => {
    return (
        <div className="border-t border-border pt-8 mb-8">
            <div className="max-w-md">
                <h3 className="text-foreground font-semibold mb-2">Подпишитесь на новости</h3>
                <p className="text-muted-foreground text-sm mb-4">Получайте советы по созданию контента и новости сервиса.</p>
                <div className="flex gap-2">
                    <input
                        type="email"
                        placeholder="Введите ваш email"
                        className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary-500 text-sm"
                    />
                    {/*<AtomButton className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 text-sm">Подписаться</AtomButton>*/}
                </div>
            </div>
        </div>
    );
};

export default FooterNewsletter;
