"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// her har vi lavet vores NavLink komponent, som vi kan genbruge i både headeren og mobilmenuen. Den tager href og label som props, og bruger usePathname til at tjekke, om det er den aktive side, så vi kan style det anderledes.

// også fordi Fordi usePathname() er en hook, og hooks kræver en client component. Headeren er en server component – den bruger async og getTranslations. Hvis vi havde skrevet usePathname() direkte i headeren, ville Next.js smide en fejl fordi server components ikke kan bruge hooks. Ved at isolere usePathname() i NavLink holder vi headeren som server component og lægger kun det mindst mulige på client side – præcis som best practice foreskriver i Next.js.


type Props = {
  href: string;
  label: string;
    onClick?: () => void;
};

export default function NavLink({ href, label, onClick }: Props) {
  // henter den aktuelle URL-sti, fx "/da/contact" eller "/en/cases"
  const pathname = usePathname();

  // ternary operator er en forkortet if/else:
  // betingelse ? hvad der sker hvis true : hvad der sker hvis false

  const isActive = href === "/"     
  ? /^\/(da|en)\/?$/.test(pathname) || pathname === "/" 
//   "forsidelogik" - hvis href er "/", tjekker vi om pathname er enten "/da" eller "/en" med eller uden trailing slash. Regex'en ^\/(da|en)\/?$ tjekker om pathname er præcis /da, /en, /da/ eller /en/ – altså forsiden med et locale-præfiks. pathname === "/" fanger forsiden uden præfiks. De to er sat sammen med || (eller), så én af dem skal være sand. Betingelsen er sand hvis mindst én af siderne er true. Begge behøver ikke være sande på samme tid.



    // hvis href ikke er forsiden, sætter vi locale-præfikset foran href og tjekker om pathname matcher præcis
        // fx hvis href er "/contact", tjekker vi om pathname er "/da/contact" eller "/en/contact"
      // || betyder eller – begge locales skal kunne matche, men kun én behøver at være sand

  : pathname === `/da${href}` || pathname === `/en${href}`;


    


  return (
    <li>
      <Link href={href}  onClick={onClick} className={isActive ? "text-(--grey)" : ""}>
              {/* hvis isActive er true, sætter vi teksten til --grey, ellers ingen klasse, da vi gerne vil have at man kan se hvilken side man er på ved at den er i en anden farve. */}

        {label}
      </Link>
    </li>
  );
}
