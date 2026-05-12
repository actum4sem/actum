

type Props = {
  title: string
}

export default function GlobalH1Section({ title }: Props) {
  return (
    <section className="col-[content-start/content-end] ">
      <h1 className="font-ocr">{title}</h1>
    </section>
  )
}