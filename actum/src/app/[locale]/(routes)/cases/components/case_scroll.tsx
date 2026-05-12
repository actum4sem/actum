"use client";

import { useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

// Type der matcher cases tabellen i Supabase
type Case = {
  id: number;
  titel: string;
  beskrivelse: string;
  billede_url: string;
  orientering: string;
  orden: number;
};

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
    // Containeren er 300vh høj så der er nok scroll-rum til animationen
    // col-span-2 på mobil og md:col-span-2 på desktop så den fylder kolonne 2 og 3
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
              id={`case-${caseItem.orden}`}
              className="flex-shrink-0 flex flex-col gap-4"
              style={{ width: "60vw" }}
            >
              {caseItem.billede_url && (
                <Image
                  src={caseItem.billede_url.trim()}
                  alt={caseItem.titel}
                  width={caseItem.orientering === "vertikal" ? 400 : 800}
                  height={caseItem.orientering === "vertikal" ? 900 : 600}
                  className={
                    caseItem.orientering === "vertikal"
                      ? "h-[70vh] w-auto"
                      : "w-full h-auto"
                  }
                />
              )}
              <p>{caseItem.beskrivelse}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
