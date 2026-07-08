"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/ui/FadeIn";

const STATS = [
  { value: "100%", label: "Customer satisfaction" },
  { value: "55h", label: "Average burn time" },
  { value: "12+", label: "Weeks of diffuser life" },
];

export default function BrandStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="craft"
      ref={ref}
      className="py-28 lg:py-40 bg-black text-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image column */}
          <FadeIn direction="right" className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <motion.div
                style={{ y: imageY }}
                className="absolute inset-[-8%] will-change-transform"
              >
                <Image
                  src="/hero-bg.jpg"
                  alt="Jaloux Du Vide candle and reed diffuser"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

            </div>
          </FadeIn>

          {/* Text column */}
          <div>
            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-300 leading-[1.1] mb-14 text-balance">
                Every candle is a
                <br />
                <span className="italic font-600">labour of love.</span>
              </h2>
              <p className="text-cream/60 font-300 text-lg leading-relaxed mb-8">
                We believe true luxury isn't loud. It's the quiet ritual of
                lighting a candle at the end of a long day, the diffuser
                humming softly in the corner, filling your space with warmth.
              </p>
              <p className="text-cream/60 font-300 leading-relaxed mb-8">
                Every piece we craft is made with intention â€” the finest
                ingredients, poured by hand. We don't just create fragrances;
                we create feelings. The comfort of coming home. The calm before
                sleep. The joy of a space that finally feels like you.
              </p>
              <p className="text-cream/50 font-300 leading-relaxed mb-16 italic">
                Your home deserves more than just a scent. It deserves a soul.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-3 gap-4 mt-14 pt-14 border-t border-cream/10">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-600 text-cream mb-1">{stat.value}</p>
                    <p className="text-lg font-300 text-cream/40 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
