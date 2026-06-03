import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ChevronRight, X, Lightbulb, Wrench, Trophy } from 'lucide-react'

const projects = [
  {
    title: 'FixUp — Home Service Platform',
    subtitle: 'Capstone Project • Defended',
    image: '/images/fixup.png',
    problem: 'Homeowners struggle to find trusted, verified service providers. Existing platforms lack identity verification and AI-driven matching.',
    solution: 'Built a privacy-preserving, AI-enhanced home service platform with OCR-based ID verification, real-time matching, and secure authentication.',
    impact: 'Successfully defended as capstone thesis. Demonstrated viable solution for connecting homeowners with verified skilled workers.',
    tech: ['Flutter', 'Firebase', 'Cloud Functions', 'OCR', 'AI/ML', 'Dart'],
    github: 'https://github.com/limutin/FixUp',
    featured: true,
  },
  {
    title: 'DT I.T. Solutions Landing Page',
    subtitle: 'OJT Client Project',
    image: '/images/Company Landing page.png',
    problem: 'The company needed a professional web presence to showcase their IT consulting services and attract new clients.',
    solution: 'Designed and developed a modern, responsive landing page with service showcases, testimonials, and booking system.',
    impact: 'Deployed to production. Enhanced company\'s online presence and client acquisition funnel.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Vercel'],
    link: '#',
    github: 'https://github.com/limutin/dtitscpage',
    featured: true,
  },
  {
    title: 'Survey Rewards Platform',
    subtitle: 'Full-Stack Web Application',
    image: '/images/Survey System.png',
    problem: 'Organizations needed a way to collect structured feedback while incentivizing respondent participation through gamification.',
    solution: 'Created a survey platform with points-based rewards, leaderboards, Google auth, admin dashboard for survey creation with multiple question types.',
    impact: 'Supports multiple survey formats, real-time analytics, and a responsive UX across all devices.',
    tech: ['React', 'Supabase', 'Tailwind CSS', 'Vite', 'PostgreSQL'],
    link: 'https://survey-system-rust.vercel.app/',
    github: 'https://github.com/limutin/surveysystem',
    featured: true,
  },
  {
    title: 'LumberPOS — Inventory & POS System',
    subtitle: 'MJ Wood Furniture Manufacturing',
    image: '/images/Lumber system.png',
    problem: 'A furniture manufacturing business managed inventory and sales manually, leading to stock discrepancies and slow transactions.',
    solution: 'Built a comprehensive POS and inventory management system with real-time stock tracking, transaction history, and reporting dashboards.',
    impact: 'Eliminated manual tracking errors. Streamlined sales process and improved inventory accuracy for the business.',
    tech: ['JavaScript', 'React', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/limutin/LumberPOS',
    featured: true,
  },
  {
    title: 'AgriTrack — Agricultural Data Platform',
    subtitle: 'Regional Farmer Management System',
    image: '/images/AGRITRACK .png',
    problem: 'Regional agriculture offices lacked a digital system to track farmer demographics, crop production data, and generate area-specific reports.',
    solution: 'Developed a full dashboard with farmer registration, product management, production tracking per barangay, and automated report generation.',
    impact: 'Deployed for regional partners to manage agricultural data across multiple barangays with real-time analytics.',
    tech: ['React', 'Supabase', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/limutin/agritrack',
  },
  {
    title: 'PurrfectCare — Veterinary Clinic System',
    subtitle: 'Clinic Management Dashboard',
    image: '/images/VETERINARY MANAGEMENT SYSTEM.png',
    problem: 'A veterinary clinic relied on paper records for pet registration, appointments, diagnoses, and billing — causing delays and data loss.',
    solution: 'Built a comprehensive clinic management system with pet records, appointment scheduling, diagnosis tracking, inventory management, and billing.',
    impact: 'Digitized all clinic operations. Reduced appointment scheduling time and improved medical record accuracy.',
    tech: ['TypeScript', 'Next.js', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/limutin/PURRFECTCARE',
  },
  {
    title: 'SLP System — Sustainable Livelihood',
    subtitle: 'Government Mobile Application',
    image: '/images/slp-logo.png',
    problem: 'The Sustainable Livelihood Program in Mis. Occ. needed a mobile solution for field data collection and beneficiary management.',
    solution: 'Developed a mobile application for program management, beneficiary tracking, and field data collection with offline capability.',
    impact: 'Streamlined data collection for government field workers and improved program monitoring.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    github: 'https://github.com/limutin/Sustainable-Livelihood-Program---Mis-Occ.',
    isLogo: true,
  },
]

const ProjectCard = ({ project, index, isInView, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: Math.min(index * 0.08, 0.4), duration: 0.5 }}
    whileHover={{ y: -6 }}
    className={`glass-card overflow-hidden group cursor-pointer card-corners border border-white/[0.04] ${
      project.featured ? 'lg:col-span-2' : ''
    }`}
    onClick={() => onClick(project)}
    style={{ borderRadius: '4px' }}
  >
    {/* Terminal Title Bar */}
    <div className="bg-[#0c0c1a]/80 px-4 py-2 border-b border-white/[0.04] flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
        <span className="font-mono text-[10px] text-gray-500 ml-2 group-hover:text-primary-300 transition-colors">
          {project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.app
        </span>
      </div>
      <div className="flex items-center gap-2">
        {project.featured && (
          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-primary-500/30 bg-primary-950/20 text-primary-300">
            FEATURED
          </span>
        )}
      </div>
    </div>

    {/* Image */}
    <div className={`relative h-52 overflow-hidden ${project.isLogo ? 'bg-[#0f0f1c] flex items-center justify-center p-8' : ''}`}>
      <img
        src={project.image}
        alt={project.title}
        className={`transition-transform duration-700 group-hover:scale-105 ${project.isLogo ? 'w-24 h-24 object-contain opacity-85' : 'w-full h-full object-cover object-top'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 p-1.5 rounded border border-white/10 bg-black/40 text-gray-300 hover:text-white hover:bg-black/60 transition-colors"
        >
          <ExternalLink size={12} />
        </a>
      )}
    </div>

    {/* Content */}
    <div className="p-5">
      <p className="font-mono text-[10px] text-gray-500 mb-1">{project.subtitle}</p>
      <h3 className="font-bold text-base mb-2 text-gray-200 group-hover:text-white transition-colors">{project.title}</h3>
      <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">{project.problem}</p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="tag-chip">
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="font-mono text-[9px] px-1.5 py-0.5 text-gray-500 bg-white/[0.02] border border-white/[0.04]">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-white/[0.03]">
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-500 hover:text-gray-200 transition-colors"
            >
              <Github size={15} />
            </a>
          )}
        </div>
        <span className="font-mono text-[10px] text-primary-300 flex items-center gap-1 group-hover:gap-1.5 transition-all">
          inspect_module() <ChevronRight size={12} />
        </span>
      </div>
    </div>
  </motion.div>
)

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className="bg-[#08080f] border border-white/10 rounded max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl card-corners"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal Terminal Header */}
      <div className="bg-[#0c0c1a] px-6 py-3 border-b border-white/10 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="font-mono text-xs text-gray-400 ml-3">
            cat ~/projects/{project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.md
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Image Banner */}
      <div className="relative h-56 sm:h-72 border-b border-white/[0.06]">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] to-transparent" />
      </div>

      <div className="p-6 sm:p-8">
        <span className="font-mono text-xs text-primary-400 mb-1 block">[{project.subtitle}]</span>
        <h2 className="text-2xl font-bold text-gray-100 tracking-tight mb-6">{project.title}</h2>

        <div className="space-y-6">
          {/* Problem */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-9 h-9 rounded border border-red-500/30 bg-red-950/15 flex items-center justify-center">
              <Lightbulb size={16} className="text-red-400" />
            </div>
            <div>
              <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-1">The Problem</h4>
              <p className="text-xs text-gray-300 leading-relaxed">{project.problem}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-9 h-9 rounded border border-primary-500/30 bg-primary-950/15 flex items-center justify-center">
              <Wrench size={16} className="text-primary-400" />
            </div>
            <div>
              <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-1">The Solution</h4>
              <p className="text-xs text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Impact */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-9 h-9 rounded border border-emerald-500/30 bg-emerald-950/15 flex items-center justify-center">
              <Trophy size={16} className="text-emerald-400" />
            </div>
            <div>
              <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-1">Impact & Results</h4>
              <p className="text-xs text-gray-300 leading-relaxed">{project.impact}</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 pt-6 border-t border-white/[0.06]">
          <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">Technologies Integrated</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tag-chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex gap-3 flex-wrap">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-500 hover:to-blue-500 text-white font-mono text-xs tracking-tight shadow-lg shadow-primary-950/50 flex items-center gap-2 transition-all"
            >
              Live Demo <ExternalLink size={12} />
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-mono text-xs tracking-tight flex items-center gap-2 transition-colors"
            >
              <Github size={12} /> View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
)

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="section-padding relative section-divider" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-index">005 — PORTFOLIO</span>
          <h2 className="section-title text-mono">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Practical development case studies detailing solutions to specific engineering problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isInView={isInView}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-gray-300 hover:text-white font-mono text-xs transition-all duration-300"
            >
              show_all_entries() [{projects.length}]
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
