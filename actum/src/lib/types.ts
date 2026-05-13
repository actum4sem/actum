export type Product = {
  id: number;
  sort_by: number;
  name: {
    da: string;
    en: string;
  };
  description: {
    da: string;
    en: string;
  };
  category: {
    da: string;
    en: string;
  };
  pics: string[] | null;
  editorial_text: string | null;
  is_popular: boolean;
  created_at: string;
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
  title: {
    da: string;
    en: string;
  };
  description: {
    da: string;
    en: string;
  };
  image_url: string;
  display_order: number;
};

export type ContactFormData = {
  email: string;
  name: string;
  phone: string;
  message: string;
};
