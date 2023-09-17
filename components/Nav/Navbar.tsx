"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import "./Navbar.css";
import menu from "@/public/menu.svg";
import close from "@/public/close.svg";
import logo from "@/public/logo.png";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const navLinks = ["Our Mission", "About Us", "Blog", "Contact Us"];

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="nav">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }} // animate the opacity and y position
        exit={{ opacity: 0, x: 20 }}
      >
        <Link href={"/"}>
          <Image src={logo} alt="" objectFit="contain" className="nav-logo" />
        </Link>
      </motion.div>

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
