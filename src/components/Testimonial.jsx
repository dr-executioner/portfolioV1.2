import React from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "./ui/TestimonialCard";
import { testimonials } from "../data/testimonial";




const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-text-primary mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What People Say
        </motion.h2>
        <div className="space-y-10">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
