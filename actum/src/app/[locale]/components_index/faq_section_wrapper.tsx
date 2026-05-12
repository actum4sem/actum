// faq_section_wrapper.tsx
import { getFaqs } from "@/lib/faq";
import FaqSection from "./faq_section";

export default async function FaqSectionWrapper() {
  const faqs = await getFaqs(4);
  return <FaqSection faqs={faqs} />;
}
