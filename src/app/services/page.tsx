import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Ship, Bike, Shield, MapPin, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Door-to-Door Shipping",
    description: "We pick up and deliver your vehicle directly to your specified locations. The most convenient option for residential customers.",
    icon: MapPin,
    href: "/services/door-to-door",
  },
  {
    title: "Open Car Transport",
    description: "The most affordable and popular option. Your vehicle is transported on an open carrier along with other vehicles.",
    icon: Truck,
    href: "/services/open-transport",
  },
  {
    title: "Enclosed Auto Transport",
    description: "Premium protection for luxury, classic, or high-value vehicles. Fully enclosed trailers protect from weather and road debris.",
    icon: Shield,
    href: "/services/enclosed-transport",
  },
  {
    title: "Expedited Shipping",
    description: "Need your car fast? Our expedited service ensures your vehicle is picked up and delivered as quickly as possible.",
    icon: Clock,
    href: "/services/expedited",
  },
  {
    title: "Hawaii Car Shipping",
    description: "Shipping to or from Hawaii? We handle all the logistics including port-to-port and door-to-port options.",
    icon: Ship,
    href: "/services/hawaii",
  },
  {
    title: "Motorcycle Shipping",
    description: "Specialized transport for motorcycles, ATVs, UTVs, and powersports. Experienced handlers ensure safe delivery.",
    icon: Bike,
    href: "/services/motorcycle",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-[#1a1a1a] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Olympic Auto Transport offers a variety of vehicle shipping services to meet your needs.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-[#F5C518] flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#F5C518]" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1a1a1a]">{service.title}</h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#F5C518]" />
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Not Sure Which Service You Need?</h2>
            <p className="text-gray-600 mb-8">
              Our transport specialists are here to help you choose the right service for your vehicle.
              Call us for a free consultation and personalized quote.
            </p>
            <Link
              href="tel:8887946420"
              className="bg-[#F5C518] hover:bg-[#d4a817] text-black font-semibold py-3 px-8 rounded-lg inline-block transition-colors"
            >
              Call (888) 794-6420
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
