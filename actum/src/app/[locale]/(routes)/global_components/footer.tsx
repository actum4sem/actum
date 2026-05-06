import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="full-bleed grid grid-cols-subgrid bg-(--almost-black) text-(--background) mt-16 py-12 md:py-16 gap-y-20 text-sm">

      {/* Kontakt */}
      <div className="col-[content-start/3] md:col-[content-start/3] md:row-start-1 flex flex-col gap-6">
        <p className="font-ocr tracking-widest">{t("kontakt")}</p>

        <div className="leading-7">
          <p>{t("navn")}</p>
          <p>{t("cvr")}</p>
          <br />
          <p>{t("adresse")}</p>
          <p>{t("by")}</p>
          <br />
          <p>{t("telefon")}</p>
          <p>{t("email")}</p>
        </div>
      </div>

      {/* Åbningstider */}
      <div className="col-[content-start/3] md:col-[3/4] md:row-start-1 flex flex-col gap-6">
        <p className="font-ocr tracking-widest">{t("aabningstider")}</p>

        <div className="leading-7">
          <p>{t("manfre")}</p>
          <p>{t("onsdag")}</p>
          <p>{t("lordag")}</p>
          <p>{t("sondag")}</p>
        </div>
      </div>

      {/* Logo + til toppen */}
      <div className="col-[3/content-end] row-start-1 flex flex-col items-end md:gap-0 md:justify-between md:col-[4/content-end] lg:col-[6/content-end] md:row-start-1">
        <p className="font-ocr text-2xl tracking-widest">{t("logo")}</p>
        <br />
        <a href="#top" className="font-medium hover:opacity-60 transition-opacity duration-200">
          {t("tiltoppen")}
        </a>
      </div>

      {/* Copyright */}
      <div className="col-[content-start/content-end] md:col-[content-start/2]">
        <p>{t("copyright")}</p>
      </div>
    </footer>
  );
}
