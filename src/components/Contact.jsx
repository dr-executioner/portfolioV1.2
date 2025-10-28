import React, { useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import { socialLinks } from "../data/portfolioData.jsx";
import { motion } from "framer-motion";
import { sendMail } from "../services/analyse.js";
import "../styles/loader.css";
import RoundToast from "./ui/RoundToast.jsx";
import { hasEmailAddressStrict } from "../utils/helper.js";

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
  const [analysing, setAnalysing] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [buttonText, setButtonText] = useState("Say Hello");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSend = async () => {
    if (!message.trim()) return;
    if (!hasEmailAddressStrict(message)) {
      setShowToast(true);
      setToastMessage(
        "Psst! Your email is missing... don't leave me hanging like a bad Wi-Fi signal! 📶"
      );
      setTimeout(() => {
        setShowToast(false);
      }, 3500);
      return;
    }
    setAnalysing(true);
    setButtonText("Analysing...");
    try {
      await sendMail(message);
      setToastMessage("Message Sent!");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (error) {
      setAnalysing(false);
      setError({ status: true, message: error.message });
      setToastMessage(error.message);
    } finally {
      setMessage("");
      setAnalysing(false);
      setButtonText("Say Hello");
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
          <div>
            <div className="w-full rounded-md">
              <textarea
                className="w-full p-4 text-primary-bg rounded-md focus:outline-none font-mono font-semibold mb-4 resize-none"
                maxLength={200}
                onChange={handleChange}
                rows={4}
                placeholder="Hi, please do mention email and name.."
              />
            </div>
            <button
              onClick={handleSend}
              className="relative inline-block px-10 py-4 h-fit whitespace-nowrap font-mono text-lg bg-accent-1 text-primary-bg rounded-md hover:bg-opacity-80 transition-all duration-300 shadow-lg hover:shadow-accent-1/30 overflow-hidden disabled:bg-accent-3 disabled:cursor-not-allowed"
              disabled={analysing}
            >
              <span className="relative z-10">
                {analysing ? (
                  <div className="flex items-center gap-2">
                    <span class="loader"></span> {buttonText}
                  </div>
                ) : (
                  buttonText
                )}
              </span>
            </button>
          </div>
          <RoundToast
            showToast={showToast}
            toastMessage={toastMessage}
            error={error}
          />
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
