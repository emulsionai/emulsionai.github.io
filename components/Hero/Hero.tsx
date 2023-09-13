"use client";

import "./Hero.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView();
  return (
    <section className="relative md:h-screen">
      <div className="blur-top-left ml-[-24px] mt-[-110px]" />
      <div className="hero-container">
        <motion.h1
          className="hero-heading gradient-text"
          initial={{ opacity: 0, y: -10, x: -30 }}
          animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.7 }}
        >
          Empowering Businesses With Personalized AI
        </motion.h1>
        <motion.p
          ref={ref}
          className="hero-text"
          initial={{ opacity: 0, y: 10, x: -30 }}
          animate={inView ? { opacity: 1, y: 0, x: 0 } : {}} // animate the opacity and y position
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.7 }}
        >
          At Emulsion AI, we're on a mission to revolutionize the world of AI
          and machine learning with our innovative approach. Our journey is
          built on the foundation of privacy, security, and efficiency.
        </motion.p>
      </div>
      <div className="blur-right mr-[-24px]" />
    </section>
  );
};

export default Hero;
