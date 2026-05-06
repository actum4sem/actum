"use client";

import { useState } from "react";
import CtaButton from "@/app/[locale]/(routes)/global_components/cta_button";
type Material = {
  name: string;
  price_per_unit: number;
  category: string;
  id: string;
};

type Props = {
  materials: Material[];
};

export default function PriceCalculator({ materials }: Props) {
  const [selected, setSelected] = useState<Record<string, Material>>({});
  const [quantity, setQuantity] = useState(1);

  const categories = [...new Set(materials.map((m) => m.category))];

  const totalPrice =
    Object.values(selected).reduce((sum, m) => sum + m.price_per_unit, 0) *
    quantity;

  return (
    <div>
      <div>
        {categories.map((category) => (
          <div key={category} className="relative mb-7">
            <select
              className="w-full border border-black p-2 font-mono text-sm uppercase tracking-widest appearance-none bg-white cursor-pointer"
              onChange={(e) => {
                const material = materials.find((m) => m.id === e.target.value);
                if (material)
                  setSelected((prev) => ({ ...prev, [category]: material }));
              }}
            >
              <option>{category}</option>
              {materials
                .filter((m) => m.category === category)
                .map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
            </select>
            <div className="pointer-events-none absolute right-4 inset-y-0 flex items-center">
              {" "}
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="1" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* <label>Antal</label>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        /> */}
      </div>
      <h4 className="text-h4">{totalPrice.toFixed(2)} DKK</h4>
      <span className="text-gray-400  p-0 text-xs font-ocr">
        vejledende pris
      </span>
      <CtaButton label="Kontakt os" href="/contact" />
    </div>
  );
}
