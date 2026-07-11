"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore, FREE_SHIPPING_THRESHOLD } from "@/lib/cart-store";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } =
    useCartStore();
  const sub = subtotal();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - sub);
  const progressPct = Math.min(100, (sub / FREE_SHIPPING_THRESHOLD) * 100);
  const drawerRef = useRef<HTMLDivElement>(null);
  const totalQty = items.reduce((s, i) => s + i.quantity, 0);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeCart(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeCart]);

  /* Prevent body scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/40"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Cart"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[400px] bg-white flex flex-col shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <h2 className="text-[16px] font-600 text-black tracking-normal">
                Cart {totalQty > 0 && <span className="text-[#9333EA] font-400">({totalQty})</span>}
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="p-1 text-[#9333EA] hover:text-black transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Free shipping bar */}
            {sub > 0 && (
              <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                <p className="text-[13px] text-[#7C3AED] mb-2">
                  {remaining === 0 ? (
                    <span className="font-500 text-black">🎉 You've unlocked free delivery!</span>
                  ) : (
                    <>You're <span className="font-500 text-black">${remaining.toFixed(0)}</span> away from free delivery</>
                  )}
                </p>
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-black rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 px-6 text-center">
                  <p className="text-[16px] text-[#9333EA]">Your cart is empty</p>
                  <button
                    onClick={closeCart}
                    className="text-[14px] font-500 text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                <ul>
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4 px-5 py-5 border-b border-gray-100">
                      {/* Image */}
                      <div className="relative w-[90px] h-[90px] bg-gray-50 flex-shrink-0 rounded overflow-hidden">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="90px"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="text-[14px] font-500 text-black leading-snug truncate">
                              {item.product.name}
                            </p>
                            <p className="text-[13px] text-[#9333EA] mt-0.5">
                              {item.size.volume}
                            </p>
                          </div>
                          <p className="text-[14px] font-500 text-black flex-shrink-0">
                            ${(item.size.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity stepper */}
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease"
                              className="w-8 h-8 flex items-center justify-center text-[#7C3AED] hover:text-black transition-colors"
                            >
                              <Minus size={12} strokeWidth={2} />
                            </button>
                            <span className="w-8 text-center text-[14px] font-500 text-black">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase"
                              className="w-8 h-8 flex items-center justify-center text-[#7C3AED] hover:text-black transition-colors"
                            >
                              <Plus size={12} strokeWidth={2} />
                            </button>
                          </div>

                          {/* Remove */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[12px] text-[#9333EA] hover:text-black transition-colors underline underline-offset-2"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 bg-white px-5 py-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-[#7C3AED]">Subtotal</span>
                  <span className="text-[16px] font-600 text-black">${sub.toFixed(2)}</span>
                </div>
                <p className="text-[12px] text-[#9333EA]">
                  Taxes and shipping calculated at checkout.
                </p>
                <Link
                  href="/checkout"
                  className="block mx-auto w-fit px-12 text-center bg-black text-white text-[14px] font-500 tracking-[0.06em] uppercase py-4 rounded-full hover:bg-gray-900 transition-colors duration-200"
                >
                  Check out
                </Link>
                <button
                  onClick={closeCart}
                  className="block w-full text-center text-[13px] text-[#9333EA] hover:text-black transition-colors duration-200 py-1"
                >
                  Continue shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
