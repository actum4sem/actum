import { getTranslations } from "next-intl/server";
import ContactForm from "../../contact/components/contactform";

export default async function ContactSection() {
  const t = await getTranslations("contact");
  const tAbout = await getTranslations("faq_about");
  return (
    <section className="content">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
        <h2 className="font-ocr">{tAbout("h2")}</h2>

        <ContactForm
          submitLabel={t("submit")}
          emailLabel={t("email")}
          nameLabel={t("name")}
          phoneLabel={t("phone")}
          messageLabel={t("message")}
          errorEmail={t("errors.email")}
          errorName={t("errors.name")}
          errorPhone={t("errors.phone")}
          sendingLabel={t("sending")}
          sentLabel={t("sent")}
          errorLabel={t("error")}
        />
      </div>
    </section>
  );
}
