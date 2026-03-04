import React from 'react';
import {
    AtomAccordion,
    AtomAccordionContent,
    AtomAccordionItem,
    AtomAccordionTrigger,
} from "@/components/shared";
import {FAQ_ITEMS} from "./constants";

const FaqSection = () => {
    return (
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-foreground">
                    Часто задаваемые вопросы
                </h2>
                <AtomAccordion type="single" collapsible className="w-full">
                    {FAQ_ITEMS.map((item, index) => (
                        <AtomAccordionItem key={`faq-${index}`} value={`item-${index + 1}`}>
                            <AtomAccordionTrigger className="text-lg font-medium text-foreground hover:text-primary-600">
                                {item.question}
                            </AtomAccordionTrigger>
                            <AtomAccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AtomAccordionContent>
                        </AtomAccordionItem>
                    ))}
                </AtomAccordion>
            </div>
        </section>
    );
};

export default FaqSection;
