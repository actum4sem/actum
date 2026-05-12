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
  // useRef bruges til at måle scroll-progress relativt til dette element
  const ref = useRef(null);

  // useScroll måler hvor langt man har scrollet relativt til elementet
  // start end = når elementets top rammer viewport bund (elementet er lige ved at komme ind)
  // center center = når elementets midte rammer viewport midte
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // useTransform konverterer scroll-progress (0 til 1) til en clip-path værdi
  // Ved 0% scroll er billedet skjult — clip-path skjuler alt fra midten
  // Ved 100% scroll er billedet fuldt synligt — clip-path er væk
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"],
  );

  return (
    <>
      <div
        id={`case-${caseItem.order}`}
        className="col-span-2 md:col-span-4 flex flex-col items-center"
      >
        {caseItem.image_url && (
          // motion.div håndterer clip-path animationen
          // ref er sat her så useScroll kan måle scroll-progress relativt til billedet
          <motion.div ref={ref} style={{ clipPath }} className="w-full">
            <Image
              src={caseItem.image_url.trim()}
              alt={caseItem.title}
              width={800}
              height={900}
              className="w-full h-auto"
            />
          </motion.div>
        )}
        {/* Beskrivelse vises under billedet på alle skærmstørrelser */}
        <p>{caseItem.description}</p>
      </div>
    </>
  );
}
