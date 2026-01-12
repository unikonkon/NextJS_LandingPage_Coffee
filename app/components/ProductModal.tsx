"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen && product) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      // Animate in
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
      );
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, product]);

  const handleClose = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    });
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 20,
      duration: 0.2,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      handleClose();
    }
  };

  if (!isOpen || !product) return null;

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={i < Math.floor(rating) ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gold"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
        <span className="ml-2 text-warm-gray font-body">
          {rating} ({product.reviews} reviews)
        </span>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-cream rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-espresso"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-52 md:h-auto md:aspect-square">
            {product.badge && (
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1.5 text-xs font-body font-medium rounded-full ${product.badge === "Best Seller"
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
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex-1">
              {/* Category info */}
              <div className="flex items-center gap-2 text-sm font-body text-warm-gray mb-3">
                <span>{product.origin}</span>
                <span className="w-1 h-1 rounded-full bg-warm-gray/50" />
                <span>{product.roast}</span>
              </div>

              {/* Name & Price (mobile) */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="font-heading text-2xl md:text-4xl text-espresso">
                  {product.name}
                </h2>
                <span className="font-heading text-xl md:hidden text-latte whitespace-nowrap">
                  ฿{product.price}
                </span>
              </div>

              {/* Rating */}
              <div className="mb-4">
                {renderStars(product.rating)}
              </div>

              {/* Price (desktop) */}
              <div className="mb-6 hidden md:block">
                <span className="font-heading text-3xl text-latte">
                  ฿{product.price}
                </span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-body font-medium text-espresso mb-2">
                  รายละเอียด
                </h3>
                <p className="font-body text-warm-gray leading-relaxed">
                  กาแฟคุณภาพพรีเมียมจาก{product.origin} คั่ว{product.roast}
                  ให้รสชาติที่เป็นเอกลักษณ์ เหมาะสำหรับผู้ที่ชื่นชอบกาแฟรสชาติ
                  {product.roast === "Light Roast"
                    ? "เปรี้ยวนุ่มนวลพร้อมกลิ่นหอมผลไม้"
                    : product.roast === "Dark Roast"
                      ? "เข้มข้นหนักแน่นพร้อมกลิ่นหอมช็อคโกแลต"
                      : "สมดุลกลมกล่อมพร้อมกลิ่นหอมถั่ว"}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm font-body text-warm-gray">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-latte"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>คุณภาพรับประกัน</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-body text-warm-gray">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-latte"
                  >
                    <rect x="1" y="3" width="15" height="13" rx="2" />
                    <path d="M16 8h4l3 3v5h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <span>จัดส่งฟรี</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-body text-warm-gray">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-latte"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>คั่วสดใหม่</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-body text-warm-gray">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-latte"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>จัดส่งใน 1-2 วัน</span>
                </div>
              </div>
            </div>

            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-espresso text-cream font-body font-medium rounded-full hover:bg-deep-brown transition-colors flex items-center justify-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span>เพิ่มลงตะกร้า</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
