"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  UserSearch,
  Calendar,
  CreditCard,
  Scissors
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: UserSearch,
    title: "Choose a Barber",
    description: "Browse through our network of skilled barbers based on location, ratings, and services offered.",
  },
  {
    id: 2,
    icon: Calendar,
    title: "Select Service & Time",
    description: "Pick the service you need and find a timeslot that works perfectly with your schedule.",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Confirm & Pay",
    description: "Secure your appointment with easy online payment or choose to pay at the shop.",
  },
  {
    id: 4,
    icon: Scissors,
    title: "Get Groomed",
    description: "Show up at your scheduled time and enjoy a professional grooming experience.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="how-it-works" className="bg-zinc-900 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            How It <span className="text-amber-500">Works</span>
          </motion.h2>
          <motion.p
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Getting your perfect haircut is just a few simple steps away
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="bg-zinc-800 rounded-lg p-6 text-center relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + (step.id - 1) * 0.1 }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-amber-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {step.id}
              </div>

              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="bg-zinc-700 p-4 rounded-full inline-block">
                  <step.icon className="w-8 h-8 text-amber-500" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>

              {/* Connector (only for non-last items) */}
              {step.id < steps.length && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-500/30">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
