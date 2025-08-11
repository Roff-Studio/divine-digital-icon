import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-primary/40 mt-24">
      <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="font-display text-2xl mb-2">TheIglesia</h4>
          <p className="font-monoTech text-muted-foreground">Reliquias para el presente.</p>
        </div>
        <div>
          <h5 className="font-monoTech uppercase tracking-wide mb-3 text-muted-foreground">Explorar</h5>
          <ul className="space-y-2 font-monoTech text-sm">
            <li><a href="/" className="hover:text-secondary transition-colors">Inicio</a></li>
            <li><a href="/#tienda" className="hover:text-secondary transition-colors">Tienda</a></li>
            <li><a href="/manifiesto" className="hover:text-secondary transition-colors">Manifiesto</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-monoTech uppercase tracking-wide mb-3 text-muted-foreground">Únete</h5>
          <ul className="space-y-2 font-monoTech text-sm">
            <li><a href="#" className="hover:text-secondary transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">X (Twitter)</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">TikTok</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-monoTech uppercase tracking-wide mb-3 text-muted-foreground">Mantente Conectado</h5>
          <p className="font-monoTech text-sm text-muted-foreground mb-3">Recibe lanzamientos exclusivos y crónicas de nuestro universo.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="tu@email.com" aria-label="Correo electrónico" className="flex-1" />
            <Button variant="neonCyan">Suscribirse</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto py-6 text-center font-monoTech text-sm text-muted-foreground">
          © 2025 TheIglesia & ROFF Studio. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
