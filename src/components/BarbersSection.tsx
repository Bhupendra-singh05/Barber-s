"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  UserCircle2,
  Calendar,
  CheckCircle2,
  BarChart3
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: UserCircle2,
    title: "Profile & Portfolio Setup",
    description: "Showcase your skills with a professional profile. Upload your best work and highlight your specialties to attract customers."
  },
  {
    icon: Calendar,
    title: "Manage Availability/Calendar",
    description: "Take control of your schedule with our easy-to-use calendar. Set your working hours and block time off when you need it."
  },
  {
    icon: CheckCircle2,
    title: "Accept or Reject Bookings",
    description: "Review incoming booking requests and accept or decline based on your availability and services offered."
  },
  {
    icon: BarChart3,
    title: "View Earnings & Reviews",
    description: "Track your income and monitor customer satisfaction. Respond to reviews to build your reputation and attract more clients."
  }
];

export default function BarbersSection() {
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
    <section id="barbers" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Features for <span className="text-amber-500">Barbers</span>
              </h2>
              <p className="text-white/70 max-w-xl">
                Grow your business with our comprehensive tools designed specifically for barbers. Manage bookings, view earnings, and build your client base.
              </p>
            </motion.div>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 gap-4"
            >
              {features.map((feature) => (
                <motion.div key={feature.title} variants={itemVariants}>
                  <Card className="border-none bg-zinc-800 shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="bg-amber-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-zinc-800 p-5 rounded-xl shadow-2xl relative z-10">
              <div className="bg-zinc-700 rounded-lg p-2">
                <div className="flex space-x-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="relative h-[350px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/dashboard.jpg"
                    alt="Barber dashboard"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                  {/* Overlay content to simulate dashboard UI */}
                  <div className="absolute inset-0 flex flex-col bg-black/50 p-6">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Barber Dashboard</h3>
                      <p className="text-white/70 text-sm">Welcome back, Antonio</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-zinc-800/70 p-3 rounded-lg">
                        <p className="text-white/70 text-xs">Today's Bookings</p>
                        <p className="text-white text-2xl font-bold">8</p>
                      </div>
                      <div className="bg-zinc-800/70 p-3 rounded-lg">
                        <p className="text-white/70 text-xs">Weekly Earnings</p>
                        <p className="text-white text-2xl font-bold">$840</p>
                      </div>
                    </div>
                    <div className="bg-zinc-800/70 p-3 rounded-lg mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-white font-medium">Upcoming Appointments</p>
                        <span className="text-xs text-amber-500">View All</span>
                      </div>
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex justify-between items-center border-t border-white/10 py-2">
                          <div>
                            <p className="text-white text-sm">John Doe</p>
                            <p className="text-white/70 text-xs">Haircut & Beard Trim</p>
                          </div>
                          <p className="text-white/70 text-xs">2:30 PM</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
