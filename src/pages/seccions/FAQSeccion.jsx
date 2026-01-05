import { ChevronDown, MessageCircle, HelpCircle, FileText, CreditCard, Users, Settings, Globe } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqCategories = [
        {
            icon: <CreditCard className="w-5 h-5" />,
            title: "Pagos y Facturación",
            color: "blue"
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: "Cuenta y Usuarios",
            color: "purple"
        },
        {
            icon: <Settings className="w-5 h-5" />,
            title: "Funcionalidades",
            color: "green"
        },
        {
            icon: <Globe className="w-5 h-5" />,
            title: "Soporte Técnico",
            color: "orange"
        }
    ];

    const faqs = [
        {
            category: "Pagos y Facturación",
            question: "¿Qué métodos de pago aceptan?",
            answer: "Aceptamos todas las tarjetas de crédito y débito principales (Visa, MasterCard, American Express), PayPal, transferencia bancaria SEPA, y también criptomonedas como Bitcoin y Ethereum. Los pagos se procesan de forma segura con encriptación de 256-bit.",
            popular: true
        },
        {
            category: "Pagos y Facturación",
            question: "¿Puedo cancelar mi suscripción en cualquier momento?",
            answer: "Sí, puedes cancelar tu suscripción en cualquier momento desde el panel de configuración de tu cuenta. No hay cargos por cancelación ni penalizaciones. Tu acceso permanecerá activo hasta el final del período facturado.",
            popular: false
        },
        {
            category: "Pagos y Facturación",
            question: "¿Ofrecen facturación anual con descuento?",
            answer: "Sí, al elegir facturación anual obtienes un 20% de descuento respecto al plan mensual. Además, ofrecemos un 30% de descuento adicional para startups, ONGs y organizaciones educativas verificadas.",
            popular: true
        },
        {
            category: "Cuenta y Usuarios",
            question: "¿Cómo puedo agregar más usuarios a mi cuenta?",
            answer: "Puedes agregar usuarios desde la sección 'Equipo' en tu panel de administración. Cada plan tiene un límite máximo de usuarios, pero puedes actualizar tu plan en cualquier momento para aumentar este límite. Los nuevos usuarios reciben un email de invitación con instrucciones.",
            popular: true
        },
        {
            category: "Cuenta y Usuarios",
            question: "¿Puedo transferir mis datos a otra cuenta?",
            answer: "Sí, ofrecemos herramientas de exportación de datos en formatos estándar (CSV, JSON, Excel). Para migraciones complejas, nuestro equipo de soporte puede asistirte en el proceso de forma gratuita para planes empresariales.",
            popular: false
        },
        {
            category: "Funcionalidades",
            question: "¿Tienen API disponible?",
            answer: "Sí, ofrecemos una API RESTful completa con documentación detallada, SDKs para los principales lenguajes de programación, y límites generosos de requests. La API está disponible en todos los planes, con límites más altos en planes superiores.",
            popular: true
        },
        {
            category: "Funcionalidades",
            question: "¿Puedo personalizar el dashboard?",
            answer: "Totalmente. Nuestro sistema permite personalizar widgets, métricas, colores y disposición según tus necesidades. También ofrecemos opciones de white-label para planes empresariales.",
            popular: false
        },
        {
            category: "Soporte Técnico",
            question: "¿Qué tipo de soporte ofrecen?",
            answer: "Ofrecemos soporte por email, chat en vivo y teléfono según tu plan. Los tiempos de respuesta son: 24 horas para plan Básico, 4 horas para Profesional, y 30 minutos para Empresarial. También tenemos una extensa base de conocimiento y tutoriales en video.",
            popular: true
        },
        {
            category: "Soporte Técnico",
            question: "¿Cuál es su tiempo de actividad garantizado?",
            answer: "Garantizamos un 99.9% de tiempo de actividad para todos nuestros servicios, con SLA específico por plan. Puedes monitorear nuestro estado en tiempo real en status.tudominio.com. Históricamente mantenemos un 99.98% de uptime.",
            popular: true
        },
        {
            category: "Soporte Técnico",
            question: "¿Ofrecen migración de datos asistida?",
            answer: "Sí, nuestro equipo de migración ofrece asistencia completa para transferir tus datos desde otras plataformas. Este servicio es gratuito para planes Profesional y Empresarial, e incluye limpieza y validación de datos.",
            popular: false
        }
    ];

    return (
        <section id="faq" className="py-24 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
                        <HelpCircle className="w-4 h-4" />
                        <span className="text-sm font-semibold">PREGUNTAS FRECUENTES</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Resolvemos tus{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            dudas más comunes
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600">
                        Encuentra respuestas rápidas a las preguntas más frecuentes sobre nuestra plataforma.
                    </p>
                </div>

                {/* Estadísticas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                        <div className="text-gray-600">Soporte disponible</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-2">15min</div>
                        <div className="text-gray-600">Respuesta promedio</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                        <div className="text-gray-600">Satisfacción</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                        <div className="text-gray-600">Artículos de ayuda</div>
                    </div>
                </div>

                {/* Categorías */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {faqCategories.map((category, index) => (
                        <button
                            key={index}
                            className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${category.color === "blue" 
                                ? "border-blue-200 hover:border-blue-300 bg-blue-50 hover:bg-blue-100" 
                                : category.color === "purple" 
                                ? "border-purple-200 hover:border-purple-300 bg-purple-50 hover:bg-purple-100" 
                                : category.color === "green" 
                                ? "border-green-200 hover:border-green-300 bg-green-50 hover:bg-green-100" 
                                : "border-orange-200 hover:border-orange-300 bg-orange-50 hover:bg-orange-100"}`}
                        >
                            <div className={`p-2 rounded-lg ${category.color === "blue" 
                                ? "bg-blue-100 text-blue-600" 
                                : category.color === "purple" 
                                ? "bg-purple-100 text-purple-600" 
                                : category.color === "green" 
                                ? "bg-green-100 text-green-600" 
                                : "bg-orange-100 text-orange-600"}`}
                            >
                                {category.icon}
                            </div>
                            <span className="font-semibold text-gray-900">{category.title}</span>
                        </button>
                    ))}
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className={`bg-white rounded-xl border transition-all duration-300 hover:shadow-lg ${
                                openIndex === index 
                                    ? "border-blue-300 shadow-md" 
                                    : "border-gray-200 hover:border-blue-200"
                            }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-6 text-left flex items-start justify-between gap-4"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="font-semibold text-gray-900 text-lg">
                                            {faq.question}
                                        </h3>
                                        {faq.popular && (
                                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                                POPULAR
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <FileText className="w-4 h-4" />
                                        <span>{faq.category}</span>
                                    </div>
                                </div>
                                <ChevronDown 
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                                        openIndex === index ? "transform rotate-180" : ""
                                    }`}
                                />
                            </button>
                            
                            <div 
                                className={`px-6 overflow-hidden transition-all duration-300 ${
                                    openIndex === index 
                                        ? "pb-6 max-h-96 opacity-100" 
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                    {faq.category === "Soporte Técnico" && (
                                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                                            <p className="text-sm text-blue-700">
                                                <strong>💡 Tip:</strong> Para solicitudes urgentes, utiliza nuestro chat en vivo disponible en el dashboard.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Búsqueda y Contacto */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <MessageCircle className="w-12 h-12 mx-auto mb-6" />
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            ¿No encontraste tu respuesta?
                        </h3>
                        
                        <p className="text-blue-100 mb-8">
                            Nuestro equipo de soporte está listo para ayudarte personalmente.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-all hover:scale-105">
                                Contactar soporte
                            </button>
                            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all hover:scale-105">
                                Ver documentación completa
                            </button>
                        </div>
                        
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-blue-100">
                            <div>
                                <div className="font-semibold mb-2">📧 Email</div>
                                <div>soporte@tudominio.com</div>
                            </div>
                            <div>
                                <div className="font-semibold mb-2">💬 Chat</div>
                                <div>Disponible 24/7 en tu dashboard</div>
                            </div>
                            <div>
                                <div className="font-semibold mb-2">📞 Teléfono</div>
                                <div>+34 900 123 456</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recursos adicionales */}
                <div className="mt-16">
                    <h4 className="text-2xl font-bold text-center text-gray-900 mb-8">
                        Recursos adicionales
                    </h4>
                    <div className="grid md:grid-cols-3 gap-6">
                        <a 
                            href="#" 
                            className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                        >
                            <div className="text-blue-600 mb-4">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                Documentación técnica
                            </h5>
                            <p className="text-gray-600 text-sm">
                                Guías detalladas, API references y ejemplos de código.
                            </p>
                        </a>
                        <a 
                            href="#" 
                            className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                        >
                            <div className="text-blue-600 mb-4">
                                <Settings className="w-8 h-8" />
                            </div>
                            <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                Centro de tutoriales
                            </h5>
                            <p className="text-gray-600 text-sm">
                                Video tutoriales paso a paso para todas las funcionalidades.
                            </p>
                        </a>
                        <a 
                            href="#" 
                            className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                        >
                            <div className="text-blue-600 mb-4">
                                <Users className="w-8 h-8" />
                            </div>
                            <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                Comunidad
                            </h5>
                            <p className="text-gray-600 text-sm">
                                Foro de discusión, preguntas de otros usuarios y mejores prácticas.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}