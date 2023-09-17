"use client";

import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative md:h-screen">
      <motion.div
        className="blur-top-left ml-[-24px] mt-[-110px]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeInOut" }}
      />
      <div className="hero-container">
        <motion.span
          className="hero-heading gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          Empowering Businesses
        </motion.span>
        <motion.span
          className="hero-heading gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          With Personalized AI
        </motion.span>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // animate the opacity and y position
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: "easeInOut" }}
        >
          At Emulsion AI, we're on a mission to revolutionize the world of AI
          and machine learning with our innovative approach. Our journey is
          built on the foundation of privacy, security, and efficiency.
        </motion.p>
      </div>
      <motion.div
        className="blur-right mr-[-24px]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Hero;
