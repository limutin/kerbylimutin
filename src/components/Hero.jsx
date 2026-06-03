import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ExternalLink, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react'

const roles = ['Full-Stack Developer', 'Mobile App Developer', 'UI/UX Enthusiast', 'Backend Engineer', 'IT Professional']

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayText, isTyping, roleIndex])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -left-24 -top-48 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(193,123,232,0.35), transparent 60%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute -right-36 top-48 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(96,128,255,0.25), transparent 60%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(193,123,232,0.15), transparent 60%)', filter: 'blur(80px)' }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="container-custom w-full section-padding pt-40 lg:pt-48">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">

          {/* Left — Content */}
          <div className="space-y-7">
            {/* Index + Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <span className="section-index mb-0">001 — Introduction</span>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium"
                style={{
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#e8e8f0',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span className="signal-dot">
                  <span className="signal-dot-inner" />
                </span>
                Open to opportunities
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h1
                className="font-medium leading-[1.04] tracking-[-0.04em]"
                style={{ fontSize: 'clamp(40px, 6vw, 76px)', color: '#e8e8f0' }}
              >
                I build<br />
                <span className="italic-gradient" style={{ letterSpacing: '-0.02em' }}>digital solutions</span><br />
                <span style={{ color: '#606078' }}>that matter.</span>
              </h1>

              {/* Typewriter role */}
              <div className="mt-5 h-9 flex items-center">
                <span className="font-mono text-[15px]" style={{ color: '#a0a0b8' }}>
                  {displayText}
                  <span
                    className="inline-block ml-0.5 animate-pulse"
                    style={{ width: '2px', height: '1em', background: '#C17BE8', verticalAlign: 'middle' }}
                  />
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base leading-[1.7] max-w-[480px]"
              style={{ color: '#a0a0b8' }}
            >
              IT professional from the Philippines crafting{' '}
              <strong style={{ color: '#e8e8f0', fontWeight: 500 }}>scalable, smart digital solutions</strong>{' '}
              with modern technologies. Specializing in full-stack development, clean architecture, and
              delivering real impact through code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-primary inline-flex items-center gap-2.5">
                View selected work
                <span
                  className="flex items-center justify-center rounded-full text-[11px]"
                  style={{ width: '22px', height: '22px', background: '#050507', color: '#e8e8f0' }}
                >
                  →
                </span>
              </a>
              <a href="#about" className="btn-outline">
                Read about me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              {[
                { icon: Github, href: 'https://github.com/limutin', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/kerby-limutin', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:limutinkerby@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-xl transition-all duration-300"
                  style={{
                    border: '0.5px solid rgba(255,255,255,0.08)',
                    color: '#606078',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(193,123,232,0.3)'
                    e.currentTarget.style.color = '#C17BE8'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = '#606078'
                  }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
              <span className="text-sm flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: '#606078' }}>
                <MapPin size={12} /> Oroquieta City, PH
              </span>
            </motion.div>

            {/* Meta stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap items-center gap-5 font-mono text-[11px] uppercase tracking-[0.1em]"
              style={{ color: '#606078' }}
            >
              <span className="flex items-center gap-5">
                BSIT · 2026
                <span className="inline-block w-[3px] h-[3px] rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
              </span>
              <span className="flex items-center gap-5">
                10+ projects shipped
                <span className="inline-block w-[3px] h-[3px] rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
              </span>
              <span>Open source</span>
            </motion.div>
          </div>

          {/* Right — Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative card-corners">
              {/* Glow behind */}
              <div
                className="absolute -inset-8 rounded-3xl"
                style={{ background: 'radial-gradient(ellipse, rgba(193,123,232,0.15), transparent 70%)', filter: 'blur(40px)' }}
              />

              {/* Main image card */}
              <div
                className="relative w-[380px] sm:w-[440px] md:w-[480px] lg:w-[450px] xl:w-[500px] overflow-hidden rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, #C17BE8 0%, #9080F0 45%, #6080FF 100%)',
                  boxShadow: '0 60px 120px -30px rgba(127,80,220,0.5), 0 0 0 0.5px rgba(255,255,255,0.1) inset',
                }}
              >
                {/* Decorative glows inside card */}
                <div
                  className="pointer-events-none absolute -left-10 -top-10 w-72 h-72"
                  style={{ background: 'radial-gradient(circle, rgba(232,123,200,0.7), transparent 70%)' }}
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80"
                  style={{ background: 'radial-gradient(circle, rgba(96,128,255,0.6), transparent 70%)' }}
                />

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/Green White Bold Typographic About Portrait Instagram Post (1).png"
                    alt="Kerby Limutin"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,7,0.4), transparent 50%)' }} />
                </div>
              </div>

              {/* Top-right available badge */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-5 -right-5 z-10 flex items-center gap-2.5 rounded-full px-3.5 py-1.5"
                style={{
                  background: 'rgba(8,8,15,0.92)',
                  border: '0.5px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <span className="signal-dot">
                  <span className="signal-dot-inner" />
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: '#a0a0b8' }}
                >
                  Available · 2026
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4"
          style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}
        >
          {[
            { value: '10+', suffix: '', label: 'Projects shipped' },
            { value: '3+', suffix: 'yr', label: 'Building' },
            { value: '185+', suffix: '', label: 'GitHub commits' },
            { value: '∞', suffix: '', label: 'Curiosity', italic: true },
          ].map((stat, i) => (
            <div
              key={i}
              className="px-6 py-8"
              style={{ borderRight: i < 3 ? '0.5px solid rgba(255,255,255,0.06)' : 'none' }}
            >
              <div
                className="tabular-nums leading-none tracking-[-0.03em]"
                style={{
                  fontSize: stat.italic ? '3.5rem' : '2.25rem',
                  fontWeight: 500,
                  color: '#e8e8f0',
                  fontStyle: stat.italic ? 'italic' : 'normal',
                  background: stat.italic ? 'linear-gradient(135deg, #8AA0FF, #C17BE8)' : undefined,
                  WebkitBackgroundClip: stat.italic ? 'text' : undefined,
                  WebkitTextFillColor: stat.italic ? 'transparent' : undefined,
                }}
              >
                {stat.value}
                {stat.suffix && (
                  <span style={{ fontSize: '1.375rem', color: '#606078' }}>{stat.suffix}</span>
                )}
              </div>
              <div
                className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.15em]"
                style={{ color: '#606078' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
