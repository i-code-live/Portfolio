import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Stars from "./canvas/Stars";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
const Contact = () => {
  /* We'll be making use of the {email_Js  Service} to send automatic mails
And we'll need some VITAL CREDENTIALS from the EMAIL_JS service, this can only be done after you have created your free account with the EMAIL_JS service

{VITAL_CREDENTIALS}
1..Service ID  == service_5fo8m2n
2..Template ID == template_k37qz5q
3..Public Key  == 'AFzCPBQpB9fmVvSja'

*/
  const formRef = useRef();

  const [form, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  // The loading state is used to track when our form has been sent or not
  const [loading, setLoading] = useState(false);

  // create a function to handle form changes when the user input is changed
  const handleChange = (e) => {
    // get the target element that was clicked and ("Distructure the name and value properties") from the event object
    const { name, value } = e.target;

    // Update the current form value State to hold the new name and value properties of our form
    setFormValue({ ...form, [name]: [value] });
  };

  // create a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Here you can implement codes for emailjs Service
    emailjs.send(
      "service_5fo8m2n",
      "template_k37qz5q",
      {
        from_name: form.name,
        to_name: "God'spower",
        from_email: form.email,
        to_email: "contact@alive.todevelope",
        message: form.message,
      },
      "AFzCPBQpB9fmVvSja"

      // After proper execution you call the .then() method to handle the success message
    ).then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible");

      // we update the form state
      setFormValue({
        name: '',
        email: '',
        message: ''
      })

      // After updating our form state we need to check if there was an error during this process..........you do this by calling a call back function to check for errors
    }, (error) => {
      // and if any found
      setLoading(false)

      console.log(error)
      alert("Something went wrong. Try again")
    })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="what's your name"
              onChange={handleChange}
              className="bg-tertiary text-white placeholder:text-secondary font-medium py-4 px-6 rounded-lg outline-none border-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="what's your email address"
              onChange={handleChange}
              className="bg-tertiary text-white placeholder:text-secondary font-medium py-4 px-6 rounded-lg outline- none border-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={"7"}
              name="message"
              value={form.message}
              placeholder="What do you want to say?"
              onChange={handleChange}
              className="bg-tertiary text-white placeholder:text-secondary font-medium py-4 px-6 rounded-lg outline-none border-none"
            />
          </label>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-lime-500 text-white py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-lg hover:bg-lime-700 hover:text-green-100 transition hover:-translate-y-0.5 ease-in duration-100"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.23, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
