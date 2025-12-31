# ☕ Coffee Landing Page - Design Specification

> **Project:** Modern Minimalist Coffee E-commerce Landing Page  
> **Tech Stack:** Next.js, TailwindCSS, GSAP  
> **Style:** Modern Minimalist, Clean, Elegant  
> **Version:** 2.0 - Product-First Approach

---

## 📋 Project Overview

เว็บไซต์ Landing Page สำหรับขายกาแฟพรีเมียม ออกแบบในสไตล์ Modern Minimalist โดยเน้นการนำเสนอสินค้าเป็นหลัก ให้ลูกค้าเห็นสินค้าและสามารถเข้าถึงรายละเอียดได้อย่างรวดเร็ว

### เป้าหมายหลัก
- **Product-First** - แสดงสินค้าให้เห็นตั้งแต่แรก
- สร้างประสบการณ์การเลือกซื้อที่ราบรื่น
- นำเสนอข้อมูลกาแฟอย่างละเอียดและน่าสนใจ
- กระตุ้นให้เกิดการซื้อผ่าน CTA ที่ชัดเจน

---

## 🗂️ Site Structure

```
📁 Pages
├── 🏠 Home (Landing Page)
│   ├── Hero + Featured Products
│   ├── Product Grid
│   ├── Best Seller
│   ├── Brand Story
│   ├── Features
│   ├── Testimonials
│   └── Newsletter
│
├── ☕ Product Detail Page (/products/[slug])
│   ├── Product Gallery
│   ├── Product Info
│   ├── Tasting Notes
│   ├── Brewing Guide
│   └── Related Products
│
└── 📄 Other Pages (Optional)
    ├── /products (All Products)
    ├── /about
    └── /contact
```

---

## 🎨 Design Concept

### Style Keywords
- **Minimal** - น้อยแต่มาก ไม่รกตา
- **Elegant** - หรูหราแบบเรียบง่าย
- **Warm** - อบอุ่น เข้ากับ Theme กาแฟ
- **Product-Focused** - สินค้าต้องโดดเด่นที่สุด

---

## 🎨 Color Palette

### Primary Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| Espresso Brown | `#2C1810` | Primary Text, Headings |
| Cream White | `#FAF7F2` | Background |
| Latte Beige | `#D4A574` | Accent, CTA Buttons |

### Secondary Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| Warm Gray | `#8B8178` | Secondary Text |
| Soft Black | `#1A1A1A` | Footer Background |
| Pure White | `#FFFFFF` | Cards, Contrast |

### Accent Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| Gold | `#C9A962` | Premium Badge, Highlights |
| Deep Brown | `#3D2314` | Hover States |

---

## ✍️ Typography

### Font Pairing

**Heading Font:** `Playfair Display` หรือ `Cormorant Garamond`

**Body Font:** `Inter` หรือ `DM Sans`

### Font Sizes (Desktop)
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 - Hero | 72px - 96px | 400 | 1.1 |
| H2 - Section | 48px - 56px | 400 | 1.2 |
| H3 - Card Title | 24px - 32px | 500 | 1.3 |
| Body Large | 18px - 20px | 400 | 1.6 |
| Body Regular | 16px | 400 | 1.6 |
| Caption | 14px | 400 | 1.5 |

---

## 📐 Layout & Spacing

### Spacing System
- **Base Unit:** 8px
- **Section Padding:** 120px - 160px (vertical)
- **Container Max Width:** 1280px
- **Grid Gap:** 32px - 48px

---

# 🏠 PAGE 1: HOME (Landing Page)

## Section Order (Product-First)

1. Navigation Bar
2. Hero + Featured Products (Combined)
3. Product Collection Grid
4. Best Seller Highlight
5. Why Choose Us
6. Brand Story
7. Testimonials
8. Newsletter CTA
9. Footer

---

### 1. Navigation Bar
**Layout:** Fixed Top, Transparent → Solid on Scroll

