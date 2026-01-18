"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    title: "Phone",
    value: "(888) 794-6420",
    href: "tel:8887946420",
    icon: Phone,
  },
  {
    title: "Email",
    value: "info@olympicautotransport.com",
    href: "mailto:info@olympicautotransport.com",
    icon: Mail,
  },
  {
    title: "Hours",
    value: "Mon-Fri: 8AM-8PM EST",
    href: null,
    icon: Clock,
  },
  {
    title: "Location",
    value: "Nationwide Service",
    href: null,
    icon: MapPin,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-[#1a1a1a] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our team anytime.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C518] focus:border-transparent outline-none transition resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F5C518] hover:bg-[#d4a817] text-black font-semibold py-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 rounded-full border-2 border-[#F5C518] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#F5C518]" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{info.title}</div>
                        <div className="text-gray-600">{info.value}</div>
                      </div>
                    </div>
                  );
                  return info.href ? (
                    <a key={info.title} href={info.href} className="block hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    <div key={info.title}>{content}</div>
                  );
                })}
              </div>

              <div className="bg-[#1a1a1a] rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Need Immediate Assistance?</h3>
                <p className="text-gray-300 mb-4">
                  Our customer service team is standing by to help you with your vehicle shipping needs.
                </p>
                <a
                  href="tel:8887946420"
                  className="bg-[#F5C518] hover:bg-[#d4a817] text-black font-semibold py-3 px-6 rounded-lg inline-block transition-colors"
                >
                  Call Now: (888) 794-6420
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
