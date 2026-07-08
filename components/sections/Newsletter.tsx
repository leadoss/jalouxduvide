"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-28 lg:py-36 bg-[#1A0D09] text-cream overflow-hidden">
      <div className="w-full flex flex-col items-center px-6 lg:px-12">
        <div className="w-full max-w-xl text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-300 leading-[1.1] mb-5">
              Stay in the loop
            </h2>
            <p className="text-cream/50 font-300 leading-relaxed mb-10">
              New arrivals, exclusive offers, and quiet notes from our studio â€” delivered to your inbox.
            </p>
          </FadeIn>

          <div className="w-full flex flex-col items-center">
            {submitted ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center">
                  <Check size={18} strokeWidth={1.5} className="text-cream" />
                </div>
                <p className="text-cream/70 font-300 text-lg">You&apos;re on the list. Welcome.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div
                  className={`flex items-center border transition-all duration-300 ${
                    focused ? "border-cream/50" : "border-cream/15"
                  }`}
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Your email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 bg-transparent text-cream placeholder:text-cream/25 text-lg font-300 px-5 py-4 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="mr-2 w-9 h-9 bg-cream text-black flex items-center justify-center hover:bg-cream/80 transition-colors duration-200 flex-shrink-0"
                  >
                    <ArrowRight size={15} strokeWidth={1.5} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
