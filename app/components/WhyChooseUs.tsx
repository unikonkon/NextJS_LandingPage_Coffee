"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "คัดสรรเมล็ดกาแฟคุณภาพ",
    subtitle: "Specialty Grade Coffee",
    description: "เลือกเฉพาะเมล็ดกาแฟเกรด Specialty ที่ได้คะแนน 80+ จาก SCA คัดสรรจากไร่กาแฟบนภูเขาสูง 1,500-2,200 เมตร จากแหล่งปลูกชั้นนำอย่าง Ethiopia, Colombia และ Kenya",
    stats: "คะแนน SCA 80+",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        {/* Coffee bean */}
        <ellipse cx="32" cy="32" rx="18" ry="24" className="draw-svg" />
        <path d="M32 12 Q28 32 32 52" className="draw-svg" strokeLinecap="round" />
        <path d="M20 20 Q32 24 44 20" className="draw-svg" strokeLinecap="round" opacity="0.5" />
        <path d="M20 44 Q32 40 44 44" className="draw-svg" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "คั่วสดทุกวัน",
    subtitle: "Fresh Roasted Daily",
    description: "คั่วสดใหม่ทุกวันด้วยเครื่องคั่ว Probat รุ่น Probatone ควบคุมอุณหภูมิและเวลาอย่างแม่นยำ เพื่อให้ได้ Roast Profile ที่ดึงรสชาติเฉพาะตัวของแต่ละ Origin ออกมาอย่างสมบูรณ์",
    stats: "คั่วภายใน 24 ชม.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        {/* Coffee cup with steam */}
        <path d="M12 28 L12 48 Q12 56 24 56 L40 56 Q52 56 52 48 L52 28" className="draw-svg" />
        <ellipse cx="32" cy="28" rx="20" ry="6" className="draw-svg" />
        <path d="M52 32 Q60 32 60 40 Q60 48 52 48" className="draw-svg" />
        {/* Steam */}
        <path d="M24 18 Q24 12 28 12 Q32 12 28 6" className="draw-svg" strokeLinecap="round" opacity="0.6" />
        <path d="M32 20 Q32 14 36 14 Q40 14 36 8" className="draw-svg" strokeLinecap="round" opacity="0.6" />
        <path d="M40 18 Q40 12 44 12 Q48 12 44 6" className="draw-svg" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "จัดส่งรวดเร็ว",
    subtitle: "Express Delivery",
    description: "บรรจุในถุง Valve พร้อมดีดก๊าซ CO2 รักษาความสดใหม่ จัดส่งภายใน 1-3 วันทำการ ฟรีค่าจัดส่งเมื่อซื้อครบ ฿1,000 พร้อมระบบ Track & Trace ติดตามพัสดุได้ตลอด 24 ชม.",
    stats: "ส่งฟรี ฿1,000+",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        {/* Coffee bag with wings */}
        <rect x="18" y="16" width="28" height="36" rx="2" className="draw-svg" />
        <path d="M22 16 L22 12 Q32 8 42 12 L42 16" className="draw-svg" />
        <circle cx="32" cy="34" r="8" className="draw-svg" />
        <path d="M28 34 L32 38 L36 30" className="draw-svg" strokeLinecap="round" strokeLinejoin="round" />
        {/* Speed lines */}
        <path d="M10 28 L4 28" className="draw-svg" strokeLinecap="round" opacity="0.5" />
        <path d="M12 36 L6 36" className="draw-svg" strokeLinecap="round" opacity="0.5" />
        <path d="M10 44 L4 44" className="draw-svg" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "ยินดีคืนเงิน",
    subtitle: "100% Satisfaction",
    description: "เราเชื่อมั่นในคุณภาพกาแฟของเรา หากไม่พอใจยินดีคืนเงินเต็มจำนวนภายใน 30 วัน ไม่ต้องมีเหตุผล พร้อมทีม Coffee Specialist ให้คำปรึกษาเรื่องการชงและเลือกกาแฟ",
    stats: "รับประกัน 30 วัน",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        {/* Shield with coffee bean */}
        <path d="M32 8 L52 16 L52 32 Q52 48 32 58 Q12 48 12 32 L12 16 Z" className="draw-svg" />
        <ellipse cx="32" cy="32" rx="8" ry="12" className="draw-svg" />
        <path d="M32 22 Q30 32 32 42" className="draw-svg" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
];

const coffeeProcess = [
  { step: "01", title: "คัดเลือก", desc: "เลือกเมล็ดกาแฟ Green Bean คุณภาพสูง" },
  { step: "02", title: "คั่ว", desc: "คั่วด้วย Profile ที่เหมาะกับแต่ละ Origin" },
  { step: "03", title: "บรรจุ", desc: "บรรจุในถุง Valve รักษาความสด" },
  { step: "04", title: "จัดส่ง", desc: "ส่งถึงมือคุณภายใน 1-3 วัน" },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // SVG draw animation
      const svgPaths = cardsRef.current?.querySelectorAll(".draw-svg");
      svgPaths?.forEach((path) => {
        const length = (path as SVGPathElement).getTotalLength?.() || 200;
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: path,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Process steps animation
      const steps = processRef.current?.querySelectorAll(".process-step");
      gsap.from(steps || [], {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-latte/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/5 blur-[80px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <span className="font-body text-sm tracking-[0.2em] text-latte uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl lg:text-6xl text-espresso">
            ทำไมต้องเลือกเรา
          </h2>
          <p className="mt-4 font-body text-warm-gray max-w-2xl mx-auto leading-relaxed">
            เราใส่ใจในทุกขั้นตอน ตั้งแต่การคัดเลือกเมล็ดกาแฟจากไร่ จนถึงมือคุณ
            <br className="hidden md:block" />
            เพื่อให้คุณได้สัมผัสประสบการณ์กาแฟที่ดีที่สุดในทุกแก้ว
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card group p-6 md:p-8 bg-white rounded-2xl hover:shadow-[0_20px_50px_rgba(44,24,16,0.1)] transition-all duration-500"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cream text-latte group-hover:text-deep-brown group-hover:bg-latte/10 transition-all duration-500">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="mt-6">
                <span className="font-body text-xs tracking-wider text-latte uppercase">
                  {feature.subtitle}
                </span>
                <h3 className="mt-1 font-heading text-xl text-espresso">
                  {feature.title}
                </h3>
                <p className="mt-3 font-body text-sm text-warm-gray leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-cream rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="font-body text-xs font-medium text-espresso">
                    {feature.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coffee Process */}
        <div ref={processRef} className="mt-16 md:mt-24">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl text-espresso">
              กระบวนการของเรา
            </h3>
            <p className="mt-2 font-body text-warm-gray">
              จากไร่กาแฟสู่แก้วกาแฟของคุณ
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-latte/30 -translate-y-1/2" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {coffeeProcess.map((item, index) => (
                <div key={index} className="process-step relative text-center">
                  {/* Step number */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-latte text-latte font-heading text-xl z-10">
                    {item.step}
                  </div>
                  <h4 className="mt-4 font-heading text-lg text-espresso">
                    {item.title}
                  </h4>
                  <p className="mt-1 font-body text-xs text-warm-gray">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coffee Quality Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-espresso">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span className="font-body text-sm text-espresso">Fresh Roasted</span>
          </div>
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-espresso">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="font-body text-sm text-espresso">100% Arabica</span>
          </div>
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-espresso">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="font-body text-sm text-espresso">SCA Certified</span>
          </div>
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-espresso">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            <span className="font-body text-sm text-espresso">Eco Packaging</span>
          </div>
        </div>
      </div>
    </section>
  );
}
