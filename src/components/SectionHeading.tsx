interface SectionHeadingProps {
  index: string
  title: string
  accentWord?: string
  sub?: string
}

export function SectionHeading({ index, title, accentWord, sub }: SectionHeadingProps) {
  return (
    <div className="heading">
      <span className="heading__idx">{index}.</span>
      <h2 className="heading__title">
        {title}
        {accentWord ? <span className="accent"> {accentWord}</span> : null}
      </h2>
      <span className="heading__line" />
      {sub ? <span className="heading__sub">{sub}</span> : null}
    </div>
  )
}
