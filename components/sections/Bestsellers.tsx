"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { getBestsellers } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";

export default function Bestsellers() {
  const trackRef = useRef<HTMLDivElement>(null);
  const bestsellers = getBestsellers();
  const addItem = useCartStore((s) => s.addItem);

  return (
    <section className="py-28 lg:py-36 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl font-300 leading-tight">
              Bestsellers
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} direction="left">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-[13px] font-400 tracking-[0.14em] uppercase text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity duration-200"
            >
              All Products <ArrowRight size={12} strokeWidth={1.5} />
            </Link>
          </FadeIn>
        </div>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 lg:-mx-12 px-6 lg:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {bestsellers.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
            >
              <div className="group">
                {/* Image */}
                <Link href={`/shop/${product.slug}`} className="block">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream-dark mb-5 img-zoom">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                    {/* Hover image */}
                    <Image
                      src={product.hoverImage}
                      alt={`${product.name} — alternate view`}
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      sizes="320px"
                    />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.isBestseller && (
                        <span className="bg-white text-black text-[10px] font-500 tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
                          Bestseller
                        </span>
                      )}
                      {product.isNew && (
                        <span className="bg-black text-white text-[10px] font-500 tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>

                    {/* Quick add */}
                    <motion.button
                      onClick={() => addItem(product, product.sizes[1] ?? product.sizes[0])}
                      aria-label={`Quick add ${product.name} to bag`}
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ scale: 1.05 }}
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-cream flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-navy hover:text-cream"
                    >
                      <Plus size={16} strokeWidth={2} />
                    </motion.button>
                  </div>
                </Link>

                {/* Text */}
                <div className="flex items-start justify-between mt-4">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="block text-[14px] font-400 text-black hover:text-[#555] transition-colors duration-200 leading-snug"
                  >
                    {product.name}
                  </Link>
                  <p className="text-[14px] font-400 text-black ml-4 flex-shrink-0">
                    ${product.sizes[0].price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
