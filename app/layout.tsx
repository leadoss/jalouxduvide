import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jaloux Du Vide — Luxury Candles & Diffusers",
    template: "%s | Jaloux Du Vide",
  },
  description:
    "Hand-poured luxury candles and reed diffusers crafted from the world's finest ingredients. Discover scent as a form of art.",
  keywords: [
    "luxury candles",
    "reed diffusers",
    "soy candles",
    "home fragrance",
    "artisan candles",
    "gift sets",
  ],
  openGraph: {
    title: "Jaloux Du Vide — Luxury Candles & Diffusers",
    description:
      "Hand-poured luxury candles and reed diffusers crafted from the world's finest ingredients.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen flex flex-col bg-cream text-black font-sans">
        <SmoothScroll>
          <CustomCursor />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </SmoothScroll>
      </body>
    </html>
  );
}
