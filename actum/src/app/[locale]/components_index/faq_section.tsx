// faq_section.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import CTAButtonDiscrete from "@/app/[locale]/(routes)/global_components/cta_button_discrete";
import { Faq } from "@/lib/faq";

type Props = {
  faqs: Faq[];
};

export default function FaqSection({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const locale = useLocale() as "da" | "en";

  return (
    <section className="content">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
        <h2 className="font-ocr">Har du spørgsmål?</h2>

        <div className="flex flex-col">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-t border-foreground last:border-b">
              <button onClick={() => setOpen(open === faq.id ? null : faq.id)} className="w-full flex justify-between items-center py-4 text-left font-ocr tracking-widest cursor-pointer">
                {faq.question[locale]}
                <span>{open === faq.id ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {open === faq.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                    <p className="text-base pb-4">{faq.answer[locale]}</p>
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
  );
}
