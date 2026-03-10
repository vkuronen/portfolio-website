import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/project/${project.id}`}
        data-cursor
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'block',
          border: '1.5px solid var(--border)',
        }}
      >
        {/* Thumbnail */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '16/10',
          background: '#111',
          borderBottom: '1.5px solid var(--border)',
        }}>
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Hover overlay */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(13,13,13,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              color: 'var(--white)',
              border: '1.5px solid var(--white)',
              padding: '0.4rem 1.2rem',
            }}>
              VIEW →
            </span>
          </motion.div>

        </div>

        {/* Info row */}
        <div style={{
          padding: '0.75rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: hovered ? '1.5px solid var(--accent)' : '1.5px solid transparent',
          transition: 'border-color 0.2s',
          marginTop: '-1.5px',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            color: 'var(--white)',
          }}>
            {project.title.toUpperCase()}
          </h3>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: '40%' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '0.6rem',
                letterSpacing: '0.08em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
