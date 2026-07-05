"use client";

import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { getProductBySlug, type ProductSize } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";
import FadeIn from "@/components/ui/FadeIn";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function ProductPage({ params }: Props) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const [selectedSize, setSelectedSize] = useState<ProductSize>(
    product.sizes[1] ?? product.sizes[0]
  );
  const [activeImage, setActiveImage] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState<string | null>("notes");
  const [added, setAdded] = useState(false);
  const [selectedScent, setSelectedScent] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const isConcretePotCandle = product.type === "Concrete Pot Candle";
  const SCENTS = product.scents ?? [];

  const { addItem } = useCartStore();
  const images = [product.image, product.hoverImage];

  const handleAddToBag = () => {
    if (isConcretePotCandle && !selectedScent) return;
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleAccordion = (key: string) =>
    setAccordionOpen((prev) => (prev === key ? null : key));

  const ACCORDION_ITEMS = [
    ...(product.scentNotes ? [{
      key: "notes",
      label: "Scent Notes",
      content: (
        <div className="space-y-4 pt-2 pb-6">
          {(["top", "heart", "base"] as const).map((layer) => (
            <div key={layer} className="flex gap-8">
              <span className="text-[10px] font-500 tracking-[0.14em] uppercase text-[#B8B0A8] w-10 pt-0.5 flex-shrink-0">
                {layer}
              </span>
              <p className="text-[13px] font-300 text-black leading-relaxed">
                {product.scentNotes?.[layer].join(" · ")}
              </p>
            </div>
          ))}
        </div>
      ),
    }] : []),
    {
      key: "details",
      label: "Product Details",
      content: (
        <div className="pt-2 pb-6">
          <p className="text-[13px] font-300 text-[#6B635C] leading-relaxed">
            {product.story}
          </p>
        </div>
      ),
    },
    {
      key: "shipping",
      label: "Shipping & Returns",
      content: (
        <div className="pt-2 pb-6 space-y-3 text-[13px] font-300 text-[#6B635C] leading-relaxed">
          <p>Free shipping on orders over $120. Standard delivery 3–5 business days.</p>
          <p>Returns accepted within 30 days, unopened products only.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pb-32">

        {/* Mobile-only back link above image */}
        <div className="lg:hidden mb-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[12px] font-300 tracking-[0.1em] uppercase text-black hover:text-[#8A8075] transition-colors duration-200"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Image gallery */}
          <FadeIn direction="none">
            <div className="flex gap-4">
              {/* Main image */}
              <div className="relative flex-1 aspect-square overflow-hidden bg-[#F5EAE7]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[activeImage]}
                      alt={product.name}
                      fill
                      priority
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Badges */}
                <div className="absolute top-5 left-5 flex gap-2">
                  {product.isBestseller && (
                    <span className="bg-white text-black text-[8px] font-500 tracking-[0.1em] uppercase px-2.5 py-1">
                      Bestseller
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-black text-white text-[8px] font-500 tracking-[0.1em] uppercase px-2.5 py-1">
                      New
                    </span>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Product info */}
          <FadeIn direction="left" delay={0.1}>
            <div className="lg:sticky lg:top-32">

              {/* Back link */}
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-[12px] font-300 tracking-[0.1em] uppercase text-black hover:text-[#8A8075] transition-colors duration-200 mb-10"
              >
                <ArrowLeft size={12} strokeWidth={1.5} />
                Back to Shop
              </Link>

              {/* Name + price */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h1 className="text-[42px] lg:text-[52px] font-300 leading-none tracking-[-0.01em] text-black">
                  {product.name}
                </h1>
                <span className="text-[22px] font-300 text-black mt-2 flex-shrink-0">
                  ${selectedSize.price}
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-[14px] font-300 text-[#8A8075] mb-8 leading-snug">
                {product.subtitle}
              </p>

              {/* Description */}
              <p className="text-[15px] font-300 text-black leading-[1.75] mb-12">
                {product.description}
              </p>


              {/* Scent selector — Concrete Pot Candles only */}
              {isConcretePotCandle && (
                <div className="mb-10">
                  <p className="text-[10px] font-500 tracking-[0.16em] uppercase text-[#B8B0A8] mb-4">
                    Choose your scent
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SCENTS.map((scent) => (
                      <button
                        key={scent}
                        onClick={() => setSelectedScent(scent)}
                        className={`px-4 py-2.5 border text-[11px] font-400 tracking-[0.08em] transition-all duration-200 ${
                          selectedScent === scent
                            ? "border-black bg-black text-white"
                            : "border-[#E8E4DF] text-black hover:border-black"
                        }`}
                      >
                        {scent}
                      </button>
                    ))}
                  </div>
                  {!selectedScent && (
                    <p className="text-[11px] text-[#B8B0A8] mt-3 font-300">
                      Please select a scent to continue.
                    </p>
                  )}
                </div>
              )}

              {/* Add to Bag */}
              <motion.button
                onClick={handleAddToBag}
                whileTap={{ scale: 0.99 }}
                disabled={isConcretePotCandle && !selectedScent}
                className={`w-full py-5 text-[11px] font-500 tracking-[0.22em] uppercase transition-all duration-300 mb-12 ${
                  added
                    ? "bg-[#2C2C2C] text-white"
                    : isConcretePotCandle && !selectedScent
                    ? "bg-[#E8E4DF] text-[#B8B0A8] cursor-not-allowed"
                    : "bg-black text-white hover:bg-[#2C2C2C]"
                }`}
              >
                {added ? "Added to Bag ✓" : "Add to Bag"}
              </motion.button>

              {/* Accordion */}
              <div className="border-t border-[#E8E4DF]">
                {ACCORDION_ITEMS.map((item) => (
                  <div key={item.key} className="border-b border-[#E8E4DF]">
                    <button
                      onClick={() => toggleAccordion(item.key)}
                      aria-expanded={accordionOpen === item.key}
                      className="flex items-center justify-between w-full py-5 text-[12px] font-400 tracking-[0.1em] uppercase text-black hover:text-[#8A8075] transition-colors duration-200"
                    >
                      {item.label}
                      <motion.div
                        animate={{ rotate: accordionOpen === item.key ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={14} strokeWidth={1.5} className="text-[#B8B0A8]" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {accordionOpen === item.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          {item.content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
