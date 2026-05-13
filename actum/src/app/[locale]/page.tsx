import { getPopularProducts } from "@/lib/products";
import ProductGrid from "./(routes)/global_components/product_grid";
import Hero from "./components_index/hero_section";
import AboutSection from "./components_index/about_section";
import VideoSection from "./components_index/video_section";
import FaqSectionWrapper from "./components_index/faq_section_wrapper";

export default async function Home() {
  const popularProducts = await getPopularProducts();

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <Hero />
      {/* <ProductGrid
        products={popularProducts ?? []}
        title="Populære produkter"
      /> */}

      <VideoSection />
      <AboutSection />
      <FaqSectionWrapper />
    </main>
  );
}
