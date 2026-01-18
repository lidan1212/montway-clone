import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "13 Best Used Car Websites in 2024",
    date: "March 6, 2025",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80",
  },
  {
    id: 2,
    title: "Car Shipping Safety and Security Tips",
    date: "March 6, 2025",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&q=80",
  },
  {
    id: 3,
    title: "The Biggest Motorcycle Rallies to Attend in 2025",
    date: "March 6, 2025",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    id: 4,
    title: "13 FAQs About Entering Car Shows",
    date: "February 26, 2025",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80",
  },
];

export default function LatestStories() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Latest Stories For You
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href="#"
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-[#1a1a1a] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">Posted On: {post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
