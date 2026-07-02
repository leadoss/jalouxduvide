import Hero from "@/components/sections/Hero";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import Bestsellers from "@/components/sections/Bestsellers";
import BrandStory from "@/components/sections/BrandStory";
import ScentNotes from "@/components/sections/ScentNotes";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <Bestsellers />
      <BrandStory />
      <ScentNotes />
      <Testimonials />
      <Newsletter />
    </>
  );
}
