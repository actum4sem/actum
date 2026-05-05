import Image from "next/image";
import CTAButton from "../global_components/cta_button";
import CTAButtonDiscrete from "../global_components/cta_button_discrete";

export default function AboutPage() {
  return (
    <main className="p-16">
      <h1 className="text-2xl mb-4 font-ocr">Om Actum</h1>
      <p className="text-base leading-relaxed font-sans">Actum Design og Tryk er et trykkeri på Vesterbro i København. Vi specialiserer os i print, der kræver tid, faglig viden og håndværk.</p>
      <CTAButton label="Lær mere" href="/about" />
        <CTAButtonDiscrete label="Se vores arbejde" href="/work" />
    </main>
  );
}
