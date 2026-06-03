import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const leave = () => setVisible(false)
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e) => {
      const target = e.target
      const isHoverable = target.closest('a, button, [role="button"], input, textarea, select, [data-hover]')
      setHovering(!!isHoverable)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mouseleave', leave)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mouseleave', leave)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary-500 pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          scale: clicking ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-primary-400/50 pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 24 : 18),
          y: pos.y - (hovering ? 24 : 18),
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          opacity: hovering ? 0.8 : 0.4,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.8 }}
      />
    </>
  )
}

export default Cursor
