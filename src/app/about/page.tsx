import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Truck, Shield, Clock, Phone } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "250K+", label: "Vehicles Shipped" },
  { value: "30K+", label: "Carrier Network" },
  { value: "50", label: "States Covered" },
  { value: "18+", label: "Years Experience" },
];

const values = [
  {
    title: "Customer First",
    description: "We prioritize your satisfaction above all else. Our team is dedicated to providing exceptional service.",
    icon: Users,
  },
  {
    title: "Reliability",
    description: "Count on us to deliver your vehicle safely and on time, every time.",
    icon: Award,
  },
  {
    title: "Transparency",
    description: "No hidden fees or surprises. What we quote is what you pay.",
    icon: Shield,
  },
  {
    title: "24/7 Support",
    description: "Our customer service team is available around the clock to assist you.",
    icon: Clock,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-[#1a1a1a] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Olympic Auto Transport</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for nationwide vehicle shipping since 2006.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Olympic Auto Transport has been a leader in the auto transport industry for over 18 years.
                We've built our reputation on reliability, transparency, and exceptional customer service.
              </p>
              <p className="text-gray-600 mb-4">
                Our network of over 30,000 vetted carriers ensures your vehicle is always in capable hands.
                Whether you're relocating, buying a car online, or shipping a classic vehicle, we have the
                expertise to handle it all.
              </p>
              <p className="text-gray-600">
                We're proud to offer competitive pricing with no hidden fees. Our 10% discount for new
                customers is our way of welcoming you to the Olympic family.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#F5C518] mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="w-14 h-14 rounded-full border-2 border-[#F5C518] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#F5C518]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F5C518] py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Join Thousands of Satisfied Customers</h2>
          <p className="text-[#1a1a1a]/80 mb-8 text-lg">Experience the Olympic difference today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get An Instant Quote
            </Link>
            <Link href="tel:8887946420" className="border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              (888) 794-6420
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
