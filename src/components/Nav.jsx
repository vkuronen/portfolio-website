import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const IconEmail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
)

const IconInstagram = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const IconTikTok = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
)

const IconLinkedIn = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

export default function Nav() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const socials = [
    { href: 'mailto:victorkuronen16@gmail.com', icon: <IconEmail />, label: 'Email' },
    { href: 'https://instagram.com/iamvickuro', icon: <IconInstagram />, label: 'Instagram' },
    { href: 'https://www.tiktok.com/@iamvickuro', icon: <IconTikTok />, label: 'TikTok' },
    { href: 'https://www.linkedin.com/in/victor-kuronen-14a556323/', icon: <IconLinkedIn />, label: 'LinkedIn' },
  ]

  return (
    <>
      <style>{`
        .nav-socials-col { display: flex; }
        .nav-links-col { display: flex; }
        .nav-burger { display: none !important; }
        @media (max-width: 600px) {
          .nav-socials-col { display: none !important; }
          .nav-links-col { display: none !important; }
          .nav-burger { display: flex !important; }
          .nav-main-row { grid-template-columns: 1fr auto !important; }
        }
      `}</style>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          background: 'var(--bg)',
          maxWidth: '1600px',
          margin: '0 auto',
        }}
      >
        {/* Main nav row */}
        <div className="nav-main-row" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          borderBottom: '1.5px solid var(--border)',
        }}>
          <div style={{ borderRight: '1.5px solid var(--border)', padding: '1rem 1.5rem' }}>
            <Link to="/" style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              letterSpacing: '0.02em',
              color: 'var(--white)',
            }}>
              VIC KURO
            </Link>
          </div>

          <div className="nav-links-col" style={{ borderRight: '1.5px solid var(--border)', padding: '1rem 1.5rem', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: location.pathname === link.to ? 'var(--accent)' : 'var(--white)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--white)'}
                onMouseLeave={e => e.target.style.color = location.pathname === link.to ? 'var(--accent)' : 'var(--white)'}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-socials-col" style={{ padding: '1rem 1.5rem', alignItems: 'center', justifyContent: 'flex-end', gap: '1.2rem' }}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ color: 'var(--white)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <button
            className="nav-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              borderLeft: '1.5px solid var(--border)',
              cursor: 'pointer',
              padding: '1rem 1.5rem',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--white)',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="20" y2="20"/>
                  <line x1="20" y1="4" x2="4" y2="20"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="17" x2="21" y2="17"/>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Greeting marquee bar */}
        <div style={{
          borderBottom: '1.5px solid var(--border)',
          background: '#111',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          height: '3rem',
        }}>
          <div style={{
            display: 'flex',
            animation: 'marquee-right 20s linear infinite',
            whiteSpace: 'nowrap',
            width: 'max-content',
            alignItems: 'center',
          }}>
            {[...Array(4)].map((_, i) => (
              <span key={i} style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                letterSpacing: '0.08em',
                color: i % 2 === 0 ? 'var(--white)' : 'var(--accent)',
                paddingRight: '2rem',
              }}>
                HELLO ✦ HEJ ✦ HOLA ✦ BONJOUR ✦ OLA ✦ CIAO ✦ HALLO ✦ MERHABA ✦ SALAAM ✦ PRIVET ✦ NAMASTE ✦ NI HAO ✦
              </span>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu — outside nav so it doesn't interfere with borders */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '6.5rem',
              left: 0, right: 0, bottom: 0,
              background: '#111',
              zIndex: 199,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 15vw, 5rem)',
                  letterSpacing: '-0.01em',
                  color: location.pathname === link.to ? 'var(--accent)' : 'var(--white)',
                  borderBottom: '1.5px solid var(--border)',
                  padding: '1rem 0',
                  display: 'block',
                }}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ color: 'var(--white)', display: 'flex', alignItems: 'center' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
