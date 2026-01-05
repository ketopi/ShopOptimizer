import HeroSection from "./seccions/HeroSection";
import FeaturesSection from "./seccions/FeaturesSection";
import TestimonialsSection from "./seccions/TestimonialsSection";
import PricingSection from "./seccions/PricingSection";
import FAQSection from "./seccions/FAQSeccion";

export default function Home() {
    return (
        <>
            <section id="inicio"><HeroSection /></section>
            <section id="caracteristicas"><FeaturesSection /></section>
            <section id="testimonios"><TestimonialsSection /></section>
            <section id="precios"><PricingSection /></section>  
            <section id="faq"><FAQSection /></section>
          
        </>
    );
}