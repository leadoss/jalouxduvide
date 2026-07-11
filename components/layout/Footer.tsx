import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";
// social icons

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const FOOTER_LINKS = {
  Shop: [
    { label: "All Products", href: "/shop" },
    { label: "Concrete Candles", href: "/shop?collection=Concrete Pot Candles" },
    { label: "Diffusers", href: "/shop?collection=Diffusers" },
    { label: "Gift Sets", href: "/shop?collection=Gift Sets" },
  ],
  Company: [
    { label: "Our Craft", href: "/#craft" },
    { label: "Ingredients", href: "/#ingredients" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Press", href: "/press" },
  ],
  Help: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Care Guide", href: "/care" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black-soft text-cream/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-cream/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <LogoMark size={42} className="text-cream" />
              <span className="text-[13px] font-500 tracking-[0.22em] uppercase text-cream">
                Jaloux Du Vide
              </span>
            </Link>
            <p className="text-[13px] font-300 text-cream/50 leading-relaxed max-w-xs mb-8">
              Scent as a form of art. Hand-poured in small batches, crafted
              from the world's finest natural ingredients.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-cream/40 hover:text-cream transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-cream/40 hover:text-cream transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="text-cream/40 hover:text-cream transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-[11px] font-500 tracking-[0.14em] uppercase text-cream/40 mb-5">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-300 text-cream/60 hover:text-cream transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-[12px] font-300 text-cream/30">
            © {new Date().getFullYear()} Jaloux Du Vide. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[12px] font-300 text-cream/30 hover:text-cream/60 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[12px] font-300 text-cream/30 hover:text-cream/60 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
