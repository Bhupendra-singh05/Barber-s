"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Scissors className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold text-white">BarberBook</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-white/90 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#customers" className="text-white/90 hover:text-white transition-colors">
              For Customers
            </Link>
            <Link href="#barbers" className="text-white/90 hover:text-white transition-colors">
              For Barbers
            </Link>
            <Link href="#pricing" className="text-white/90 hover:text-white transition-colors">
              Pricing
            </Link>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black">
                Sign In
              </Button>
              <Button className="bg-amber-500 text-black hover:bg-amber-600">
                Book Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 mt-2 p-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="#how-it-works"
              className="text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#customers"
              className="text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Customers
            </Link>
            <Link
              href="#barbers"
              className="text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Barbers
            </Link>
            <Link
              href="#pricing"
              className="text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex space-x-3 pt-2">
              <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black">
                Sign In
              </Button>
              <Button className="bg-amber-500 text-black hover:bg-amber-600">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
