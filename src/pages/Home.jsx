import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import PageTransition from '../components/PageTransition'
import { projects, info } from '../data/projects'

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

function HeroReel() {
  const [playing, setPlaying] = useState(false)
  const reel = projects.find(p => p.featured && p.type === 'video')
  if (!reel) return null

  return (
    <section className="home-hero" style={{
      marginTop: '3.2rem',
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      borderBottom: '1.5px solid var(--border)',
    }}>
     

      {/* Hero video */}
      <div style={{ position: 'relative', aspectRatio: '16/8', overflow: 'hidden' }}>
        <div
          onClick={() => !playing && setPlaying(true)}
          style={{ position: 'absolute', inset: 0, cursor: playing ? 'default' : 'pointer' }}
        >
          {!playing ? (
            <>
              <img
                src={reel.thumbnail}
                alt="Showreel"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
              />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    border: '1.5px solid var(--white)',
                    padding: '1rem 2.5rem',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    background: 'rgba(13,13,13,0.5)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '0.2em', color: 'var(--white)' }}>
                    PLAY SHOWREEL
                  </span>
                  <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>▶</span>
                </motion.div>
              </div>
              <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem' }}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.4)' }}>
                  Double click for fullscreen
                </span>
              </div>
            </>
          ) : (
            <iframe
              src={`${reel.src}?autoplay=1`}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay; fullscreen"
              title="Showreel"
            />
          )}
        </div>

        {!playing && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '4rem 1.5rem 1.5rem',
            background: 'linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8vw, 8rem)',
                lineHeight: 0.9,
                letterSpacing: '-0.01em',
                color: 'var(--white)',
              }}
            >
              {info.name.toUpperCase()}
            </motion.h1>
          </div>
        )}
      </div>

      {/* Bottom info bar */}
      <div className="home-info-bar" style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        borderTop: '1.5px solid var(--border)',
      }}>
        <div style={{ borderRight: '1.5px solid var(--border)', padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--white)', fontStyle: 'italic' }}>
            {info.bio}
          </p>
        </div>
        <a href="#work" data-cursor style={{
          padding: '0.8rem 0.5rem 0.8rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            letterSpacing: '0.15em',
            color: 'var(--white)',
          }}>
            SCROLL
          </span>
          <div style={{ position: 'relative', width: '1.2rem', height: '1.6rem', overflow: 'hidden' }}>
            <motion.span
              animate={{ y: ['-100%', '150%'] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                color: 'var(--accent)',
                display: 'inline-block',
                position: 'absolute',
                left: 0,
              }}
            >
              ↓
            </motion.span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default function Home() {
  const filtered = projects.filter(p => !p.showreelOnly)

  return (
    <PageTransition>
      <style>{`
        @media (max-width: 600px) {
          .home-hero { margin-top: 6.5rem !important; }
          .home-info-bar { grid-template-columns: 1fr !important; }
          .home-grid { grid-template-columns: 1fr !important; }
          .home-grid > div { border-right: none !important; }
          .home-footer { grid-template-columns: 1fr !important; }
          .home-footer > div { border-right: none !important; border-bottom: 1.5px solid var(--border); }
        }
      `}</style>
      <HeroReel />

      {/* ── PORTFOLIO MARQUEE BAR ─────────────────────────── */}
      <div id="work" style={{ overflow: 'hidden', borderBottom: '1.5px solid var(--border)', padding: '0.5rem 0', background: '#111' }}>
        <div style={{
          display: 'flex',
          animation: 'marquee 14s linear infinite',
          whiteSpace: 'nowrap',
          width: 'max-content',
        }}>
          {[...Array(12)].map((_, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              letterSpacing: '0.06em',
              color: i % 2 === 0 ? 'var(--white)' : 'var(--accent)',
              paddingRight: '2rem',
            }}>
              PORTFOLIO ✦
            </span>
          ))}
        </div>
      </div>

      {/* ── PROJECT GRID ─────────────────────────────────── */}
      <section style={{ padding: '0' }}>
        <div className="home-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}>
          {filtered.map((project, i) => (
            <div key={project.id} style={{
              borderRight: i % 2 === 0 ? '1.5px solid var(--border)' : 'none',
              borderBottom: '1.5px solid var(--border)',
              padding: '1.5rem',
            }}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="home-footer" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        borderTop: '1.5px solid var(--border)',
        marginTop: 'auto',
      }}>
        <div style={{ borderRight: '1.5px solid var(--border)', padding: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--white)' }}>VIC KURO</p>
          <p style={{ fontSize: '1rem', color: 'var(--white)', marginTop: '0.3rem' }}>Motion Designer</p>
        </div>
        <div style={{ borderRight: '1.5px solid var(--border)', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
          {[
            { href: `mailto:${info.email}`, icon: <IconEmail /> },
            { href: info.instagram, icon: <IconInstagram /> },
            { href: info.tiktok, icon: <IconTikTok /> },
            { href: info.linkedin, icon: <IconLinkedIn /> },
          ].filter(s => s.href).map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" data-cursor
              style={{ color: 'var(--white)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          <p style={{ fontSize: '1rem', color: 'var(--white)', letterSpacing: '0.08em' }}>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </PageTransition>
  )
}
