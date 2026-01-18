"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Cross Country Shipping", href: "#" },
    { label: "Door-to-Door Shipping", href: "#" },
    { label: "Enclosed Auto Transport", href: "#" },
    { label: "Expedited Car Shipping", href: "#" },
    { label: "Open Auto Transport", href: "#" },
    { label: "Hawaii Car Transport", href: "#" },
    { label: "Motorcycle Shipping", href: "#" },
  ],
  legal: [
    { label: "Affiliate Program", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Terms & Conditions B2B", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Sitemap", href: "#" },
    { label: "Cookie Preferences", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and address */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">OLYMPIC</span>
              <span className="block text-xs text-gray-400 font-medium tracking-widest">AUTO TRANSPORT</span>
            </div>

            <div className="text-sm text-gray-400">
              <p className="font-medium text-white mb-1">Olympic Auto Transport</p>
              <Link href="tel:8887946420" className="text-[#F5C518] hover:underline block mt-2">
                (888) 794-6420
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#F5C518] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#F5C518] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#F5C518] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#F5C518] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <p className="text-sm text-gray-400 text-center">
            Copyright 2006-2026 by Olympic Auto Transport. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
