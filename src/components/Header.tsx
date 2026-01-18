"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navItems = [
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Door-to-Door Shipping", href: "/services" },
      { label: "Open Car Transport", href: "/services" },
      { label: "Enclosed Auto Transport", href: "/services" },
      { label: "Expedited Shipping", href: "/services" },
      { label: "Hawaii Car Shipping", href: "/services" },
      { label: "Motorcycle Shipping", href: "/services" },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#1a1a1a] text-white text-sm py-2.5 px-4 text-center">
        <p className="max-w-5xl mx-auto">
          <span className="text-[#F5C518] font-semibold">Olympic Auto Transport</span> offers a{" "}
          <span className="text-[#F5C518] font-bold">10% discount</span> for new customers to welcome you to our family of satisfied clients
        </p>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-left">
                <span className="text-2xl font-bold text-[#1a1a1a] tracking-tight">OLYMPIC</span>
                <span className="block text-xs text-gray-500 font-medium tracking-widest">AUTO TRANSPORT</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#1a1a1a] py-2"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {activeDropdown === item.label && item.submenu && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[220px] border border-gray-100">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a1a1a]"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="tel:8887946420"
                className="flex items-center gap-2 text-[#1a1a1a] font-semibold hover:text-gray-700"
              >
                <Phone className="w-4 h-4" />
                (888) 794-6420
              </Link>
              <Link
                href="#quote"
                className="bg-[#F5C518] hover:bg-[#d4a817] text-black font-semibold py-2.5 px-5 rounded-lg text-sm"
              >
                Get An Instant Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container-custom py-4">
              {navItems.map((item) => (
                <div key={item.label} className="py-2">
                  <button
                    className="flex items-center justify-between w-full text-left font-medium text-gray-700"
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    )}
                  </button>
                  {activeDropdown === item.label && item.submenu && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-[#1a1a1a]"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t space-y-3">
                <Link
                  href="tel:8887946420"
                  className="flex items-center gap-2 text-[#1a1a1a] font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  (888) 794-6420
                </Link>
                <Link href="#quote" className="bg-[#F5C518] hover:bg-[#d4a817] text-black font-semibold py-3 px-6 rounded-lg block text-center">
                  Get An Instant Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
