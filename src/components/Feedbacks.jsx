import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 rounded-3xl p-10 w-full sm:w-[320px]"
      >
        <p className="text-white font-black text-[44px]">"</p>
        <div className="mt-2">
          <p className="text-white text-[18px] tracking-wider">{testimonial}</p>

          <div className="mt-7 flex justify-between gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-[16px] font-medium">
                <span className="text-green-600">@</span> {name}
              </p>
              <p className="mt-1 text-[12px] text-secondary">
                {designation} of {company}
              </p>
            </div>

            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-md relative">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What other's say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>

      <div
        className={`${styles.paddingX} w-full   -mt-20 pb-14 flex flex-wrap gap-7`}
      >
        {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
