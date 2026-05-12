import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

export default function CTAButton({ label, href }: Props) {
  return (
   <Link href={href} className="flex items-center justify-center px-16 py-3 text-sm tracking-widest bg-(--almost-black) text-white border border-(--almost-black) hover:bg-white hover:text-(--almost-black) transition-colors duration-200 whitespace-nowrap">
      {label}
    </Link>
  );
}
