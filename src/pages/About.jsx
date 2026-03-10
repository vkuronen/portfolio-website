import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { info } from '../data/projects'

export default function About() {
  return (
    <PageTransition>
      <style>{`
  @media (max-width: 600px) {
    .about-wrap { margin-top: 7rem !important; }
    .about-grid { grid-template-columns: 1fr !important; }
    .about-photo { max-height: 350px !important; border-right: none !important; border-bottom: 1.5px solid var(--border); }
    .about-photo img { object-position: center 30% !important; }
    .about-text { padding: 2rem 1.5rem !important; }
    .about-cta { grid-template-columns: 1fr !important; }
    .about-cta-text { border-right: none !important; border-bottom: 1.5px solid var(--border); }
    .about-socials { grid-template-columns: repeat(3, 1fr) !important; }
  }
`}</style>
      <div className="about-wrap" style={{ marginTop: '6rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderBottom: '1.5px solid var(--border)',
        }}>
          {/* LEFT — photo */}
          <div className="about-photo" style={{
  borderRight: '1.5px solid var(--border)',
  overflow: 'hidden',
  height: '100%',
}}>
  <img
    src="/images/IMG_2722.jpg"
    alt="Vic Kuro"
    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center top' }}
  />
</div>

          {/* RIGHT — text */}
          <div className="about-text" style={{ padding: '6.4rem 1.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: 0.95,
                letterSpacing: '0.01em',
                color: 'var(--white)',
                marginBottom: '2rem',
              }}
            >
              YoOo<br />WASSUP?
            </motion.h1>

            <p style={{ fontSize: '1.5rem', color: 'var(--white)', lineHeight: 1.9, marginBottom: '1rem' }}>
              My name is Victor Kuronen, a.k.a. Vic Kuro, a.k.a. Bukloso.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--white)', lineHeight: 1.9, marginBottom: '1rem' }}>
              I’m an aspiring motion designer and multidisciplinary artist working across animation, visual art, and music production. My work tends to lean toward playful, strange, and slightly surreal visuals. My creative journey began when I hit my head really hard as a kid. I'm always down to learn new things and I'm never scared of a challenge. I look forward to bringing fresh ideas to the table and creating some dope shit in the future. I am also left-handed.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta" style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          borderBottom: '1.5px solid var(--border)',
          alignItems: 'center',
        }}>
          <div className="about-cta-text" style={{ borderRight: '1.5px solid var(--border)', padding: '2rem 1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--white)' }}>
              AVAILABLE FOR PROJECTS
            </p>
          </div>
          <div style={{ padding: '2rem 1.5rem' }}>
            <Link to="/contact" data-cursor style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              color: 'var(--accent)',
              border: '1.5px solid var(--accent)',
              padding: '0.6rem 1.5rem',
              display: 'inline-block',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--black)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
            >
              GET IN TOUCH →
            </Link>
          </div>
        </div>

        {/* Social links */}
        <div className="about-socials" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1.5px solid var(--border)', marginTop: 'auto' }}>
          {[
            { label: 'LinkedIn', url: info.linkedin },
            { label: 'Instagram', url: info.instagram },
            { label: 'TikTok', url: info.tiktok },
          ].map((social, i) => (
            social.url ? (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                data-cursor
                style={{
                  padding: '1rem 1.5rem',
                  borderRight: i < 2 ? '1.5px solid var(--border)' : 'none',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                {social.label} ↗
              </a>
            ) : (
              <div key={social.label} style={{ padding: '1rem 1.5rem', borderRight: i < 2 ? '1.5px solid var(--border)' : 'none' }} />
            )
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
