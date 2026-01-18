import { Star } from "lucide-react";

const ratings = [
  {
    id: 1,
    name: "Google",
    rating: 4.7,
    reviews: "32749",
    logo: "G",
    bgColor: "bg-white",
  },
  {
    id: 2,
    name: "BBB",
    rating: 4.5,
    reviews: "4440",
    logo: "BBB",
    bgColor: "bg-blue-600",
    textColor: "text-white",
  },
  {
    id: 3,
    name: "Transport Reviews",
    rating: 4.8,
    reviews: "11838",
    logo: "TR",
    bgColor: "bg-orange-500",
    textColor: "text-white",
  },
  {
    id: 4,
    name: "My Moving Reviews",
    rating: 4.8,
    reviews: "960",
    logo: "MMR",
    bgColor: "bg-green-600",
    textColor: "text-white",
  },
];

export default function ReviewRatings() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ratings.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-600">{item.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={`star-${item.id}-${i}`}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">({item.reviews} reviews)</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-gray-900">{item.rating}</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div
                  className={`${item.bgColor} ${item.textColor || "text-gray-900"} px-3 py-1 rounded text-sm font-bold`}
                >
                  {item.logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
