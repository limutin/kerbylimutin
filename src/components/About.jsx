import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, GraduationCap, Briefcase, Heart, Zap, Target } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    { icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, scalable code' },
    { icon: Target, title: 'Problem Solver', desc: 'Turning complex problems into solutions' },
    { icon: Zap, title: 'Fast Learner', desc: 'Quickly adapting to new technologies' },
    { icon: Heart, title: 'Passionate', desc: 'Driven by curiosity and innovation' },
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(96,128,255,0.08), transparent 60%)', filter: 'blur(80px)' }}
      />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-index">002 — About</span>
          <h2 className="section-title">
            A bit <span className="italic-gradient">about</span> me.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-2xl p-8 sm:p-10"
              style={{
                background: 'rgba(15,15,28,0.6)',
                border: '0.5px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(24px)',
              }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #C17BE8, #6080FF)', boxShadow: '0 8px 24px rgba(127,80,220,0.3)' }}
                >
                  <GraduationCap size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg" style={{ color: '#e8e8f0' }}>My Journey</h3>
                  <p className="text-sm font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: '#606078' }}>From student to developer</p>
                </div>
              </div>

              <div className="space-y-4 text-[15px] leading-[1.75]" style={{ color: '#a0a0b8' }}>
                <p>
                  I'm <span style={{ color: '#e8e8f0', fontWeight: 500 }}>Kerby V. Limutin</span>, a
                  4th year BS Information Technology student at the{' '}
                  <span style={{ color: '#C17BE8', fontWeight: 500 }}>
                    University of Science and Technology of Southern Philippines (USTP)
                  </span>
                  , Oroquieta Campus. My passion lies in crafting full-stack web and mobile applications
                  that solve real-world problems.
                </p>
                <p>
                  From building <span style={{ color: '#e8e8f0', fontWeight: 500 }}>FixUp — an AI-enhanced home service platform</span> for
                  my capstone, to developing a <span style={{ color: '#e8e8f0', fontWeight: 500 }}>POS system for a furniture manufacturing business</span>,
                  an <span style={{ color: '#e8e8f0', fontWeight: 500 }}>agricultural data management platform</span>,
                  and a <span style={{ color: '#e8e8f0', fontWeight: 500 }}>veterinary clinic management system</span> —
                  I've consistently delivered production-ready solutions that create real impact.
                </p>
                <p>
                  I completed my OJT at{' '}
                  <span style={{ color: '#e8e8f0', fontWeight: 500 }}>DT I.T. Solutions and Consultancy</span>{' '}
                  in Cagayan de Oro City, where I gained hands-on experience in professional software development,
                  client interaction, and agile workflows. I'm a certified{' '}
                  <span style={{ color: '#C17BE8', fontWeight: 500 }}>PhilNITS IT Passport passer</span>,
                  TOPCIT exam participant, and CTF cybersecurity competition participant.
                </p>
              </div>

              {/* Currently Working On */}
              <div
                className="mt-8 p-4 rounded-xl"
                style={{
                  background: 'rgba(193,123,232,0.06)',
                  border: '0.5px solid rgba(193,123,232,0.15)',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={14} style={{ color: '#C17BE8' }} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: '#C17BE8' }}>Currently Working On</span>
                </div>
                <p className="text-sm" style={{ color: '#a0a0b8' }}>
                  Building innovative web applications and exploring AI/ML integration in modern software.
                  Open to freelance work and full-time opportunities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights + Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-5 text-center cursor-default rounded-xl group transition-all duration-300"
                  style={{
                    background: 'rgba(15,15,28,0.6)',
                    border: '0.5px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(24px)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(193,123,232,0.25)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <item.icon size={20} style={{ color: '#606078' }} />
                  </div>
                  <h4 className="font-medium text-sm mb-1" style={{ color: '#e8e8f0' }}>{item.title}</h4>
                  <p className="text-xs" style={{ color: '#606078' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-3 p-6 rounded-xl"
              style={{
                background: 'rgba(15,15,28,0.6)',
                border: '0.5px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(24px)',
              }}
            >
              {/* Top accent line */}
              <div className="top-accent-line" style={{ position: 'relative', marginBottom: '1.25rem' }}>
                <div style={{
                  position: 'absolute',
                  left: 0, right: 0, top: '-24px',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(193,123,232,0.4) 30%, rgba(96,128,255,0.4) 70%, transparent)',
                }} />
              </div>
              <h4 className="font-medium text-sm mb-4 flex items-center gap-2" style={{ color: '#e8e8f0' }}>
                <GraduationCap size={15} style={{ color: '#C17BE8' }} />
                Education
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #C17BE8, #6080FF)' }}
                  />
                  <div>
                    <p className="font-medium text-sm" style={{ color: '#e8e8f0' }}>BS Information Technology</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] mt-0.5" style={{ color: '#606078' }}>USTP Oroquieta • 2022 — 2026</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
