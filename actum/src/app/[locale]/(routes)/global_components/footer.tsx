import { useTranslations } from "next-intl";
import LanguageSwitch from "./language_switch";
import CTAButtonDiscrete from "./cta_button_discrete";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className="full-bleed relative
     grid grid-cols-subgrid bg-(--almost-black) text-(--background) mt-16 py-12 md:py-16 gap-y-20 text-sm"
    >
      {/* Kontakt */}
      <div className="col-[content-start/3] md:col-[content-start/3] md:row-start-1 flex flex-col gap-6">
        <p className="font-ocr tracking-widest">{t("contact")}</p>

        <div className="leading-7">
          <p>{t("name")}</p>
          <p>{t("vat")}</p>
          <br />
          <p>{t("address")}</p>
          <p>{t("city")}</p>
          <br />
          <p>{t("phone")}</p>
          <p>{t("email")}</p>
          <br />
          <CTAButtonDiscrete
            href="/contact"
            label={t("contactCTA")}
            className="text-white"
          />
        </div>
      </div>

      {/* Åbningstider */}
      <div className="col-[content-start/3] md:col-[3/4] md:row-start-1 flex flex-col gap-6">
        <p className="font-ocr tracking-widest">{t("openingHours")}</p>

        <div className="leading-7">
          <p>{t("monFri")}</p>
          <p>{t("wednesday")}</p>
          <p>{t("saturday")}</p>
          <p>{t("sunday")}</p>
        </div>
        <LanguageSwitch />
      </div>

      {/* Logo + til toppen */}
      <div className="col-[3/content-end] row-start-1 flex flex-col items-end md:gap-0 md:justify-between md:col-[4/content-end] lg:col-[6/content-end] md:row-start-1">
        <p className="font-ocr text-2xl tracking-widest">{t("logo")}</p>
        <br />
        <a
          href="#top"
          className="font-medium hover:opacity-60 transition-opacity duration-200"
        >
          {t("toTop")}
        </a>
      </div>

      {/* Copyright */}
      <div className="col-[content-start/content-end] md:col-[content-start/2]">
        <p>{t("copyright")}</p>
      </div>
    </footer>
  );
}
