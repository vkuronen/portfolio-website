import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { projects } from '../data/projects'

export default function Project() {
  const { id } = useParams()
  const project = projects.find(p => p.id === Number(id))
  const currentIndex = projects.findIndex(p => p.id === Number(id))
  const next = projects[(currentIndex + 1) % projects.length]

  if (!project) return (
    <div style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
      <p>Project not found. <Link to="/" style={{ color: 'var(--accent)' }}>Go back</Link></p>
    </div>
  )

  const renderMedia = () => {
    if (project.type === 'video') {
      return (
        <div style={{ aspectRatio: '16/9', background: '#111', borderBottom: '1.5px solid var(--border)' }}>
          <iframe
            src={`${project.src}?autoplay=0`}
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="autoplay; fullscreen"
            title={project.title}
          />
        </div>
      )
    }
    if (project.type === 'lottie') {
      return (
        <div style={{ background: '#111', padding: '4rem', display: 'flex', justifyContent: 'center', borderBottom: '1.5px solid var(--border)' }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>Add Lottie JSON path in src/data/projects.js</p>
        </div>
      )
    }
    return (
      <div style={{ borderBottom: '1.5px solid var(--border)' }}>
        <img src={project.src || project.thumbnail} alt={project.title} style={{ width: '100%' }} />
      </div>
    )
  }

  return (
    <PageTransition>
      <div style={{ marginTop: '7.5rem' }}>
        {/* Title bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          borderBottom: '1.5px solid var(--border)',
          alignItems: 'center',
        }}>
          <Link to="/" data-cursor style={{
            borderRight: '1.5px solid var(--border)',
            padding: '0.7rem 1rem',
            fontSize: '1rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            display: 'flex', alignItems: 'center',
            transition: 'color 0.2s',
            alignSelf: 'stretch',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}
          >
            ← Back
          </Link>
          <div style={{ padding: '0.7rem 1rem', borderRight: '1.5px solid var(--border)', alignSelf: 'stretch', display: 'flex', alignItems: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.5rem)', letterSpacing: '0.02em', color: 'var(--white)', lineHeight: 1 }}>
              {project.title.toUpperCase()}
            </h1>
          </div>
          <div style={{ padding: '0.7rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.4rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>{project.category}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', letterSpacing: '0.08em', color: 'var(--white)' }}>{project.year}</span>
          </div>
        </div>

        {/* Media */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {renderMedia()}
        </motion.div>

        {/* Tags + description */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          borderBottom: '1.5px solid var(--border)',
        }}>
          <div style={{ borderRight: '1.5px solid var(--border)', padding: '1.5rem' }}>
            <p style={{ fontSize: '1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1rem' }}>Tools</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  color: 'var(--white)',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-display)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <p style={{ fontSize: '1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1rem' }}>About</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--white)', lineHeight: 1.8, fontStyle: 'italic' }}>
              {project.description}
            </p>
          </div>
        </div>

        {/* Next project */}
        <Link
          to={`/project/${next.id}`}
          data-cursor
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            borderBottom: '1.5px solid var(--border)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#111'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <div style={{ borderRight: '1.5px solid var(--border)', padding: '1rem 1.5rem' }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white)' }}>Next</span>
          </div>
          <div style={{ padding: '1rem 1.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--white)' }}>
              {next.title.toUpperCase()}
            </h3>
          </div>
          <div style={{ padding: '1rem 1.5rem' }}>
            <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>→</span>
          </div>
        </Link>
      </div>
    </PageTransition>
  )
}
