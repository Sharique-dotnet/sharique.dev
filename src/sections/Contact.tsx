import { useState } from 'react'
import { SectionLabel } from '../components'
import { CONTACT, EMAIL, LINKEDIN } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = () =>
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })

  return (
    <section id="contact" data-nav className="section contact">
      <div className="contact-inner">
        <SectionLabel n="07" cmd="~/contact $ ./connect.sh" line={false} center />
        <h2 data-reveal="up" className="contact-h2">{CONTACT.title}</h2>
        <p data-reveal="up" className="contact-pitch">{CONTACT.pitch}</p>

        <div data-reveal="up" className="email-box">
          <a href={`mailto:${EMAIL}`} className="email-link mono">
            <span className="email-at">@</span>
            <span className="email-text">{EMAIL}</span>
          </a>
          <button className={'copy-btn mono' + (copied ? ' copied' : '')} aria-label="Copy email address" onClick={copy}>
            {copied ? 'copied ✓' : 'copy'}
          </button>
          <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
        </div>

        <div data-reveal="up" className="contact-ctas">
          <a href={LINKEDIN} target="_blank" rel="noopener" className="btn btn-ghost">
            <span className="mono li-mark">in</span>LinkedIn <span className="mono">↗</span>
          </a>
          <a href={`mailto:${EMAIL}?subject=Let%27s%20connect`} className="btn btn-primary">
            Email me <span className="mono">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
