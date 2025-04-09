"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Scissors,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Partner with Us", href: "#" },
      { name: "Press", href: "#" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Safety Center", href: "#" },
      { name: "Community Guidelines", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ]
  },
  {
    title: "For Customers",
    links: [
      { name: "How to Book", href: "#" },
      { name: "Cancellation Policy", href: "#" },
      { name: "Payment Methods", href: "#" },
      { name: "Loyalty Program", href: "#" },
    ]
  },
  {
    title: "For Barbers",
    links: [
      { name: "Join as a Barber", href: "#" },
      { name: "Barber Resources", href: "#" },
      { name: "Success Stories", href: "#" },
      { name: "Barber FAQ", href: "#" },
    ]
  }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would normally send the email to your API
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-zinc-950 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col md:flex-row md:justify-between">
          {/* Logo and Contact */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Scissors className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold">BarberBook</span>
            </Link>

            <div className="space-y-4 text-zinc-400">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 shrink-0 mt-0.5 text-amber-500" />
                <span>123 Styling Street, Manhattan, NY 10001</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-amber-500" />
                <span>(555) 123-4567</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-amber-500" />
                <span>contact@barberbook.com</span>
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-zinc-400 hover:text-amber-500 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="max-w-md mx-auto md:mx-0">
            <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-zinc-400 mb-4">
              Get the latest updates, tips and special offers direct to your inbox.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500 rounded-lg p-3 text-green-400"
              >
                Thank you for subscribing to our newsletter!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-black"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-zinc-800 text-center md:text-left text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} BarberBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
