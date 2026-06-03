import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'DT I.T. Solutions & Consultancy',
    role: 'OJT Host Company',
    content: 'Kerby demonstrated exceptional technical skills and professionalism during his internship. He contributed significantly to client projects, showed initiative in learning new technologies, and delivered quality work consistently.',
    rating: 5,
    avatar: '🏢',
  },
  {
    name: 'Capstone Panel',
    role: 'USTP Academic Panel',
    content: 'The NextStep project showcased outstanding technical implementation with real-world application. The team demonstrated strong understanding of software engineering principles, AI integration, and user-centered design.',
    rating: 5,
    avatar: '🎓',
  },
  {
    name: 'MJ Wood Furniture',
    role: 'Client — LumberPOS System',
    content: 'The POS and inventory system transformed how we manage our business operations. Stock tracking is now automated, transactions are faster, and the reporting features give us valuable business insights.',
    rating: 5,
    avatar: '🪵',
  },
]

const Testimonials = () => {
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
          <span className="section-index">008 — CLIENT_LOGS</span>
          <h2 className="section-title text-mono">
            Verified <span className="text-gradient">Feedback</span>
          </h2>
          <p className="section-subtitle mx-auto">
            System logs and transcripts representing feedback from academic boards, clients, and industry mentors.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 sm:p-8 relative group card-corners border border-white/[0.04]"
              style={{ borderRadius: '4px' }}
            >
              {/* Quote background symbol */}
              <div className="absolute top-4 right-4 text-primary-500/5 group-hover:text-primary-500/10 transition-colors pointer-events-none">
                <Quote size={40} />
              </div>

              {/* Console Transmission status */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="font-mono text-[9px] text-[#5EFFAA] tracking-wider uppercase bg-[#5EFFAA]/5 border border-[#5EFFAA]/25 px-1.5 py-0.5 rounded">
                  TRANSMISSION_OK
                </span>
                <div className="flex gap-0.5">
                  {Array(item.rating).fill(0).map((_, j) => (
                    <Star key={j} size={11} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-xs text-gray-300 leading-relaxed mb-6 italic">
                "{item.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                <div className="w-9 h-9 rounded border border-white/[0.06] bg-[#0c0c1a] flex items-center justify-center text-base">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-200">{item.name}</h4>
                  <p className="font-mono text-[9px] text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
