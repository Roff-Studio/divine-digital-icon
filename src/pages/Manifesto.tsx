import Header from "@/components/layout/Header";
import SEOHead from "@/components/SEOHead";
import React from "react";

const IconBreakCircle = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" opacity="0.8" />
    <path d="M8 24h8" stroke="currentColor" strokeWidth="2" />
    <path d="M32 24h8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconDiamond = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary">
    <path d="M24 8l12 12-12 20L12 20 24 8z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9" />
  </svg>
);

const IconBars = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <rect x="14" y="24" width="4" height="12" fill="currentColor" className="opacity-80" />
    <rect x="22" y="18" width="4" height="18" fill="currentColor" className="opacity-90" />
    <rect x="30" y="28" width="4" height="8" fill="currentColor" className="opacity-70" />
  </svg>
);

const Manifesto: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Manifiesto — TheIglesia"
        description="Nuestra filosofía: autenticidad, intención y ritual."
        canonical="/manifiesto"
      />
      <Header />
      <main className="pt-24">
        {/* Section 1: The Declaration */}
        <section className="container mx-auto py-24 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">Tu Estilo es tu Manifiesto.</h1>
        </section>

        {/* Section 2: Our Pillars */}
        <section className="container mx-auto py-8">
          <h2 className="text-3xl sm:text-4xl mb-10">Nuestra Filosofía</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="card-surface rounded-lg p-6 border card-hover-neon">
              <div className="mb-4"><IconBreakCircle /></div>
              <h3 className="font-display text-2xl mb-2">Tu Imperfección es tu Poder</h3>
              <p className="text-muted-foreground font-monoTech">No ocultamos las fallas, las celebramos. Cada pieza está diseñada para honrar tu autenticidad, recordándote que tu verdadero valor reside en tu historia única.</p>
            </article>
            <article className="card-surface rounded-lg p-6 border card-hover-neon">
              <div className="mb-4"><IconDiamond /></div>
              <h3 className="font-display text-2xl mb-2">Lujo con Intención</h3>
              <p className="text-muted-foreground font-monoTech">El verdadero lujo no es un precio, es un propósito. Creamos piezas de alta calidad, hechas para durar y para convertirse en los artefactos de tu vida diaria.</p>
            </article>
            <article className="card-surface rounded-lg p-6 border card-hover-neon">
              <div className="mb-4"><IconBars /></div>
              <h3 className="font-display text-2xl mb-2">Eleva tu Rutina</h3>
              <p className="text-muted-foreground font-monoTech">Transforma los actos cotidianos en momentos significativos. Nuestras piezas son herramientas para crear tus propios rituales de confianza, claridad y autoexpresión.</p>
            </article>
          </div>
        </section>

        {/* Section 3: The Banner */}
        <section className="bg-banner">
          <div className="container mx-auto py-16 text-center">
            <p className="font-monoTech uppercase tracking-widest">LA CALIDAD NO ES NEGOCIABLE. LA EXPRESIÓN TAMPOCO.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Manifesto;