**Elements:**
- Logo (ซ้าย)
- Menu Links: Home | Products | About | Contact
- Search Icon
- Cart Icon + Count Badge

**Animation:**
- Fade in on load
- Background transition on scroll

---

### 2. Hero + Featured Products (Combined Section)
**Layout:** Split Screen - 50/50 หรือ 60/40

> 💡 **Key Change:** รวม Hero กับ Featured Products เพื่อให้เห็นสินค้าทันที

**Left Side - Hero Content:**
- Headline: "กาแฟคุณภาพ คัดสรรเพื่อคุณ"
- Subheadline: 1-2 บรรทัด
- CTA: "เลือกซื้อเลย" → Scroll ไปยัง Product Grid

**Right Side - Featured Products Preview:**
- แสดง 2-3 สินค้าแนะนำแบบ Stack/Overlap
- แต่ละสินค้า Clickable → ไปหน้า Product Detail
- Quick Info: ชื่อ + ราคา
- Hover: แสดง "ดูรายละเอียด"

**GSAP Animations:**
- Hero Text: Stagger reveal จากล่างขึ้นบน
- Products: 
  - Stagger scale in (0.8 → 1) + rotation (-5deg → 0)
  - Floating animation เบาๆ (translateY loop)
  - Hover: Lift up + Glow effect
- Parallax on scroll

---

### 3. Product Collection Grid
**Layout:** Full-width Section

> 💡 **สินค้าเป็นพระเอก** - Section นี้ต้องโดดเด่นที่สุด

**Section Header:**
- Title: "คอลเลคชันกาแฟ"
- Filter Tabs: ทั้งหมด | Single Origin | Blend | Specialty
- View Toggle: Grid / List (Optional)

**Product Grid:**
- Desktop: 4 columns
- Tablet: 3 columns
- Mobile: 2 columns

**Product Card Elements:**
- Product Image (Clickable → Product Detail)
- Badges: New / Best Seller / Limited
- Product Name (Clickable → Product Detail)
- Origin/Roast Level
- Price
- Rating Stars
- Quick Add to Cart Button
- Wishlist Icon

**GSAP Animations:**
- Grid Items: Stagger fade in + scale (0.95 → 1)
- ScrollTrigger: Animate เมื่อ scroll มาถึง
- Filter Change: Items fade out → rearrange → fade in
- Card Hover:
  - Lift up (translateY: -12px)
  - Shadow expand
  - Image zoom (scale: 1.08)
  - Quick action buttons slide in
- Image: Subtle parallax within card
- "View Details" text fade in on hover

**Product Card Interaction:**
- Click Card → Navigate to Product Detail Page
- Click Add to Cart → Add animation + Toast notification
- Click Wishlist → Heart fill animation

---

### 4. Best Seller Highlight
**Layout:** Large Asymmetric Section

**Elements:**
- Large Product Image (60% width) - Clickable
- "Best Seller" Badge with animation
- Product Name (Large)
- Flavor description
- Tasting Notes Tags
- Price + Add to Cart
- "ดูรายละเอียดเพิ่มเติม" Link → Product Detail

**GSAP Animations:**
- Image: Reveal with mask animation
- Badge: Bounce in + Shimmer effect
- Text: Line by line reveal
- Floating decorative coffee beans

---

### 5. Why Choose Us
**Layout:** 4 Columns

**Feature Cards:**
1. คัดสรรเมล็ดกาแฟคุณภาพ
2. คั่วสดทุกวัน
3. จัดส่งรวดเร็ว
4. ยินดีคืนเงิน

**GSAP Animations:**
- Icons: SVG draw animation
- Cards: Stagger reveal
- Hover: Icon pulse

---

### 6. Brand Story
**Layout:** 2 Column (Image + Text)

**Elements:**
- Section Title: "เรื่องราวของเรา"
- Story paragraph
- Key Numbers: ปีประสบการณ์, ลูกค้า, ประเทศที่ import

