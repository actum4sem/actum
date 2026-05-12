"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Case } from "@/lib/types";

// Komponenten modtager en liste af cases fra CasesPage
type Props = {
  cases: Case[];
};

export default function CasesScroll({ cases }: Props) {
  // containerRef bruges til at måle scroll-progress på denne container
  const containerRef = useRef<HTMLDivElement>(null);

  // useScroll måler hvor langt man har scrollet relativt til containeren
  // offset: "start start" = når containerens top rammer viewport top
  // offset: "end end" = når containerens bund rammer viewport bund
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // useTransform konverterer scroll-progress (0 til 1) til en x-position
  // Ved 0% scroll er x = 0% (første billede synligt)
  // Ved 100% scroll er x = -75% (sidste billede synligt)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    // Containeren er dynamic høj baseret på antal cases så der er nok scroll-rum til animationen
    // col-span-1 på mobil og md:col-span-3 på desktop
    <div
      ref={containerRef}
      className="col-span-1 md:col-span-3"
      style={{ height: `${cases.length * 100}vh` }}
    >
      {/* Sticky wrapper — holder billederne synlige mens man scroller */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* motion.div bevæger sig horisontalt baseret på scroll-position */}
        <motion.div style={{ x }} className="flex h-full items-center gap-8">
          {cases.map((caseItem) => (
            // Hvert case-element har sit eget id så navigationen kan referere til det
            <div
              key={caseItem.id}
              id={`case-${caseItem.order}`}
              className="shrink-0 flex flex-col gap-4"
              style={{ width: "60vw" }}
            >
              {caseItem.image_url && (
                <Image
                  src={caseItem.image_url.trim()}
                  alt={caseItem.title}
                  width={caseItem.orientation === "vertikal" ? 400 : 800}
                  height={caseItem.orientation === "vertikal" ? 900 : 600}
                  className={
                    caseItem.orientation === "vertikal"
                      ? "h-[70vh] w-auto"
                      : "w-full h-auto"
                  }
                />
              )}
              <p>{caseItem.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
