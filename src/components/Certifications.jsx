import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, Award, ChevronLeft, ChevronRight } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'PhilNITS IT Passport Certification',
    org: 'Philippine National IT Standards Foundation',
    date: 'November 2025',
    type: 'Certification',
    color: '#F59E0B',
    image: '/images/certifications/CamScanner 06-06-2026 07.44-1_page-0001.jpg',
    description: 'Successfully passed the IT Passport (IP) Certification Examination administered by the Philippine National IT Standard (PhilNITS) Foundation, Inc.',
  },
  {
    id: 2,
    title: 'Innovation Excellence Award',
    org: 'USTP Oroquieta — Tinawan Accolades 2026',
    date: 'June 5, 2026',
    type: 'Award',
    color: '#F97316',
    image: '/images/certifications/CamScanner 06-06-2026 07.44-2_page-0001.jpg',
    proofImage: null,
    description: 'Awarded for demonstrating exceptional creativity and innovation as a finalist in the DOST Innovation Jam Pitching Competition, June 5, 2026.',
  },
  {
    id: 3,
    title: 'Cyber Defense Excellence Award',
    org: 'USTP Oroquieta — Tinawan Accolades 2026',
    date: 'June 5, 2026',
    type: 'Award',
    color: '#06B6D4',
    image: '/images/certifications/CamScanner 06-06-2026 07.44-3_page-0001.jpg',
    description: 'Recognized for demonstrating exceptional cybersecurity awareness and problem-solving during the CyberCONNECT: CTF Training and Challenge.',
  },
  {
    id: 4,
    title: 'Information Technology Certification Excellence Award',
    org: 'USTP Oroquieta — Tinawan Accolades 2026',
    date: 'June 5, 2026',
    type: 'Award',
    color: '#A855F7',
    image: '/images/certifications/CamScanner 06-06-2026 07.44-4_page-0001.jpg',
    proofImage: '/images/certifications/it-cert-award-proof.jpg',
    description: 'Honored for successfully passing the Philippine National IT Standards Foundation (PhilNITS) Certification Examination, with lasting impact on the Department of IT, USTP Oroquieta Campus.',
  },
  {
    id: 5,
    title: 'TOPCIT Excellence in ICT Competency Award',
    org: 'USTP Oroquieta — Tinawan Accolades 2025',
    date: 'June 20, 2025',
    type: 'Award',
    color: '#EC4899',
    image: '/images/certifications/0633ee90-6bb0-45bd-a267-dd9e0a2b695c.jpg',
    description: 'Certificate of Recognition for attaining outstanding scores in the Test of Practical Competency in ICT (TOPCIT), exemplifying excellence in both technical and business acumen.',
  },
  {
    id: 6,
    title: '11th TOPCIT Certificate — Level 3',
    org: 'Institute for Information & Communications Technology Promotion',
    date: 'November 20, 2024',
    type: 'Assessment',
    color: '#EC4899',
    image: '/images/certifications/11th TOPCIT_page-0001.jpg',
    description: 'TOPCIT Level 3 certificate with a score of 638/1000 in the 11th TOPCIT Philippines Examination, covering software, data, system architecture, information security, and business competencies.',
  },
  {
    id: 7,
    title: '12th TOPCIT Certificate — Level 3',
    org: 'Institute for Information & Communications Technology Promotion',
    date: 'June 2, 2025',
    type: 'Assessment',
    color: '#EC4899',
    image: '/images/certifications/12th TOPCIT_page-0001.jpg',
    description: 'TOPCIT Level 3 certificate with a score of 484/1000 in the 12th TOPCIT Philippines Examination.',
  },
  {
    id: 8,
    title: 'Academic Honors — Second Honors',
    org: 'USTP Oroquieta — BSIT',
    date: 'June 20, 2025 (A.Y. 2024–2025, 2nd Sem)',
    type: 'Academic',
    color: '#10B981',
    image: '/images/certifications/6e7d2450-dba9-4ce1-930b-6a27515e36cc.jpg',
    description: 'Certificate of Recognition for outstanding academic performance in the Second Semester, A.Y. 2024-2025 as Second Honors in Bachelor of Science in Information Technology.',
  },
  {
    id: 9,
    title: 'Academic Honors — Third Honors',
    org: 'USTP Oroquieta — BSIT',
    date: 'March 15, 2024 (A.Y. 2023–2024, 1st Sem)',
    type: 'Academic',
    color: '#10B981',
    image: '/images/certifications/58fbab93-36b6-499d-9322-ce0d65cae976.jpg',
    description: 'Certificate of Recognition for outstanding academic performance in the First Semester, A.Y. 2023-2024 as Third Honors in Bachelor of Science in Information Technology.',
  },
  {
    id: 10,
    title: 'DOST RSTW 2025 Innovation Jam Pitching',
    org: 'Department of Science and Technology — Region 10',
    date: 'October 2, 2025',
    type: 'Participation',
    color: '#3B82F6',
    image: '/images/certifications/b5b538cc-6eb9-4768-a22c-37055e878e01.jpg',
    description: 'Certificate of Participation for actively joining the Innovation Jam Pitching Competition during the Regional Science, Technology, and Innovation Week (RSTW) 2025.',
  },
  {
    id: 11,
    title: 'CyberCONNECT CTF — Certificate of Participation',
    org: 'DICT Region 10',
    date: 'August 30–31, 2025',
    type: 'Participation',
    color: '#A855F7',
    image: '/images/certifications/Hackathon_page-0001.jpg',
    description: 'Certificate of Participation for active involvement as Team "CTRL FREAKS" in the CyberCONNECT: Capture the Flag (CTF) Training and Challenge organized by DICT Region 10.',
  },
  {
    id: 12,
    title: 'Literary Awardee — MASTS Games 2023',
    org: 'Office of Student Affairs, USTP Oroquieta',
    date: 'July 20, 2025',
    type: 'Recognition',
    color: '#F59E0B',
    image: '/images/certifications/f1b75aa6-6f99-4a44-a1dd-d2de688e0bbf.jpg',
    description: 'Certificate of Recognition as Literary Awardee for exemplary performance and outstanding efforts during the MASTS 2023 Competition representing USTP Oroquieta Campus.',
  },
  {
    id: 13,
    title: 'MASTS Games 2023 — Quiz Bowl Contestant',
    org: 'Mindanao Association of State Tertiary Schools (MASTS)',
    date: 'November 21–25, 2023',
    type: 'Participation',
    color: '#EF4444',
    image: '/images/certifications/a593e941-c336-4378-afc9-0d62aef0a313.jpg',
    description: 'Certificate of Participation as Contestant in the Quiz Bowl event at MASTS Games 2023 — Culture and Arts Festival, hosted by the University of Southern Mindanao, Kabacan, North Cotabato.',
  },
  {
    id: 14,
    title: 'System-Wide OJT Orientation 2026',
    org: 'USTP Career Center & Industry Relations Office — CDO Campus',
    date: 'January 7, 2026',
    type: 'Training',
    color: '#6B7280',
    image: '/images/certifications/Limutin, Kerby, V._page-0001.jpg',
    description: 'Certificate of Completion for participating in the System-wide OJT Orientation 2026 via Zoom Webinar, aimed at equipping student interns with career readiness skills.',
  },
  {
    id: 15,
    title: 'On-the-Job Training Orientation',
    org: 'USTP Oroquieta Campus — Department of Information Technology',
    date: 'January 12, 2026',
    type: 'Training',
    color: '#6B7280',
    image: '/images/certifications/Local OJT.png',
    description: 'Certificate of Attendance for participating in the On-the-Job Training Orientation for BSIT-4 Student Interns for Second Semester, A.Y. 2025-2026 at USTP Oroquieta Campus.',
  },
]

