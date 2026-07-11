"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

type Field = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  street: string;
  building: string;
  payment: "cash" | "whish" | "";
};

const EMPTY: Field = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  street: "",
  building: "",
  payment: "",
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCartStore();
  const sub = subtotal();

  const [fields, setFields] = useState<Field>(EMPTY);
  const [errors, setErrors] = useState<Partial<Field>>({});
  const [placed, setPlaced] = useState(false);

  if (items.length === 0 && !placed) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-6 pt-32">
        <p className="text-[17px] font-300 text-black">Your cart is empty.</p>
        <Link
          href="/shop"
          className="text-[14px] font-400 tracking-[0.12em] uppercase border-b border-black pb-0.5"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const set = (k: keyof Field, v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = () => {
    const e: Partial<Field> = {};
    if (!fields.firstName.trim()) e.firstName = "Required";
    if (!fields.lastName.trim()) e.lastName = "Required";
    if (!fields.phone.trim()) e.phone = "Required";
    if (!fields.email.trim()) e.email = "Required";
    if (!fields.address.trim()) e.address = "Required";
    if (!fields.street.trim()) e.street = "Required";
    if (!fields.building.trim()) e.building = "Required";
    if (!fields.payment) e.payment = "Please select a payment method";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    clearCart();
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-6 text-center">
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
          <Check size={24} strokeWidth={2} className="text-white" />
        </div>
        <h1 className="text-[28px] font-300 text-black">Order Placed</h1>
        <p className="text-[15px] font-300 text-[#6B6B6B] max-w-sm leading-relaxed">
          {fields.payment === "whish"
            ? "We'll send you a Whish payment request shortly. Thank you for your order!"
            : "Your order has been received. We'll contact you to confirm delivery. Thank you!"}
        </p>
        <Link
          href="/shop"
          className="mt-4 text-[14px] font-400 tracking-[0.12em] uppercase border-b border-black pb-0.5"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const inputClass = (field: keyof Field) =>
    `w-full border px-4 py-3 text-[14px] font-300 text-black placeholder:text-[#B0B0B0] outline-none transition-colors duration-200 focus:border-black ${
      errors[field] ? "border-red-400" : "border-[#E0DBDB]"
    }`;

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Back */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-[12px] font-300 tracking-[0.1em] uppercase text-black hover:text-[#8A8075] transition-colors duration-200 mb-10"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back to Shop
        </Link>

        <h1 className="text-[32px] lg:text-[44px] font-300 text-black mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>

            {/* Contact */}
            <section className="mb-10">
              <h2 className="text-[11px] font-500 tracking-[0.18em] uppercase text-[#B0A8A0] mb-5">
                Contact Information
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    value={fields.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                    className={inputClass("firstName")}
                  />
                  {errors.firstName && <p className="text-[12px] text-red-500 mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={fields.lastName}
                    onChange={(e) => set("lastName", e.target.value)}
                    className={inputClass("lastName")}
                  />
                  {errors.lastName && <p className="text-[12px] text-red-500 mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={fields.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={inputClass("phone")}
                />
                {errors.phone && <p className="text-[12px] text-red-500 mt-1">{errors.phone}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={fields.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={inputClass("email")}
                />
                {errors.email && <p className="text-[12px] text-red-500 mt-1">{errors.email}</p>}
              </div>
            </section>

            {/* Delivery */}
            <section className="mb-10">
              <h2 className="text-[11px] font-500 tracking-[0.18em] uppercase text-[#B0A8A0] mb-5">
                Delivery Address
              </h2>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="City / Region"
                  value={fields.address}
                  onChange={(e) => set("address", e.target.value)}
                  className={inputClass("address")}
                />
                {errors.address && <p className="text-[12px] text-red-500 mt-1">{errors.address}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Street"
                  value={fields.street}
                  onChange={(e) => set("street", e.target.value)}
                  className={inputClass("street")}
                />
                {errors.street && <p className="text-[12px] text-red-500 mt-1">{errors.street}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Building / Apartment"
                  value={fields.building}
                  onChange={(e) => set("building", e.target.value)}
                  className={inputClass("building")}
                />
                {errors.building && <p className="text-[12px] text-red-500 mt-1">{errors.building}</p>}
              </div>
            </section>

            {/* Payment */}
            <section className="mb-10">
              <h2 className="text-[11px] font-500 tracking-[0.18em] uppercase text-[#B0A8A0] mb-5">
                Payment Method
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { value: "cash", label: "Cash on Delivery", desc: "Pay in cash when your order arrives" },
                  { value: "whish", label: "Whish", desc: "Pay via Whish mobile payment" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-4 px-5 py-4 border cursor-pointer transition-all duration-200 ${
                      fields.payment === opt.value
                        ? "border-black bg-[#F9F7F5]"
                        : "border-[#E0DBDB] hover:border-black"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                        fields.payment === opt.value ? "border-black" : "border-[#D0CBc5]"
                      }`}
                    >
                      {fields.payment === opt.value && (
                        <div className="w-2 h-2 rounded-full bg-black" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      value={opt.value}
                      checked={fields.payment === opt.value}
                      onChange={() => set("payment", opt.value)}
                      className="sr-only"
                    />
                    <div>
                      <p className="text-[14px] font-400 text-black">{opt.label}</p>
                      <p className="text-[12px] font-300 text-[#8A8075]">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
              {errors.payment && <p className="text-[12px] text-red-500 mt-2">{errors.payment}</p>}
            </section>

            <button
              type="submit"
              className="w-full bg-black text-white text-[14px] font-500 tracking-[0.18em] uppercase py-5 hover:bg-[#2C2C2C] transition-colors duration-300"
            >
              Place Order
            </button>
          </form>

          {/* Order summary */}
          <aside>
            <div className="border border-[#E8E4DF] p-6 sticky top-32">
              <h2 className="text-[11px] font-500 tracking-[0.18em] uppercase text-[#B0A8A0] mb-6">
                Order Summary
              </h2>
              <ul className="flex flex-col gap-5 mb-6">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="relative w-16 h-16 bg-[#F5EAE7] flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-black text-white text-[10px] font-500 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <p className="text-[13px] font-400 text-black">{item.product.name}</p>
                        {item.scent && (
                          <p className="text-[12px] font-300 text-[#8A8075]">{item.scent}</p>
                        )}
                      </div>
                      <p className="text-[13px] font-400 text-black">
                        ${(item.size.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#E8E4DF] pt-5 space-y-3">
                <div className="flex justify-between text-[13px] font-300 text-[#6B6B6B]">
                  <span>Subtotal</span>
                  <span>${sub.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[13px] font-300 text-[#6B6B6B]">
                  <span>Delivery</span>
                  <span>{sub >= 60 ? "Free" : "Calculated at delivery"}</span>
                </div>
                <div className="flex justify-between text-[15px] font-500 text-black pt-2 border-t border-[#E8E4DF]">
                  <span>Total</span>
                  <span>${sub.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
