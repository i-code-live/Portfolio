import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logo } from "../assets/";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            windows.scrollTo(0, 0);
          }}
        >
         {/* <span className="w-2 h-2 ring-green-100  ring-4 rounded-full shadow-md bg-[#33fd58]"></span> */}
          <img src="src/assets/logo1.png" className="w-44 object-contain" alt="my logo" />
          <p className="text-white text-lg rounded-none font-bold cursor-pointer flex gap-2 ml-1">
           <span className="hidden"> | Programmer</span>
          </p>
        </Link>

     <div className="flex items-center  gap-10">
     <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <button className="px-3 py-3 hidden sm:block rounded-xl bg-lime-500 tracking-wide text-sm capitalize text-white font-bold  transform transition hover:-translate-y-1 shadow-xl">
          <span className="block">Whatsapp Dm</span>
        </button>
     </div>

{/* Mobile Navigation Build */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className=""
            onClick={() => {
              setToggle(!toggle);
            }}
            alt={toggle ? "close menu icon" : "menu icon"}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl shadow shadow-lime-300 z-10`}>
          <ul className="list-none  flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                setToggle(!toggle)
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar
