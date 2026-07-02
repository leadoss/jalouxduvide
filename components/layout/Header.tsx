"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Shop All", href: "/shop" },
  { label: "Diffusers", href: "/shop?collection=Diffusers" },
  { label: "Concrete Candles", href: "/shop?collection=Concrete Pot Candles" },
  { label: "Refills", href: "/shop?collection=Concrete Candle Refills" },
  { label: "Soy Candles", href: "/shop?collection=Soy Wax Candles" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { openCart, totalItems } = useCartStore();
  const count = mounted ? totalItems() : 0;

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <motion.div
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Announcement bar */}
        <div
          className="bg-[#1A0D09] text-white/85 text-[10px] font-300 tracking-[0.28em] uppercase text-center"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          Free Shipping on Orders Over $120
        </div>

        {/* Nav bar */}
        <header className="bg-white border-b border-[#E8E4DF]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[60px] lg:h-[68px]">

              {/* Left: desktop nav / mobile hamburger */}
              <div>
                <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[11px] font-300 tracking-[0.14em] uppercase text-[#2A2A2A] hover:text-black transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <button
                  className="lg:hidden p-2 -ml-2 text-black"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Center: logo */}
              <Link href="/" aria-label="Jaloux Du Vide home" className="flex justify-center px-4">
                <Logo size={34} className="text-black" />
              </Link>

              {/* Right: utilities */}
              <div className="flex items-center justify-end gap-4">
                <button aria-label="Search" className="p-2 text-black hover:opacity-60 transition-opacity duration-200">
                  <Search size={18} strokeWidth={1.5} />
                </button>
                <button
                  onClick={openCart}
                  aria-label={`Open bag, ${count} item${count !== 1 ? "s" : ""}`}
                  className="relative p-2 text-black hover:opacity-60 transition-opacity duration-200"
                >
                  <ShoppingBag size={18} strokeWidth={1.5} />
                  {count > 0 && (
                    <motion.span
                      key={count}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-navy text-cream text-[9px] font-500 flex items-center justify-center"
                    >
                      {count}
                    </motion.span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>
      </motion.div>

      {/* Mobile drawer — slides from left */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 bottom-0 z-[60] w-72 bg-white flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-[#E8E4DF]">
                <span className="text-[10px] font-500 tracking-[0.24em] uppercase">Menu</span>
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2">
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex-1 flex flex-col px-6 py-8 gap-5">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-xl font-300 text-black hover:text-[#8A8075] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="px-6 pb-8 border-t border-[#E8E4DF] pt-6 flex gap-4">
                <button aria-label="Search" className="p-2 text-black">
                  <Search size={18} strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