**GSAP Animations:**
- Text fade in + slide
- Numbers count up
- Image parallax

---

### 7. Testimonials
**Layout:** Carousel

**Elements:**
- Customer Quote
- Customer Info
- Rating Stars

**GSAP Animations:**
- Slide transition
- Quote marks scale

---

### 8. Newsletter CTA
**Layout:** Full-width Banner

**Elements:**
- Headline: "รับส่วนลด 10%"
- Email Input + Subscribe Button

**GSAP Animations:**
- Content slide up
- Background gradient shift

---

### 9. Footer
**Layout:** 4 Columns + Bottom bar

**Columns:**
1. Brand + Social
2. Quick Links
3. Customer Service
4. Contact Info

---

# ☕ PAGE 2: PRODUCT DETAIL PAGE

## URL Structure
`/products/[slug]`
Example: `/products/ethiopia-yirgacheffe`

---

## Page Layout Overview

```
┌─────────────────────────────────────────────────┐
│                   Navigation                     │
├─────────────────────────────────────────────────┤
│  Breadcrumb: Home > Products > Ethiopia          │
├──────────────────────┬──────────────────────────┤
│                      │                          │
│   Product Gallery    │    Product Info          │
│   (Image Slider)     │    - Name                │
│                      │    - Price               │
│   [Main Image]       │    - Rating              │
│                      │    - Description         │
│   [Thumbnails]       │    - Options             │
│                      │    - Add to Cart         │
│                      │                          │
├──────────────────────┴──────────────────────────┤
│                                                 │
│              Product Details Tabs               │
│   [Tasting Notes] [Brewing Guide] [Reviews]     │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│              Related Products                   │
│                                                 │
├─────────────────────────────────────────────────┤
│                    Footer                       │
└─────────────────────────────────────────────────┘
```

---

## Product Detail Sections

### 1. Breadcrumb Navigation
**Elements:**
- Home > Products > [Category] > [Product Name]
- Clickable links

**Animation:**
- Fade in on page load

---

### 2. Product Gallery (Left Side)
**Layout:** Main Image + Thumbnail Strip

**Elements:**
- Main Image Display (Large, High Quality)
- Thumbnail Navigation (4-6 images)
- Zoom on Hover/Click
- Lightbox for Full View
- 360° View Button (Optional)
- Video thumbnail (Optional)

**Image Types:**
- Product front view
- Product packaging
- Coffee beans close-up
- Brewing result
- Lifestyle shot

**GSAP Animations:**
- Main Image: Fade + Scale on change
- Thumbnails: Active state highlight
- Zoom: Smooth scale transition
- Lightbox: Overlay fade + Image scale in
- Hover on main image: Subtle zoom indicator

---

### 3. Product Information (Right Side)
**Layout:** Vertical stack

**Elements:**

**Header:**
- Product Name (H1)
- Origin Badge (e.g., "Ethiopia")
- Rating: ⭐⭐⭐⭐⭐ (4.8) - 128 รีวิว
- Price: ฿450 (หากมี discount แสดง ~~฿550~~ ฿450)

**Short Description:**
- 2-3 บรรทัดอธิบายสินค้า
- Highlight จุดเด่น

**Product Options:**
- **ขนาด:** 250g | 500g | 1kg (Radio/Button group)
- **ระดับการบด:** 
  - เมล็ดทั้งเม็ด
  - บดหยาบ (French Press)
  - บดกลาง (Pour Over)
  - บดละเอียด (Espresso)
- **Subscription Option:** ซื้อครั้งเดียว | สมัครรับรายเดือน (-10%)

**Quantity & Actions:**
- Quantity Selector: [ - ] 1 [ + ]
- Add to Cart Button (Primary, Large)
- Add to Wishlist Button (Icon)
- Share Button (Icon)

**Trust Signals:**
- ✓ จัดส่งฟรีเมื่อซื้อครบ ฿1,000
- ✓ คั่วสดก่อนส่ง
- ✓ ยินดีคืนเงินภายใน 30 วัน

