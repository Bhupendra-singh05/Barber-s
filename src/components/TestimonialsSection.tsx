"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Michael Thompson",
    role: "Regular Customer",
    image: "/images/testimonial1.jpg",
    rating: 5,
    quote: "BarberBook has completely changed how I get my haircuts. I can find the best barbers in my area, check their availability, and book appointments in seconds. The reminder feature is a lifesaver!"
  },
  {
    id: 2,
    name: "David Williams",
    role: "Premium Subscriber",
    image: "/images/testimonial2.jpg",
    rating: 5,
    quote: "As someone who travels a lot for work, this app has been invaluable. I can book appointments with top barbers in different cities and maintain my style no matter where I am. Highly recommended!"
  },
  {
    id: 3,
    name: "Jason Rodriguez",
    role: "Monthly Customer",
    image: "/images/testimonial3.jpg",
    rating: 4,
    quote: "The quality of barbers on this platform is exceptional. I've discovered talented professionals I wouldn't have found otherwise. The booking process is smooth, and I love being able to pay in advance."
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <section className="py-24 bg-zinc-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-amber-500">Clients Say</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our satisfied customers have to say about their experience with BarberBook.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Large quote decoration */}
          <div className="absolute -top-20 -left-20 opacity-5">
            <Quote size={200} />
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-zinc-900 p-6 rounded-xl h-full flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                        <p className="text-white/50 text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={`star-${testimonial.id}-${i}`}
                          size={16}
                          className={i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-zinc-600"}
                        />
                      ))}
                    </div>

                    <p className="text-white/80 italic flex-grow">"{testimonial.quote}"</p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static mr-2 bg-zinc-700 hover:bg-amber-500 border-none text-white" />
              <CarouselNext className="static ml-2 bg-zinc-700 hover:bg-amber-500 border-none text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
