import { getTeamMembers } from "@/lib/team_members";
import Image from "next/image";

function MemberText({
  name,
  title,
  description,
}: {
  name: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col">
      <span className="font-ocr text-[--grey]">{name}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function MemberImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-3/4 w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 40vw"
      />
    </div>
  );
}

export default async function TeamSection() {
  const members = await getTeamMembers();

  return (
    //overvej gap el flere kolonner
    <section
      className="content grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8
"
    >
      {members.map((member) => (
        <article key={member.id} className="flex flex-col">
          <MemberImage src={member.image_url} alt={member.name} />
          <MemberText
            name={member.name}
            title={member.title}
            description={member.description}
          />
        </article>
      ))}
    </section>
  );
}
