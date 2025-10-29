import { testimonialVariants } from "../../data/testimonial";
import { motion } from "framer-motion";

export const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    className="bg-secondary-bg rounded-lg p-6 max-w-4xl mx-auto shadow-lg"
    variants={testimonialVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
  >
    <p className="text-text-primary text-base mb-4 italic">
      “{testimonial.text}”
    </p>
    <div className="flex items-center">
      <img
        src={testimonial.photo}
        alt={`${testimonial.name} photo`}
        className="w-12 h-12 rounded-full mr-4 border-2 border-accent-1"
      />
      <div>
        <p className="text-accent-1 font-semibold">{testimonial.name}</p>
        <p className="text-text-secondary text-sm">
          {testimonial.position}, {testimonial.company}
        </p>
      </div>
    </div>
  </motion.div>
);