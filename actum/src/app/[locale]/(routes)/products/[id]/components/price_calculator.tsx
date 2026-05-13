"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import CtaButton from "@/app/[locale]/(routes)/global_components/cta_button";
import { Material } from "@/lib/types";
import { useTranslations } from "next-intl";

type Props = {
  materials: Material[];
};

export default function PriceCalculator({ materials }: Props) {
  const t = useTranslations("singleproduct");

  const [selected, setSelected] = useState<Record<string, Material>>({});
  const locale = useLocale() as "da" | "en";

  // Bruger da-værdien som stabil intern nøgle til gruppering
  const categoryKeys = [...new Set(materials.map((m) => m.category.da))];

  const totalPrice = Object.values(selected).reduce(
    (sum, m) => sum + m.price_per_unit,
    0,
  );
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
        {/* Venstre – dropdowns */}
        <div className="flex flex-col gap-4">
          {categoryKeys.map((categoryKey) => {
            const categoryLabel = materials.find(
              (m) => m.category.da === categoryKey,
            )?.category[locale];

            return (
              <div key={categoryKey} className="relative min-w-64">
                <select
                  className="w-full border border-black p-2 font-mono text-sm tracking-widest appearance-none bg-white cursor-pointer"
                  onChange={(e) => {
                    const material = materials.find(
                      (m) => m.id === e.target.value,
                    );
                    if (material)
                      setSelected((prev) => ({
                        ...prev,
                        [categoryKey]: material,
                      }));
                  }}
                >
                  <option>{categoryLabel}</option>
                  {materials
                    .filter((m) => m.category.da === categoryKey)
                    .map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.name[locale]}
                      </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute right-4 inset-y-0 flex items-center">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Højre – pris og knap */}
        <div className="flex flex-col gap-2 justify-end">
          <h4>{totalPrice.toFixed(2)} DKK</h4>
          <span className="text-gray-400 text-xs font-ocr">{t("price")}</span>
          <CtaButton label={t("link")} href="/contact" />
        </div>
      </div>
    </div>
  );
}
