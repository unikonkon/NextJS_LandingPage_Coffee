"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useCart } from "../context/CartContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initial animation
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(linksRef.current?.children || [], {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.4,
      });
    });

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "หน้าแรก", href: "#" },
    { name: "สินค้า", href: "#products" },
    { name: "เกี่ยวกับเรา", href: "#about" },
    { name: "ติดต่อ", href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(44,24,16,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center gap-3">
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="text-espresso"
              >
                <path
                  d="M8 12C8 12 12 8 20 8C28 8 32 12 32 12V28C32 28 28 32 20 32C12 32 8 28 8 28V12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <ellipse
                  cx="20"
                  cy="10"
                  rx="10"
                  ry="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M32 16C35 16 37 18 37 20C37 22 35 24 32 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M16 2C16 2 18 5 20 5C22 5 24 2 24 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="opacity-60"
                />
                <path
                  d="M18 0C18 0 19 3 20 3C21 3 22 0 22 0"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  className="opacity-40"
                />
              </svg>
            </div>
            <span className="font-heading text-2xl md:text-3xl tracking-wide text-espresso">
              AROMA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div
            ref={linksRef}
            className="hidden md:flex items-center gap-8 lg:gap-12"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-body text-sm tracking-wide text-espresso/80 hover:text-espresso transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-latte group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search */}
            {/* <button
              className="p-2 text-espresso/70 hover:text-espresso transition-colors duration-300"
              aria-label="ค้นหา"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button> */}

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-espresso/70 hover:text-espresso transition-colors duration-300"
              aria-label="ตะกร้าสินค้า"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-latte text-espresso text-xs font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-espresso"
              aria-label="เมนู"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-px bg-espresso transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-px bg-espresso transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-px bg-espresso transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-cream/98 backdrop-blur-md transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-80 border-b border-espresso/10" : "max-h-0"
        }`}
      >
        <div className="container-custom py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-lg text-espresso/80 hover:text-espresso transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
