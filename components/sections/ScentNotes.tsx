"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

type Note = {
  id: string;
  layer: "Top" | "Heart" | "Base";
  name: string;
  origin: string;
  description: string;
  color: string;
};

const NOTES: Note[] = [
  {
    id: "bergamot",
    layer: "Top",
    name: "Bergamot",
    origin: "Calabria, Italy",
    description: "A sparkling citrus opening with honeyed floral undertones. The backbone of classic fragrance, beloved for its ability to bridge brightness and warmth.",
    color: "#D4B896",
  },
  {
    id: "neroli",
    layer: "Top",
    name: "NÃ©roli",
    origin: "Morocco",
    description: "Distilled from the blossom of the bitter orange tree. Delicate, slightly honeyed, and impossibly elegant.",
    color: "#C8A882",
  },
  {
    id: "sandalwood",
    layer: "Heart",
    name: "Sandalwood",
    origin: "Mysore, India",
    description: "Creamy, soft, and endlessly complex. Rich, milky, and deeply grounding. One of the world's most treasured fragrance ingredients.",
    color: "#A87B5A",
  },
  {
    id: "rose",
    layer: "Heart",
    name: "Damask Rose",
    origin: "Bulgaria",
    description: "The quintessential floral heart. Carrying hundreds of individual aromatic molecules, creating a richness no imitation can replicate.",
    color: "#C9897A",
  },
  {
    id: "amber",
    layer: "Base",
    name: "Warm Amber",
    origin: "Blended",
    description: "A smooth, resinous warmth that anchors a fragrance and dries down beautifully. Grounding every composition with quiet depth.",
    color: "#8A6040",
  },
  {
    id: "oud",
    layer: "Base",
    name: "Agarwood Oud",
    origin: "Laos",
    description: "The most prized ingredient in perfumery. Rich, dark, smoky, and intoxicating. A luxurious depth note that lingers for hours.",
    color: "#5A3E28",
  },
];

const LAYER_ORDER: Note["layer"][] = ["Top", "Heart", "Base"];

export default function ScentNotes() {
  const [active, setActive] = useState<Note | null>(null);

  return (
    <section
      id="ingredients"
      className="py-28 lg:py-40 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: text */}
          <div>
            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-300 leading-[1.1] mb-6 text-balance">
                Ingredients
                <br />
                <span className="italic font-600">worth knowing.</span>
              </h2>
              <p className="text-[#9333EA] font-300 text-lg leading-relaxed mb-4">
                The story of a fragrance is told by its ingredients.
                Tap a note below to discover its origin and character.
              </p>
            </FadeIn>

            {/* Active note detail */}
            <AnimatePresence mode="wait">
              {active !== null ? (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-10 p-7 border border-[#E8E4DF] bg-[#FAF8F5]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-7 h-7 rounded-full flex-shrink-0"
                      style={{ backgroundColor: active.color }}
                    />
                    <div>
                      <p className="text-lg font-500">{active.name}</p>
                      <p className="text-lg font-300 text-[#9333EA]">{active.origin}</p>
                    </div>
                    <span className="ml-auto text-[16px] font-400 tracking-[0.1em] uppercase px-3 py-1 border border-[#E8E4DF] text-[#9333EA]">
                      {active.layer} Note
                    </span>
                  </div>
                  <p className="text-lg font-300 text-[#7C3AED] leading-relaxed">
                    {active.description}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Right: notes */}
          <FadeIn direction="left" delay={0.1}>
            <div className="flex flex-col gap-3">
              {NOTES.map((note) => (
                <motion.button
                  key={note.id}
                  onMouseEnter={() => setActive(note)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(active?.id === note.id ? null : note)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`flex items-center gap-4 w-full px-6 py-5 border transition-all duration-200 text-left ${
                    active?.id === note.id
                      ? "border-black bg-black text-cream"
                      : "border-[#E8E4DF] bg-white text-[#7C3AED] hover:border-[#C4BDB6]"
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: note.color }}
                  />
                  <span className="text-lg font-300 flex-1">{note.name}</span>
                  <span className="text-lg font-300 opacity-40">
                    {note.origin.split(",")[0]}
                  </span>
                </motion.button>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
