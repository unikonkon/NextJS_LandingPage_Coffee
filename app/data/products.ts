export interface Product {
  id: number;
  name: string;
  category: string;
  origin: string;
  roast: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  badge: string | null;
}

export const categories = [
  { id: "all", name: "ทั้งหมด" },
  { id: "single-origin", name: "Single Origin" },
  { id: "blend", name: "Blend" },
  { id: "specialty", name: "Specialty" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Ethiopia Yirgacheffe",
    category: "single-origin",
    origin: "Ethiopia",
    roast: "Light Roast",
    price: 450,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Colombia Supremo",
    category: "single-origin",
    origin: "Colombia",
    roast: "Medium Roast",
    price: 420,
    rating: 4.8,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=600&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "Kenya AA",
    category: "single-origin",
    origin: "Kenya",
    roast: "Medium Roast",
    price: 480,
    rating: 4.7,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&h=600&fit=crop",
    badge: "Limited",
  },
  {
    id: 4,
    name: "House Blend",
    category: "blend",
    origin: "Multi-Origin",
    roast: "Medium-Dark",
    price: 380,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    badge: null,
  },
  {
    id: 5,
    name: "Guatemala Antigua",
    category: "single-origin",
    origin: "Guatemala",
    roast: "Medium Roast",
    price: 440,
    rating: 4.6,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=600&fit=crop",
    badge: null,
  },
  {
    id: 6,
    name: "Espresso Blend",
    category: "blend",
    origin: "Brazil & Ethiopia",
    roast: "Dark Roast",
    price: 400,
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 7,
    name: "Panama Geisha",
    category: "specialty",
    origin: "Panama",
    roast: "Light Roast",
    price: 1200,
    rating: 5.0,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=600&h=600&fit=crop",
    badge: "Premium",
  },
  {
    id: 8,
    name: "Brazil Santos",
    category: "single-origin",
    origin: "Brazil",
    roast: "Medium Roast",
    price: 360,
    rating: 4.5,
    reviews: 184,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&h=600&fit=crop",
    badge: null,
  },
];
