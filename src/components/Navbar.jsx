import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [time, setTime] = useState('')

  // Live clock
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = links.map((l) => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top micro-bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[60]"
        style={{
          background: 'rgba(5,5,7,0.95)',
          borderBottom: '0.5px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container-custom px-6 md:px-10">
          <div className="flex items-center justify-between h-8">
            <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#606078' }}>
              <span className="signal-dot">
                <span className="signal-dot-inner" />
              </span>
              <span>SYSTEM ONLINE</span>
              <span className="hidden sm:inline-block h-px w-8" style={{ background: 'rgba(255,255,255,0.12)' }} />
              <span className="hidden sm:inline">OROQUIETA, PH</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#606078' }}>
              <span className="tabular-nums">{time}</span>
              <span className="mx-2" style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
              <span>GMT+8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="fixed left-0 right-0 z-50 transition-all duration-500"
        style={{
          top: '32px',
          background: scrolled ? 'rgba(8,8,15,0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '0.5px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="container-custom px-6 md:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div
                className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[13px] font-semibold text-white transition-all duration-300 group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #C17BE8, #6080FF)',
                  boxShadow: '0 6px 20px rgba(127,80,220,0.4), inset 0 1px 0 rgba(255,255,255,0.25)',
                }}
              >
                KL
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[14px] font-medium tracking-tight" style={{ color: '#e8e8f0' }}>Kerby Limutin</span>
                <span className="font-mono text-[10px] tracking-wide" style={{ color: '#606078' }}>Developer · Builder</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[13px] transition-colors duration-300"
                  style={{
                    color: activeSection === link.href.replace('#', '') ? '#e8e8f0' : '#606078',
                  }}
                >
                  {link.name}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full"
                      style={{ background: 'linear-gradient(90deg, #C17BE8, #6080FF)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <a
                href="/RESUME_LIMUTIN.pdf"
                target="_blank"
                className="hidden lg:inline-block rounded-full font-mono text-[11px] tracking-wide transition-all"
                style={{
                  padding: '0.5rem 1rem',
                  border: '0.5px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.03)',
                  color: '#a0a0b8',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
              >
                CV
              </a>

              <a
                href="#contact"
                className="hidden lg:inline-block rounded-full font-medium text-[12px] tracking-wide transition-all"
                style={{
                  padding: '0.5rem 1.125rem',
                  border: '0.5px solid rgba(255,255,255,0.18)',
                  background: 'linear-gradient(135deg, rgba(193,123,232,0.3), rgba(96,128,255,0.3))',
                  color: '#e8e8f0',
                }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.25)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'none'}
              >
                Hire me ↗
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all"
                style={{
                  border: '0.5px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#e8e8f0',
                }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[70] w-72"
            style={{
              background: 'rgba(8,8,15,0.98)',
              borderLeft: '0.5px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="p-6 pt-24 space-y-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    background: activeSection === link.href.replace('#', '') ? 'rgba(193,123,232,0.1)' : 'transparent',
                    color: activeSection === link.href.replace('#', '') ? '#C17BE8' : '#a0a0b8',
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[65] lg:hidden"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
