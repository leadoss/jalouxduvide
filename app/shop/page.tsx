"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { products } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";
import { Suspense } from "react";

const COLLECTIONS = [
  "All",
  "Diffusers",
  "Concrete Pot Candles",
  "Concrete Candle Refills",
  "Soy Wax Candles",
] as const;

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const collection = searchParams.get("collection") ?? "All";

  const [addedId, setAddedId] = useState<string | null>(null);
  const [selectedScents, setSelectedScents] = useState<Record<string, string>>({});

  const addItem = useCartStore((s) => s.addItem);

  const handleCollectionChange = (c: string) => {
    if (c === "All") {
      router.push("/shop");
    } else {
      router.push(`/shop?collection=${encodeURIComponent(c)}`);
    }
  };

  const handleScentSelect = (productId: string, scent: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedScents((prev) => ({ ...prev, [productId]: scent }));
  };

  const filtered = useMemo(
    () =>
      products.filter(
        (p) => collection === "All" || p.collection === collection
      ),
    [collection]
  );

  const handleAddToBag = (product: (typeof products)[0], e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.type === "Concrete Pot Candle" && !selectedScents[product.id]) return;
    addItem(product, product.sizes[0]);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const pageTitle = collection === "All" ? "Our Collection" : collection;

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section
        className="pb-10 lg:pb-14 text-center border-b border-[#E8E4DF]"
        style={{ paddingTop: "104px" }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16 mb-6 text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-300 tracking-[0.1em] text-[#6B6B6B] hover:text-black transition-colors duration-200"
          >
            <ArrowLeft size={10} strokeWidth={1.5} />
            Home
          </Link>
        </div>
        <h1 className="text-[22px] lg:text-[32px] font-300 tracking-[0.24em] uppercase text-black">
          {pageTitle}
        </h1>
      </section>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex gap-16 lg:gap-20 py-16 lg:py-24">

        {/* Sidebar */}
        <aside className="hidden lg:block w-[200px] flex-shrink-0">
          <p className="text-[11px] font-500 tracking-[0.18em] uppercase text-[#999] mb-4">Collections</p>
          <nav className="flex flex-col gap-0.5">
            {COLLECTIONS.map((c) => {
              const active = collection === c;
              return (
                <button
                  key={c}
                  onClick={() => handleCollectionChange(c)}
                  className={`text-left py-2 text-[14px] tracking-[0.04em] transition-colors duration-200 ${
                    active
                      ? "text-black font-500"
                      : "text-[#6B6B6B] font-300 hover:text-black"
                  }`}
                >
                  {c === "All" ? "All Products" : c}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Grid */}
        <div className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="py-32 text-center">
              <p className="text-[18px] font-300 tracking-[0.1em] uppercase text-[#C084FC] mb-8">
                No products found
              </p>
              <button
                onClick={() => handleCollectionChange("All")}
                className="text-[16px] font-400 tracking-[0.18em] uppercase border-b border-black pb-0.5"
              >
                View All
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-16 lg:gap-y-24"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((product, i) => (
                  <motion.article
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(i * 0.04, 0.2),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group cursor-pointer"
                  >
                    {/* Image */}
                    <Link href={`/shop/${product.slug}`} className="block relative">
                      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5EAE7]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />

                        {/* Badges */}
                        {(product.isBestseller || product.isNew) && (
                          <div className="absolute top-4 left-4 flex gap-2">
                            {product.isBestseller && (
                              <span className="bg-white text-black text-[10px] font-500 tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
                                Bestseller
                              </span>
                            )}
                            {product.isNew && (
                              <span className="bg-black text-white text-[10px] font-500 tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
                                New
                              </span>
                            )}
                          </div>
                        )}

                        {/* Hover reveal panel */}
                        <div className="absolute inset-x-0 bottom-0 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                          {product.type === "Concrete Pot Candle" ? (
                            <div className="px-3 pt-3 pb-3">
                              <div className="flex flex-wrap gap-1 mb-2">
                                {(product.scents ?? []).map((scent) => (
                                  <button
                                    key={scent}
                                    onClick={(e) => handleScentSelect(product.id, scent, e)}
                                    className={`px-2 py-1 border text-[11px] font-400 tracking-[0.06em] transition-all duration-150 ${
                                      selectedScents[product.id] === scent
                                        ? "border-black bg-black text-white"
                                        : "border-[#E8E4DF] text-black hover:border-black"
                                    }`}
                                  >
                                    {scent}
                                  </button>
                                ))}
                              </div>
                              <button
                                onClick={(e) => handleAddToBag(product, e)}
                                disabled={!selectedScents[product.id]}
                                className={`w-full py-2.5 text-[12px] font-500 tracking-[0.18em] uppercase transition-all duration-200 ${
                                  selectedScents[product.id]
                                    ? "bg-black text-white"
                                    : "bg-[#E8E4DF] text-[#999] cursor-not-allowed"
                                }`}
                              >
                                {addedId === product.id ? "Added ✓" : "Add to Bag"}
                              </button>
                            </div>
                          ) : (
                            <div className="py-3.5 text-center">
                              <button
                                onClick={(e) => handleAddToBag(product, e)}
                                className="text-[12px] font-500 tracking-[0.18em] uppercase text-black"
                              >
                                {addedId === product.id ? "Added ✓" : "Add to Bag"}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>

                    {/* Info */}
                    <div className="mt-4 flex items-baseline justify-between gap-3">
                      <Link
                        href={`/shop/${product.slug}`}
                        className="text-[14px] font-400 text-black hover:text-[#555] transition-colors duration-200 leading-snug"
                      >
                        {product.name}
                      </Link>
                      <span className="text-[14px] font-400 text-black flex-shrink-0">
                        ${product.sizes[0].price}
                      </span>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  );
}
