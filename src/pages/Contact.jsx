import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { info } from '../data/projects'

function TypingText() {
  const [displayed, setDisplayed] = useState('')
  const full = 'HELLO.'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(full.slice(0, i + 1))
      i++
      if (i === full.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return <span>{displayed}</span>
}

const IconEmail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
)

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const IconTikTok = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
)

const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const iconMap = {
  Instagram: <IconInstagram />,
  TikTok: <IconTikTok />,
  LinkedIn: <IconLinkedIn />,
}

export default function Contact() {
  return (
    <PageTransition>
      <style>{`
        @media (max-width: 600px) {
          .contact-wrap { margin-top: 5.5rem !important; }
          .contact-email span { font-size: 0.9rem !important; }
        }
      `}</style>
      <div className="contact-wrap" style={{ marginTop: '6rem' }}>

        {/* Big heading */}
        <div style={{ padding: '3rem 1.5rem 2rem', borderBottom: '1.5px solid var(--border)' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 12vw, 11rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              color: 'var(--white)',
            }}
          >
            SAY<br /><TypingText />
          </motion.h1>
        </div>

        {/* Email row */}
        <a
          href={`mailto:${info.email}`}
          data-cursor
          className="contact-email"
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'stretch',
            borderBottom: '1.5px solid var(--border)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#111'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <div style={{ borderRight: '1.5px solid var(--border)', padding: '1rem 1.5rem', minWidth: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>
            <IconEmail />
          </div>
          <div style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--white)', letterSpacing: '0.02em' }}>
              EMAIL
            </span>
          </div>
          <div style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>↗</span>
          </div>
        </a>

        {/* Social links */}
        {[
          { label: 'Instagram', url: info.instagram },
          { label: 'TikTok', url: info.tiktok },
          { label: 'LinkedIn', url: info.linkedin },
        ].filter(s => s.url).map(social => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            data-cursor
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              alignItems: 'stretch',
              borderBottom: '1.5px solid var(--border)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#111'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{ borderRight: '1.5px solid var(--border)', padding: '1rem 1.5rem', minWidth: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>
              {iconMap[social.label]}
            </div>
            <div style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--white)', letterSpacing: '0.04em' }}>
                {social.label.toUpperCase()}
              </span>
            </div>
            <div style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>↗</span>
            </div>
          </a>
        ))}
      </div>
    </PageTransition>
  )
}
