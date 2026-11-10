// Allow CSS custom properties (e.g. style={{ '--d': 120 }}) in inline styles.
// --d is a reveal delay in ms (unitless; index.css multiplies by 1ms).
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}

// "01 ── ~/about $ cat profile.md" row above each section heading
export function SectionLabel({ n, cmd, line = true, center = false }: { n: string; cmd: string; line?: boolean; center?: boolean }) {
  return (
    <div data-reveal="up" className={'section-label mono' + (center ? ' center' : '')}>
      <span>{n}</span>
      {line && <span className="section-line" />}
      <span>{cmd}</span>
    </div>
  )
}
