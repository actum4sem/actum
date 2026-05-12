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

export type Case = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  orientation: string;
  order: number;
};
