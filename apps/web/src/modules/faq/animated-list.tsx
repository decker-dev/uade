"use client";

import React from "react";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedListProps {
  children: ReactNode;
  type?: "ul" | "ol";
  className?: string;
  delay?: number;
}

export function AnimatedList({
  children,
  type = "ul",
  className = "",
  delay = 0.1,
}: AnimatedListProps) {
  const Tag = type;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Clone children and wrap them with motion.li
  const animatedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === "li") {
      const { className, children: childChildren } = child.props as { className?: string; children?: ReactNode };
      return (
        <motion.li variants={item} className={className}>
          {childChildren}
        </motion.li>
      );
    }
    return child;
  });

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Tag className={className}>{animatedChildren}</Tag>
    </motion.div>
  );
}
