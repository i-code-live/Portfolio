import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#33fd58]" />
          <div className="w-1 sm:h-60 h-40 violet-gradient bg-[#33fd58;]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white mt-4`}>
            Hi, I'm <span className="text-[#33fd58]">God'spower</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            With so much power to develope 3D Visual,
            <br className="sm:block hidden" /> user interfaces, and web
            application{" "}
          </p>
        </div>
      </div>
      {/* ComputersCanvas Display */}
      <ComputersCanvas />

      <div className="absolute bottom-28 xs:bottom-4 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-8 h-12 rounded-full border-4 border-gray-200 flex justify-center items-start p-2 cursor-pointer">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="border-4 border-white rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
