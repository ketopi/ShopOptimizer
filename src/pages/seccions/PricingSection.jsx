import { Check, Star, Zap, Crown, Sparkles } from "lucide-react";
import { useState } from "react";

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState("annual"); // "monthly" or "annual"
    
    const plans = [
        {
            name: "Básico",
            description: "Perfecto para emprendedores y proyectos pequeños",
            monthlyPrice: 29,
            annualPrice: 290,
            annualSavings: "Ahorras 58€",
            icon: <Sparkles className="w-6 h-6" />,
            color: "blue",
            popular: false,
            features: [
                "Hasta 5 usuarios",
                "10 GB de almacenamiento",
                "Soporte por email",
                "Integraciones básicas (3)",
                "Informes estándar",
                "Actualizaciones mensuales"
            ],
            cta: "Comenzar gratis",
            ctaVariant: "outline"
        },
        {
            name: "Profesional",
            description: "Ideal para equipos en crecimiento",
            monthlyPrice: 79,
            annualPrice: 790,
            annualSavings: "Ahorras 158€",
            icon: <Zap className="w-6 h-6" />,
            color: "purple",
            popular: true,
            features: [
                "Hasta 20 usuarios",
                "100 GB de almacenamiento",
                "Soporte prioritario 24/7",
                "Integraciones avanzadas (15)",
                "Analíticas avanzadas",
                "API completa",
                "SLA 99.9%",
                "Actualizaciones semanales"
            ],
            cta: "Probar gratis 14 días",
            ctaVariant: "primary"
        },
        {
            name: "Empresarial",
            description: "Para organizaciones que necesitan máxima potencia",
            monthlyPrice: 199,
            annualPrice: 1990,
            annualSavings: "Ahorras 398€",
            icon: <Crown className="w-6 h-6" />,
            color: "amber",
            popular: false,
            features: [
                "Usuarios ilimitados",
                "1 TB de almacenamiento",
                "Soporte dedicado",
                "Integraciones ilimitadas",
                "Machine Learning",
                "Personalización completa",
                "SLA 99.99%",
                "Actualizaciones diarias",
                "Migración asistida",
                "Entrenamiento personalizado"
            ],
            cta: "Contactar ventas",
            ctaVariant: "outline"
        }
    ];

    const allFeatures = [
        "Usuarios",
        "Almacenamiento",
        "Soporte",
        "Integraciones",
        "Analíticas",
        "API",
        "SLA",
        "Actualizaciones"
    ];

    return (
        <section id="precios" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 mb-6">
                        <Star className="w-4 h-4" />
                        <span className="text-sm font-semibold">PRECIOS</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Planes transparentes para{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            cada etapa
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 mb-10">
                        Elige el plan que mejor se adapte a tus necesidades. Todos incluyen prueba gratuita.
                    </p>

                    {/* Toggle anual/mensual */}
                    <div className="inline-flex items-center bg-gray-100 p-1 rounded-xl mb-12">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${billingCycle === "monthly" 
                                ? "bg-white text-gray-900 shadow" 
                                : "text-gray-600 hover:text-gray-900"}`}
                        >
                            Facturación mensual
                        </button>
                        <button
                            onClick={() => setBillingCycle("annual")}
                            className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${billingCycle === "annual" 
                                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow" 
                                : "text-gray-600 hover:text-gray-900"}`}
                        >
                            Facturación anual
                            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                                -20%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Tarjetas de precios */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-[1.02] ${plan.popular 
                                ? "border-purple-500 bg-gradient-to-b from-white to-purple-50 shadow-2xl transform md:-translate-y-4" 
                                : "border-gray-200 bg-white shadow-lg hover:shadow-xl"}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                                        MÁS POPULAR
                                    </div>
                                </div>
                            )}

                            {/* Encabezado del plan */}
                            <div className="text-center mb-8">
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${plan.color === "blue" 
                                    ? "bg-blue-50 text-blue-600" 
                                    : plan.color === "purple" 
                                    ? "bg-purple-50 text-purple-600" 
                                    : "bg-amber-50 text-amber-600"}`}
                                >
                                    {plan.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-600">{plan.description}</p>
                            </div>

                            {/* Precio */}
                            <div className="text-center mb-8">
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    <span className="text-5xl font-bold text-gray-900">
                                        {billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice}€
                                    </span>
                                    <span className="text-gray-500">
                                        /{billingCycle === "annual" ? "año" : "mes"}
                                    </span>
                                </div>
                                {billingCycle === "annual" && (
                                    <div className="text-green-600 text-sm font-semibold">
                                        {plan.annualSavings}
                                    </div>
                                )}
                            </div>

                            {/* Lista de características */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.color === "blue" 
                                            ? "text-blue-500" 
                                            : plan.color === "purple" 
                                            ? "text-purple-500" 
                                            : "text-amber-500"}`} 
                                        />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button className={`w-full py-4 rounded-xl font-semibold transition-all ${plan.ctaVariant === "primary" 
                                ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl"
                                : "border-2 hover:border-gray-300 text-gray-900 hover:bg-gray-50"} 
                                ${plan.color === "blue" 
                                    ? "border-blue-200 hover:border-blue-300" 
                                    : plan.color === "purple" 
                                    ? "border-purple-200 hover:border-purple-300" 
                                    : "border-amber-200 hover:border-amber-300"}`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Tabla comparativa */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
                    <h3 className="text-2xl font-bold text-center mb-10">
                        Comparativa detallada de planes
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-4 font-semibold text-gray-700">Característica</th>
                                    {plans.map((plan, idx) => (
                                        <th key={idx} className="text-center py-4 font-semibold">
                                            <div className="flex flex-col items-center">
                                                <span className={`${plan.popular ? "text-purple-600" : "text-gray-900"}`}>
                                                    {plan.name}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    {billingCycle === "annual" 
                                                        ? `${plan.annualPrice}€/año` 
                                                        : `${plan.monthlyPrice}€/mes`}
                                                </span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {allFeatures.map((feature, rowIdx) => (
                                    <tr key={rowIdx} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-4 text-gray-700 font-medium">{feature}</td>
                                        {plans.map((plan, colIdx) => (
                                            <td key={colIdx} className="text-center py-4">
                                                {feature === "Usuarios" ? (
                                                    plan.name === "Básico" ? "5" : 
                                                    plan.name === "Profesional" ? "20" : "Ilimitados"
                                                ) : feature === "Almacenamiento" ? (
                                                    plan.name === "Básico" ? "10 GB" : 
                                                    plan.name === "Profesional" ? "100 GB" : "1 TB"
                                                ) : feature === "Soporte" ? (
                                                    plan.name === "Básico" ? "Email" : 
                                                    plan.name === "Profesional" ? "24/7" : "Dedicado"
                                                ) : feature === "Integraciones" ? (
                                                    plan.name === "Básico" ? "3" : 
                                                    plan.name === "Profesional" ? "15" : "Ilimitadas"
                                                ) : feature === "SLA" ? (
                                                    plan.name === "Básico" ? "-" : 
                                                    plan.name === "Profesional" ? "99.9%" : "99.99%"
                                                ) : (
                                                    <Check className={`w-5 h-5 mx-auto ${plan.color === "blue" 
                                                        ? "text-blue-500" 
                                                        : plan.color === "purple" 
                                                        ? "text-purple-500" 
                                                        : "text-amber-500"}`} 
                                                    />
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Preguntas frecuentes */}
                <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-8">
                        Preguntas frecuentes sobre precios
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                q: "¿Puedo cambiar de plan en cualquier momento?",
                                a: "Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se prorratean automáticamente."
                            },
                            {
                                q: "¿Hay compromiso de permanencia?",
                                a: "No, todos nuestros planes son mensuales o anuales sin compromiso. Cancela cuando quieras."
                            },
                            {
                                q: "¿Qué métodos de pago aceptan?",
                                a: "Aceptamos tarjetas de crédito/débito, PayPal, transferencia bancaria y criptomonedas."
                            },
                            {
                                q: "¿Ofrecen descuentos para startups?",
                                a: "Sí, ofrecemos un 30% de descuento para startups verificadas y ONGs."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-left">
                                <h5 className="font-semibold text-gray-900 mb-2">{faq.q}</h5>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}