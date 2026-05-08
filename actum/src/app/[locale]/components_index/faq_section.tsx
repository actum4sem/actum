"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import CTAButtonDiscrete from "@/app/[locale]/(routes)/global_components/cta_button_discrete"

const faqs = [
  { id: 1, spørgsmål: "Hvad koster det?", svar: "Prisen afhænger af opgaven. Vi giver altid et tilbud inden vi går i gang." },
  { id: 2, spørgsmål: "Hvilke filformater tager I imod?", svar: "Vi foretrækker PDF, men tager også imod AI, InDesign og Photoshop-filer." },
  { id: 3, spørgsmål: "Hvad er et opstartsgebyr?", svar: "Et opstartsgebyr dækker den tid vi bruger på at sætte filen op og tjekke den." },
  { id: 4, spørgsmål: "Hvad er et prøvetryk?", svar: "Et prøvetryk er et enkelt eksemplar vi printer inden selve produktionen, så du kan godkende resultatet." },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="content">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
        <h2 className="font-ocr">Har du spørgsmål?</h2>

        <div className="flex flex-col">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-t border-foreground last:border-b">
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center py-4 text-left font-ocr text-base tracking-widest cursor-pointer"
              >
                {faq.spørgsmål}
                <span>{open === faq.id ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {open === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-base pb-4">{faq.svar}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="flex justify-end pt-8">
            <CTAButtonDiscrete href="/faq" label="flere FAQs" />
          </div>
        </div>
      </div>
    </section>
  )
}