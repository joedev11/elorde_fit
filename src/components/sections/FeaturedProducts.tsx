import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "12-Week Strength Program",
    category: "Programs",
    price: "$49.99",
    badge: "Best Seller",
    image: "https://placehold.co/500x600/1a1a1a/444444?text=Program+1",
    href: "/programs/12-week-strength",
  },
  {
    id: 2,
    name: "Performance Tee — Black",
    category: "Apparel",
    price: "$34.99",
    badge: "New",
    image: "https://placehold.co/500x600/222222/555555?text=Tee+Black",
    href: "/apparel/performance-tee-black",
  },
  {
    id: 3,
    name: "Hybrid Athlete E-Book",
    category: "E-Books",
    price: "$19.99",
    badge: null,
    image: "https://placehold.co/500x600/1a1a1a/444444?text=E-Book",
    href: "/ebooks/hybrid-athlete",
  },
  {
    id: 4,
    name: "Training Shorts — Olive",
    category: "Apparel",
    price: "$44.99",
    badge: "New",
    image: "https://placehold.co/500x600/222222/555555?text=Shorts+Olive",
    href: "/apparel/training-shorts-olive",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.3em] mb-2">Handpicked</p>
            <h2 className="text-4xl font-black uppercase tracking-tight text-black">Featured Products</h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:block text-sm font-bold uppercase tracking-widest text-black border-b-2 border-[#CC0000] pb-0.5 hover:text-[#CC0000] transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group flex flex-col">
              <div className="relative overflow-hidden bg-[#F5F5F5] aspect-[5/6]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#CC0000] text-white text-xs font-bold uppercase tracking-wide px-2 py-1">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-black py-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Quick Add</span>
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-0.5">
                <p className="text-xs text-[#CC0000] font-semibold uppercase tracking-wider">{product.category}</p>
                <h3 className="text-sm font-bold text-black uppercase tracking-wide leading-tight">{product.name}</h3>
                <p className="text-sm font-semibold text-[#414142] mt-1">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link
            href="/products"
            className="text-sm font-bold uppercase tracking-widest text-black border-b-2 border-[#CC0000] pb-0.5"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
