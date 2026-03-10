import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animate)
    }

    const addHover = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)'
      ring.style.transform = 'translate(-50%, -50%) scale(1.5)'
      ring.style.borderColor = 'var(--accent)'
    }
    const removeHover = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)'
      ring.style.transform = 'translate(-50%, -50%) scale(1)'
      ring.style.borderColor = 'rgba(242,240,235,0.5)'
    }

    window.addEventListener('mousemove', move)
    animate()

    const observe = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    }
    observe()
    const observer = new MutationObserver(observe)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Crosshair */}
      <div ref={cursorRef} style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.15s ease',
      }}>
        <div style={{ position: 'absolute', top: '50%', left: '-8px', width: '16px', height: '1.5px', background: 'var(--white)', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', left: '50%', top: '-8px', height: '16px', width: '1.5px', background: 'var(--white)', transform: 'translateX(-50%)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '3px', height: '3px', background: 'var(--accent)', borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />
      </div>

      {/* Lagging ring */}
      <div ref={ringRef} style={{
        position: 'fixed',
        width: '32px',
        height: '32px',
        border: '1.5px solid rgba(242,240,235,0.5)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9998,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.3s ease, border-color 0.2s ease',
      }} />
    </>
  )
}
