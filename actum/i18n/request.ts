// import { getRequestConfig } from "next-intl/server";
// import { hasLocale } from "next-intl";
// import { routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
//   // Henter det "locale" som bruger har bedt/klikket på via URL'en ("da" / "en")
//   const requested = await requestLocale;

//   const locale = hasLocale(routing.locales, requested)
//     ? // tjekker om det ønskede locale findes
//       // Hvis ja: brug det - Hvis nej: brug defaultLocale som i vores tilfælde er dansk(da)
//       requested
//     : routing.defaultLocale;

//   // her henter vi oversættelsesfilen/json for alle vores sider på det valgte sprog
// const index = (await import(`../messages/${locale}/index.json`)).default;

// // global json dækker over header, footer, navigation osv. - altså de ting der er "globalt" på hele sitet og ikke kun på en enkelt side
// const global = (await import(`../messages/${locale}/global.json`)).default;
//   // tilføj alle json filer her som const og bagefter tilføj i messages objektet - altid med ... xyz, så det bliver samlet i et objekt

//   return {
//     // Fortæller next-intl hvilket sprog der er "aktivt"
//     locale,
//     messages: {
//       ...index,
//       ...global,
//     },
//   };
// });

// i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || routing.defaultLocale;

  return {
    locale,
    messages: {
      ...(await import(`../messages/${locale}/index.json`)).default,
      ...(await import(`../messages/${locale}/global.json`)).default,
    },
  };
});
