import Image from "next/image";

export default function Hero() {
  return (
    <section className="full-bleed grid grid-cols-subgrid grid-rows-[auto_auto_auto_auto] overflow-hidden ">
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
      <div className="content row-[2/4] self-center ">
        <p className="font-ocr text-[22vw] leading-none tracking-[0.04em]">
          actum
        </p>
      </div>

      {/* Titel */}
      <div className="content row-start-4">
        <h1 className="font-sans text-[8vw] leading-none tracking-[0.18em] md:text-[5vw]">
          design og tryk
        </h1>
      </div>

      {/* Tekst */}
      <div className="col-[content-start/content-end] row-start-5 pt-16 md:col-[content-start/4]">
        <p className="text-base leading-7">
          Du har en opgave, der skal løses. Vi tager den ind, sætter filerne op
          og leverer til tiden. Uanset om det er visitkort, menukort eller
          bannere til næste event.
        </p>
      </div>

      {/* Prikker */}
      <div className="col-[4/full-end] row-[2/6] self-start justify-self-end absolute">
        <Image
          src="/assets/global/dots_big_group.svg"
          alt=""
          width={520}
          height={720}
          className="w-[32vw] max-w-[520px]"
        />
      </div>
    </section>
  );
}