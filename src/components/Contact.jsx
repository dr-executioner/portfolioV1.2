import React, { useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import { socialLinks } from "../data/portfolioData.jsx";
import { motion } from "framer-motion";
import { sendMail } from "../services/analyse.js";

const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      await sendMail(message);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <section id="contact" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="contact-title">Get In Touch</SectionTitle>
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind, a question, or just want to say hi, my
            inbox is always open. I'll try my best to get back to you!
          </p>
          <div className="flex align-middle gap-4">
            <button
              onClick={handleSend}
              className="inline-block px-10 py-4 h-fit whitespace-nowrap font-mono text-lg bg-accent-1 text-primary-bg rounded-md hover:bg-opacity-80 transition-all duration-300 shadow-lg hover:shadow-accent-1/30"
            >
              Say Hello
            </button>
            <div className="w-full rounded-md">
              <textarea
                className="w-full px-4 py-1.5 text-primary-bg rounded-md focus:outline-none font-mono font-semibold"
                maxLength={200}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            {Object.entries(socialLinks).map(([key, link], index) => (
              <motion.a
                key={key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-1 transition-colors"
                aria-label={key}
                variants={contactItemVariants}
                initial="hidden"
                whileInView="visible"
                custom={index + 2} // Start delay after main button
                viewport={{ once: true }}
              >
                {React.cloneElement(link.icon, { size: 32 })}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
