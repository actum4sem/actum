import { supabase } from "@/lib/supabaseClient";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  const { data, error } = await supabase
    .from("personel")
    .select("*");

  if (error) {
    return <div>Fejl: {error.message}</div>;
  }

  return (
    <main className="p-20">
      <h1 className="text-2xl font-bold mb-4">
        {t("title")}
      </h1>

      <ul className="list-disc pl-5">
        {data?.map((person) => (
          <li key={person.id} className="text-lg">
            {person.name}
          </li>
        ))}
      </ul>

      {data?.length === 0 && (
        <p>{t("empty")}</p>
      )}

      <div style={{ background: "red", color: "white", padding: "1rem" }}>
        <p>{t("test")}</p>
      </div>
    </main>
  );
}