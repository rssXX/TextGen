import React from 'react';

const CtaBackground = () => {
    return (
        <>
            {/* Floating Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-card rounded-full blur-xl"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-primary-300 rounded-full blur-lg"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-card rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-12 h-12 bg-primary-200 rounded-full blur-lg"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-400 rounded-full blur-3xl"></div>
            </div>

            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>
        </>
    );
};

export default CtaBackground;
