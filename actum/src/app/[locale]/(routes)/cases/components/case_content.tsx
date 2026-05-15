import { getCases } from "@/lib/cases";
import CaseItem from "./case_item";
import CasesNav from "./case_nav";

export default async function CasesContent() {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // kun til tjek - slet bagefter
    const cases = await getCases();

    return (
        <>
            <CasesNav cases={cases} />
            {cases.map((caseItem) => (
                <CaseItem key={caseItem.id} caseItem={caseItem} />
            ))}
        </>
    );
}