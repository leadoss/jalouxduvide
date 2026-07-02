"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore, FREE_SHIPPING_THRESHOLD } from "@/lib/cart-store";
import { products } from "@/lib/products";

const UPSELL_SLUGS = ["santal-dusk", "neroli-soleil"];

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } =
    useCartStore();
  const sub = subtotal();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - sub);
  const progressPct = Math.min(100, (sub / FREE_SHIPPING_THRESHOLD) * 100);
  const drawerRef = useRef<HTMLDivElement>(null);

  /* Focus trap */
  useEffect(() => {
    if (!isOpen) return;
    const el = drawerRef.current;
    if (!el) return;
    const focusable = el.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    el.addEventListener("keydown", trap);
    return () => el.removeEventListener("keydown", trap);
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeCart]);

  /* Prevent body scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const upsellProducts = products
    .filter((p) => UPSELL_SLUGS.includes(p.slug) && !items.some((i) => i.product.id === p.id))
    .slice(0, 2);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-cream flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-lighter">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <h2 className="text-sm font-500 tracking-[0.1em] uppercase">
                  Your Bag{" "}
                  {items.length > 0 && (
                    <span className="text-stone font-300">
                      ({items.reduce((s, i) => s + i.quantity, 0)})
                    </span>
                  )}
                </h2>
              </div>
              <button
                onClick={closeCart}
                aria-label="Close bag"
                className="p-1.5 text-charcoal hover:text-black transition-colors duration-200"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Free shipping bar */}
            {sub > 0 && (
              <div className="px-6 py-4 bg-cream-dark">
                <p className="text-xs font-300 text-charcoal mb-2">
                  {remaining === 0 ? (
                    <span className="font-500 text-navy">
                      You've unlocked free shipping!
                    </span>
                  ) : (
                    <>
                      You're{" "}
                      <span className="font-500">${remaining.toFixed(0)}</span>{" "}
                      away from free shipping
                    </>
                  )}
                </p>
                <div className="h-0.5 w-full bg-stone-lighter rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-navy rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                /* Empty state */
                <div className="flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-cream-dark flex items-center justify-center">
                    <ShoppingBag size={24} strokeWidth={1} className="text-stone" />
                  </div>
                  <div>
                    <p className="text-base font-300 text-charcoal mb-1">
                      Your bag is empty
                    </p>
                    <p className="text-sm font-300 text-stone">
                      Add something beautiful to begin.
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="text-xs font-500 tracking-[0.1em] uppercase text-navy border-b border-navy pb-0.5 hover:opacity-70 transition-opacity duration-200"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div>
                  {/* Line items */}
                  <ul className="divide-y divide-stone-lighter">
                    {items.map((item) => (
                      <li key={item.id} className="flex gap-4 px-6 py-5">
                        {/* Thumbnail */}
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-cream-dark flex-shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-sm font-500 text-black leading-tight">
                                {item.product.name}
                              </p>
                              <p className="text-xs font-300 text-stone mt-0.5">
                                {item.size.label} · {item.size.volume}
                              </p>
                            </div>
                            <p className="text-sm font-500 text-black flex-shrink-0">
                              ${(item.size.price * item.quantity).toFixed(2)}
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-3">
                            {/* Quantity stepper */}
                            <div className="flex items-center border border-stone-lighter rounded-full">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                aria-label="Decrease quantity"
                                className="w-7 h-7 flex items-center justify-center text-charcoal hover:text-black transition-colors duration-200"
                              >
                                <Minus size={12} strokeWidth={2} />
                              </button>
                              <span className="w-6 text-center text-xs font-500">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                aria-label="Increase quantity"
                                className="w-7 h-7 flex items-center justify-center text-charcoal hover:text-black transition-colors duration-200"
                              >
                                <Plus size={12} strokeWidth={2} />
                              </button>
                            </div>

                            {/* Remove */}
                            <button
                              onClick={() => removeItem(item.id)}
                              aria-label={`Remove ${item.product.name}`}
                              className="text-stone hover:text-black transition-colors duration-200 p-1"
                            >
                              <Trash2 size={14} strokeWidth={1.5} />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Upsell */}
                  {upsellProducts.length > 0 && (
                    <div className="px-6 py-5 border-t border-stone-lighter">
                      <p className="text-xs font-500 tracking-[0.1em] uppercase text-stone mb-4">
                        You may also like
                      </p>
                      <div className="flex gap-3">
                        {upsellProducts.map((p) => (
                          <button
                            key={p.id}
                            onClick={() => {
                              useCartStore.getState().addItem(p, p.sizes[1] ?? p.sizes[0]);
                            }}
                            className="flex-1 flex flex-col gap-2 group"
                          >
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-cream-dark img-zoom">
                              <Image
                                src={p.image}
                                alt={p.name}
                                fill
                                className="object-cover"
                                sizes="120px"
                              />
                            </div>
                            <div className="text-left">
                              <p className="text-xs font-500 text-black leading-tight">
                                {p.name}
                              </p>
                              <p className="text-xs font-300 text-stone">
                                ${p.sizes[0].price}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-stone-lighter px-6 py-5 space-y-4 bg-cream">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-300 text-charcoal">Subtotal</span>
                  <span className="text-base font-600 text-black">
                    ${sub.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs font-300 text-stone -mt-1">
                  Taxes and shipping calculated at checkout.
                </p>

                {/* Checkout button */}
                <Link
                  href="/checkout"
                  className="block w-full text-center bg-black text-cream text-sm font-500 tracking-[0.1em] uppercase py-4 rounded-full hover:bg-navy transition-colors duration-300"
                >
                  Checkout
                </Link>

                {/* Continue shopping */}
                <button
                  onClick={closeCart}
                  className="block w-full text-center text-xs font-400 tracking-[0.08em] text-charcoal hover:text-black transition-colors duration-200 underline-reveal py-1"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
