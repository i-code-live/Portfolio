import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// Create The Service Card Component to render our services
export const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[210px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        // animation pattern
        className="w-full border-2 border-green-200 rounded-2xl shadow-md shadow-green-700"
      >
        {/* The Tilt options are coming into this div */}
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="w-full min-h-[230px] bg-black py-5 px-12 rounded-2xl flex items-center justify-evenly gap-2 flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h4 className="text-white text-center">{title}</h4>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      {/* NOTE: that every motion effects must be passed as props in the motion tag */}
      <motion.div
        variants={textVariant()} // textVariant() method is used to animate the texts
        // the vairiants prop is used to define what you're giving motion effects to
      >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[16px] max-w-3xl leading-7">
        I'm a skilled software developer with Experience in TypeScript and
        JavaScript, and expertise in framerwoks like React, Node.js and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")
