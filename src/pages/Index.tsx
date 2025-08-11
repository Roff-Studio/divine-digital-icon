import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import heroImage from "@/assets/hero-satin-crystal.jpg";
import luxPortrait from "@/assets/lux-profanum-portrait.jpg";
import Header from "@/components/layout/Header";
import { useState } from "react";
import type React from "react";

const Index = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const prefersReduced = typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const handleParallax = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const max = 12; // max px movement
    setOffset({ x: (0.5 - x) * max, y: (0.5 - y) * max });
  };

  return (
    <div>
      <Header />

      <main>
        {/* Hero */}
        <section id="inicio" className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 hero-parallax-img"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 overlay-40" aria-hidden="true" />
          <div className="absolute inset-0 vignette-dark" aria-hidden="true" />
          <div className="relative z-10 text-center px-6 animate-enter" onMouseMove={handleParallax} onMouseLeave={() => setOffset({ x: 0, y: 0 })}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl mb-2 text-sheen">Ama tu glitch</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8">en él habita tu verdad.</h2>
            <Button variant="neonMagenta" size="lg" asChild>
              <a href="#tienda" aria-label="Explorar reliquias" className="px-8 py-3">EXPLORAR RELIQUIAS</a>
            </Button>
          </div>
        </section>

        {/* Brand Purpose Bridge */}
        <section aria-labelledby="purpose-title" className="container mx-auto py-16">
          <h2 id="purpose-title" className="text-3xl sm:text-4xl text-center mb-8">Laboratorio de Estilo y Autoexpresión.</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["ROPA","ACCESORIOS","ZAPATILLAS","JOYERÍA","ARTE PERSONALIZADO"].map((tag, i) => (
              <span
                key={tag}
                className="bg-banner text-foreground font-monoTech uppercase tracking-wider text-xs sm:text-sm px-4 py-2 rounded-full border border-border/60 animate-fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
                aria-label={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section id="tienda" className="container mx-auto py-20">
          <h2 className="text-3xl sm:text-4xl mb-8">Reliquias Digitales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{name: "Rosario Neón", price: "$111.00"},{name: "Cáliz Glitch", price: "$222.00"},{name: "Estola Circuito", price: "$333.00"}].map((p, i) => (
              <Card key={i} className="card-surface card-hover-neon border rounded-lg overflow-hidden">
                <CardHeader className="p-0">
                  <div className="w-full aspect-[4/3] bg-muted/30" aria-label="Imagen de producto" />
                </CardHeader>
                <CardContent className="pt-4">
                  <CardTitle className="font-display text-2xl mb-1">{p.name}</CardTitle>
                  <p className="text-muted-foreground">{p.price}</p>
                </CardContent>
                <CardFooter className="pt-2 pb-6 px-6">
                  <Button variant="neonCyan" size="sm">AÑADIR</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Manifesto */}
        <section id="manifiesto" className="container mx-auto py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl mb-6">Hackea el Dogma.</h2>
              <p className="text-muted-foreground mb-4">La autenticidad manda. Diseñamos piezas que celebran lo que te hace único.</p>
              <p className="text-muted-foreground mb-4">Menos ruido, más intención. Materiales de calidad y formas que duran.</p>
              <p className="text-muted-foreground">Úsalas para crear rituales diarios de confianza, claridad y autoexpresión.</p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={luxPortrait} alt="Lux Profanum, el Santo del Glitch" className="w-full h-auto rounded-lg border border-primary/40 hover:neon-shadow-magenta transition-shadow" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};


export default Index;
