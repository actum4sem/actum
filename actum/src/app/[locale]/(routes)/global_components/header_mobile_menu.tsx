"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LanguageSwitch from "./language_switch";

type Props = {
  links: { href: string; label: string }[];
};

export default function MobileMenu({ links }: Props) {
  const [open, setOpen] = useState(false);

  return (
<div className="col-[4/content-end] flex justify-end items-center lg:hidden">
      <button onClick={() => setOpen(true)} className="font-ocr text-sm tracking-wide">
        menu
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-screen bg-(--background) z-40 flex flex-col justify-between px-(--page-margin) py-6"
          >
            <div className="flex justify-between items-start">
              <Link href="/" className="font-ocr text-2xl tracking-[0.04em] leading-none">
                actum
              </Link>
              <button onClick={() => setOpen(false)} className="font-ocr text-2xl tracking-widest">
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-4 font-bold text-base leading-7 tracking-wide">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>

            <LanguageSwitch className="flex gap-1 font-bold text-base" />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
