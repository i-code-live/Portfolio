import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { experiences } from "../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience}) => (
  <VerticalTimelineElement
  // The various Attributes are used to control the appearance of our vertical TimeLineElement

    contentStyle={{ background: "#1d1836", color: "#fff" }} //this attribute sets the backgroud color of the TimeLineElement
    contentArrowStyle={{ borderRight: "7px soild #232631" }} //this is for the arrow
    date={experience.date} //here's the date 
    iconStyle={{ background: experience.iconBg }} // this for the icon background appearance
    icon={
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    } //this for the icon itself
  >
  
    <div>
      <h3 className="text-white text-[24px]">{experience.title}</h3>
      <h5 className="text-sm font-bold">{experience.company_name}</h5>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={index} className="text-sm">{point}</li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>What i have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// The VerticalTimeline Tag is used to wrap the VerticalTimelineElement tag and inside of this tag we specify the props that are used to control the appearance of our VerticalTimeline Elements 

/*  <VerticalTimeline>
      <VerticalTimelineElement 
      contentStyle={{your styles come in here}}
      contentArrowStyle={{ your styles come in here}}
      date={{your date comes here}}
      iconStyle={{iconStyles comes here}}
      icon={{
          <div>
              your desired icon come in here
          </div>
      }}
      >


      </VerticalTimelineElement>

    </VerticalTimeline>

    */

export default SectionWrapper(Experience, "Experience");
