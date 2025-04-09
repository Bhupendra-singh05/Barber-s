"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Apple, PlaySquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadAppSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="py-24 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get the <span className="text-amber-500">BarberBook App</span>
            </h2>
            <p className="text-white/70 text-lg mb-6">
              Book appointments, manage your schedule, and get notifications on the go. Our mobile app makes barbershop booking easier than ever.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Book appointments anytime, anywhere",
                "Get real-time notifications",
                "Manage your favorite barbers",
                "View booking history and receipts"
              ].map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                  <span className="text-white/80">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 text-white border-white hover:bg-white hover:text-zinc-900 transition-colors duration-300"
              >
                <Apple className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </div>
              </Button>

              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 text-white border-white hover:bg-white hover:text-zinc-900 transition-colors duration-300"
              >
                <PlaySquare className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - App Mockups */}
          <div ref={ref} className="relative h-[500px] flex items-center justify-center">
            {/* Main Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="relative z-20 transform rotate-3"
            >
              <div className="bg-zinc-800 rounded-[36px] p-3 shadow-2xl">
                <div className="bg-black rounded-[28px] overflow-hidden w-[220px] h-[440px] relative">
                  <Image
                    src="/images/app-mockup.png"
                    alt="BarberBook App screenshot"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-[28px]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Secondary Phone (slightly behind) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute z-10 transform -rotate-3 translate-x-16 translate-y-8"
            >
              <div className="bg-zinc-800 rounded-[36px] p-3 shadow-xl">
                <div className="bg-black rounded-[28px] overflow-hidden w-[200px] h-[400px] relative">
                  <div className="absolute inset-0 bg-zinc-900 opacity-50" />
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl -z-10" />

            {/* Feature Indicators */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="absolute top-20 -right-4 z-30"
            >
              <div className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                Easy Booking
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="absolute bottom-32 -left-6 z-30"
            >
              <div className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                Real-time Updates
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
