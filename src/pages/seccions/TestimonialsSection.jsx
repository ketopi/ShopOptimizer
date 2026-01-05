import React from 'react';

export default function TestimonialsSection() {
    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@neilstellar',
            date: 'April 20, 2025',
            testimonial: 'Radiant made undercutting all of our competitors an absolute breeze.',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
            date: 'May 10, 2025',
            testimonial: 'Incredible platform! Our productivity increased by 300% in just 3 months.',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordantalks',
            date: 'June 5, 2025',
            testimonial: 'The analytics tools alone are worth the price. Game changing insights!',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Taylor Kim',
            handle: '@taylortech',
            date: 'May 10, 2025',
            testimonial: 'Customer support is outstanding. They helped us scale seamlessly.',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200',
            name: 'Morgan Chen',
            handle: '@morgandata',
            date: 'July 15, 2025',
            testimonial: 'Best decision we made this year. ROI exceeded all expectations.',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
            name: 'Casey Rivera',
            handle: '@caseybuilds',
            date: 'August 3, 2025',
            testimonial: 'Intuitive interface with powerful features. Perfect for our team.',
            rating: 5
        }
    ];

    const TestimonialCard = ({ card }) => (
        <div className="p-6 rounded-xl bg-white mx-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 w-80 flex-shrink-0">
            <div className="flex items-center gap-3 mb-4">
                <img 
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" 
                    src={card.image} 
                    alt={`${card.name}'s profile`} 
                />
                <div>
                    <div className="flex items-center gap-2">
                        <h4 className="font-bold text-gray-900">{card.name}</h4>
                        {/* Verified Badge */}
                        <svg className="mt-0.5" width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                        </svg>
                    </div>
                    <p className="text-sm text-gray-500">{card.handle}</p>
                </div>
            </div>
            
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            
            {/* Testimonial Text */}
            <p className="text-gray-700 mb-6 italic">"{card.testimonial}"</p>
            
            {/* Footer */}
            <div className="flex items-center justify-between text-gray-500 text-sm pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                    <span>Posted on</span>
                    <a 
                        href="https://x.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                    >
                        <svg width="14" height="14" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
                <p className="font-medium">{card.date}</p>
            </div>
        </div>
    );

    return (
        <section id="testimonios" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <style jsx>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                
                .marquee-inner {
                    animation: marqueeScroll 30s linear infinite;
                }
                
                .marquee-reverse {
                    animation-direction: reverse;
                }
                
                .marquee-inner:hover {
                    animation-play-state: paused;
                }
            `}</style>
            
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-6">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold">TESTIMONIOS</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Lo que dicen nuestros{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            clientes satisfechos
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600">
                        Descubre por qué miles de empresas confían en nosotros para hacer crecer su negocio.
                    </p>
                </div>

                {/* Marquee 1 */}
                <div className="marquee-row w-full mx-auto overflow-hidden relative mb-8">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                    <div className="marquee-inner flex transform-gpu min-w-[200%] py-4">
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <TestimonialCard key={`first-${index}`} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
                </div>

                {/* Marquee 2 (Reverse) */}
                <div className="marquee-row w-full mx-auto overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                    <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-4">
                        {[...cardsData.slice().reverse(), ...cardsData.slice().reverse()].map((card, index) => (
                            <TestimonialCard key={`second-${index}`} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                        <div className="text-gray-600">Rating promedio</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5K+</div>
                        <div className="text-gray-600">Testimonios</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
                        <div className="text-gray-600">Clientes satisfechos</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24h</div>
                        <div className="text-gray-600">Respuesta en redes</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Unirse a clientes satisfechos
                    </button>
                </div>
            </div>
        </section>
    );
}