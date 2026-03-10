import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { sandboxItems } from '../data/projects'

export default function Sandbox() {
  return (
    <PageTransition>
      <style>{`
        @media (max-width: 600px) {
          .sandbox-wrap { margin-top: 7rem !important; }
          .sandbox-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="sandbox-wrap" style={{ marginTop: '6rem', minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ borderBottom: '1.5px solid var(--border)', padding: '4rem 1.5rem 2rem' }}>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              letterSpacing: '-0.01em',
              color: 'var(--white)',
              lineHeight: 0.95,
            }}
          >
            SANDBOX
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ color: 'var(--white)', opacity: 0.5, marginTop: '1rem', fontSize: '1rem' }}
          >
            Random stuff that didn't make the main page.
          </motion.p>
        </div>

        {/* Grid */}
        {sandboxItems.length === 0 ? (
          <div style={{ padding: '4rem 1.5rem', color: 'var(--white)', opacity: 0.3, fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '0.1em' }}>
            NOTHING HERE YET
          </div>
        ) : (
          <div className="sandbox-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}>
            {sandboxItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? '1.5px solid var(--border)' : 'none',
                  borderBottom: '1.5px solid var(--border)',
                  overflow: 'hidden',
                }}
              >
                {item.type === 'youtube' ? (
                  <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                    <iframe
                      src={item.src}
                      style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                      allow="fullscreen"
                      title={item.caption || `sandbox-${i}`}
                    />
                  </div>
                ) : item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', display: 'block', transform: item.scale ? `scale(${item.scale})` : undefined }}
                  />
                ) : (
                  <div style={{ position: 'relative', paddingBottom: '177.78%', background: 'var(--bg)' }}>
                    <img
                      src={item.src}
                      alt={item.caption || ''}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.objectPosition || 'center', transform: item.scale ? `scale(${item.scale})` : undefined }}
                    />
                  </div>
                )}
                {item.caption && (
                  <div style={{ padding: '0.75rem 1rem', borderTop: '1.5px solid var(--border)' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--white)', opacity: 0.5, letterSpacing: '0.05em' }}>
                      {item.caption}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  )
}
