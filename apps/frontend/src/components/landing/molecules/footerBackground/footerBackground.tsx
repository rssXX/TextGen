import React from 'react';

const FooterBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <pattern id="footerGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                        <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" />
                    </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#footerGrid)" />
            </svg>
        </div>
    );
};

export default FooterBackground;