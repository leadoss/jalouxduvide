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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.08}>
              <div className="bg-white border border-[#E8E4DF] p-7 lg:p-8 flex flex-col gap-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg key={si} width="12" height="12" viewBox="0 0 24 24" fill="#1A1A1A" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote>
                  <p className="text-[15px] font-300 text-[#1A1A1A] leading-[1.75]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-[#E8E4DF]">
                  <div className="w-8 h-8 rounded-full bg-[#F0EDE8] flex items-center justify-center flex-shrink-0">
                    <span className="text-[13px] font-500 text-black">{t.author.charAt(0)}</span>
                  </div>
                  <p className="text-[14px] font-400 text-black">{t.author}</p>
                </footer>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