**GSAP Animations:**
- Content: Stagger fade in from right
- Price: Number highlight animation
- Options: Smooth selection transition
- Add to Cart: 
  - Button pulse on hover
  - Success animation (checkmark + color change)
  - Cart icon bounce in navbar
- Quantity: Number flip animation
- Trust signals: Checkmark draw animation

---

### 4. Product Details Tabs
**Layout:** Tab navigation with content panels

**Tabs:**

#### Tab 1: รายละเอียดสินค้า
**Content:**
- Full product description
- Origin story
- Processing method
- Roast date information

#### Tab 2: Tasting Notes
**Content:**
- Flavor Wheel Visualization
- Flavor Tags: ช็อกโกแลต, ผลไม้เบอร์รี่, ถั่ว, คาราเมล
- Aroma Description
- Acidity Level: ●●●○○
- Body: ●●●●○
- Sweetness: ●●●○○
- Roast Level: Light | Medium | Dark (Visual indicator)

**Visual:**
- Interactive flavor wheel (hover to highlight)
- Radar chart showing flavor profile

#### Tab 3: วิธีชง (Brewing Guide)
**Content:**
- Recommended brewing methods
- Step-by-step instructions
- Optimal ratios (coffee:water)
- Temperature & Time
- Tips for best results

**Visual:**
- Icons for each brewing method
- Illustrated steps

#### Tab 4: รีวิวจากลูกค้า
**Content:**
- Overall Rating Summary
- Rating Breakdown (5 stars: 80%, 4 stars: 15%...)
- Individual Reviews:
  - Customer name
  - Date
  - Rating
  - Review text
  - Helpful button
- Write Review CTA
- Sort/Filter options

**GSAP Animations:**
- Tab switch: Content fade out → fade in
- Flavor wheel: Rotate + Segments highlight
- Radar chart: Draw animation
- Reviews: Stagger load
- Rating bars: Fill animation

---

### 5. Product Specifications
**Layout:** Clean table หรือ 2-column list

**Information:**
| Field | Example |
|-------|---------|
| แหล่งปลูก | Ethiopia, Yirgacheffe |
| ระดับความสูง | 1,800 - 2,200 เมตร |
| พันธุ์กาแฟ | Heirloom |
| กระบวนการ | Washed |
| ระดับการคั่ว | Medium Light |
| น้ำหนักสุทธิ | 250g / 500g / 1kg |
| วันที่คั่ว | คั่วสดก่อนจัดส่ง |
| อายุการเก็บรักษา | 12 เดือน |

**Animation:**
- Fade in on scroll

---

### 6. Related Products
**Layout:** Horizontal scroll หรือ 4-column grid

**Section Title:** "สินค้าที่คุณอาจชอบ" หรือ "กาแฟจาก Origin เดียวกัน"

**Card Elements:**
- Product Image (Clickable)
- Product Name
- Price
- Quick Add Button

**Logic for Related:**
- Same origin
- Same roast level
- Frequently bought together
- Similar flavor profile

**GSAP Animations:**
- Cards: Stagger fade in
- Hover: Same as main product grid
- Scroll: Smooth horizontal scroll with momentum

---

### 7. Recently Viewed
**Layout:** Small horizontal strip

**Elements:**
- "เพิ่งดูล่าสุด" title
- Small product thumbnails (clickable)
- Max 4-6 items

---

## Page Transitions

### From Home to Product Detail
- Click product card
- Card expands animation (FLIP technique)
- Page transition: Fade + Slide
- Product image maintains position during transition

### Navigation within Product Detail
- Tab switches: Smooth content transition
- Image changes: Crossfade
- Back to products: Reverse transition

---

# ✨ GSAP Animation Specifications

## Animation Library Setup
- GSAP Core
- ScrollTrigger Plugin
- SplitText Plugin
- Flip Plugin (สำหรับ page transitions)

