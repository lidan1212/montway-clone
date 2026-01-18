"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "Can I put personal items in the car?",
    answer: "You can put personal items up to 100 lbs. in a box or single piece of luggage that will be in the trunk of the car during transport.",
  },
  {
    id: 2,
    question: "Is my vehicle insured during transport?",
    answer: "Yes, your vehicle will be covered by the carrier's cargo insurance. Additionally, we have our own contingent cargo insurance for added protection.",
  },
  {
    id: 3,
    question: "When is the vehicle going to be picked-up?",
    answer: "Pickup windows typically range from 1-5 business days depending on the route and carrier availability. We'll provide you with updates throughout the process.",
  },
  {
    id: 4,
    question: "When will my vehicle be delivered?",
    answer: "Delivery times depend on the distance and route. Short hauls may take 1-3 days, while cross-country transport typically takes 7-10 days.",
  },
  {
    id: 5,
    question: "Can I track my vehicle online?",
    answer: "Yes, you can track your vehicle's transport status through our online portal or by contacting our customer service team for updates.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Accordion */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-2">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border-b border-gray-200"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        openId === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openId === faq.id && (
                    <div className="pb-4 pr-8 animate-fadeIn">
                      <p className="text-gray-600 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="lg:mt-16">
            <div className="bg-[#F5C518] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                Ready to get a car shipping quote with Olympic?
              </h3>
              <p className="text-[#1a1a1a]/80 mb-6">
                Use the calculator below or call us at{" "}
                <Link href="tel:8887946420" className="font-semibold hover:underline">
                  (888) 794-6420
                </Link>{" "}
                today!
              </p>
              <Link href="#quote" className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white font-semibold py-3 px-6 rounded-lg inline-block transition-colors">
                Get An Instant Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
