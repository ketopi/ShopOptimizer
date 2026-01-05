import React from 'react'
import { companiesLogo } from './companies/companiesLogo'

export default function TrustedCompanies() {
    return (
        <>
            {/* Estilos CSS en línea */}
            <style jsx>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="py-20 bg-white">
                <h3 className="text-lg md:text-xl text-center text-gray-500 mb-12 font-medium">
                    Con la confianza de marcas líderes, incluyendo —
                </h3>
            
                <div className="overflow-hidden w-full relative max-w-6xl mx-auto select-none">
                    {/* Gradiente izquierdo */}
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                    
                    {/* Marquee container con animación */}
                    <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "20s" }}>
                        <div className="flex items-center">
                            {[...companiesLogo, ...companiesLogo].map((company, index) => (
                                <img 
                                    key={index} 
                                    src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                                    alt={company} 
                                    className="h-10 md:h-12 w-auto mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                    draggable={false} 
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                    
                    {/* Gradiente derecho */}
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
                </div>
            </div>
        </>
    );
}