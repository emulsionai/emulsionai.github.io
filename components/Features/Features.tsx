"use client";

import { featuresData } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [ref, inView] = useInView();

  return (
    <div className="features">
      <div className="blur-left ml-[-24px] mt-[-24px]" />
      <motion.h1
        ref={ref}
        className="gradient-text features-heading"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.7 }}
      >
        Empowering Your AI Journey
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 gap-5"
        ref={ref}
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.7 }}
      >
        {featuresData.map((data, index) => (
          <>
            <div className="my-7">
              <div className="gradient-bar" />
              <h1 className="heading">{data.title}</h1>
            </div>
            <p className="features-text my-6">{data.desc}</p>
          </>
        ))}
      </motion.div>
      <div className="blur-right mr-[-24px]" />
    </div>
  );
};

export default Features;
