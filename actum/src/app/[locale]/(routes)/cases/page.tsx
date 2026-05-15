// import { getCases } from "@/lib/cases";
// import CaseItem from "./components/case_item";
// import CasesNav from "./components/case_nav";
// import GlobalH1Section from "../global_components/global-h1-section";
// import { useTranslations } from "next-intl";

// export default async function CasesPage() {
//   const cases = await getCases();
// const t = useTranslations("cases")
//   return (
//     <main className="full-bleed grid grid-cols-subgrid">
//       <section className="content grid grid-cols-subgrid">
//     <GlobalH1Section title={t("titel")} />
//         {/* Navigation — skjult på mobil */}
//         <CasesNav cases={cases} />

//         {cases.map((caseItem) => (
//           <CaseItem key={caseItem.id} caseItem={caseItem} />
//         ))}
//       </section>
//     </main>
//   );
// }

import { Suspense } from "react";
import CasesContent from "./components/case_content";
import GlobalH1Section from "../global_components/global-h1-section";
import { getTranslations } from "next-intl/server";

export default async function CasesPage() {
    const t = await getTranslations("cases");

    return (
        <main className="full-bleed grid grid-cols-subgrid">
            <section className="content grid grid-cols-subgrid">
                <GlobalH1Section title={t("titel")} />
                <Suspense fallback={<p>Loading cases...</p>}>
                    <CasesContent />
                </Suspense>
            </section>
        </main>
    );
}