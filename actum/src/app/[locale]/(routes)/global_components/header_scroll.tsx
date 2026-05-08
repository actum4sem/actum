"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function HeaderScroll({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className="full-bleed grid grid-cols-subgrid py-6 sticky top-0 z-50 bg-(--background)"
      animate={{
        y: hidden ? -60 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.header>
  );
}
