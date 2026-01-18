import { ClipboardList, Truck, CheckCircle, Play } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: 1,
    title: "Quote and book your order",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "We pick up your vehicle",
    icon: Truck,
  },
  {
    step: 3,
    title: "Receive your vehicle",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps Card */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Auto Transporter Steps:</h3>

            <div className="space-y-6">
              {steps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg border-2 border-[#F5C518] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#F5C518]" />
                    </div>
                    <div>
                      <span className="text-[#1a1a1a] font-semibold text-sm">Step {item.step}</span>
                      <p className="text-gray-700">{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="#quote" className="bg-[#F5C518] hover:bg-[#d4a817] text-black font-semibold py-3 px-6 rounded-lg text-center">
                Get An Instant Quote
              </Link>
              <Link href="#" className="border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors">
                Learn More
              </Link>
            </div>
          </div>

          {/* Video thumbnail */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80"
              alt="Car transport truck"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="bg-white/20 hover:bg-white/30 rounded-full p-5 backdrop-blur-sm transition" aria-label="Play video">
                <Play className="w-12 h-12 text-white fill-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
