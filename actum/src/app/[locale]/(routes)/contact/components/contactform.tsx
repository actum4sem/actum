"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm } from "@/lib/submissions";

// Props receives translations as strings from page.tsx
// as t() from next-intl does not work in client components
// Error messages are also passed as props so zod can display them in the correct language
type Props = {
  submitLabel: string;
  emailLabel: string;
  nameLabel: string;
  phoneLabel: string;
  messageLabel: string;
  errorEmail: string;
  errorName: string;
  errorPhone: string;
  sendingLabel: string;
  sentLabel: string;
  errorLabel: string;
};

export default function ContactForm({
  submitLabel,
  emailLabel,
  nameLabel,
  phoneLabel,
  messageLabel,
  errorEmail,
  errorName,
  errorPhone,
  sendingLabel,
  sentLabel,
  errorLabel,
}: Props) {
  // Controls the submit button text depending on form state
  const [buttonText, setButtonText] = useState(submitLabel);

  // Zod schema defines validation rules for each field
  // Error messages come as props from page.tsx so they can be translated
  const contactSchema = z.object({
    email: z.string().email(errorEmail),
    name: z.string().min(2, errorName),
    phone: z.string().min(8, errorPhone),
    message: z.string(),
  });

  // TypeScript type is inferred automatically from the zod schema
  type FormData = z.infer<typeof contactSchema>;

  // reset is used to clear the form after successful submission
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  // Called when the form is submitted and validation passes
  const onSubmit = async (data: FormData) => {
    setButtonText(sendingLabel);

    try {
      await submitContactForm(data);
      // Resets the form and shows success message in the button
      setButtonText(sentLabel);
      reset();
      // Resets button text back to original after 3 seconds
      setTimeout(() => {
        setButtonText(submitLabel);
      }, 3000);
    } catch {
      setButtonText(errorLabel);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div>
        <input
          type="email"
          placeholder={emailLabel}
          className="w-full border-b border-(--almost-black) bg-transparent outline-none pb-4"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-xs text-(--grey)">{errors.email.message}</span>
        )}
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder={nameLabel}
            className="w-full border-b border-(--almost-black) bg-transparent outline-none pb-4"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-(--grey)">{errors.name.message}</span>
          )}
        </div>
        <div className="flex-1">
          <input
            type="tel"
            placeholder={phoneLabel}
            className="w-full border-b border-(--almost-black) bg-transparent outline-none pb-4"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-(--grey)">{errors.phone.message}</span>
          )}
        </div>
      </div>

      <div>
        <textarea
          placeholder={messageLabel}
          className="w-full border-b border-(--almost-black) bg-transparent outline-none resize-none h-32 pb-2"
          {...register("message")}
        />
      </div>

      <button
        type="submit"
        className="mt-10 w-1/2 mx-auto inline-block px-16 py-3 text-sm tracking-widest bg-(--almost-black) text-white border border-(--almost-black) hover:bg-white hover:text-(--almost-black) transition-colors duration-200"
      >
        {buttonText}
      </button>
    </form>
  );
}
