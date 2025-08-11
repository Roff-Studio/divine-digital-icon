import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import heroImage from "@/assets/hero-satin-crystal.jpg";
import luxPortrait from "@/assets/lux-profanum-portrait.jpg";
import { Radio, Share2 } from "lucide-react";
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
      <header className="fixed top-0 inset-x-0 z-50 bg-background/60 backdrop-blur-lg border-b border-primary">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#inicio" className="font-fraktur text-2xl sm:text-3xl story-link" aria-label="TheIglesia inicio">
            TheIglesia
          </a>
          <div className="flex items-center gap-6 text-sm font-monoTech">
            <a href="#inicio" className="hover-scale">INICIO</a>
            <a href="#tienda" className="hover-scale">TIENDA</a>
            <a href="#manifiesto" className="hover-scale">MANIFIESTO</a>
          </div>
        </nav>
      </header>

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
                  <CardTitle className="font-fraktur text-2xl mb-1">{p.name}</CardTitle>
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
              <p className="text-muted-foreground mb-4">La autoaceptación radical es la llave. Convertimos las fisuras en luz, el error en estética, el glitch en identidad. La fe es un ritmo en tu pecho: síguelo.</p>
              <p className="text-muted-foreground mb-4">Fusionamos lo sagrado y lo digital para reprogramar la culpa en combustión creativa. Viste tu verdad, talla tus límites, apaga el ruido.</p>
              <p className="text-muted-foreground">Cada reliquia es un sigilo contemporáneo. No obedece dogmas: los compila. Repite el mantra: "Ama tu glitch; en él habita tu verdad."</p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={luxPortrait} alt="Lux Profanum, el Santo del Glitch" className="w-full h-auto rounded-lg border border-primary/40 hover:neon-shadow-magenta transition-shadow" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/40 py-10">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 ROFF Studio & TheIglesia. Todos los derechos reservados.</p>
          <div className="flex items-center justify-center gap-6">
            <a href="#" aria-label="Instagram" className="p-2 rounded-md hover:neon-shadow-cyan transition-shadow"><InstagramIcon /></a>
            <a href="#" aria-label="X" className="p-2 rounded-md hover:neon-shadow-cyan transition-shadow"><Share2 size={22} /></a>
            <a href="#" aria-label="TikTok" className="p-2 rounded-md hover:neon-shadow-cyan transition-shadow"><Radio size={22} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Simple, unbranded glyph for Instagram-like mark
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);

export default Index;
