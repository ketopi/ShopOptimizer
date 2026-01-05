import { ChevronRightIcon, SparklesIcon } from "lucide-react";
import TrustedCompanies from "../../components/TrustedCompanies";

export default function HeroSection() {
    return (
        <div className="relative">
            <section className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center px-4 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat">

                <div className="absolute inset-0 bg-white/10"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    {/* Banner de anuncio */}
                    <div className="mb-6">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all shadow-sm border border-blue-200 hover:scale-105"
                        >
                            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                                NUEVO
                            </span>
                            <span className="text-sm font-medium">
                                Prueba 30 días gratis
                            </span>
                            <ChevronRightIcon size={16} />
                        </a>
                    </div>

                    {/* Título principal */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                        Impulsa tu{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                            negocio digital
                        </span>{" "}
                        con estrategias que venden
                    </h1>

                    {/* Descripción */}
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                        Atrae más clientes, automatiza tus campañas y haz crecer tu marca
                        con soluciones inteligentes de marketing digital.
                    </p>

                    {/* Botones CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-3 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                            Comenzar ahora
                        </button>

                        <button className="flex items-center justify-center gap-2 border-2 border-blue-500 px-8 py-3 rounded-lg text-blue-600 hover:bg-blue-50 transition-all font-semibold hover:scale-105 active:scale-95">
                            <SparklesIcon size={18} />
                            Ver funciones
                        </button>
                    </div>
                </div>

            </section>

            {/* TrustedCompanies CORREGIDO - valores más razonables */}
            <div className="relative -mt-6 md:-mt-12 lg:-mt-16">
                <TrustedCompanies />
            </div>
        </div>
    );
}