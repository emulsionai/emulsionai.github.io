"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import "./Navbar.css";
import menu from "@/public/menu.svg";
import close from "@/public/close.svg";
import logo_1 from "@/public/logo_1.png";
import logo_2 from "@/public/logo_2.png";

const Navbar = () => {
  const navLinks = ["Our Mission", "About Us", "Blog", "Contact Us"];

  const [toggle, setToggle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav className="nav">
      <div className="flex flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <Link
            href={"/"}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <Image src={logo_1} alt="" objectFit="contain" width={60} />
          </Link>
        </motion.div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="logo"
              initial={{
                opacity: 1,
                clipPath: "polygon(0 0, 0 100%, 0% 100%, 0% 0%)",
              }}
              animate={{
                opacity: 1,
                clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0%)",
              }}
              exit={{
                opacity: 1,
                clipPath: "polygon(0 0, 0 100%, 0% 100%, 0% 0%)",
              }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={"/"}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <Image src={logo_2} alt="" objectFit="contain" width={200} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Links for large devices */}

      <motion.div
        className="nav-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} // animate the opacity and y position
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {navLinks.map((link) => (
          <a
            className="text-slate-300 hover:text-white text-xl"
            href={`#${link.replace(" ", "-").toLowerCase()}`}
          >
            {link}
          </a>
        ))}
      </motion.div>

      {/* Menu for small devices */}
      <motion.div
        className="nav-menu-icon"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} // animate the opacity and y position
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          objectFit="contain"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <div className={`${!toggle ? "hidden" : "flex"} nav-menu`}>
          <ul className="nav-menu-list">
            {navLinks.map((link) => {
              return (
                <li
                  key={`#${link.replace(" ", "-").toLowerCase()}`}
                  className={`font-manrope font-medium cursor-pointer text-s`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.replace(" ", "-").toLowerCase()}`}>
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
