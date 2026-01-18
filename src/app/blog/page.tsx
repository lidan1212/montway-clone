import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "13 Best Used Car Websites in 2024",
    excerpt: "Looking to buy or sell a used car? Check out our comprehensive guide to the best online marketplaces for used vehicles.",
    date: "March 6, 2025",
    category: "Buying Tips",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
  },
  {
    id: 2,
    title: "Car Shipping Safety and Security Tips",
    excerpt: "Learn how to prepare your vehicle for transport and what to look for when choosing an auto transport company.",
    date: "March 6, 2025",
    category: "Shipping Guide",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80",
  },
  {
    id: 3,
    title: "The Biggest Motorcycle Rallies to Attend in 2025",
    excerpt: "Planning to attend a motorcycle rally? Here's our list of the top events you won't want to miss this year.",
    date: "March 6, 2025",
    category: "Events",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 4,
    title: "13 FAQs About Entering Car Shows",
    excerpt: "Everything you need to know about entering your car in a show, from registration to preparation tips.",
    date: "February 26, 2025",
    category: "Car Shows",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
  },
  {
    id: 5,
    title: "How to Prepare Your Car for Long-Distance Shipping",
    excerpt: "A complete checklist to get your vehicle ready for cross-country transport.",
    date: "February 20, 2025",
    category: "Shipping Guide",
    image: "https://images.unsplash.com/photo-1449965408869-ebd3fee56fd8?w=600&q=80",
  },
  {
    id: 6,
    title: "Electric Vehicle Shipping: What You Need to Know",
    excerpt: "Special considerations and tips for shipping electric and hybrid vehicles safely.",
    date: "February 15, 2025",
    category: "EV Transport",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-[#1a1a1a] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tips, guides, and news about auto transport and the automotive industry.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-gray-100"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#F5C518] bg-[#F5C518]/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1a1a1a] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
