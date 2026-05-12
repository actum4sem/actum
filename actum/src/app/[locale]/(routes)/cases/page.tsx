import { getCases } from "@/lib/cases";
import CaseItem from "./components/case_item";
import CasesNav from "./components/case_nav";

export default async function CasesPage() {
  const cases = await getCases();

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <section className="content grid grid-cols-subgrid">
        {/* Navigation — skjult på mobil */}
        <CasesNav cases={cases} />

        {cases.map((caseItem) => (
          <CaseItem key={caseItem.id} caseItem={caseItem} />
        ))}
      </section>
    </main>
  );
}
