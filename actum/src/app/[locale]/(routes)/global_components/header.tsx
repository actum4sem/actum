// import Link from "next/link";
// import { useTranslations } from "next-intl";

// export default function Header() {
//   const t = useTranslations("nav");

//   return (
//     <header className="full-bleed grid grid-cols-subgrid py-10">
//       <Link href="/" className="col-[content-start/3] font-ocr text-2xl tracking-[0.04em]">
//         actum
//       </Link>

//       <nav className="col-[4/5] hidden md:flex flex-col items-end font-bold text-base leading-7 tracking-wide">
//         <Link href="/">{t("forside")}</Link>
//         <Link href="/products">{t("produkter")}</Link>
//         <Link href="/cases">{t("cases")}</Link>
//       </nav>

//       <nav className="col-[5/6] hidden md:flex flex-col items-end font-bold text-base leading-7 tracking-wide">
//         <Link href="/faq">{t("faq")}</Link>
//         <Link href="/about">{t("om")}</Link>
//         <Link href="/contact">{t("kontakt")}</Link>
//       </nav>

//       <div className="col-[6/content-end] hidden md:flex justify-end gap-1 font-bold text-base leading-7 tracking-wide">
//         <Link href="/da">da</Link>
//         <span>/</span>
//         <Link href="/en">en</Link>
//       </div>
//     </header>
//   );
// }

import Link from "next/link";
import { useTranslations } from "next-intl";

type HeaderProps = {
  hideLogo?: boolean;
};

export default function Header({ hideLogo = false }: HeaderProps) {
  const t = useTranslations("nav");

  return (
    <header className="full-bleed grid grid-cols-subgrid py-10 md:py-12">
      {/* Logo */}
      {!hideLogo && (
        <Link
          href="/"
          className="col-[content-start/3] font-ocr text-2xl tracking-[0.04em] leading-none"
        >
          actum
        </Link>
      )}

      {/* Navigation gruppe 1 */}
      <nav className="col-[4/5] hidden md:flex flex-col items-end font-bold text-base leading-7 tracking-wide">
        <Link href="/">{t("forside")}</Link>
        <Link href="/products">{t("produkter")}</Link>
        <Link href="/cases">{t("cases")}</Link>
      </nav>

      {/* Navigation gruppe 2 */}
      <nav className="col-[5/6] hidden md:flex flex-col items-end font-bold text-base leading-7 tracking-wide">
        <Link href="/faq">{t("faq")}</Link>
        <Link href="/about">{t("om")}</Link>
        <Link href="/contact">{t("kontakt")}</Link>
      </nav>

      {/* Language switch */}
      <div className="col-[6/content-end] hidden md:flex justify-end gap-1 font-bold text-base leading-7 tracking-wide">
        <Link href="/da">da</Link>
        <span>/</span>
        <Link href="/en">en</Link>
      </div>
    </header>
  );
}
