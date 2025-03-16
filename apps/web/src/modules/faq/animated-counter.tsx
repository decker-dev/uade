"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1,
        );

        setCount(Math.floor(from + progress * (to - from)));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      // Add delay before starting animation
      const timeoutId = setTimeout(() => {
        animationFrame = requestAnimationFrame(step);
      }, delay * 1000);

      return () => {
        clearTimeout(timeoutId);
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [inView, from, to, duration, delay]);

  useEffect(() => {
    if (inView) {
      controls.start({ scale: [0.5, 1.2, 1], opacity: [0, 1] });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  );
}