const typeColors = {
  Certification: '#F59E0B',
  Award: '#A855F7',
  Assessment: '#EC4899',
  Academic: '#10B981',
  Participation: '#3B82F6',
  Recognition: '#F97316',
  Training: '#6B7280',
}

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [showProof, setShowProof] = useState(false)

  const allTypes = ['ALL', ...Object.keys(typeColors)]
  const filtered = activeFilter === 'ALL'
    ? certifications
    : certifications.filter(c => c.type === activeFilter)

  const selectedIndex = selected ? certifications.findIndex(c => c.id === selected.id) : -1

  const goPrev = (e) => {
    e.stopPropagation()
    const i = (selectedIndex - 1 + certifications.length) % certifications.length
    setSelected(certifications[i])
    setShowProof(false)
  }
  const goNext = (e) => {
    e.stopPropagation()
    const i = (selectedIndex + 1) % certifications.length
    setSelected(certifications[i])
    setShowProof(false)
  }

  return (
    <section id="certifications" className="section-padding relative section-divider" ref={ref}>
      {/* Background glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/3 w-[500px] h-[500px] opacity-20 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(193,123,232,0.3), transparent 70%)', filter: 'blur(100px)' }}
      />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-index">008 — CREDENTIALS</span>
          <h2 className="section-title">
            Certifications &amp; <span className="text-gradient">Recognition</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A verified record of professional certifications, academic awards, and competitive recognitions.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {allTypes.map(type => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-3.5 py-1.5 rounded-sm font-mono text-[10px] uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === type
                  ? 'border-purple-500/50 bg-purple-950/40 text-purple-300'
                  : 'border-white/[0.06] bg-transparent text-gray-500 hover:text-gray-300 hover:border-white/15'
              }`}
            >
              {activeFilter === type ? `> ${type}` : type}
            </button>
          ))}
        </motion.div>

        {/* Certifications grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((cert, i) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.35 }}
                whileHover={{ y: -4 }}
                onClick={() => { setSelected(cert); setShowProof(false) }}
                className="glass-card overflow-hidden group cursor-pointer relative"
                style={{ borderRadius: '4px' }}
              >
                {/* Certificate thumbnail */}
                <div className="relative h-40 overflow-hidden border-b border-white/[0.04] bg-white/[0.02]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />

                  {/* Type badge */}
                  <div
                    className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded font-mono text-[9px] text-white border"
                    style={{
                      borderColor: `${cert.color}40`,
                      backgroundColor: `${cert.color}18`,
                    }}
                  >
                    {cert.type.toUpperCase()}
                  </div>

                  {/* Proof indicator */}
                  {cert.proofImage && (
                    <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                      <span className="text-[8px] text-green-400">✓</span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <p className="font-mono text-[9px] text-gray-500 mb-1 truncate">{cert.date}</p>
                  <h3 className="font-semibold text-[12px] text-gray-200 group-hover:text-white transition-colors leading-tight line-clamp-2 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] text-gray-500 truncate">{cert.org}</p>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${cert.color}80, transparent)` }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 font-mono text-[10px] text-gray-600 uppercase tracking-widest"
        >
          Showing {filtered.length} of {certifications.length} credentials
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded bg-[#08080f] border border-white/10 shadow-2xl card-corners"
              onClick={e => e.stopPropagation()}
            >
              {/* Title bar */}
              <div className="sticky top-0 z-20 bg-[#0c0c1a]/95 backdrop-blur px-5 py-3 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button onClick={() => setSelected(null)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="font-mono text-[10px] text-gray-500 ml-3 hidden sm:block">
                    credential_viewer --id={selected.type.toLowerCase()}_{selected.id}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {selected.proofImage && (
                    <button
                      onClick={() => setShowProof(p => !p)}
                      className="font-mono text-[10px] px-3 py-1 rounded border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-colors"
                    >
                      {showProof ? 'View Cert' : 'View Proof'}
                    </button>
                  )}
                  <button onClick={() => setSelected(null)} className="p-1 rounded text-gray-500 hover:text-white hover:bg-white/5 transition-colors">
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Certificate image */}
              <div className="relative bg-white/[0.02] border-b border-white/[0.06]" style={{ minHeight: '340px' }}>
                <img
                  src={showProof && selected.proofImage ? selected.proofImage : selected.image}
                  alt={selected.title}
                  className="w-full object-contain max-h-[60vh]"
                />
              </div>

              {/* Info */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className="px-2 py-0.5 rounded font-mono text-[9px] text-white border"
                    style={{
                      borderColor: `${selected.color}40`,
                      backgroundColor: `${selected.color}18`,
                    }}
                  >
                    {selected.type.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] text-gray-500">{selected.date}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-100 mb-1 tracking-tight">{selected.title}</h2>
                <p className="font-mono text-[11px] text-purple-400 mb-4">{selected.org}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{selected.description}</p>
              </div>

              {/* Prev / Next nav */}
              <div className="flex items-center justify-between border-t border-white/[0.06] px-6 py-4">
                <button
                  onClick={goPrev}
                  className="flex items-center gap-2 font-mono text-[11px] text-gray-500 hover:text-white transition-colors"
                >
                  <ChevronLeft size={14} /> Previous
                </button>
                <span className="font-mono text-[10px] text-gray-600">
                  {selectedIndex + 1} / {certifications.length}
                </span>
                <button
                  onClick={goNext}
                  className="flex items-center gap-2 font-mono text-[11px] text-gray-500 hover:text-white transition-colors"
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certifications
