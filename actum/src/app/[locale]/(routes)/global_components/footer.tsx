import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="full-bleed grid grid-cols-subgrid bg-(--almost-black) text-(--background) mt-16 py-12 md:py-16">
      {/* Kontakt */}
      <div className="content flex flex-col gap-8 md:col-[content-start/span_1] md:row-start-1">
        <p className="font-ocr tracking-[0.35em]">{t("kontakt")}</p>

        <div className="flex flex-col">
          <p>{t("navn")}</p>
          <p>{t("cvr")}</p>
        </div>

        <div className="flex flex-col">
          <p>{t("adresse")}</p>
          <p>{t("by")}</p>
        </div>

        <p>{t("telefon")}</p>
        <p>{t("email")}</p>
      </div>

      {/* Åbningstider */}
      <div className="content col-2/span_1 mt-20 flex flex-col gap-8 md:col-[2/span_1] md:row-start-1 md:mt-0">
        <p className="font-ocr tracking-[0.35em]">{t("aabningstider")}</p>

        <div className="flex flex-col">
          <p>{t("manfre")}</p>
          <p>{t("onsdag")}</p>
          <p>{t("lordag")}</p>
          <p>{t("sondag")}</p>
        </div>
      </div>

      {/* Logo + til toppen */}
      <div className="content mt-28 flex flex-row items-end justify-between md:col-[content-end/span_1] md:row-start-1 md:mt-0 md:flex-col md:items-end md:justify-between">
        <p className="font-ocr text-2xl tracking-[0.35em]">{t("logo")}</p>

        <a href="#top" className="font-medium transition-opacity duration-200 hover:opacity-60">
          {t("tiltoppen")}
        </a>
      </div>

      {/* Copyright */}
      <div className="content mt-8 md:col-[content-start/span_1] md:row-start-2 md:mt-16">
        <p>{t("copyright")}</p>
      </div>
    </footer>
  );
}
