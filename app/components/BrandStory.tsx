"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 15, suffix: "+", label: "ปีประสบการณ์" },
  { number: 50000, suffix: "+", label: "ลูกค้าทั่วประเทศ" },
  { number: 12, suffix: "", label: "ประเทศที่ Import" },
  { number: 100, suffix: "%", label: "Arabica แท้" },
];

export default function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content animation
      const contentItems = contentRef.current?.querySelectorAll(".story-item");
      gsap.from(contentItems || [], {
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Stats count-up animation
      const statItems = statsRef.current?.querySelectorAll(".stat-number");
      statItems?.forEach((item) => {
        const target = parseInt(item.getAttribute("data-target") || "0");
        const suffix = item.getAttribute("data-suffix") || "";
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
          onUpdate: function () {
            item.textContent = formatNumber(Math.round(counter.value)) + suffix;
          },
        });
      });

      // Stats cards stagger
      const statCards = statsRef.current?.querySelectorAll(".stat-card");
      gsap.from(statCards || [], {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-soft-black text-cream relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-latte blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=1000&fit=crop"
                alt="Our Story - Coffee Roasting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-latte/20 rounded-3xl -z-10" />

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-latte text-espresso p-6 rounded-2xl">
              <span className="block font-heading text-4xl">2009</span>
              <span className="block font-body text-sm mt-1">ก่อตั้ง</span>
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef}>
            <div className="story-item">
              <span className="font-body text-sm tracking-[0.2em] text-latte uppercase">
                Our Story
              </span>
            </div>

            <h2 className="story-item mt-4 font-heading text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
              เรื่องราวของเรา
            </h2>

            <p className="story-item mt-6 font-body text-lg text-cream/70 leading-relaxed">
              เริ่มต้นจากความหลงใหลในกาแฟ เราเดินทางค้นหาเมล็ดกาแฟคุณภาพจากทั่วทุกมุมโลก
              จากไร่กาแฟบนภูเขาสูงในเอธิโอเปีย ไปจนถึงเนินเขาในโคลอมเบีย
            </p>

            <p className="story-item mt-4 font-body text-lg text-cream/70 leading-relaxed">
              ทุกเมล็ดกาแฟที่เราคัดสรรผ่านกระบวนการตรวจสอบอย่างพิถีพิถัน
              และคั่วด้วยความใส่ใจ เพื่อให้คุณได้สัมผัสรสชาติที่ดีที่สุดในทุกแก้ว
            </p>

            <div className="story-item mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-3 text-latte font-body text-sm group"
              >
                <span>อ่านเรื่องราวทั้งหมด</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:translate-x-2 transition-transform"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card text-center p-6 md:p-8 bg-cream/5 rounded-2xl backdrop-blur-sm border border-cream/10"
            >
              <span
                className="stat-number block font-heading text-4xl md:text-5xl text-latte"
                data-target={stat.number}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </span>
              <span className="block mt-2 font-body text-sm text-cream/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
