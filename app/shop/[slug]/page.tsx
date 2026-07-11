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

  useEffect(() => {
    if (product.image === product.hoverImage) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, [product.image, product.hoverImage]);

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
          <p>Free delivery on orders over $60. Standard delivery 3–5 business days.</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24">

          {/* Image gallery */}
          <FadeIn direction="none">
            <div className="flex flex-col gap-4">
              {/* Main image */}
              <div className="relative aspect-square overflow-hidden bg-[#F5EAE7]">
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
                    <span className="bg-white text-black text-[8px] font-500 tracking-[0.1em] uppercase px-2.5 py-1 rounded-full">
                      Bestseller
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-black text-white text-[8px] font-500 tracking-[0.1em] uppercase px-2.5 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail dots — only show if two distinct images */}
              {product.image !== product.hoverImage && (
                <div className="flex gap-3 justify-center">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                        activeImage === i ? "bg-black scale-125" : "bg-[#D0CBC5]"
                      }`}
                      aria-label={`View image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </FadeIn>

          {/* Product info */}
          <FadeIn direction="left" delay={0.1}>
            <div className="lg:sticky lg:top-32 pt-10 lg:pt-0">

              {/* Back link */}
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-[12px] font-300 tracking-[0.1em] uppercase text-black hover:text-[#8A8075] transition-colors duration-200 mb-10"
              >
                <ArrowLeft size={12} strokeWidth={1.5} />
                Back to Shop
              </Link>

              {/* Name + price */}
              <div className="flex items-start justify-between gap-4" style={{ marginBottom: "12px" }}>
                <h1 className="text-[34px] lg:text-[52px] font-300 leading-[1.15] tracking-[-0.01em] text-black">
                  {product.name}
                </h1>
                <span className="text-[24px] font-300 text-black mt-1 flex-shrink-0">
                  ${selectedSize.price}
                </span>
              </div>

              {/* Volume — diffusers only */}
              {!isConcretePotCandle && (
                <p className="text-[18px] font-400 text-black" style={{ marginBottom: "32px" }}>
                  {selectedSize.volume}
                </p>
              )}

              {/* Description */}
              <p className="text-[17px] font-300 text-black leading-[1.9]" style={{ marginBottom: "52px" }}>
                {product.description}
              </p>

              {/* Free sticks perk — Diffusers only */}
              {product.type === "Diffuser" && (
                <div className="flex items-center gap-4 px-5 bg-[#F5F1EA] border border-[#E8E4DF]" style={{ paddingTop: "18px", paddingBottom: "18px", marginBottom: "44px" }}>
                  <span className="text-[18px]">🎁</span>
                  <p className="text-[15px] font-400 text-black leading-relaxed">
                    Includes <span className="font-600">4 free reed sticks</span> with every order
                  </p>
                </div>
              )}

              {/* Low stock warning */}
              {product.stock !== undefined && product.stock <= 3 && (
                <p className="text-[15px] font-500 text-red-600" style={{ marginBottom: "44px" }}>
                  ⚠ Only {product.stock} left in stock — order soon
                </p>
              )}

              {/* Scent selector — Concrete Pot Candles only */}
              {isConcretePotCandle && (
                <div style={{ marginBottom: "52px" }}>
                  <p className="text-[12px] font-500 tracking-[0.16em] uppercase text-[#B8B0A8]" style={{ marginBottom: "20px" }}>
                    Choose your scent
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {SCENTS.map((scent) => (
                      <button
                        key={scent}
                        onClick={() => setSelectedScent(scent)}
                        className={`px-6 py-3.5 rounded-full border text-[14px] font-400 tracking-[0.06em] transition-all duration-200 ${
                          selectedScent === scent
                            ? "border-black bg-black text-white"
                            : "border-black bg-white text-black hover:bg-black hover:text-white"
                        }`}
                      >
                        {scent}
                      </button>
                    ))}
                  </div>
                  {!selectedScent && (
                    <p className="text-[14px] text-[#B8B0A8] font-300" style={{ marginTop: "16px" }}>
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
                style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginBottom: "60px", paddingLeft: "64px", paddingRight: "64px", paddingTop: "20px", paddingBottom: "20px" }}
                className={`rounded-full text-[15px] font-500 tracking-[0.18em] uppercase transition-all duration-300 ${
                  added
                    ? "bg-[#2C2C2C] text-white"
                    : isConcretePotCandle && !selectedScent
                    ? "bg-[#E8E4DF] text-[#C4B8D8] cursor-not-allowed"
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
                      style={{ paddingTop: "28px", paddingBottom: "28px" }}
                      className="flex items-center justify-between w-full text-[14px] font-400 tracking-[0.1em] uppercase text-black hover:text-[#8A8075] transition-colors duration-200"
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
