import { dreamTeam } from "@/constants";
import Image from "next/image";

import twitter from "@/public/twitter.svg";
import linkedin from "@/public/linkedin.svg";

import deepPhoto from "@/public/Deep.png";
import parthPhoto from "@/public/Parth.png";
import divyanshuPhoto from "@/public/Divyanshu.png";

const AboutUs = () => {
  return (
    <div id="about-us" className="relative bg-[#001B3D] mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-3 p-5 sm:p-7 md:p-12">
        <div className="col-span-1 flex flex-col">
          <div className="gradient-bar" />
          <div className="heading">About Us</div>
        </div>
        <p className="sm:col-span-2 font-manrope text-[#81AFDD] text-xs sm:text-sm my-5 sm:my-0 md:text-base">
          At Emulsion AI, we are a passionate team of AI enthusiasts, driven by
          innovation and a commitment to revolutionize the world of artificial
          intelligence. Our dedicated members, comprising talented students from
          TUM (Technical University of Munich), bring their expertise from
          esteemed organizations like Bosch, EY, Lidl, and more. Together, we're
          on a mission to make AI accessible, privacy-preserving, and efficient
          for businesses worldwide.
        </p>
        <h1 className="sm:col-span-3 gradient-text font-manrope font-semibold tracking-tight text-2xl md:text-[50px] md:leading-[55px] sm:text-4xl my-10 sm:my-16">
          Meet The Leaders
        </h1>
        <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {dreamTeam.map((data, index) => (
            <div className="col-span-1 flex flex-col justify-center items-center bg-[#81AFDD] bg-opacity-10 h-96 rounded-3xl">
              <div className="md:w-52 md:h-52 sm:w-44 sm:h-44 w-52 h-52 bg-[#81AFDD] bg-opacity-20 rounded-full">
                <Image src={data.img} alt="" className="object-fill" />
              </div>
              <h2 className="font-manrope font-semibold text-white text-lg mt-4">
                {data.name}
              </h2>
              <h4 className="font-monrope text-[#81AFDD] text-sm">
                {data.role}
              </h4>
              <div className="flex flex-row justify-center items-center gap-5 mt-5">
                <a href="">
                  <Image
                    src={twitter}
                    alt=""
                    width={20}
                    height={20}
                    objectFit="contain"
                  />
                </a>
                <a href={data.linkedinLink}>
                  <Image
                    src={linkedin}
                    alt=""
                    width={20}
                    height={20}
                    objectFit="contain"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
