export type ContactFormData = {
  email: string;
  name: string;
  phone: string;
  message: string;
};

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Noget gik galt");
  }
}
