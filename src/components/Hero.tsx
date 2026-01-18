"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-ebd3fee56fd8?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Fast & reliable nationwide auto transport company
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              <span className="text-[#F5C518] font-semibold">Olympic Auto Transport</span> is the number one rated car transporter in the U.S.
            </p>
          </div>

          {/* Quote form */}
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Book <span className="text-[#1a1a1a]">an instant Appointment</span>
              </h2>
              <p className="text-gray-600 mt-2">
                or <span className="font-semibold">call</span> now{" "}
                <a href="tel:8887946420" className="text-[#F5C518] font-semibold hover:underline">
                  (888) 794-6420
                </a>
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transport Car FROM
                </label>
                <input
                  type="text"
                  placeholder="Zip Or City"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transport Car TO
                </label>
                <input
                  type="text"
                  placeholder="Zip Or City"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F5C518] hover:bg-[#d4a817] text-black font-semibold flex items-center justify-center gap-2 py-4 rounded-lg text-lg transition-colors"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
