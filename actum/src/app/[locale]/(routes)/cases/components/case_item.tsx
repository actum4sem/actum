"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Case } from "@/lib/types";

// Props for CaseItem komponenten — modtager et caseItem af typen Case
type Props = {
  caseItem: Case;
};
export default function CaseItem({ caseItem }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"],
  );

  return (
    <>
      {/* Billede */}
      <motion.div
        id={`case-${caseItem.order}`}
        ref={ref}
        style={{ clipPath }}
        className="col-span-2 md:col-span-3"
      >
        {caseItem.image_url && (
          <Image
            src={caseItem.image_url.trim()}
            alt={caseItem.title}
            width={800}
            height={900}
            className="w-full h-auto"
          />
        )}
      </motion.div>

      {/* Tekst — under billede på mobil, kolonne 5 på desktop */}
      <p className="col-span-2 md:col-span-1 items-center flex">
        {caseItem.description}
      </p>
    </>
  );
}
