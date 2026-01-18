import { Car, Gauge, Truck, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

const factors = [
  {
    id: 1,
    title: "Size and weight of vehicle",
    icon: Car,
  },
  {
    id: 2,
    title: "The car condition",
    icon: Gauge,
  },
  {
    id: 3,
    title: "The transport type",
    icon: Truck,
  },
  {
    id: 4,
    title: "The shipping distance",
    icon: MapPin,
  },
];

export default function PricingFactors() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              How much do car transport companies charge?
            </h2>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-4">
                Car shipping costs are based on several factors, including current market trends,
                carrier availability, and fuel prices. Your total cost will also depend on the type
                of car you want to move, where it needs to go, its size, condition (or if it has any
                modifications), total transport distance, transport type (open or enclosed trailer
                shipment), and finally, the time of year when you book.
              </p>

              <p className="text-gray-600 mb-4">
                While our{" "}
                <Link href="#" className="text-[#2b9cd0] hover:underline">
                  instant quote calculator
                </Link>{" "}
                provides the most accurate estimates in the industry, rates often change. That means
                prices can increase before your vehicle is picked up or assigned to a driver. The
                Montway TruePrice Guarantee protects customers from unexpected price increases and
                ensures a predictable cost.
              </p>

              <p className="text-gray-600 mb-6">
                Get a quote with our car shipping calculator, use our{" "}
                <Link href="#" className="text-[#2b9cd0] hover:underline">
                  Live Chat
                </Link>
                , or call{" "}
                <Link href="tel:8886668929" className="text-[#2b9cd0] hover:underline">
                  (888) 666-8929
                </Link>
                .
              </p>
            </div>

            <Link
              href="#"
              className="btn-outline inline-flex items-center gap-2"
            >
              Car shipping cost information
            </Link>
          </div>

          {/* Right - Factors */}
          <div className="space-y-4">
            {factors.map((factor) => {
              const Icon = factor.icon;
              return (
                <Link
                  key={factor.id}
                  href="#"
                  className="flex items-center justify-between bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#dae8ef] rounded-lg p-3">
                      <Icon className="w-6 h-6 text-[#2b9cd0]" />
                    </div>
                    <span className="font-medium text-gray-900">{factor.title}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