## Global Settings
```
Default Duration: 0.8s - 1.2s
Default Ease: "power2.out" หรือ "power3.out"
Stagger Delay: 0.1s - 0.15s
ScrollTrigger Start: "top 80%"
```

## Product-Focused Animations

### Product Card Hover
```
Duration: 0.3s
Properties:
- translateY: 0 → -12px
- boxShadow: expand
- scale (image): 1 → 1.08
Ease: "power2.out"
```

### Add to Cart Success
```
Sequence:
1. Button pulse (scale 1 → 1.05 → 1)
2. Checkmark draw
3. Color transition
4. Cart icon bounce
Duration: 0.6s total
```

### Product Image Gallery
```
Main image change:
- Current: fade out + scale down
- New: fade in + scale up
Duration: 0.4s
```

### Flavor Wheel
```
On scroll into view:
- Rotate 360°
- Segments draw one by one
- Labels fade in
Duration: 1.5s
```

### Page Transition (Product Grid → Detail)
```
Using FLIP technique:
- Capture product card position
- Navigate to detail page
- Animate image to new position
Duration: 0.6s
Ease: "power3.inOut"
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 768px | Stack layout, 2-col products |
| Tablet | 768px - 1024px | 3-col products |
| Desktop | > 1024px | Full layout |

### Product Detail - Mobile Adjustments
- Gallery: Full width, swipeable
- Info: Below gallery
- Tabs: Accordion style
- Sticky Add to Cart bar at bottom

---

## 🖼️ Image Guidelines

### Product Images
| Type | Dimensions | Format |
|------|------------|--------|
| Main Gallery | 1200 x 1200 | WebP |
| Thumbnail | 150 x 150 | WebP |
| Card Image | 600 x 600 | WebP |
| Zoom View | 2400 x 2400 | WebP |

---

## 🧩 Component Checklist

### New Components for Product Detail
- [ ] Image Gallery with Zoom
- [ ] Lightbox Modal
- [ ] Size/Option Selector
- [ ] Quantity Input
- [ ] Tab Component
- [ ] Flavor Wheel
- [ ] Rating Display
- [ ] Review Card
- [ ] Review Form
- [ ] Related Products Carousel
- [ ] Breadcrumb
- [ ] Sticky Add to Cart (Mobile)
- [ ] Share Modal

### Interactions
- [ ] Add to Cart with animation
- [ ] Wishlist toggle
- [ ] Image zoom
- [ ] Tab switching
- [ ] Size/Option selection
- [ ] Quantity update
- [ ] Review submission
- [ ] Share functionality

---

## 📝 Content Needed

### Per Product
- [ ] Product name (TH + EN)
- [ ] Short description (50-100 words)
- [ ] Full description (150-300 words)
- [ ] Origin story
- [ ] Tasting notes & flavor tags
- [ ] Brewing recommendations
- [ ] Specifications data
- [ ] 4-6 product images
- [ ] Price for each size variant

---

## 🔧 Technical Implementation Notes

### Next.js Dynamic Routes
```
/products/[slug]/page.tsx
```

### Data Fetching
- Static Generation (SSG) for product pages
- Revalidate: 3600 (1 hour)
- Fallback: true for new products

### State Management
- Cart state: Zustand หรือ Context
- Wishlist: Local storage + Sync
- Recently viewed: Local storage

### SEO
- Dynamic meta tags per product
- Structured data (Product schema)
- Open Graph images

---

## 📅 Updated Timeline

| Phase | Duration | Tasks |
|-------|----------|-------|
| Design | 1-2 weeks | UI Design ทั้ง 2 pages |
| Setup | 2-3 days | Project setup |
| Home Page | 1-2 weeks | Components + Animations |
| Product Detail | 1-2 weeks | All sections + Interactions |
| Integration | 3-5 days | Content, Testing |
| Launch | 1-2 days | Deployment |

---

*Document Version: 2.0*  
*Last Updated: January 2025*  
*Changes: Product-First approach, Added Product Detail Page*
