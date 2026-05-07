import Image from "next/image"
import { getTranslations } from "next-intl/server"
import ContactForm from "./components/contactform"

export default async function ContactPage() {
    // Henter oversættelser fra contact-nøglen i da.json / en.json
    const t = await getTranslations("contact")

    return (
        <main className="full-bleed grid grid-cols-subgrid">
            <section className="content grid grid-cols-1 md:grid-cols-2">
                {/* Billede i venstre kolonne */}
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
                {/* Formular i højre kolonne */}
                <div>
                    <h1 className="mt-0">{t("titel")}</h1>
                    {/* 
                        ContactForm er en client component og kan ikke selv bruge t().
                        Vi sender derfor oversættelserne ned som props her fra server componenten.
                        Fejlbeskeder fra zod validering sendes også ned som props så de kan oversættes.
                    */}
                    <p className="indent-36 mt-8 mb-8">{t("beskrivelse")}</p>
                    <ContactForm
                        submitLabel={t("submit")}
                        emailLabel={t("email")}
                        navnLabel={t("navn")}
                        telefonLabel={t("telefon")}
                        beskedLabel={t("besked")}
                        fejlEmail={t("fejl.email")}
                        fejlNavn={t("fejl.navn")}
                        fejlTelefon={t("fejl.telefon")}
                        sendingLabel={t("sending")}
                        sentLabel={t("sent")}
                        errorLabel={t("error")}
                    />
                </div>
            </section>
        </main >
    )
}