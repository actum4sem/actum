"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { supabase } from "@/lib/supabaseClient"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

// Props modtager oversættelser som strings fra page.tsx
// da t() fra next-intl ikke virker i client components
// Fejlbeskeder sendes også ned som props så zod kan vise dem på det rigtige sprog
type Props = {
    submitLabel: string
    emailLabel: string
    navnLabel: string
    telefonLabel: string
    beskedLabel: string
    fejlEmail: string
    fejlNavn: string
    fejlTelefon: string
    sendingLabel: string
    sentLabel: string
    errorLabel: string
}

export default function ContactForm({ submitLabel, emailLabel, navnLabel, telefonLabel, beskedLabel, fejlEmail, fejlNavn, fejlTelefon, sendingLabel, sentLabel, errorLabel }: Props) {

    // Styrer teksten i submit-knappen afhængigt af formularens tilstand
    const [buttonText, setButtonText] = useState(submitLabel)

    // Zod schema definerer reglerne for hvert felt
    // Fejlbeskeder kommer som props fra page.tsx så de kan oversættes
    const contactSchema = z.object({
        email: z.string().email(fejlEmail),
        navn: z.string().min(2, fejlNavn),
        telefon: z.string().min(8, fejlTelefon),
        besked: z.string(),
    })

    // TypeScript type udledes automatisk fra zod schema
    type FormData = z.infer<typeof contactSchema>

    // reset bruges til at nulstille formularen efter succesfuld indsendelse
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(contactSchema),
    })

    // Kaldes når formularen submittes og validering er godkendt
    // Sender data til Supabase tabellen contact_submissions
    const onSubmit = async (data: FormData) => {
        setButtonText(sendingLabel)

        const { error } = await supabase
            .from("contact_submissions")
            .insert([data])

        if (error) {
            console.error("Fejl ved indsendelse:", error)
            setButtonText(errorLabel)
            return
        }

        // Nulstiller formularen og viser succesbesked i knappen
        setButtonText(sentLabel)
        reset()

        // Resetter knaptekst tilbage til original efter 3 sekunder
        setTimeout(() => {
            setButtonText(submitLabel)
        }, 3000)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            <div>
                <input
                    type="email"
                    placeholder={emailLabel}
                    className="w-full border-b border-(--almost-black) bg-transparent outline-none pb-4"
                    {...register("email")}
                />
                {errors.email && <span className="text-xs text-(--grey)">{errors.email.message}</span>}
            </div>

            <div className="flex gap-4">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder={navnLabel}
                        className="w-full border-b border-(--almost-black) bg-transparent outline-none pb-4"
                        {...register("navn")}
                    />
                    {errors.navn && <span className="text-(--grey)">{errors.navn.message}</span>}
                </div>
                <div className="flex-1">
                    <input
                        type="tel"
                        placeholder={telefonLabel}
                        className="w-full border-b border-(--almost-black) bg-transparent outline-none pb-4"
                        {...register("telefon")}
                    />
                    {errors.telefon && <span className="text-(--grey)">{errors.telefon.message}</span>}
                </div>
            </div>

            <div>
                <textarea
                    placeholder={beskedLabel}
                    className="w-full border-b border-(--almost-black) bg-transparent outline-none resize-none h-32 pb-2"
                    {...register("besked")}
                />
            </div>

            <button
                type="submit"
                className="mt-10 w-1/2 mx-auto inline-block px-16 py-3 text-sm tracking-widest bg-(--almost-black) text-white border border-(--almost-black) hover:bg-white hover:text-(--almost-black) transition-colors duration-200"
            >
                {buttonText}
            </button>
        </form>
    )
}