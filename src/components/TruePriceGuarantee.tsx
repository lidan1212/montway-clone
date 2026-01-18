import { Car, Gauge, Truck, MapPin } from "lucide-react";
import Link from "next/link";

const factors = [
  {
    id: 1,
    title: "Size & Weight of Vehicle",
    description: "Longer, taller or heavier-than-average vehicles require special accommodations by car transport companies and, as a result, the price may vary.",
    icon: Car,
  },
  {
    id: 2,
    title: "The Car Condition",
    description: "Shipping inoperable vehicles costs more because it requires extra tools and labor for car shipping companies to accommodate the cargo.",
    icon: Gauge,
  },
  {
    id: 3,
    title: "The Transport Type",
    description: "Your price can vary depending on the trailer type. Open transport is the standard and more affordable option, while enclosed transport requires specific handling.",
    icon: Truck,
  },
  {
    id: 4,
    title: "The Shipping Distance",
    description: "Longer runs have a higher overall price but lower cost per mile. The further your vehicle travels, the more you save on an auto transporter.",
    icon: MapPin,
  },
];

export default function TruePriceGuarantee() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How much do car transport companies charge?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Car shipping quotes are based on current market trends for nationwide auto transport. Your total cost from auto shipping companies will depend on several factors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {factors.map((factor) => {
            const Icon = factor.icon;
            return (
              <div
                key={factor.id}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full border-2 border-[#F5C518] flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#F5C518]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{factor.title}</h3>
                <p className="text-sm text-gray-600">{factor.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-semibold py-3 px-8 rounded-lg inline-block transition-colors"
          >
            Car Shipping Cost Information
          </Link>
        </div>
      </div>
    </section>
  );
}
