"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type PeriodType = "monthly" | "yearly";

const pricingPlans = {
  monthly: [
    {
      name: "Basic",
      price: 29,
      features: [
        { name: "Profile setup with 5 photos", included: true },
        { name: "Calendar management", included: true },
        { name: "Online booking system", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "Custom page design", included: false },
        { name: "Client reminders & notifications", included: false },
        { name: "Priority placement in search", included: false },
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Premium",
      price: 49,
      features: [
        { name: "Profile setup with unlimited photos", included: true },
        { name: "Calendar management", included: true },
        { name: "Online booking system", included: true },
        { name: "Advanced analytics & reporting", included: true },
        { name: "Priority email & phone support", included: true },
        { name: "Custom page design", included: true },
        { name: "Client reminders & notifications", included: true },
        { name: "Priority placement in search", included: true },
      ],
      cta: "Go Premium",
      popular: true,
    }
  ],
  yearly: [
    {
      name: "Basic",
      price: 24,
      features: [
        { name: "Profile setup with 5 photos", included: true },
        { name: "Calendar management", included: true },
        { name: "Online booking system", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "Custom page design", included: false },
        { name: "Client reminders & notifications", included: false },
        { name: "Priority placement in search", included: false },
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Premium",
      price: 39,
      features: [
        { name: "Profile setup with unlimited photos", included: true },
        { name: "Calendar management", included: true },
        { name: "Online booking system", included: true },
        { name: "Advanced analytics & reporting", included: true },
        { name: "Priority email & phone support", included: true },
        { name: "Custom page design", included: true },
        { name: "Client reminders & notifications", included: true },
        { name: "Priority placement in search", included: true },
      ],
      cta: "Go Premium",
      popular: true,
    }
  ]
};

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<PeriodType>("monthly");
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
    <section id="pricing" className="py-24 bg-zinc-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Barber <span className="text-amber-500">Pricing Plans</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Choose the perfect plan to grow your barbershop business. Cancel or upgrade anytime.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <Tabs
            defaultValue="monthly"
            onValueChange={(value) => setBillingPeriod(value as PeriodType)}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">
                Yearly
                <span className="ml-2 bg-amber-500 text-black text-xs px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {pricingPlans[billingPeriod].map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className="relative group"
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className={`
                    h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300
                    hover:shadow-xl transform hover:-translate-y-1
                    ${plan.popular ? 'border-2 border-amber-500' : 'border border-zinc-200'}
                    relative p-8
                  `}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                          POPULAR
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                      <div className="flex items-end">
                        <span className="text-4xl font-bold text-zinc-900">${plan.price}</span>
                        <span className="text-zinc-500 ml-2">/{billingPeriod === 'monthly' ? 'month' : 'month, billed yearly'}</span>
                      </div>
                    </div>

                    <div className="mb-8">
                      <ul className="space-y-3">
                        {plan.features.slice(0, 4).map((feature, index) => (
                          <li key={`${plan.name}-${index}`} className="flex items-start">
                            {feature.included ? (
                              <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 shrink-0 mt-0.5" />
                            ) : (
                              <XCircle className="text-zinc-400 h-5 w-5 mr-2 shrink-0 mt-0.5" />
                            )}
                            <span className={feature.included ? "text-zinc-800" : "text-zinc-400"}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-amber-500 hover:bg-amber-600 text-black"
                          : "bg-zinc-800 hover:bg-zinc-900 text-white"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </HoverCardTrigger>

                <HoverCardContent className="w-full p-0 bg-white shadow-xl">
                  <div className="p-6">
                    <h4 className="font-bold text-zinc-900 mb-4">All Features</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={`${plan.name}-hover-${index}`} className="flex items-start">
                          {feature.included ? (
                            <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="text-zinc-400 h-5 w-5 mr-2 shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? "text-zinc-800" : "text-zinc-400"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-500">
            Need a custom plan for multiple locations?
            <button className="text-amber-500 font-medium ml-2 hover:underline">
              Contact us for custom pricing
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
