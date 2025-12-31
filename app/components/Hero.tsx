"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const featuredProducts = [
  {
    id: 1,
    name: "Ethiopia Yirgacheffe",
    price: 450,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=500&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Colombia Supremo",
    price: 420,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=500&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "Kenya AA",
    price: 480,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=500&fit=crop",
    badge: "Limited",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Headline animation
      tl.from(headlineRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          sublineRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // Products stagger animation
      tl.from(
        productsRef.current?.querySelectorAll(".product-featured") || [],
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
          y: 50,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      );

      // Floating animation for products
      gsap.to(
        productsRef.current?.querySelectorAll(".product-featured") || [],
        {
          y: -15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.5,
        }
      );

      // Decoration animation
      gsap.from(decorRef.current?.querySelectorAll(".decor-element") || [], {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 1.5,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 1.2,
      });

      gsap.to(decorRef.current?.querySelectorAll(".decor-element") || [], {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        stagger: 2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-24"
    >
      {/* Background decorations */}
      <div ref={decorRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decor-element absolute top-20 left-10 w-32 h-32 rounded-full bg-latte/10" />
        <div className="decor-element absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-gold/10" />
        <div className="decor-element absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-latte/5" />
        <div className="decor-element absolute bottom-20 right-10 w-20 h-20 rounded-full bg-deep-brown/5" />

        {/* Coffee bean decorations */}
        <div className="absolute top-32 right-20 opacity-10">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="currentColor" className="text-deep-brown">
            <ellipse cx="30" cy="40" rx="25" ry="35" />
            <path d="M30 10 Q 30 40 30 70" stroke="#FAF7F2" strokeWidth="3" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-48 left-20 opacity-10 rotate-45">
          <svg width="40" height="55" viewBox="0 0 60 80" fill="currentColor" className="text-latte">
            <ellipse cx="30" cy="40" rx="25" ry="35" />
            <path d="M30 10 Q 30 40 30 70" stroke="#FAF7F2" strokeWidth="3" fill="none" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side - Hero Content */}
          <div className="order-2 lg:order-1">
            <h1
              ref={headlineRef}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-espresso leading-[1.05] tracking-tight"
            >
              กาแฟคุณภาพ
              <br />
              <span className="text-latte">คัดสรร</span>เพื่อคุณ
            </h1>

            <p
              ref={sublineRef}
              className="mt-6 md:mt-8 font-body text-lg md:text-xl text-warm-gray max-w-lg leading-relaxed"
            >
              สัมผัสรสชาติกาแฟพรีเมียมจากแหล่งปลูกชั้นนำทั่วโลก
              คัดสรรและคั่วสดใหม่ทุกวันเพื่อประสบการณ์ที่ดีที่สุด
            </p>

            <div ref={ctaRef} className="mt-8 md:mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="btn-coffee inline-flex items-center gap-3 px-8 py-4 bg-espresso text-cream font-body text-sm tracking-wide rounded-full hover:bg-deep-brown transition-colors"
              >
                <span>เลือกซื้อเลย</span>
                <svg
                  width="20"
                  height="20"
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
              <a
                href="#about"
                className="inline-flex items-center gap-3 px-8 py-4 border border-espresso/20 text-espresso font-body text-sm tracking-wide rounded-full hover:border-espresso/40 hover:bg-espresso/5 transition-all"
              >
                <span>เรื่องราวของเรา</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex items-center gap-8 text-warm-gray/70">
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <span className="font-body text-sm">คุณภาพรับประกัน</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="1" y="3" width="15" height="13" rx="2" />
                  <path d="M16 8h4l3 3v5h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <span className="font-body text-sm">จัดส่งฟรี</span>
              </div>
            </div>
          </div>

          {/* Right Side - Featured Products */}
          <div ref={productsRef} className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
              {featuredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`product-featured absolute cursor-pointer group ${
                    index === 0
                      ? "z-30 left-1/2 -translate-x-1/2"
                      : index === 1
                      ? "z-20 left-0 md:left-8 top-20"
                      : "z-10 right-0 md:right-8 bottom-16"
                  }`}
                  style={{
                    transform: `${
                      index === 0
                        ? "translateX(-50%)"
                        : index === 1
                        ? "rotate(-8deg)"
                        : "rotate(8deg)"
                    }`,
                  }}
                >
                  <div
                    className={`relative bg-white rounded-3xl shadow-[0_20px_50px_rgba(44,24,16,0.12)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(44,24,16,0.2)] ${
                      index === 0 ? "w-64 md:w-72" : "w-48 md:w-56"
                    }`}
                  >
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className={`px-3 py-1.5 text-xs font-body font-medium rounded-full ${
                            product.badge === "Best Seller"
                              ? "bg-gold text-espresso"
                              : product.badge === "New"
                              ? "bg-espresso text-cream"
                              : "bg-deep-brown text-cream"
                          }`}
                        >
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover product-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="px-6 py-2 bg-cream/95 text-espresso text-sm font-body rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          ดูรายละเอียด
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 md:p-5">
                      <h3 className="font-heading text-lg md:text-xl text-espresso">
                        {product.name}
                      </h3>
                      <p className="mt-1 font-body text-latte font-medium">
                        ฿{product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-body text-xs tracking-widest text-warm-gray uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-warm-gray to-transparent" />
      </div>
    </section>
  );
}
