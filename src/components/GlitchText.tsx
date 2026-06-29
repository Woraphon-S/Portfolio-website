interface GlitchTextProps {
  text: string
  as?: 'span' | 'h1' | 'h2' | 'div'
  className?: string
}

export function GlitchText({ text, as = 'span', className }: GlitchTextProps) {
  const Tag = as
  return (
    <Tag className={`glitch ${className ?? ''}`} data-text={text}>
      {text}
    </Tag>
  )
}
