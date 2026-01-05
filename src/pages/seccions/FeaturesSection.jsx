import { CheckCircle, Zap, Shield, BarChart, Users, Cloud, Lock, Globe } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Rendimiento Extremo",
            description: "Optimizado para velocidad con tiempos de carga inferiores a 0.5 segundos.",
            highlights: ["Cache inteligente", "CDN global", "Compresión avanzada"]
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Seguridad de Nivel Empresarial",
            description: "Protección avanzada con encriptación end-to-end y cumplimiento de normas.",
            highlights: ["SSL/TLS 1.3", "2FA obligatorio", "Backups automáticos"]
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: "Analíticas en Tiempo Real",
            description: "Dashboard interactivo con métricas clave para la toma de decisiones.",
            highlights: ["Reportes personalizados", "KPIs en tiempo real", "Exportación de datos"]
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Colaboración en Equipo",
            description: "Herramientas diseñadas para mejorar la productividad de tu equipo.",
            highlights: ["Roles y permisos", "Comentarios en tiempo real", "Historial de cambios"]
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Escalabilidad Automática",
            description: "Infraestructura que crece con tu negocio sin interrupciones.",
            highlights: ["Auto-scaling", "Balanceo de carga", "99.9% uptime"]
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Disponibilidad Global",
            description: "Servidores distribuidos en 15 países para máxima velocidad local.",
            highlights: ["15 regiones", "DNS Anycast", "Redirección inteligente"]
        }
    ];

    return (
        <section id="caracteristicas" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-6">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-semibold">CARACTERÍSTICAS</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Todo lo que necesitas para{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            escalar tu negocio
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600">
                        Una suite completa de herramientas diseñadas para potenciar tu productividad 
                        y hacer crecer tu empresa.
                    </p>
                </div>

                {/* Grid de características */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                        >
                            {/* Icono con fondo */}
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            
                            {/* Título */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            
                            {/* Descripción */}
                            <p className="text-gray-600 mb-6">
                                {feature.description}
                            </p>
                            
                            {/* Lista de puntos destacados */}
                            <ul className="space-y-3">
                                {feature.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            {/* Borde animado */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                

               
            </div>
        </section>
    );
}