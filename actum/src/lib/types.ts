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
  id: string;
  price_per_unit: number;
  category: {
    da: string;
    en: string;
  };
  name: {
    da: string;
    en: string;
  };
};
export type Case = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  orientation: string;
  order: number;
};

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  description: string;
  image_url: string;
  display_order: number;
};

export type ContactFormData = {
  email: string;
  name: string;
  phone: string;
  message: string;
};
