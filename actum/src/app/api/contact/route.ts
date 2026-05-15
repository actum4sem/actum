import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  const { error } = await supabase
    .from("contact_submissions")
    .insert([{ name, email, phone, message }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "fridalindbjerg@gmail.com",
    replyTo: email,
    subject: `Ny henvendelse fra ${name}`,
    html: `
      <h2>Ny henvendelse fra kontaktformularen</h2>
      <p><strong>Navn:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Besked:</strong> ${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
