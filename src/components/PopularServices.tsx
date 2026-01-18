import { ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Door-To-Door Car Shipping",
    description: "Door-to-door service is a convenient way to ship your car. You provide specific addresses and the truck driver will pickup and drop off your vehicle as close to your door as safely and legally possible.",
  },
  {
    id: 2,
    title: "Hawaii Car Shipping",
    description: "Looking to ship your car to or from Hawaii? Hawaii vehicle shipping is less complicated than you may think. The key is selecting an auto transport provider with experience arranging both door-to-port and port-to-port auto transport.",
  },
  {
    id: 3,
    title: "Motorcycle Shipping",
    description: "Olympic provides our motorcycle transport customers with the best year-round pricing. We use experienced drivers who have the skills and equipment to properly load, secure and transport motorcycles, scooters, ATVs, UTVs and powersports.",
  },
  {
    id: 4,
    title: "Military PCS Shipping",
    description: "Most PCS moves are long distance and require a lot of planning. To make your move easier, use Olympic to transport your personal vehicles. We offer PSC vehicle shipping discounts for those in active duty, Reserves or National Guard.",
  },
];

export default function PopularServices() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Popular vehicle shipping services
          </h2>
          <Link href="#" className="text-[#1a1a1a] font-medium hover:underline hidden md:block">
            Find out how auto transport works
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href="#"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1a1a1a] transition-colors">
                  {service.title}
                </h3>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#1a1a1a] transition-colors flex-shrink-0" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="#" className="text-[#1a1a1a] font-medium hover:underline">
            Find out how auto transport works
          </Link>
        </div>
      </div>
    </section>
  );
}
