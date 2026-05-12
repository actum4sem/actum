import { getFaqs } from "@/lib/faq"
import { getFaqImages } from "@/lib/gallery"
import FaqPageSection from "./components/faq_page_section"
import FaqGallery from "./components/gallery"

export default async function FaqPage() {
  const [faqs, images] = await Promise.all([getFaqs(), getFaqImages()])

  return (
    <main className="full-bleed grid grid-cols-subgrid ">
  
      <FaqPageSection faqs={faqs} />
      <FaqGallery images={images} />

    </main>
  )
}