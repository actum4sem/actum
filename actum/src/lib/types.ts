export type Product = {
  id: number;
  name: string;
  description: string;
  pics: string[];
  editorial_text?: string | null;
  sort_by?: number;
  category?: string;
};

export type Material = {
  id: number;
  name: string;
  price_per_unit: number;
  category: string;
};
