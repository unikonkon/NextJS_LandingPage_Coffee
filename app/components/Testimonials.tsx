"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "คุณสมชาย วงศ์สกุล",
    role: "Coffee Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote:
      "กาแฟ Ethiopia Yirgacheffe ดีมาก กลิ่นหอมมาก รสชาติเยี่ยม สั่งซื้อมาหลายครั้งแล้วไม่เคยผิดหวัง แนะนำเลยครับ",
  },
  {
    id: 2,
    name: "คุณพิมพ์ใจ รักกาแฟ",
    role: "Home Barista",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote:
      "เมล็ดกาแฟคุณภาพดี คั่วสดใหม่ทุกครั้ง บริการส่งไว ประทับใจมากค่ะ จะกลับมาซื้ออีกแน่นอน",
  },
  {
    id: 3,
    name: "คุณวิชัย เสนีย์",
    role: "Cafe Owner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote:
      "ใช้กาแฟ AROMA ในร้านมาเกือบ 2 ปี ลูกค้าชอบมาก คุณภาพคงที่ ราคาเหมาะสม ทีมงานบริการดีมากครับ",
  },
  {
    id: 4,
    name: "คุณนภา สุขสม",
    role: "Coffee Lover",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote:
      "ชอบ House Blend มาก รสชาติกลมกล่อม หอมกรุ่น ดื่มได้ทุกวันไม่เบื่อเลยค่ะ บรรจุภัณฑ์สวยด้วย",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    const newIndex =
      index < 0
        ? testimonials.length - 1
        : index >= testimonials.length
        ? 0
        : index;

    // Animate out
    gsap.to(quoteRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setCurrentIndex(newIndex);
        // Animate in
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
      },
    });
  }, []);

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

      // Quote marks scale animation
      const quoteMarks = carouselRef.current?.querySelectorAll(".quote-mark");
      gsap.from(quoteMarks || [], {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, goToSlide]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gold"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="section-padding bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-latte/5 blur-[80px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gold/5 blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <span className="font-body text-sm tracking-[0.2em] text-latte uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl lg:text-6xl text-espresso">
            เสียงจากลูกค้า
          </h2>
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(44,24,16,0.08)]">
            {/* Quote marks */}
            <div className="quote-mark absolute -top-6 left-8 md:left-12 text-latte/20">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content */}
            <div ref={quoteRef} className="text-center pt-8">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Quote */}
              <p className="font-body text-xl md:text-2xl text-espresso leading-relaxed max-w-2xl mx-auto">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-latte/20">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mt-4 font-heading text-xl text-espresso">
                  {testimonials[currentIndex].name}
                </h4>
                <span className="font-body text-sm text-warm-gray">
                  {testimonials[currentIndex].role}
                </span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => goToSlide(currentIndex - 1)}
              className="absolute left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream rounded-full flex items-center justify-center text-espresso hover:bg-latte hover:text-cream transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={() => goToSlide(currentIndex + 1)}
              className="absolute right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream rounded-full flex items-center justify-center text-espresso hover:bg-latte hover:text-cream transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-latte"
                    : "bg-espresso/20 hover:bg-espresso/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
