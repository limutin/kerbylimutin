import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Brain, Code2, Users, RefreshCw, Bug, Shield, Lightbulb } from 'lucide-react'

const reasons = [
  {
    icon: Brain,
    title: 'Problem-Solving Mindset',
    description: 'I don\'t just write code — I analyze problems, design solutions, and build systems that create real impact.',
    color: '#8A5CF6',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'From Flutter to Next.js, I rapidly adopt new technologies and apply them in production within weeks.',
    color: '#F59E0B',
  },
  {
    icon: Code2,
    title: 'Clean Code Practices',
    description: 'Readable, maintainable, and well-documented code. I follow SOLID principles and modern design patterns.',
    color: '#0EA5E9',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Experience working in agile teams, client-facing roles, and cross-functional project groups during OJT and capstone.',
    color: '#10B981',
  },
  {
    icon: RefreshCw,
    title: 'Adaptability',
    description: 'Comfortable switching between web, mobile, backend, and DevOps — wherever the project needs me.',
    color: '#6366F1',
  },
  {
    icon: Bug,
    title: 'Strong Debugging Skills',
    description: 'Methodical approach to tracking down and fixing issues. Experience with Chrome DevTools, logging, and testing.',
    color: '#EF4444',
  },
  {
    icon: Shield,
    title: 'Security Awareness',
    description: 'CTF competition participant with understanding of web security, authentication patterns, and data privacy.',
    color: '#6B7280',
  },
  {
    icon: Lightbulb,
    title: 'End-to-End Delivery',
    description: 'I deliver complete solutions — from UI design to backend architecture to deployment and maintenance.',
    color: '#FBBF24',
  },
]

const WhyHireMe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative section-divider" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-index">006 — CAPABILITIES</span>
          <h2 className="section-title text-mono">
            Why <span className="text-gradient">Hire Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A directory of core professional attributes and programming competencies I bring to projects.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: Math.min(i * 0.06, 0.4), duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 group cursor-default relative overflow-hidden card-corners border border-white/[0.04]"
              style={{ borderRadius: '4px' }}
            >
              {/* Subtle hover gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none" 
                style={{
                  background: `radial-gradient(circle at top left, ${item.color}, transparent 60%)`
                }}
              />

              <div className="relative z-10">
                {/* Icon box - styled like terminal segment */}
                <div 
                  className="w-10 h-10 rounded border bg-[#050507] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105"
                  style={{ 
                    borderColor: `${item.color}30`,
                    boxShadow: `0 4px 12px ${item.color}0a` 
                  }}
                >
                  <item.icon size={16} style={{ color: item.color }} />
                </div>
                <h3 className="font-bold text-sm tracking-tight text-gray-200 mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyHireMe
