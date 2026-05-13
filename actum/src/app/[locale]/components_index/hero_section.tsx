// import { useTranslations } from "next-intl";
// import HeroLogo from "./hero_logo";
// import Image from "next/image";

// export default function Hero() {
//   const t = useTranslations("hero");

//   return (
//     <section className="full-bleed grid grid-cols-subgrid grid-rows-[auto_auto_auto_auto]  overflow-hidden ">
//       {/* Billeder */}
//       <div className="col-[full-start/content-end] row-[1/3] grid grid-cols-3 gap-6">
//         <div className="relative aspect-3/4">
//           <Image src="/assets/index/hero1.jpg" alt="" fill priority className="object-cover" />
//         </div>

//         <div className="relative aspect-3/4">
//           <Image src="/assets/index/hero2.jpg" alt="" fill priority className="object-cover" />
//         </div>

//         <div className="relative aspect-3/4">
//           <Image src="/assets/index/hero3.jpg" alt="" fill priority className="object-cover" />
//         </div>
//       </div>
//       {/* logo*/}
//       <HeroLogo />
//       {/* Titel */}
//       <div className="content row-start-4">
//         <h1 className="font-sans text-[8vw] leading-none tracking-wide md:text-[5vw]">{t("titel")}</h1>
//       </div>
//       {/* Tekst */}
//       <div className="col-[content-start/content-end] row-start-5 pt-5 md:col-[content-start/4]">
//         <p className="text-base indent-20">{t("tekst")}</p>
//       </div>
//       {/* Prikker */}
//       <div className="col-[4/full-end] row-[2/6] self-start justify-self-end z-10">
//         <Image src="/assets/global/dots_big_group.svg" alt="" width={520} height={720} className="w-[32vw] max-w-130" />
//       </div>
//     </section>
//   );
// }

// import { useTranslations } from "next-intl";
// import Image from "next/image";

// export default function Hero() {
//   const t = useTranslations("hero");

//   return (
//     <section className="full-bleed grid grid-cols-subgrid grid-rows-[auto_auto_auto] ">
//       {/* 
//         ROW 1–2: Billeder + logo overlapper hinanden via samme row-span.
//         Billederne sidder i row 1/3, logoet sidder i row 2/3.
//         Overlap sker via grid stacking, ikke absolute.
//       */}

//       {/* Billeder — row 1 til 3, col full-start til content-end */}
//       <div
//         className="
//           col-[content-start/content-end]
//           row-[1/3]
//           grid
//           grid-cols-4
//           gap-6
//         "
//       >
//         <div className="relative aspect-3/4">
//           <Image src="/assets/index/hero1.jpg" alt="" fill priority className="object-cover" />
//         </div>
//         <div className="relative aspect-3/4">
//           <Image src="/assets/index/hero2.jpg" alt="" fill priority className="object-cover" />
//         </div>
//         <div className="relative aspect-3/4">
//           <Image src="/assets/index/hero3.jpg" alt="" fill priority className="object-cover" />
//         </div>
//         <div className="relative aspect-3/4">
//           <Image src="/assets/index/hero3.jpg" alt="" fill priority className="object-cover" />
//         </div>
//       </div>

//       {/* 
//         Logo — sidder i row 2/3, col full-start/content-end.
//         Overlapper billedernes nedre halvdel via grid stacking.
//         z-index 10 for at ligge ovenpå billederne.
//       */}
//       <div
//         className="
//           col-[full-start/content-end]
//           row-[2/3]
//           self-end
//           z-10
//         "
//       >
//         {/* 
//           Logoet er et SVG/tekstelement der fylder kolonnebredde.
//           self-end ankrer det til bunden af row 2.
//           Ingen absolute, ingen minus-margin.
//         */}
//         <svg viewBox="0 0 800 120" className="w-full" aria-hidden="true">
//           <text x="0" y="100" fontFamily="sans-serif" fontSize="120" fontWeight="700" letterSpacing="-2" fill="black">
//             actum
//           </text>
//         </svg>
//       </div>

//       {/* 
//         "design og tryk" — row 3, content-kolonnerne.
//         Fordi det nu er et selvstændigt grid-item i row 3,
//         kan du flytte det præcist ved at justere self-start/end
//         og col-placering — ingen minus-margin nødvendig.
//       */}
//       <div className="col-[content-start/content-end] row-[3/4] self-start">
//         <h1 className="font-sans text-[8vw] leading-none md:text-[5vw]">{t("titel")}</h1>
//       </div>

//       {/* 
//         Brødtekst — row 4, venstre content-kolonner
//       */}
//       <div className="col-[content-start/4] row-[4/5]">
//         <p className="text-base indent-20">{t("tekst")}</p>
//       </div>

//       {/* 
//         Prikker — spanner row 2 til 5, højre kant.
//         z-index 10 er forsvarligt her: det er et dekorativt element
//         der bevidst skal ligge over indhold.
//         self-start sikrer at det starter fra toppen af row-spandet.
//       */}
//       <div
//         className="
//           col-[4/full-end]
//           row-[1/3]
//           self-start
//           justify-self-end
//           z-10
//         "
//       >
//         <Image src="/assets/global/dots_big_group.svg" alt="" width={520} height={720} className="w-[22vw] max-w-130" />
//       </div>
//     </section>
//   );
// }


import { useTranslations } from "next-intl";
import HeroLogo from "./hero_logo";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="full-bleed grid grid-cols-subgrid grid-rows-[auto_auto_auto]">
      {/* Billeder */}
      <div className="col-[content-start/content-end] row-[1/3] grid grid-cols-4 gap-6">
        <div className="relative aspect-3/4">
          <Image src="/assets/index/hero1.jpg" alt="" fill priority className="object-cover" />
        </div>
        <div className="relative aspect-3/4">
          <Image src="/assets/index/hero2.jpg" alt="" fill priority className="object-cover" />
        </div>
        <div className="relative aspect-3/4">
          <Image src="/assets/index/hero3.jpg" alt="" fill priority className="object-cover" />
        </div>
        <div className="relative aspect-3/4">
          <Image src="/assets/index/hero3.jpg" alt="" fill priority className="object-cover" />
        </div>
      </div>

      {/* Logo */}
      <HeroLogo />

      {/* Titel */}
      <div className="col-[content-start/content-end] row-[3/4] self-start">
        <h1 className="font-sans text-[8vw] leading-none md:text-[5vw]">{t("titel")}</h1>
      </div>

      {/* Tekst */}
      <div className="col-[content-start/4] row-[4/5]">
        <p className="text-base indent-20">{t("tekst")}</p>
      </div>

      {/* Prikker */}
      <div className="col-[4/full-end] row-[1/3] self-start justify-self-end z-10">
        <Image src="/assets/global/dots_big_group.svg" alt="" width={520} height={720} className="w-[22vw] max-w-130" />
      </div>
    </section>
  );
}