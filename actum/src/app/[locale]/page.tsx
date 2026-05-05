// import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  // Hent data fra din nye tabel
  const { data, error } = await supabase.from("personel").select("*");

  if (error) return <div>Fejl: {error.message}</div>;

  return (
    <main className="p-20">
      <p>{locale}</p>
      <h1 className="text-2xl font-bold mb-4">Mit personale:</h1>
      <ul className="list-disc pl-5">
        {data?.map((person, index) => (
          <li key={index} className="text-lg">
            {person.name}
          </li>
        ))}
      </ul>
      {data?.length === 0 && <p>Ingen navne fundet.</p>}
      <TestBanner locale={locale} />
    </main>
  );
}