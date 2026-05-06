
import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

export default function CTAButtonDiscrete({ label, href }: Props) {
  return (
    <Link
      href={href}
      className="inline-block text-sm tracking-widest text-(--almost-black) hover:text-base transition-all duration-200"
    >
      {label} →
    </Link>
  );
}