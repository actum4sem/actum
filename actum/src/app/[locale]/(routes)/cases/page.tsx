import { supabase } from "@/lib/supabaseClient"
import CaseItem from "./components/case_item"
import CasesNav from "./components/case_nav"

// TypeScript type der matcher vores Supabase tabel
type Case = {
    id: number
    titel: string
    beskrivelse: string
    billede_url: string
    orientering: string
    orden: number
}

export default async function CasesPage() {
    // Henter cases fra Supabase sorteret efter orden
    const { data: cases, error } = await supabase
        .from("cases")
        .select("*")
        .order("orden", { ascending: true })

    // Fejlhåndtering ved hentning af data
    if (error) {
        console.error("Fejl ved hentning af cases:", error)
    }

    return (
        <main className="full-bleed grid grid-cols-subgrid">
            <section className="content grid grid-cols-2 md:grid-cols-3">

                {/* Kolonne 1 — sticky navigation */}
                <CasesNav cases={cases ?? []} />

                {/* Kolonne 2 og 3 — cases med clip-path animation */}
                {cases?.map((caseItem) => (
                    <CaseItem key={caseItem.id} caseItem={caseItem} />
                ))}

            </section>
        </main>
    )
}