"use client";

import { missionData } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurMission = () => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} id="about-us" className="blue-container">
      <div className="grid grid-cols-1 sm:grid-cols-3 p-5 sm:p-7 md:p-12">
        <motion.div
          className="col-span-1 flex flex-col"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="gradient-bar" />
          <div className="heading">Our Mission</div>
        </motion.div>
        <motion.p
          className="sm:col-span-2 font-manrope text-[#81AFDD] text-xs sm:text-sm my-5 sm:my-0 md:text-base"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.7 }}
        >
          At Emulsion AI, our mission is clear - to empower businesses to
          harness the power of open-source Large Language Models (LLMs) within
          their private or virtual clouds effortlessly. We're dedicated to
          making AI work for you while preserving your data and adhering to
          stringent regulations.
        </motion.p>

        <motion.h1
          className="sm:col-span-3 gradient-text font-manrope font-semibold tracking-tight text-2xl md:text-[50px] md:leading-[55px] sm:text-4xl my-10 sm:my-16"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          The possibilities are beyond your imagination
        </motion.h1>
        <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {missionData.map((data, index) => {
            var delay = 0.3 * index;
            return (
              <motion.div
                key={index}
                className="col-span-1"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: delay, duration: 0.7 }}
              >
                <div className="gradient-bar" />
                <h1 className="heading">{data.title}</h1>
                <p className="text">{data.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
