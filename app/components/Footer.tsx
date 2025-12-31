"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  quickLinks: [
    { name: "หน้าแรก", href: "#" },
    { name: "สินค้าทั้งหมด", href: "#products" },
    { name: "เกี่ยวกับเรา", href: "#about" },
    { name: "บล็อก", href: "#" },
  ],
  customerService: [
    { name: "ติดต่อเรา", href: "#contact" },
    { name: "นโยบายการจัดส่ง", href: "#" },
    { name: "นโยบายการคืนสินค้า", href: "#" },
    { name: "คำถามที่พบบ่อย", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
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
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Line",
      href: "#",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 5.82 2 10.5c0 2.55 1.25 4.85 3.25 6.45L4 22l4.75-2.5c1 .3 2.1.5 3.25.5 5.52 0 10-3.82 10-8.5S17.52 2 12 2zm4.75 11.5h-7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3h-7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.5c.41 0 .75.34.75.75s-.34.75-.75.75z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const columns = columnsRef.current?.querySelectorAll(".footer-column");
      gsap.from(columns || [], {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="bg-soft-black text-cream pt-16 md:pt-24 pb-8"
    >
      <div className="container-custom">
        <div
          ref={columnsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8"
        >
          {/* Brand Column */}
          <div className="footer-column lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                className="text-cream"
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
              </svg>
              <span className="font-heading text-2xl tracking-wide">AROMA</span>
            </div>

            <p className="font-body text-sm text-cream/60 leading-relaxed mb-6">
              กาแฟคุณภาพ คัดสรรเพื่อคุณ
              <br />
              สัมผัสรสชาติกาแฟพรีเมียมจากแหล่งปลูกชั้นนำทั่วโลก
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/60 hover:bg-latte hover:text-espresso transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="font-heading text-lg text-cream mb-6">
              ลิงก์ด่วน
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-latte transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-column">
            <h4 className="font-heading text-lg text-cream mb-6">
              บริการลูกค้า
            </h4>
            <ul className="space-y-3">
              {footerLinks.customerService.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-latte transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4 className="font-heading text-lg text-cream mb-6">
              ติดต่อเรา
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-latte mt-1 flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-body text-sm text-cream/60">
                  123 ถนนสุขุมวิท แขวงคลองตัน
                  <br />
                  เขตคลองเตย กรุงเทพฯ 10110
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-latte flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+6621234567"
                  className="font-body text-sm text-cream/60 hover:text-latte transition-colors"
                >
                  02-123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-latte flex-shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:hello@aromacoffee.co.th"
                  className="font-body text-sm text-cream/60 hover:text-latte transition-colors"
                >
                  hello@aromacoffee.co.th
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-latte flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="font-body text-sm text-cream/60">
                  จ-ศ: 9:00 - 18:00 น.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/10 my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/40">
            &copy; 2024 AROMA Coffee. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-xs text-cream/40 hover:text-cream/60 transition-colors"
            >
              นโยบายความเป็นส่วนตัว
            </a>
            <a
              href="#"
              className="font-body text-xs text-cream/40 hover:text-cream/60 transition-colors"
            >
              เงื่อนไขการใช้งาน
            </a>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            <span className="font-body text-xs text-cream/40 mr-2">
              ช่องทางชำระเงิน:
            </span>
            <div className="flex items-center gap-2">
              {["Visa", "Mastercard", "PromptPay"].map((payment) => (
                <div
                  key={payment}
                  className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center"
                >
                  <span className="font-body text-[8px] text-cream/60">
                    {payment}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
