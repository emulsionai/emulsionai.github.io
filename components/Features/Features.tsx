"use client";
import { featuresData } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import "./features.css";

interface data {
  title: String;
  desc: String;
  index: number;
}

const Feature = (data: data) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="feature-circle">
        <div className="flex w-[62px] h-[62px] items-center justify-center">
          <div className="feature-circle-fill">
            <span className="font-manrope font-bold text-2xl text-white">
              {`0${data.index}`}
            </span>
          </div>
        </div>
      </div>
      <div className="px-5 pt-2">
        <h1 className="font-manrope font-bold text-white text-2xl mt-3 sm:text-3xl md:text-4xl">
          {data.title}
        </h1>
        <p className="font-manrope font-light text-[#81AFDD] my-6">
          {data.desc}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);

  const [heightDifference, setHeightDifference] = useState<number>(0);

  const calculateHeightDifference = () => {
    const div1 = div1Ref.current;
    const div2 = div2Ref.current;

    if (div1 && div2) {
      const height1 = div1.getBoundingClientRect().top;
      const height2 = div2.getBoundingClientRect().top;

      const difference = Math.abs(height1 - height2);

      setHeightDifference(difference);
    }
  };

  useEffect(() => {
    calculateHeightDifference();
  }, [inView]);

  return (
    <section className="relative w-full grid grid-cols-1 mt-24 md:grid-cols-2">
      <div className="blur-left ml-[-24px] mt-[-24px]" />
      <div>
        <div className="features-title gradient-text">
          Empowering Your AI Journey
        </div>
      </div>

      <div className="relative col-span-1 flex flex-col md:pt-24 gap-16">
        <motion.div
          className="features-line"
          ref={ref}
          initial={{ height: 0 }}
          animate={inView ? { height: heightDifference } : {}}
          transition={{ duration: 3 }}
        ></motion.div>

        <div ref={div1Ref}>
          <Feature {...featuresData[0]} />
        </div>
        <Feature {...featuresData[1]} />
        <Feature {...featuresData[2]} />
        <div ref={div2Ref}>
          <Feature {...featuresData[3]} />
        </div>
      </div>

      <div className="blur-right mr-[-24px]" />
    </section>
  );
};

export default Features;
