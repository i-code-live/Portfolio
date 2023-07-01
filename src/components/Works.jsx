import React from "react";
import { Tilt } from "react-tilt";
// The Tilt element must be wrapped in a motion container
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ProjectCard = ({
  index,
  name,
  image,
  description,
  tags,
  source_code_link,
}) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}

          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full rounded-2xl object-cover" />

            <div className="absolute inset-0 m-3 flex justify-end card-img-hover">
              <div className="w-10 h-10 rounded-full black-gradient p-2 flex justify-center items-center cursor-pointer"
              onClick={() => {
                window.open(source_code_link)
              }}
              >
                <img src={github} alt="github" className="w-6 h-6 object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white text-[24px] font-bold">{name}</h3>
            <p className="mt-2 text-secondary text-[17px]">{description}</p>
          </div>

          <div className="w-full flex flex-wrap gap-4 mt-3">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-base font-medium ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-work
          examples of my work. Each project is briefly described with links to
          code repository and live demos in it. it reflects my ability to solve
          complex problems, work with different technologies and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
