import { getFaqs } from "@/lib/faq";
import { getFaqImages } from "@/lib/gallery";
import FaqPageSection from "./faq_page_section";
import FaqGallery from "./gallery";

export default async function FaqContent() {
    const [faqs, images] = await Promise.all([getFaqs(), getFaqImages()]);

    return (
        <section className="content grid grid-cols-subgrid">
            <FaqPageSection faqs={faqs} />
            <FaqGallery images={images} />
        </section>
    );
}