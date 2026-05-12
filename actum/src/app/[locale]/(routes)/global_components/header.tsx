// import Link from "next/link";
// import { useTranslations } from "next-intl";
// import HeaderLogo from "./header_logo";
// import HeaderScroll from "./header_scroll";
// import LanguageSwitch from "./language_switch";
// import MobileMenu from "./header_mobile_menu";

// export default function Header() {
//   const t = useTranslations("nav");

//   return (
//     <HeaderScroll>
//       <HeaderLogo />
//       <MobileMenu />

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
//       <LanguageSwitch className="col-[6/content-end] hidden md:flex justify-end gap-1 font-bold text-base leading-7 tracking-wide" />
//       {/*
//       <div className="col-[6/content-end] hidden md:flex justify-end gap-1 font-bold text-base leading-7 tracking-wide">
//         <Link href="/da">da</Link>
//         <span>/</span>
//         <Link href="/en">en</Link>
//       </div> */}
//     </HeaderScroll>
//   );
// }

import { getTranslations } from "next-intl/server";
import HeaderScroll from "./header_scroll";
import LanguageSwitch from "./language_switch";
import MobileMenu from "./header_mobile_menu";
import Link from "next/link";
import NavLink from "./nav_link";

export default async function Header() {
  const t = await getTranslations("nav");

  return (
    <HeaderScroll>
        <Link href="/" className="font-ocr text-2xl tracking-[0.04em] leading-none col-[content-start/2] md:col-[content-start/3]">
  actum
</Link>

{/* <nav className="col-[4/5] hidden lg:flex flex-col items-end font-bold text-base leading-7 tracking-wide">
  <Link href="/">{t("forside")}</Link>
  <Link href="/products">{t("produkter")}</Link>
  <Link href="/cases">{t("cases")}</Link>
</nav>

<nav className="col-[5/6] hidden lg:flex flex-col items-end font-bold text-base leading-7 tracking-wide">
  <Link href="/faq">{t("faq")}</Link>
  <Link href="/about">{t("om")}</Link>
  <Link href="/contact">{t("kontakt")}</Link>
</nav> */}

      <nav className="col-[4/5] hidden lg:flex flex-col items-end font-bold text-base leading-7 tracking-wide">
        <ul className="flex flex-col items-end">
          <NavLink href="/" label={t("forside")} />
          <NavLink href="/products" label={t("produkter")} />
          <NavLink href="/cases" label={t("cases")} />
        </ul>
      </nav>

      <nav className="col-[5/6] hidden lg:flex flex-col items-end font-bold text-base leading-7 tracking-wide">
        <ul className="flex flex-col items-end">
          <NavLink href="/faq" label={t("faq")} />
          <NavLink href="/about" label={t("om")} />
          <NavLink href="/contact" label={t("kontakt")} />
        </ul>
      </nav>

<LanguageSwitch className="col-[6/content-end] hidden lg:flex justify-end gap-1 font-bold text-base leading-7 tracking-wide" />

   <MobileMenu
  links={[
    { href: "/", label: t("forside") },
    { href: "/products", label: t("produkter") },
    { href: "/cases", label: t("cases") },
    { href: "/faq", label: t("faq") },
    { href: "/about", label: t("om") },
    { href: "/contact", label: t("kontakt") },
  ]}
/>
 {/* <Link href="/" className="font-ocr text-2xl tracking-[0.04em] leading-none col-[content-start/2] md:col-[content-start/3]">
  actum
</Link>

      <nav className="col-[4/5] hidden md:flex flex-col items-end font-bold text-base leading-7 tracking-wide">
        <Link href="/">{t("forside")}</Link>
        <Link href="/products">{t("produkter")}</Link>
        <Link href="/cases">{t("cases")}</Link>
      </nav>

      <nav className="col-[5/6] hidden md:flex flex-col items-end font-bold text-base leading-7 tracking-wide">
        <Link href="/faq">{t("faq")}</Link>
        <Link href="/about">{t("om")}</Link>
        <Link href="/contact">{t("kontakt")}</Link>
      </nav>

      <LanguageSwitch className="col-[6/content-end] hidden md:flex justify-end gap-1 font-bold text-base leading-7 tracking-wide" />

    <MobileMenu
  links={[
    { href: "/", label: t("forside") },
    { href: "/products", label: t("produkter") },
    { href: "/cases", label: t("cases") },
    { href: "/faq", label: t("faq") },
    { href: "/about", label: t("om") },
    { href: "/contact", label: t("kontakt") },
  ]}
/> */}
    </HeaderScroll>
  );
}
