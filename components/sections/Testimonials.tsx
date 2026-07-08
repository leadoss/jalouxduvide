"use client";

import FadeIn from "@/components/ui/FadeIn";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "The scent fills the whole room without being overwhelming. I light it every evening and it instantly makes the space feel warmer.",
    author: "Amelia R.",
  },
  {
    id: 2,
    quote: "The concrete pot is beautiful on its own, but the fragrance is what keeps me coming back. Already on my third one.",
    author: "Jean-Marc F.",
  },
  {
    id: 3,
    quote: "I gifted one to my sister and she immediately ordered two more for herself. The quality really speaks for itself.",
    author: "Sofia K.",
  },
  {
    id: 4,
    quote: "The reed diffuser has been running for weeks and still smells incredible. Worth every penny.",
    author: "Taro M.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-300">
            What our customers say
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.08}>
              <div className="bg-white border border-[#E8E4DF] p-8 lg:p-10 flex flex-col gap-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg key={si} width="13" height="13" viewBox="0 0 24 24" fill="#1B3A6B" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote>
                  <p className="text-lg font-300 text-[#7C3AED] leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-[#E8E4DF]">
                  <div className="w-8 h-8 rounded-full bg-[#E8E4DF] flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-500 text-[#9333EA]">{t.author.charAt(0)}</span>
                  </div>
                  <p className="text-lg font-400 text-black">{t.author}</p>
                </footer>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
