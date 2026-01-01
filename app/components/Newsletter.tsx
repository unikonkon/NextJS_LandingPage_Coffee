"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content slide up
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Background gradient animation
      gsap.to(sectionRef.current, {
        backgroundPosition: "100% 100%",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Animate success
      gsap.to(".submit-btn", {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          setIsSubmitted(true);
          gsap.from(".success-message", {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #D4A574 0%, #C9A962 25%, #D4A574 50%, #3D2314 100%)",
        backgroundSize: "200% 200%",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-[60px]" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-espresso/20 blur-[80px]" />

        {/* Coffee bean decorations */}
        <div className="absolute top-10 right-[20%] opacity-20 animate-float rotate-15">
          <svg
            width="40"
            height="55"
            viewBox="0 0 60 80"
            fill="currentColor"
            className="text-espresso"
          >
            <ellipse cx="30" cy="40" rx="25" ry="35" />
            <path
              d="M30 10 Q 30 40 30 70"
              stroke="#FAF7F2"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>
        <div className="absolute bottom-16 left-[15%] opacity-20 animate-float-delayed rotate-45">
          <svg
            width="30"
            height="42"
            viewBox="0 0 60 80"
            fill="currentColor"
            className="text-espresso"
          >
            <ellipse cx="30" cy="40" rx="25" ry="35" />
            <path
              d="M30 10 Q 30 40 30 70"
              stroke="#FAF7F2"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div
          ref={contentRef}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-espresso"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="font-body text-sm text-espresso font-medium">
              สมาชิกพิเศษ
            </span>
          </div>

          {/* Headline */}
          <p className="font-body text-5xl md:text-6xl lg:text-7xl text-espresso leading-tight">
            รับส่วนลด 10%
          </p>
          <p className="mt-4 font-body text-lg text-espresso/80 max-w-lg mx-auto">
            สมัครรับข่าวสารและโปรโมชั่นพิเศษก่อนใคร
            พร้อมรับส่วนลด 10% สำหรับการสั่งซื้อครั้งแรก
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="กรอกอีเมลของคุณ"
                  required
                  className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm rounded-full font-body text-espresso placeholder:text-warm-gray focus:outline-none focus:ring-2 focus:ring-espresso/30 transition-all"
                />
              </div>
              <button
                type="submit"
                className="submit-btn btn-coffee px-8 py-4 bg-espresso text-cream font-body text-sm tracking-wide rounded-full hover:bg-deep-brown transition-colors whitespace-nowrap"
              >
                สมัครรับข่าวสาร
              </button>
            </form>
          ) : (
            <div className="success-message mt-8 p-6 bg-white/30 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 mx-auto bg-espresso rounded-full flex items-center justify-center mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-cream"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-espresso">
                ขอบคุณที่สมัครสมาชิก!
              </h3>
              <p className="mt-2 font-body text-espresso/80">
                เราจะส่งรหัสส่วนลดไปที่อีเมลของคุณเร็วๆ นี้
              </p>
            </div>
          )}

          {/* Trust text */}
          <p className="mt-6 font-body text-xs text-espresso/60">
            เราเคารพความเป็นส่วนตัวของคุณ สามารถยกเลิกการรับข่าวสารได้ทุกเมื่อ
          </p>
        </div>
      </div>
    </section>
  );
}
