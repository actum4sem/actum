import { getTranslations } from 'next-intl/server';

export default async function TestBanner({ locale }: { locale: string }) {
  const t = await getTranslations({ locale });

  return (
    <div style={{ background: "red", color: "white", padding: "1rem" }}>
      <p>{t("test")}</p>
    </div>
  );
}