import React from "react";
import Header from "@/components/layout/Header";
import SEOHead from "@/components/SEOHead";
import ProductDetail, { ProductDetailData } from "@/components/product/ProductDetail";

import heroImg from "@/assets/hero-satin-crystal.jpg";
import luxPortrait from "@/assets/lux-profanum-portrait.jpg";

const demoProduct: ProductDetailData = {
  name: "Rosario Neón — Serie I",
  price: "$199.00",
  categoryLabel: "ACCESORIO // EDICIÓN LIMITADA",
  description:
    "Un artefacto de intención. Ensamblado con precisión y terminado con acentos de neón para acompañarte en tus rituales diarios.",
  images: [
    { src: heroImg, alt: "Rosario Neón — vista principal" },
    { src: luxPortrait, alt: "Detalle del Rosario — textura" },
    { src: heroImg, alt: "Rosario Neón — vista alternativa" },
    { src: luxPortrait, alt: "Rosario Neón — empaque" },
  ],
  sizes: ["S", "M", "L", "XL"],
  colors: ["Negro", "Cromo", "Magenta"],
  specs: [
    { label: "Composición", value: "Acero quirúrgico 316L, inserciones de polímero neón" },
    { label: "Acabado", value: "Pulido espejo con recubrimiento anti-huella" },
    { label: "Origen", value: "Diseñado en el Laboratorio, ensamblado en la Tierra" },
  ],
  shipping:
    "Procesamos pedidos en 24-48h. Envíos estándar 3-5 días. Devoluciones sin complicaciones dentro de 30 días en estado original.",
  promise:
    "Cada artefacto de TheIglesia está construido para durar. Materiales seleccionados, intención en cada detalle.",
};

const ProductDetailPage: React.FC = () => {
  return (
    <div>
      <SEOHead
        title={`${demoProduct.name} — TheIglesia`}
        description={`${demoProduct.name}. ${demoProduct.price}. Accesorio de edición limitada.`}
        canonical="/producto-demo"
      />
      <Header />
      <main className="pt-20">
        <ProductDetail product={demoProduct} />
      </main>
    </div>
  );
};

export default ProductDetailPage;
