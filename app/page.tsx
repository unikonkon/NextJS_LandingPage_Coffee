import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import BestSeller from "./components/BestSeller";
import WhyChooseUs from "./components/WhyChooseUs";
import BrandStory from "./components/BrandStory";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero + Featured Products */}
        <Hero />

        {/* Product Collection Grid */}
        <ProductGrid />

        {/* Best Seller Highlight */}
        <BestSeller />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Brand Story */}
        <BrandStory />

        {/* Testimonials */}
        <Testimonials />

        {/* Newsletter CTA */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
