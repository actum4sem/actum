import Image from "next/image";
import { getTranslations } from "next-intl/server";
import ContactForm from "./components/contactform";

export default async function ContactPage() {
  // Fetches translations from the contact key in da.json / en.json
  const t = await getTranslations("contact");

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <section className="content grid grid-cols-1 md:grid-cols-2">
        {/* Image in left column */}
        <div className="relative h-40 md:h-full">
          <Image
            src="/assets/contact/contact_image.png"
            alt="Actum værksted"
            sizes="full-width"
            priority
            fill
            className="object-cover w-auto h-auto"
          />
        </div>
        {/* Form in right column */}
        <div>
          <h1 className="mt-0">{t("title")}</h1>
          {/* 
                        ContactForm is a client component and cannot use t() itself.
                        Translations are therefore passed down as props from this server component.
                        Zod validation error messages are also passed as props so they can be translated.
                    */}
          <p className="indent-36 mt-8 mb-8">{t("description")}</p>
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
    </main>
  );
}
