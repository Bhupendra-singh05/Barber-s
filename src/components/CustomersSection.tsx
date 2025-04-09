"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Clock,
  CreditCard,
  Bell
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Browse Barbers by Location",
    description: "Find skilled barbers near you with our location-based search feature. Filter by distance, ratings, and specialties."
  },
  {
    icon: Clock,
    title: "Book Instantly or Reserve",
    description: "Need a cut today? Book available slots instantly or plan ahead by reserving your preferred time days or weeks in advance."
  },
  {
    icon: CreditCard,
    title: "Pay Online or In-Shop",
    description: "Secure your booking with online payment or choose to pay at the shop. We support multiple payment options for your convenience."
  },
  {
    icon: Bell,
    title: "Get Grooming Reminders",
    description: "Never miss an appointment with timely reminders. Get notifications about upcoming bookings and special promotions."
  }
];

export default function CustomersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="customers" className="py-24 bg-zinc-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/customer.jpg"
              alt="Customer getting a haircut"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-white text-2xl font-bold mb-2">Customer Experience</h3>
              <p className="text-white/80">Streamlined booking for the modern client</p>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Features for <span className="text-amber-500">Customers</span>
              </h2>
              <p className="text-zinc-600 max-w-xl">
                Our platform makes it easy for customers to find, book, and pay for barber services. Experience hassle-free grooming appointments.
              </p>
            </motion.div>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div key={feature.title} variants={itemVariants}>
                  <Card className="border-none shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="bg-amber-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-2">{feature.title}</h3>
                      <p className="text-zinc-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
