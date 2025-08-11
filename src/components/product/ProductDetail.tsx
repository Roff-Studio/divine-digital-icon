import React, { useMemo, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus } from "lucide-react";

export type ProductDetailData = {
  name: string;
  price: string;
  categoryLabel: string;
  description: string;
  images: { src: string; alt: string }[];
  sizes?: string[];
  colors?: string[];
  specs?: { label: string; value: string }[];
  shipping?: string;
  promise?: string;
};

type Props = {
  product: ProductDetailData;
};

const Thumbnail: React.FC<{
  src: string;
  alt: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ src, alt, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`relative overflow-hidden rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
      active ? "border-primary" : "border-border hover:border-primary/60"
    }`}
    aria-label={alt}
  >
    <AspectRatio ratio={1}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </AspectRatio>
  </button>
);

const QuantitySelector: React.FC<{
  value: number;
  onChange: (v: number) => void;
}> = ({ value, onChange }) => {
  const dec = () => onChange(Math.max(1, value - 1));
  const inc = () => onChange(value + 1);
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" aria-label="Disminuir" onClick={dec}>
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        value={value}
        inputMode="numeric"
        onChange={(e) => {
          const n = parseInt(e.target.value.replace(/[^0-9]/g, ""), 10);
          onChange(Number.isFinite(n) && n > 0 ? n : 1);
        }}
        className="w-16 text-center"
        aria-label="Cantidad"
      />
      <Button variant="outline" size="icon" aria-label="Aumentar" onClick={inc}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

const ProductDetail: React.FC<Props> = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [size, setSize] = useState<string | undefined>();
  const [color, setColor] = useState<string | undefined>();
  const [qty, setQty] = useState(1);

  const mainImage = useMemo(() => product.images[activeIndex], [product.images, activeIndex]);

  return (
    <article className="container mx-auto py-12">
      {/* Visually hidden H1 for SEO, while keeping visual hierarchy per spec */}
      <h1 className="sr-only">{product.name}</h1>

      {/* Main two-column section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Gallery (slightly wider) */}
        <div className="lg:col-span-7 card-surface rounded-lg border p-4">
          <div className="rounded-md overflow-hidden">
            <AspectRatio ratio={4/5}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img src={mainImage.src} alt={mainImage.alt} className="h-full w-full object-cover" />
            </AspectRatio>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.slice(0, 4).map((img, i) => (
              <Thumbnail
                key={i}
                src={img.src}
                alt={img.alt}
                active={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Right: Info & Purchase */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <p className="font-monoTech uppercase tracking-widest text-sm text-muted-foreground">
            {product.categoryLabel}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">{product.name}</h2>
          <p className="font-monoTech text-lg">{product.price}</p>
          <p className="text-muted-foreground font-monoTech leading-relaxed">{product.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block mb-2 font-monoTech text-sm tracking-wider uppercase">Talla</label>
                <Select onValueChange={setSize} value={size}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block mb-2 font-monoTech text-sm tracking-wider uppercase">Color</label>
                <Select onValueChange={setColor} value={color}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.colors.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="flex items-end gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-monoTech text-sm tracking-wider uppercase">Cantidad</label>
              <QuantitySelector value={qty} onChange={setQty} />
            </div>
          </div>

          <div>
            <Button className="w-full uppercase font-monoTech tracking-widest py-6" size="lg">
              AÑADIR AL CARRO
            </Button>
          </div>
        </div>
      </section>

      {/* Details Tabs */}
      <section className="mt-16">
        <Tabs defaultValue="atributos" className="w-full">
          <TabsList className="w-full justify-start gap-6 bg-transparent p-0 border-b">
            {[
              { id: "atributos", label: "Atributos" },
              { id: "envio", label: "Envío y Devoluciones" },
              { id: "promesa", label: "Nuestra Promesa" },
            ].map((t) => (
              <TabsTrigger
                key={t.id}
                value={t.id}
                className="rounded-none bg-transparent px-0 data-[state=active]:shadow-none data-[state=active]:text-foreground border-b-2 border-transparent data-[state=active]:border-secondary"
              >
                <span className="font-monoTech tracking-wider uppercase text-sm">{t.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="atributos" className="pt-6">
            {product.specs && product.specs.length > 0 ? (
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {product.specs.map((s, i) => (
                  <div key={i}>
                    <dt className="font-monoTech text-muted-foreground uppercase tracking-widest text-xs">{s.label}</dt>
                    <dd className="font-monoTech mt-1">{s.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="text-muted-foreground font-monoTech">Sin atributos disponibles.</p>
            )}
          </TabsContent>

          <TabsContent value="envio" className="pt-6">
            <p className="text-muted-foreground font-monoTech leading-relaxed whitespace-pre-line">
              {product.shipping ||
                "Envíos en 48-72h. Devoluciones aceptadas dentro de 30 días en estado original."}
            </p>
          </TabsContent>

          <TabsContent value="promesa" className="pt-6">
            <p className="text-muted-foreground font-monoTech leading-relaxed">
              {product.promise ||
                "Cada artefacto de TheIglesia es más que un objeto. Es una declaración. Forjado con materiales de la más alta calidad y diseñado con un propósito, está hecho para perdurar y evolucionar contigo."}
            </p>
          </TabsContent>
        </Tabs>
      </section>
    </article>
  );
};

export default ProductDetail;
