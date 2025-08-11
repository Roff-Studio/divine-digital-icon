import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/60 backdrop-blur-lg border-b border-primary">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="/#inicio" className="font-display text-2xl sm:text-3xl story-link" aria-label="TheIglesia inicio">
          TheIglesia
        </a>
        <div className="flex items-center gap-6 text-sm font-monoTech">
          <a href="/#inicio" className="hover-scale">INICIO</a>
          <a href="/#tienda" className="hover-scale">TIENDA</a>
          <a href="/manifiesto" className="hover-scale">MANIFIESTO</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
