import React from 'react';

const FooterFloatingElements = () => {
    return (
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-16 h-16 bg-primary-400 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-10 w-12 h-12 bg-primary-300 rounded-full blur-lg"></div>
        </div>
    );
};

export default FooterFloatingElements;