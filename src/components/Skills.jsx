import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const categories = [
  { id: 'all', label: 'ALL_STACKS' },
  { id: 'frontend', label: 'FRONTEND' },
  { id: 'backend', label: 'BACKEND' },
  { id: 'mobile', label: 'MOBILE' },
  { id: 'tools', label: 'TOOLS_DEVOPS' },
  { id: 'database', label: 'DATABASE' },
]

const skills = [
  // Frontend
  { name: 'HTML5', level: 95, category: 'frontend', color: '#E34F26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3 / Tailwind', level: 92, category: 'frontend', color: '#06B6D4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript', level: 90, category: 'frontend', color: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React / Next.js', level: 88, category: 'frontend', color: '#61DAFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'TypeScript', level: 80, category: 'frontend', color: '#3178C6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },

  // Backend
  { name: 'PHP / Laravel', level: 85, category: 'backend', color: '#777BB4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Python', level: 78, category: 'backend', color: '#3776AB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Node.js', level: 82, category: 'backend', color: '#339933', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'REST APIs', level: 88, category: 'backend', color: '#0EA5E9', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },

  // Mobile
  { name: 'Flutter / Dart', level: 83, category: 'mobile', color: '#02569B', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'React Native', level: 70, category: 'mobile', color: '#61DAFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },

  // Database
  { name: 'MySQL / SQL', level: 88, category: 'database', color: '#4479A1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Firebase / Firestore', level: 85, category: 'database', color: '#FFCA28', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  { name: 'Supabase', level: 80, category: 'database', color: '#3ECF8E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },

  // Tools
  { name: 'Git / GitHub', level: 90, category: 'tools', color: '#F05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'VS Code', level: 95, category: 'tools', color: '#007ACC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Figma', level: 75, category: 'tools', color: '#F24E1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Docker', level: 60, category: 'tools', color: '#2496ED', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Vercel / Netlify', level: 85, category: 'tools', color: '#38AFB3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg' },
  { name: 'Networking', level: 72, category: 'tools', color: '#0EA5E9', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
]

const SkillCard = ({ skill, index, isInView }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.4 }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card p-5 group cursor-default relative overflow-hidden card-corners"
      style={{ borderRadius: '4px' }}
    >
      {/* Subtle scanline / terminal grid overlay on card */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${skill.color}0c, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon + Name */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-9 h-9 rounded flex items-center justify-center text-lg transition-all duration-300 border border-white/[0.04]"
            style={{ backgroundColor: `${skill.color}0a` }}
          >
            <motion.span animate={hovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }} className="flex items-center justify-center">
              {skill.icon.startsWith('http') ? (
                <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
              ) : (
                skill.icon
              )}
            </motion.span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-mono text-sm tracking-tight font-medium text-gray-200">{skill.name}</h4>
          </div>
          <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
            {skill.level}%
          </span>
        </div>

        {/* Terminal Progress Bar */}
        <div className="h-1 bg-white/[0.03] rounded-sm overflow-hidden border border-white/[0.02]">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ delay: Math.min(index * 0.04, 0.4) + 0.2, duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-sm relative"
            style={{ 
              background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`,
              boxShadow: `0 0 8px ${skill.color}80` 
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 overflow-hidden rounded-sm">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 4 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="section-padding relative section-divider" ref={ref}>
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] opacity-40" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-index">003 — TECH_STACK</span>
          <h2 className="section-title text-mono">
            System & <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A breakdown of technologies, frameworks, and deployment environments I work with.
          </p>
        </motion.div>

        {/* Category Filter - Styled like Terminal Stacks */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-sm font-mono text-xs transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'border-primary-400 bg-primary-950/40 text-primary-300 shadow-[0_0_12px_rgba(138,92,246,0.15)]'
                  : 'border-white/[0.06] bg-transparent text-gray-500 hover:text-gray-300 hover:border-white/[0.15]'
              }`}
            >
              {activeCategory === cat.id ? `> ${cat.label}` : cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
