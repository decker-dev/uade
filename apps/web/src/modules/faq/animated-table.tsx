"use client";

import React from "react";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedTableProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedTable({
  children,
  className = "",
}: AnimatedTableProps) {
  // Find the thead and tbody elements
  let theadElement: ReactNode = null;
  let tbodyElement: ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === "thead") {
        theadElement = child;
      } else if (child.type === "tbody") {
        tbodyElement = child;
      }
    }
  });

  // Animate the tbody rows
  const animatedTbody = tbodyElement
    ? React.cloneElement(
        tbodyElement as React.ReactElement,
        {},
        React.Children.map(
          (tbodyElement as React.ReactElement<{ children: ReactNode }>).props
            .children,
          (row, index) => {
            if (React.isValidElement(row) && row.type === "tr") {
              return (
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(var(--primary), 0.05)" }}
                  className={
                    (row as React.ReactElement<{ className?: string }>).props
                      .className
                  }
                >
                  {
                    (row as React.ReactElement<{ children: ReactNode }>).props
                      .children
                  }
                </motion.tr>
              );
            }
            return row;
          },
        ),
      )
    : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto"
    >
      <table className={className}>
        {theadElement}
        {animatedTbody}
      </table>
    </motion.div>
  );
}
