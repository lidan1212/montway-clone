import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClipboardList, Truck, CheckCircle, Phone, Shield, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: 1,
    title: "Get a Quote & Book",
    description: "Enter your pickup and delivery locations to receive an instant quote. Once you're satisfied with the price, book your order online or call us.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "Vehicle Pickup",
    description: "A professional carrier will pick up your vehicle at the scheduled time. We'll perform a thorough inspection and document the condition of your car.",
    icon: Truck,
  },
  {
    step: 3,
    title: "Safe Delivery",
    description: "Your vehicle is transported safely to its destination. Upon delivery, we'll conduct another inspection to ensure everything is in order.",
    icon: CheckCircle,
  },
];

const benefits = [
  {
    title: "No Upfront Payment",
    description: "You don't pay until your vehicle is picked up by the carrier.",
    icon: DollarSign,
  },
  {
    title: "Insurance Coverage",
    description: "Every vehicle is covered by carrier cargo insurance during transport.",
    icon: Shield,
  },
  {
    title: "Real-Time Updates",
    description: "Track your shipment and receive updates throughout the process.",
    icon: Clock,
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-[#1a1a1a] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How Auto Transport Works</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Shipping your vehicle is easy with Olympic Auto Transport. Follow our simple 3-step process.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="text-center">
                  <div className="w-20 h-20 rounded-full border-4 border-[#F5C518] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-[#F5C518]" />
                  </div>
                  <div className="text-[#F5C518] font-bold text-sm mb-2">STEP {step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Olympic?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="w-14 h-14 rounded-full border-2 border-[#F5C518] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#F5C518]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F5C518] py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Ready to Ship Your Vehicle?</h2>
          <p className="text-[#1a1a1a]/80 mb-8 text-lg">Get an instant quote or call us today!</p>
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
