import { ChevronRight } from "lucide-react";
import Link from "next/link";

const states = [
  {
    id: 1,
    name: "California",
    description: "Car shipping services anywhere to or from The Golden State",
    image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80",
  },
  {
    id: 2,
    name: "Florida",
    description: "Florida auto transport services, to and from The Sunshine State",
    image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=800&q=80",
  },
  {
    id: 3,
    name: "Texas",
    description: "Vehicle shipping services to and throughout The Lone Star State",
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&q=80",
  },
  {
    id: 4,
    name: "New York",
    description: "Transport your car anywhere to or from The Empire State",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
  },
];

export default function StateCards() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Car transport anywhere in the U.S.
          </h2>
          <Link href="#" className="text-[#1a1a1a] font-medium hover:underline hidden md:block">
            Ship your car to any state across the country
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {states.map((state) => (
            <Link
              key={state.id}
              href="#"
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{state.name}</h3>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 text-center">{state.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="#" className="text-[#1a1a1a] font-medium hover:underline">
            Ship your car to any state across the country
          </Link>
        </div>
      </div>
    </section>
  );
}
