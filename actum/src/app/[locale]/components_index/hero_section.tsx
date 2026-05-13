import { useTranslations } from "next-intl";
import HeroLogo from "./hero_logo";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="full-bleed grid grid-cols-subgrid grid-rows-[auto_auto_auto_auto]  overflow-hidden ">
      {/* Billeder */}
      <div className="col-[full-start/content-end] row-[1/3] grid grid-cols-3 gap-6">
        <div className="relative aspect-3/4">
          <Image src="/assets/index/hero1.jpg" alt="" fill priority className="object-cover" />
        </div>

        <div className="relative aspect-3/4">
          <Image src="/assets/index/hero2.jpg" alt="" fill priority className="object-cover" />
        </div>

        <div className="relative aspect-3/4">
          <Image src="/assets/index/hero3.jpg" alt="" fill priority className="object-cover" />
        </div>
      </div>
      {/* logo*/}
      <HeroLogo />
      {/* Titel */}
      <div className="content row-start-4">
        <h1 className="font-sans text-[8vw] leading-none tracking-wide md:text-[5vw]">{t("title")}</h1>
      </div>
      {/* Tekst */}
      <div className="col-[content-start/content-end] row-start-5 pt-5 md:col-[content-start/4]">
        <p className="text-base indent-20">{t("text")}</p>
      </div>
      {/* Prikker */}
      <div className="col-[4/full-end] row-[2/6] self-start justify-self-end z-10">
        <Image src="/assets/global/dots_big_group.svg" alt="" width={520} height={720} className="w-[32vw] max-w-130" />
      </div>
    </section>
  );
}
