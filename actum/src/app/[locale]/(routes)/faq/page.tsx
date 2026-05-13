import { getFaqs } from "@/lib/faq"
import { getFaqImages } from "@/lib/gallery"
import FaqPageSection from "./components/faq_page_section"
import FaqGallery from "./components/gallery"
import GlobalH1Section from "../global_components/global-h1-section"
import { getTranslations } from "next-intl/server"


export default async function FaqPage() {
  const [faqs, images] = await Promise.all([getFaqs(), getFaqImages()])
  const t = await getTranslations("faq")

  return (
   <main className="full-bleed grid grid-cols-subgrid">
      <GlobalH1Section title={t("title")} />
      <FaqPageSection faqs={faqs} />
      <FaqGallery images={images} />
    </main>
  )
}