"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay: number;
  className?: string;
};

export default function AnimatedText({ children, delay, className }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut", delay }} className={className}>
      {children}
    </motion.div>
  );
}
