"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1636714507452-48716cfa1818?w=1800&q=85"
          alt="Jaloux Du Vide luxury candle and reed diffuser"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/5" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full"
      >
        <div className="max-w-2xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-cream/60 text-lg font-300 tracking-[0.2em] uppercase mb-6"
          >
            Luxury Home Fragrance
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-cream font-300 leading-[1.05] mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            Scent is
            <br />
            <em className="italic not-italic font-600" style={{ fontStyle: "italic" }}>memory</em>
            <br />
            distilled.
          </motion.h1>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute right-6 lg:right-12 bottom-0 flex flex-col items-center gap-3"
        >
          <div className="h-14 w-px bg-gradient-to-b from-cream/0 to-cream/40" />
          <span className="text-cream/40 text-[16px] tracking-[0.2em] uppercase rotate-90 origin-center translate-y-6">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
