"use client";

import {
  Users,
  Headphones,
  Award,
  CreditCard,
  Shield,
  Truck,
  Clock,
  UserCheck,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Leave it to the pros",
    icon: UserCheck,
    description:
      "As a top-rated auto transport company, you can have confidence your vehicle will be transported safely. When shipping your vehicle, you're allowing our team of experts to handle every step of the process, ensuring there are no speed bumps along the way.",
  },
  {
    id: 2,
    title: "Personalized approach",
    icon: Users,
    description:
      "Why choose our auto transport company? Olympic Auto Transport works with you through every step of your car or truck's move. Experience hassle-free shipping when you choose us as your car transporter and enjoy an easy and painless shipment process.",
  },
  {
    id: 3,
    title: "Dedicated advisors",
    icon: Headphones,
    description:
      "Our professional advisors work around the clock to ensure you receive the best auto transport experience.",
  },
  {
    id: 4,
    title: "The best company",
    icon: Award,
    description:
      "Why do customers say Olympic is the best company to ship a car? Check out our online reviews to see why we're widely considered one of the best car moving companies and car hauling companies in the business.",
  },
  {
    id: 5,
    title: "Zero upfront Payment",
    icon: CreditCard,
    description:
      "You read that right, no upfront payment! The best auto transport companies charge you once the carrier has been dispatched for your order. So, you can book with your auto transport company now and not worry about the car shipping costs until later.",
  },
  {
    id: 6,
    title: "Insurance Coverage",
    icon: Shield,
    description:
      "Car transport companies include insurance coverage in your shipping quote. Our selected auto haulers must meet insurance standards before qualifying to be part of our carrier network.",
  },
  {
    id: 7,
    title: "30K+ auto carriers",
    icon: Truck,
    description:
      "Our auto transporter company has a huge network of haulers who are personally vetted auto shipping experts, ensuring your vehicle is transported by trusted members of the industry.",
  },
  {
    id: 8,
    title: "Extended Hours",
    icon: Clock,
    description:
      "Our award-winning auto transport advisors work 365 days a year to guarantee we're available to address your vehicle transportation needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
          Why you should book one of the best auto shipping companies
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#F5C518] flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#F5C518]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
