"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useCartStore } from "@/lib/cart-store";

type Field = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  street: string;
  building: string;
  payment: "cash" | "whish" | "";
};

const EMPTY: Field = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  city: "",
  street: "",
  building: "",
  payment: "",
};

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCartStore();
  const sub = subtotal();

  const [fields, setFields] = useState<Field>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Field, string>>>({});
  const [placed, setPlaced] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);

  if (items.length === 0 && !placed) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-5 px-6">
        <p className="text-[15px] font-300 text-[#8A8075]">Your cart is empty.</p>
        <Link href="/shop" className="text-[13px] font-400 tracking-[0.14em] uppercase border-b border-black pb-0.5 hover:opacity-60 transition-opacity">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const set = (k: keyof Field, v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Field, string>> = {};
    if (!fields.firstName.trim()) e.firstName = "Required";
    if (!fields.lastName.trim()) e.lastName = "Required";
    if (!fields.phone.trim()) e.phone = "Required";
    if (!fields.email.trim()) e.email = "Required";
    if (!fields.city.trim()) e.city = "Required";
    if (!fields.street.trim()) e.street = "Required";
    if (!fields.building.trim()) e.building = "Required";
    if (!fields.payment) e.payment = "Please select a payment method";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const total = sub >= 60 ? sub : sub + 6;
    setOrderTotal(total);
    clearCart();
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-7 px-6 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-16 rounded-full bg-black flex items-center justify-center"
        >
          <Check size={22} strokeWidth={2} className="text-white" />
        </motion.div>
        <div>
          <h1 className="text-[26px] font-300 text-black mb-3">Order Confirmed</h1>
          {fields.payment === "whish" ? (
            <div className="mt-2 bg-[#F5F3F1] px-8 py-6 text-center max-w-[340px] mx-auto">
              <p className="text-[12px] font-500 tracking-[0.18em] uppercase text-[#8A8075] mb-4">
                Complete your payment via Whish
              </p>
              <p className="text-[13px] font-300 text-[#8A8075] mb-2">Send</p>
              <p className="text-[34px] font-300 text-black mb-2">${orderTotal.toFixed(2)}</p>
              <p className="text-[13px] font-300 text-[#8A8075] mb-1">to Whish number</p>
              <p className="text-[26px] font-500 text-black tracking-[0.06em]">03 240 664</p>
              <p className="text-[11px] font-300 text-[#B0A8A0] mt-4 leading-relaxed">
                Your order will be confirmed once payment is received.
              </p>
            </div>
          ) : (
            <p className="text-[14px] font-300 text-[#8A8075] leading-relaxed max-w-[300px] mx-auto">
              Your order has been received. We'll contact you to confirm delivery. Thank you!
            </p>
          )}
        </div>
        <Link href="/shop" className="mt-2 text-[12px] font-400 tracking-[0.16em] uppercase border-b border-black pb-0.5 hover:opacity-60 transition-opacity">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const inputCls = (field: keyof Field) =>
    `w-full bg-[#F5F3F1] h-[50px] px-4 text-[13px] font-300 text-black placeholder:text-[#C0BAB4] outline-none rounded-none transition-all duration-200 focus:bg-[#EEEAE6] ${
      errors[field] ? "ring-1 ring-inset ring-red-300" : ""
    }`;

  return (
    <div className="min-h-screen bg-white pt-32 pb-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-16">

        {/* Back */}
        <Link href="/shop" className="inline-flex items-center gap-2 text-[11px] font-300 tracking-[0.12em] uppercase text-[#8A8075] hover:text-black transition-colors duration-200 mb-10">
          <ArrowLeft size={10} strokeWidth={1.5} />
          Back to Shop
        </Link>

        <h1 className="text-[30px] lg:text-[40px] font-300 text-black tracking-[-0.01em] mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24">

          {/* ── FORM ── */}
          <form onSubmit={handleSubmit} noValidate>

            {/* Contact */}
            <p className="text-[10px] font-500 tracking-[0.22em] uppercase text-[#C0BAB4] mb-4">Contact</p>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <input type="text" placeholder="First name" value={fields.firstName} onChange={e => set("firstName", e.target.value)} className={inputCls("firstName")} />
                {errors.firstName && <p className="text-[11px] text-red-400 mt-1 pl-1">{errors.firstName}</p>}
              </div>
              <div>
                <input type="text" placeholder="Last name" value={fields.lastName} onChange={e => set("lastName", e.target.value)} className={inputCls("lastName")} />
                {errors.lastName && <p className="text-[11px] text-red-400 mt-1 pl-1">{errors.lastName}</p>}
              </div>
            </div>
            <div className="mb-2">
              <input type="tel" placeholder="Phone number" value={fields.phone} onChange={e => set("phone", e.target.value)} className={inputCls("phone")} />
              {errors.phone && <p className="text-[11px] text-red-400 mt-1 pl-1">{errors.phone}</p>}
            </div>
            <div className="mb-10">
              <input type="email" placeholder="Email address" value={fields.email} onChange={e => set("email", e.target.value)} className={inputCls("email")} />
              {errors.email && <p className="text-[11px] text-red-400 mt-1 pl-1">{errors.email}</p>}
            </div>

            {/* Address */}
            <p className="text-[10px] font-500 tracking-[0.22em] uppercase text-[#C0BAB4] mb-4">Delivery Address</p>
            <div className="mb-2">
              <input type="text" placeholder="City / Region" value={fields.city} onChange={e => set("city", e.target.value)} className={inputCls("city")} />
              {errors.city && <p className="text-[11px] text-red-400 mt-1 pl-1">{errors.city}</p>}
            </div>
            <div className="mb-2">
              <input type="text" placeholder="Street" value={fields.street} onChange={e => set("street", e.target.value)} className={inputCls("street")} />
              {errors.street && <p className="text-[11px] text-red-400 mt-1 pl-1">{errors.street}</p>}
            </div>
            <div className="mb-10">
              <input type="text" placeholder="Building / Apartment" value={fields.building} onChange={e => set("building", e.target.value)} className={inputCls("building")} />
              {errors.building && <p className="text-[11px] text-red-400 mt-1 pl-1">{errors.building}</p>}
            </div>

            {/* Payment */}
            <p className="text-[10px] font-500 tracking-[0.22em] uppercase text-[#C0BAB4] mb-4">Payment Method</p>
            <div className="grid grid-cols-2 gap-2 mb-10">
              {[
                { value: "cash", label: "Cash on Delivery", sub: "Pay when order arrives" },
                { value: "whish", label: "Whish", sub: "Whish mobile payment" },
              ].map((opt) => {
                const active = fields.payment === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => set("payment", opt.value)}
                    className={`flex flex-col items-start px-4 py-4 text-left transition-all duration-200 ${
                      active ? "bg-black" : "bg-[#F5F3F1] hover:bg-[#EEEAE6]"
                    }`}
                  >
                    <span className={`text-[13px] font-400 mb-1 ${active ? "text-white" : "text-black"}`}>{opt.label}</span>
                    <span className={`text-[11px] font-300 ${active ? "text-white/50" : "text-[#B0A8A0]"}`}>{opt.sub}</span>
                  </button>
                );
              })}
            </div>
            {errors.payment && <p className="text-[11px] text-red-400 -mt-8 mb-8 pl-1">{errors.payment}</p>}

            <motion.button
              type="submit"
              whileTap={{ scale: 0.99 }}
              className="w-full h-[54px] bg-black text-white text-[12px] font-500 tracking-[0.22em] uppercase hover:bg-[#1A1A1A] transition-colors duration-300"
            >
              Place Order
            </motion.button>

          </form>

          {/* ── ORDER SUMMARY ── */}
          <aside>
            <p className="text-[10px] font-500 tracking-[0.22em] uppercase text-[#C0BAB4] mb-6">Order Summary</p>

            <ul className="flex flex-col gap-5 mb-7">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <div className="relative w-[58px] h-[58px] flex-shrink-0 overflow-hidden bg-[#F5F3F1]">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover" sizes="58px" />
                    <span className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full bg-black text-white text-[9px] font-500 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 flex justify-between items-start gap-2 min-w-0">
                    <div className="min-w-0">
                      <p className="text-[13px] font-400 text-black truncate">{item.product.name}</p>
                      {item.size.volume && (
                        <p className="text-[11px] font-300 text-[#B0A8A0] mt-0.5">{item.size.volume}</p>
                      )}
                    </div>
                    <p className="text-[13px] font-400 text-black flex-shrink-0">${(item.size.price * item.quantity).toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-3 pt-5" style={{ borderTop: "1px solid #EEEAE6" }}>
              <div className="flex justify-between text-[12px] font-300 text-[#8A8075]">
                <span>Subtotal</span>
                <span>${sub.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[12px] font-300 text-[#8A8075]">
                <span>Delivery</span>
                <span>{sub >= 60 ? <span className="text-black font-400">Free</span> : "$6.00"}</span>
              </div>
              <div className="flex justify-between text-[14px] font-500 text-black pt-3" style={{ borderTop: "1px solid #EEEAE6" }}>
                <span>Total</span>
                <span>${(sub >= 60 ? sub : sub + 6).toFixed(2)}</span>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
