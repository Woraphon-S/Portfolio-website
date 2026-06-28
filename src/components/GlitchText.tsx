interface GlitchTextProps {
  text: string
  as?: 'span' | 'h1' | 'h2' | 'div'
  className?: string
}

/** Text with an RGB-split glitch effect (driven by CSS pseudo-elements). */
export function GlitchText({ text, as = 'span', className }: GlitchTextProps) {
  const Tag = as
  return (
    <Tag className={`glitch ${className ?? ''}`} data-text={text}>
      {text}
    </Tag>
  )
}
