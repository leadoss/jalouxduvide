"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { COLLECTIONS } from "@/lib/products";

export default function FeaturedCollections() {
  return (
    <section className="py-28 lg:py-36 bg-cream-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl font-300 leading-tight text-balance">
              Our Collections
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} direction="left">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-lg font-500 tracking-[0.12em] uppercase text-navy underline-reveal"
            >
              View All <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {COLLECTIONS.map((col, i) => (
            <FadeIn key={col.id} delay={i * 0.1}>
              <Link href={col.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl img-zoom mb-5">
                  <Image
                    src={col.image}
                    alt={col.label}
                    fill
                    priority={i === 0}
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Bottom badge */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="text-cream text-xl font-500">{col.label}</p>
                      <p className="text-cream/60 text-lg font-300 mt-1">
                        {col.count} products
                      </p>
                    </div>
                    <motion.div
                      className="w-10 h-10 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center border border-cream/30 group-hover:bg-cream group-hover:border-cream transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                        className="text-cream group-hover:text-black transition-colors duration-300"
                      />
                    </motion.div>
                  </div>
                </div>

              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
