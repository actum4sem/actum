"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitch({ className }: { className?: string }) {
  const pathname = usePathname();

  // Gemmer den nuværende sti, fx "/da/about"
  const currentLocale = pathname.split("/")[1];

  const getLocalePath = (targetLocale: string) => {
    const segments = pathname.split("/");
    // Splitter stien op i dele: ["", "da", "about"]

    segments[1] = targetLocale;
    // Erstatter locale-delen (index 1) med det ønskede locale: ["", "en", "about"]

    return segments.join("/");
    // Samler delene igen til en sti: "/en/about"
  };

  return (
    <div className={className}>
      <Link href={getLocalePath("da")} className={currentLocale === "da" ? "underline underline-offset-4" : ""}>
        da
      </Link>
      <span>/</span>
      <Link href={getLocalePath("en")} className={currentLocale === "en" ? "underline underline-offset-4" : ""}>
        en
      </Link>
    </div>
  );
}
