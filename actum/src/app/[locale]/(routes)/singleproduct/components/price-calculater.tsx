"use client";

import { useState } from "react";

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
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <select
            onChange={(e) => {
              const material = materials.find((m) => m.id === e.target.value);
              if (material)
                setSelected((prev) => ({ ...prev, [category]: material }));
            }}
          >
            <option value="">Vælg {category}</option>
            {materials
              .filter((m) => m.category === category)
              .map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
          </select>
        </div>
      ))}

      <div>
        <label>Antal</label>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      <p>Total: {totalPrice.toFixed(2)} kr</p>
    </div>
  );
}
