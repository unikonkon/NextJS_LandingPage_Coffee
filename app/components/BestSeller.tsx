"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tastingNotes = [
  { name: "ช็อกโกแลต", icon: "🍫" },
  { name: "ผลไม้เบอร์รี่", icon: "🫐" },
  { name: "ดอกไม้", icon: "🌸" },
  { name: "คาราเมล", icon: "🍯" },
];

export default function BestSeller() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const beansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image mask reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Badge bounce + shimmer
      const badgeTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      badgeTl
        .from(badgeRef.current, {
          scale: 0,
          rotation: -180,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.5,
        })
        .to(badgeRef.current, {
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

      // Content stagger animation
      const contentItems = contentRef.current?.querySelectorAll(".content-item");
      gsap.from(contentItems || [], {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Floating coffee beans
      const beans = beansRef.current?.querySelectorAll(".floating-bean");
      beans?.forEach((bean, i) => {
        gsap.to(bean, {
          y: -30 - i * 10,
          rotation: 360,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.5,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Floating coffee beans decoration */}
      <div ref={beansRef} className="absolute inset-0 pointer-events-none opacity-10">
        <div className="floating-bean absolute top-20 left-[10%]">
          <svg width="40" height="55" viewBox="0 0 60 80" fill="currentColor" className="text-deep-brown">
            <ellipse cx="30" cy="40" rx="25" ry="35" />
            <path d="M30 10 Q 30 40 30 70" stroke="#FAF7F2" strokeWidth="3" fill="none" />
          </svg>
        </div>
        <div className="floating-bean absolute top-40 right-[15%] rotate-45">
          <svg width="30" height="42" viewBox="0 0 60 80" fill="currentColor" className="text-latte">
            <ellipse cx="30" cy="40" rx="25" ry="35" />
            <path d="M30 10 Q 30 40 30 70" stroke="#FAF7F2" strokeWidth="3" fill="none" />
          </svg>
        </div>
        <div className="floating-bean absolute bottom-32 left-[20%] -rotate-30">
          <svg width="35" height="48" viewBox="0 0 60 80" fill="currentColor" className="text-deep-brown">
            <ellipse cx="30" cy="40" rx="25" ry="35" />
            <path d="M30 10 Q 30 40 30 70" stroke="#FAF7F2" strokeWidth="3" fill="none" />
          </svg>
        </div>
        <div className="floating-bean absolute bottom-20 right-[25%] rotate-12">
          <svg width="25" height="35" viewBox="0 0 60 80" fill="currentColor" className="text-latte">
            <ellipse cx="30" cy="40" rx="25" ry="35" />
            <path d="M30 10 Q 30 40 30 70" stroke="#FAF7F2" strokeWidth="3" fill="none" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Image Side - 60% */}
          <div className="lg:col-span-3 relative">
            <div ref={imageRef} className="relative">
              {/* Best Seller Badge */}
              <div
                ref={badgeRef}
                className="absolute -top-4 -right-4 md:top-8 md:-right-8 z-20"
              >
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gold flex items-center justify-center">
                    <div className="text-center">
                      <span className="block font-heading text-lg md:text-xl text-espresso">
                        Best
                      </span>
                      <span className="block font-heading text-lg md:text-xl text-espresso -mt-1">
                        Seller
                      </span>
                    </div>
                  </div>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-full shimmer" />
                </div>
              </div>

              {/* Main Image */}
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=1500&fit=crop"
                  alt="Ethiopia Yirgacheffe - Best Seller"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-full h-full border-2 border-latte/30 rounded-3xl -z-10" />
            </div>
          </div>

          {/* Content Side - 40% */}
          <div ref={contentRef} className="lg:col-span-2">
            <div className="content-item">
              <span className="font-body text-sm tracking-[0.2em] text-gold uppercase">
                Our Best Seller
              </span>
            </div>

            <h2 className="content-item mt-4 font-heading text-4xl md:text-5xl lg:text-6xl text-espresso leading-tight">
              Ethiopia
              <br />
              Yirgacheffe
            </h2>

            <p className="content-item mt-6 font-body text-lg text-warm-gray leading-relaxed">
              กาแฟจากแหล่งกำเนิดของกาแฟโลก มีกลิ่นหอมละมุนของดอกไม้และผลไม้
              รสชาติเปรี้ยวอ่อนๆ ตัดกับความหวานธรรมชาติ
              เหมาะสำหรับผู้ที่ชื่นชอบกาแฟรสชาติซับซ้อน
            </p>

            {/* Tasting Notes */}
            <div className="content-item mt-8">
              <span className="font-body text-sm text-espresso/70 uppercase tracking-wide">
                Tasting Notes
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {tastingNotes.map((note, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cream rounded-full font-body text-sm text-espresso"
                  >
                    <span>{note.icon}</span>
                    <span>{note.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Flavor Profile */}
            <div className="content-item mt-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-espresso/70">Acidity</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-6 h-2 rounded-full ${
                        i <= 4 ? "bg-latte" : "bg-espresso/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-espresso/70">Body</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-6 h-2 rounded-full ${
                        i <= 3 ? "bg-latte" : "bg-espresso/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-espresso/70">Sweetness</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-6 h-2 rounded-full ${
                        i <= 4 ? "bg-latte" : "bg-espresso/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="content-item mt-10 flex items-center gap-6">
              <div>
                <span className="font-heading text-4xl text-espresso">฿450</span>
                <span className="ml-2 font-body text-warm-gray text-sm">/ 250g</span>
              </div>
              <button className="btn-coffee flex-1 py-4 bg-espresso text-cream font-body text-sm tracking-wide rounded-full hover:bg-deep-brown transition-colors">
                เพิ่มลงตะกร้า
              </button>
            </div>

            {/* Link */}
            <a
              href="#"
              className="content-item inline-flex items-center gap-2 mt-6 font-body text-sm text-latte hover:text-deep-brown transition-colors group"
            >
              <span>ดูรายละเอียดเพิ่มเติม</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
