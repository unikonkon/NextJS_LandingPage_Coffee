"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import Navigation from "../components/Navigation";

export default function CartPage() {
  const { items, removeFromCart, totalPrice } = useCart();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream pt-28 pb-16">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-warm-gray hover:text-espresso transition-colors font-body text-sm mb-4"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              กลับหน้าหลัก
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl text-espresso">
              ตะกร้าสินค้า
            </h1>
          </div>

          {items.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 text-warm-gray/50">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="w-full h-full"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <p className="font-body text-warm-gray text-lg mb-6">
                ตะกร้าของคุณยังว่างอยู่
              </p>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-cream font-body text-sm rounded-full hover:bg-deep-brown transition-colors"
              >
                เลือกซื้อสินค้า
              </Link>
            </div>
          ) : (
            /* Cart Items */
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Items List */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 bg-white rounded-xl p-4 shadow-sm"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-heading text-lg text-espresso">
                            {item.product.name}
                          </h3>
                          <p className="font-body text-sm text-warm-gray">
                            {item.product.origin} • {item.product.roast}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1.5 text-warm-gray hover:text-espresso transition-colors"
                          aria-label="ลบสินค้า"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="font-body text-sm text-warm-gray">
                          จำนวน: {item.quantity}
                        </span>
                        <span className="font-body text-lg font-medium text-latte">
                          ฿{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-sm sticky top-28">
                  <h2 className="font-heading text-xl text-espresso mb-4">
                    สรุปคำสั่งซื้อ
                  </h2>

                  <div className="space-y-3 mb-6">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex justify-between font-body text-sm"
                      >
                        <span className="text-warm-gray">
                          {item.product.name} x {item.quantity}
                        </span>
                        <span className="text-espresso">
                          ฿{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-espresso/10 pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-body text-lg text-espresso">
                        รวมทั้งหมด
                      </span>
                      <span className="font-heading text-2xl text-latte">
                        ฿{totalPrice.toLocaleString()}
                      </span>
                    </div>

                    <button className="w-full py-3 bg-espresso text-cream font-body text-sm font-medium rounded-full hover:bg-deep-brown transition-colors">
                      ดำเนินการสั่งซื้อ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
