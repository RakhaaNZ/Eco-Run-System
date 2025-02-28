"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

export const Navigation = ({ isOpen, closeSidebar }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Details", link: "#details" },
    { label: "Sponsorship", link: "/contact" },
  ];

  const containerVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      y: 50,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  return (
    <motion.ul
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={containerVariants}
      className="relative flex flex-col items-center justify-center h-full w-full gap-[20px]"
    >
      {menuItems.map((item, i) => (
        <div key={i} variants={itemVariants} className="cursor-pointer">
          <MenuItem
            i={i}
            label={item.label}
            link={item.link}
            closeSidebar={closeSidebar}
          />
        </div>
      ))}
    </motion.ul>
  );
};
