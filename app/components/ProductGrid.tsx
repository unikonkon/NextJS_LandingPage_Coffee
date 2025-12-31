"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: "all", name: "ทั้งหมด" },
  { id: "single-origin", name: "Single Origin" },
  { id: "blend", name: "Blend" },
  { id: "specialty", name: "Specialty" },
];

const products = [
  {
    id: 1,
    name: "Ethiopia Yirgacheffe",
    category: "single-origin",
    origin: "Ethiopia",
    roast: "Light Roast",
    price: 450,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Colombia Supremo",
    category: "single-origin",
    origin: "Colombia",
    roast: "Medium Roast",
    price: 420,
    rating: 4.8,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=600&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "Kenya AA",
    category: "single-origin",
    origin: "Kenya",
    roast: "Medium Roast",
    price: 480,
    rating: 4.7,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&h=600&fit=crop",
    badge: "Limited",
  },
  {
    id: 4,
    name: "House Blend",
    category: "blend",
    origin: "Multi-Origin",
    roast: "Medium-Dark",
    price: 380,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    badge: null,
  },
  {
    id: 5,
    name: "Guatemala Antigua",
    category: "single-origin",
    origin: "Guatemala",
    roast: "Medium Roast",
    price: 440,
    rating: 4.6,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=600&fit=crop",
    badge: null,
  },
  {
    id: 6,
    name: "Espresso Blend",
    category: "blend",
    origin: "Brazil & Ethiopia",
    roast: "Dark Roast",
    price: 400,
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 7,
    name: "Panama Geisha",
    category: "specialty",
    origin: "Panama",
    roast: "Light Roast",
    price: 1200,
    rating: 5.0,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=600&h=600&fit=crop",
    badge: "Premium",
  },
  {
    id: 8,
    name: "Brazil Santos",
    category: "single-origin",
    origin: "Brazil",
    roast: "Medium Roast",
    price: 360,
    rating: 4.5,
    reviews: 184,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&h=600&fit=crop",
    badge: null,
  },
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Product cards animation
      const cards = gridRef.current?.querySelectorAll(".product-card-item");
      if (cards) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
          },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: string) => {
    // Fade out current items
    const cards = gridRef.current?.querySelectorAll(".product-card-item");
    gsap.to(cards || [], {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        setActiveCategory(categoryId);
      },
    });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={i < Math.floor(rating) ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gold"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
        <span className="ml-1 text-warm-gray text-sm font-body">
          {rating} ({filteredProducts.find((p) => p.rating === rating)?.reviews || 0})
        </span>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="products"
      className="section-padding bg-cream"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <span className="font-body text-sm tracking-[0.2em] text-latte uppercase">
            Our Collection
          </span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl lg:text-6xl text-espresso">
            คอลเลคชันกาแฟ
          </h2>
          <p className="mt-4 font-body text-warm-gray max-w-xl mx-auto">
            เลือกชมกาแฟคุณภาพจากแหล่งปลูกชั้นนำทั่วโลก คัดสรรมาเพื่อคุณโดยเฉพาะ
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 font-body text-sm rounded-full transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-espresso text-cream"
                    : "bg-white text-espresso hover:bg-espresso/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card-item product-card bg-white rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`px-3 py-1 text-xs font-body font-medium rounded-full ${
                        product.badge === "Best Seller"
                          ? "bg-gold text-espresso"
                          : product.badge === "New"
                          ? "bg-espresso text-cream"
                          : product.badge === "Limited"
                          ? "bg-deep-brown text-cream"
                          : "bg-latte text-espresso"
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                  aria-label="Add to wishlist"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-espresso"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover product-image"
                />

                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-espresso/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full py-2.5 bg-cream text-espresso font-body text-sm font-medium rounded-lg hover:bg-white transition-colors">
                    + เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs font-body text-warm-gray mb-2">
                  <span>{product.origin}</span>
                  <span className="w-1 h-1 rounded-full bg-warm-gray/50" />
                  <span>{product.roast}</span>
                </div>

                <h3 className="font-heading text-lg text-espresso group-hover:text-deep-brown transition-colors">
                  {product.name}
                </h3>

                <div className="mt-2">
                  {renderStars(product.rating)}
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-body text-lg font-medium text-latte">
                    ฿{product.price}
                  </span>
                  <button
                    className="p-2 text-espresso/60 hover:text-espresso transition-colors"
                    aria-label="Quick view"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 border border-espresso text-espresso font-body text-sm tracking-wide rounded-full hover:bg-espresso hover:text-cream transition-all duration-300"
          >
            <span>ดูสินค้าทั้งหมด</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
