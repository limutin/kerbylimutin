import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase, Award, Code2, Trophy, MapPin } from 'lucide-react'

const timelineData = [
  {
    year: '2026',
    title: 'OJT — DT I.T. Solutions & Consultancy',
    subtitle: 'Cagayan de Oro City',
    description: 'Completed On-the-Job Training in professional software development. Built company landing pages, worked on client projects, and gained experience in agile workflows and team collaboration.',
    icon: Briefcase,
    type: 'work',
    tags: ['React', 'Next.js', 'Supabase', 'Client Work'],
  },
  {
    year: '2025-2026',
    title: 'Capstone Project — FixUp',
    subtitle: 'Successfully Defended',
    description: 'Led development of "FixUp" — an AI-enhanced home service platform with privacy-preserving user authentication. Successfully defended before a panel of experts at USTP.',
    icon: Trophy,
    type: 'achievement',
    tags: ['Flutter', 'Firebase', 'AI/ML', 'OCR'],
  },
  {
    year: '2025',
    title: 'PhilNITS IT Passport Examination',
    subtitle: 'Certified Passer — October 2025',
    description: 'Passed the PhilNITS IT Passport (IP) Examination, a globally recognized credential validating essential IT knowledge across hardware, software, networking, security, and project management.',
    icon: Award,
    type: 'certification',
    tags: ['IT Fundamentals', 'Global Certification'],
  },
  {
    year: '2025',
    title: 'CyberCONNECT: CTF Competition',
    subtitle: 'Team CTRL FREAKS',
    description: 'Participated in the "CyberCONNECT: Capture the Flag" Training and Challenge organized by DICT Region 10. Applied cybersecurity skills in network forensics, cryptography, and web exploitation.',
    icon: Code2,
    type: 'competition',
    tags: ['Cybersecurity', 'CTF', 'DICT'],
  },
  {
    year: '2025',
    title: 'DOST Technology Pitching',
    subtitle: 'Research Presentation',
    description: 'Pitched an innovative technology solution to DOST panelists, showcasing problem-solving capability and presenting technical solutions to address community challenges.',
    icon: Trophy,
    type: 'achievement',
    tags: ['Research', 'Innovation', 'DOST'],
  },
  {
    year: '2025',
    title: 'Tech Exhibit — ONE-PIT',
    subtitle: '3rd Year Showcase',
    description: 'Presented projects at the annual Tech Exhibit "Innovating the Future, Empowering the Nation" — showcasing real-world system prototypes to industry professionals and academics.',
    icon: Code2,
    type: 'competition',
    tags: ['Exhibition', 'Demo', 'Presentation'],
  },
  {
    year: '2024-2025',
    title: 'TOPCIT Examinations',
    subtitle: '11th & 12th TOPCIT Participant',
    description: 'Participated in the 11th and 12th rounds of TOPCIT (Test of Practical Competency in ICT) — national-level IT competency assessments covering algorithms, databases, networking, and software engineering.',
    icon: Award,
    type: 'certification',
    tags: ['TOPCIT', 'National Assessment'],
  },
  {
    year: '2022',
    title: 'Began BS Information Technology',
    subtitle: 'USTP Oroquieta Campus',
    description: 'Started the journey into Information Technology at the University of Science and Technology of Southern Philippines. Built foundational knowledge in programming, databases, and systems design.',
    icon: GraduationCap,
    type: 'education',
    tags: ['BSIT', 'USTP'],
  },
]

const typeColors = {
  work: { border: 'border-blue-500/30', text: 'text-blue-400', glow: 'shadow-[0_0_15px_rgba(96,128,255,0.15)]' },
  achievement: { border: 'border-yellow-500/30', text: 'text-yellow-400', glow: 'shadow-[0_0_15px_rgba(234,179,8,0.15)]' },
  certification: { border: 'border-emerald-500/30', text: 'text-emerald-400', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)]' },
  competition: { border: 'border-purple-500/30', text: 'text-purple-400', glow: 'shadow-[0_0_15px_rgba(168,85,247,0.15)]' },
  education: { border: 'border-primary-400/30', text: 'text-primary-300', glow: 'shadow-[0_0_15px_rgba(193,123,232,0.15)]' },
}

const TimelineItem = ({ item, index, isInView }) => {
  const colors = typeColors[item.type]
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: Math.min(index * 0.08, 0.6), duration: 0.5 }}
      className={`relative flex items-start gap-6 md:gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      {/* Content Card */}
      <div className="flex-1 text-left">
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-card p-6 inline-block w-full card-corners border border-white/[0.04]"
          style={{ borderRadius: '4px' }}
        >
          {/* Timeline Entry Header */}
          <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
            <span className={`font-mono text-xs ${colors.text}`}>
              [{item.year} // {item.type.toUpperCase()}]
            </span>
            <span className="font-mono text-[10px] text-gray-500 flex items-center gap-1">
              <MapPin size={10} />
              {item.subtitle}
            </span>
          </div>

          <h3 className="font-bold text-base text-gray-100 mb-2 tracking-tight">{item.title}</h3>
          
          <p className="text-xs text-gray-400 leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="tag-chip"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Node - styled like terminal bracket point */}
      <div className="flex-shrink-0 flex flex-col items-center relative z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`w-10 h-10 rounded border bg-[#08080f] flex items-center justify-center ${colors.border} ${colors.glow}`}
        >
          <item.icon size={16} className={colors.text} />
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding relative section-divider" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-index">004 — LOG_HISTORY</span>
          <h2 className="section-title text-mono">
            Journey & <span className="text-gradient">Timeline</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A chronological record of my academic milestones, certifications, and hands-on experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing dashed vertical center line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px border-l border-dashed border-white/10 md:-translate-x-0.5" />

          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
