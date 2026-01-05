import React, { useState } from 'react';
import { navLinks } from '../routes/navLinks';
import logo from '../assets/logo.svg';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#inicio');

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Función para navegación suave
    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        setActiveLink(href);
        
        if (href === '#inicio') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const element = document.querySelector(href);
            if (element) {
                const offset = 80; // Ajuste para el navbar fijo
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
        
        closeMobileMenu();
    };

    return (
        <>
            {/* Navbar Principal */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-md transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        {/* Logo con animación */}
                        <a
                            href="#inicio"
                            onClick={(e) => handleSmoothScroll(e, '#inicio')}
                            className="flex-shrink-0 flex items-center group"
                        >
                            <img 
                                src={logo} 
                                alt="logo" 
                                className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" 
                            />
                            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                My System
                            </span>
                        </a>

                        {/* Enlaces Desktop con animaciones */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className={`relative px-6 py-2 font-medium transition-all duration-300 ${
                                        activeLink === link.href 
                                            ? 'text-indigo-600' 
                                            : 'text-gray-700 hover:text-indigo-600'
                                    }`}
                                >
                                    {link.name}
                                    {/* Indicador activo */}
                                    {activeLink === link.href && (
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                                    )}
                                    {/* Efecto hover */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                                </a>
                            ))}
                        </div>

                        {/* Botones Desktop con animaciones */}
                        <div className="hidden md:flex items-center space-x-3">
                            <button className="group relative px-5 py-2 text-indigo-600 border border-indigo-600 rounded-lg overflow-hidden transition-all duration-300 hover:text-white">
                                <span className="relative z-10 font-medium">Login</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                            </button>
                            <button className="group relative px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                                <span className="relative z-10 font-medium">Get Started</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="absolute top-0 left-0 w-full h-0.5 bg-white/30 group-hover:animate-shimmer"></span>
                            </button>
                        </div>

                        {/* Botón Menú Móvil con animación */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
                            aria-label="Abrir menú"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-700 group-hover:text-indigo-600 transition-colors duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menú Móvil con animaciones */}
            <div className={`md:hidden fixed inset-0 z-[9999] transition-all duration-300 ${
                isMobileMenuOpen ? 'visible' : 'invisible'
            }`}>
                {/* Overlay con animación */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                        isMobileMenuOpen ? 'opacity-40' : 'opacity-0'
                    }`}
                    onClick={closeMobileMenu}
                />

                {/* Panel del Menú con animación slide */}
                <div className={`absolute inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>

                    {/* Header del Menú Móvil */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <div className="flex items-center">
                            <img 
                                src={logo} 
                                alt="logo" 
                                className="h-6 w-auto" 
                            />
                            <span className="ml-3 text-lg font-bold text-gray-900">
                                MiApp
                            </span>
                        </div>

                        <button
                            onClick={closeMobileMenu}
                            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:rotate-90"
                            aria-label="Cerrar menú"
                        >
                            <svg
                                className="w-6 h-6 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navegación Móvil con animaciones escalonadas */}
                    <nav className="py-6">
                        <div className="space-y-1 px-4">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className={`flex items-center px-4 py-3 text-lg font-medium text-gray-900 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300 transform ${
                                        isMobileMenuOpen 
                                            ? 'translate-x-0 opacity-100' 
                                            : '-translate-x-4 opacity-0'
                                    }`}
                                    style={{
                                        transitionDelay: `${index * 50}ms`
                                    }}
                                >
                                    <span className={`ml-2 transition-all duration-300 ${
                                        activeLink === link.href ? 'font-bold text-indigo-600' : ''
                                    }`}>
                                        {link.name}
                                    </span>
                                    {activeLink === link.href && (
                                        <span className="ml-auto w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Botones Móvil con animaciones */}
                    <div className="p-6 border-t border-gray-100 space-y-3">
                        <button
                            className="w-full py-3 px-4 text-center font-medium text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 active:scale-95 transition-all duration-300 transform hover:-translate-y-0.5"
                            onClick={closeMobileMenu}
                        >
                            Login
                        </button>
                        <button
                            className="w-full py-3 px-4 text-center font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                            onClick={closeMobileMenu}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* Espaciado debajo del navbar fijo */}
            <div className="h-16 md:h-20" />
        </>
    );
}