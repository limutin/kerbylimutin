import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Award, ExternalLink, X, Camera } from 'lucide-react'

const achievements = [
  {
    title: 'Information Technology Certification Award',
    org: 'USTP Oroquieta — Tinawan Accolades 2026',
    date: 'June 5, 2026',
    description: 'Awarded at the Tinawan Accolades 2026 in recognition of successfully passing the Philippine National IT Standards Foundation (PhilNITS) Certification Examination — honoring outstanding performance and distinguished efforts that left a lasting impact on the Department of IT, USTP Oroquieta Campus.',
    image: '/images/it-cert-award-proof.jpg',
    proofImage: '/images/certifications/CamScanner 06-06-2026 07.44-4_page-0001.jpg',
    type: 'Award',
    color: '#A855F7',
  },
  {
    title: 'Innovation Excellence Award',
    org: 'USTP Oroquieta — Tinawan Accolades 2026',
    date: 'June 5, 2026',
    description: 'Awarded at the Tinawan Accolades 2026 for demonstrating exceptional creativity and innovation as a finalist in the DOST Innovation Jam Pitching Competition — celebrating unwavering commitment and exemplary conduct that contributed significantly to USTP Oroquieta Campus.',
    image: '/images/innovation-award-proof.jpg',
    proofImage: '/images/certifications/CamScanner 06-06-2026 07.44-2_page-0001.jpg',
    type: 'Award',
    color: '#F97316',
  },
  {
    title: 'PhilNITS IT Passport Passer',
    org: 'Philippine National IT Standards Foundation',
    date: 'October 2025',
    description: 'Globally recognized credential validating essential IT knowledge across hardware, software development, networking, security, business strategy, and project management.',
    image: '/images/PhilNits Passer.jpg',
    type: 'Certification',
    color: '#F59E0B',
  },
  {
    title: 'Capstone Successfully Defended',
    org: 'USTP Oroquieta Campus',
    date: '2025-2026',
    description: 'FixUp — AI-Enhanced Home Service Platform with privacy-preserving authentication. Defended before a panel of academic experts.',
    image: '/images/capstone-defended.jpg',
    type: 'Achievement',
    color: '#10B981',
  },
  {
    title: 'CyberCONNECT CTF Participant',
    org: 'DICT Region 10',
    date: 'August 2025',
    description: 'Competed as Team "CTRL FREAKS" in the Capture the Flag cybersecurity training and challenge organized by DICT.',
    image: '/images/HACKATHON.jpg',
    type: 'Competition',
    color: '#A855F7',
  },
  {
    title: 'DOST Technology Pitching',
    org: 'Department of Science and Technology',
    date: '2025',
    description: 'Pitched innovative technology solutions to DOST panelists, presenting research addressing community challenges through technology.',
    image: '/images/DOST PITCHING.jpg',
    type: 'Presentation',
    color: '#3B82F6',
  },
  {
    title: 'Tech Exhibit — ONE-PIT 2025',
    org: 'USTP Oroquieta',
    date: '2025',
    description: '3rd Year Tech Exhibit "Innovating the Future, Empowering the Nation" — showcased AgriTrack and other system prototypes.',
    image: '/images/Exhibit2.jpg',
    type: 'Exhibition',
    color: '#06B6D4',
  },
  {
    title: 'USTP Quiz Bowl — First Place',
    org: 'USTP Oroquieta Campus',
    date: '2024',
    description: 'Won First Place in the USTP Quiz Bowl competition, testing knowledge across IT fundamentals, programming concepts, and advanced problem-solving skills.',
    image: '/images/QUIZ BOWL.jpg',
    type: 'Competition',
    color: '#EF4444',
  },
  {
    title: '11th TOPCIT Examination — Level 3',
    org: 'USTP Oroquieta Campus',
    date: 'November 2024',
    description: 'Achieved Level 3 with a score of 638/1000 in the 11th TOPCIT Philippines Examination — a national-level ICT competency assessment covering algorithms, databases, networking, and software engineering.',
    image: '/images/476017165_122185886504140513_5812449867723156759_n.jpg',
    type: 'Assessment',
    color: '#EC4899',
  },
  {
    title: '12th TOPCIT Examination — Level 3',
    org: 'USTP Oroquieta Campus',
    date: 'July 2025',
    description: 'Achieved Level 3 with a score of 484/1000 in the 12th TOPCIT Philippines Examination — recognized as an outstanding TOPCIT performer by the IT Department.',
    image: '/images/518743474_122209067642140513_8371901663798554807_n.jpg',
    type: 'Assessment',
    color: '#EC4899',
  },
  {
    title: 'OJT at DT I.T. Solutions',
    org: 'Cagayan de Oro City',
    date: 'Jan-Feb 2026',
    description: 'Professional internship gaining hands-on experience in client-facing software development, agile workflows, and IT consultancy.',
    image: '/images/OJT.jpg',
    type: 'Internship',
    color: '#6B7280',
  },
]

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedAchievement, setSelectedAchievement] = useState(null)
  const [showProof, setShowProof] = useState(false)

  return (
    <section id="achievements" className="section-padding relative section-divider" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-index">007 — RECOGNITION</span>
          <h2 className="section-title text-mono">
            Credentials & <span className="text-gradient">Awards</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A verified register of professional qualifications, academic milestones, and competitive results.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: Math.min(i * 0.08, 0.5), duration: 0.4 }}
              whileHover={{ y: -4 }}
              onClick={() => { setSelectedAchievement(item); setShowProof(false) }}
              className="glass-card overflow-hidden group cursor-pointer card-corners border border-white/[0.04] relative"
              style={{ borderRadius: '4px' }}
            >
              {/* Image banner with grid overlay */}
              <div className="relative h-44 overflow-hidden border-b border-white/[0.03]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
                
                {/* Type Badge */}
                <div 
                  className="absolute top-3 left-3 px-2 py-0.5 rounded font-mono text-[9px] text-white border"
                  style={{ 
                    borderColor: `${item.color}40`, 
                    backgroundColor: `${item.color}15` 
                  }}
                >
                  {item.type.toUpperCase()}
                </div>

                {/* Proof photo indicator */}
                {item.proofImage && (
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded font-mono text-[9px] text-white border"
                    style={{ borderColor: 'rgba(94,255,170,0.3)', backgroundColor: 'rgba(94,255,170,0.08)', color: '#5EFFAA' }}
                  >
                    <Camera size={9} />
                    PROOF
                  </div>
                )}
              </div>

              <div className="p-5">
                <p className="font-mono text-[10px] text-gray-500 mb-1">{item.date} // {item.org}</p>
                <h3 className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors tracking-tight line-clamp-1">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mt-2 line-clamp-2">{item.description}</p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}80, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievement Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/88 backdrop-blur-md"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#08080f] border border-white/10 rounded max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl card-corners"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Title Bar */}
              <div className="bg-[#0c0c1a] px-5 py-3 border-b border-white/[0.08] flex items-center justify-between sticky top-0 z-20">
                <div className="flex items-center gap-2">
                  <button className="w-2.5 h-2.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" onClick={() => setSelectedAchievement(null)} />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="font-mono text-[10px] text-gray-500 ml-3 hidden sm:block">
                    inspect_credential --id={selectedAchievement.type.toLowerCase()}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {selectedAchievement.proofImage && (
                    <button
                      onClick={() => setShowProof(p => !p)}
                      className="flex items-center gap-1.5 font-mono text-[10px] px-3 py-1 rounded border transition-colors"
                      style={{
                        borderColor: showProof ? 'rgba(94,255,170,0.4)' : 'rgba(255,255,255,0.1)',
                        color: showProof ? '#5EFFAA' : '#a0a0b8',
                        background: showProof ? 'rgba(94,255,170,0.06)' : 'transparent',
                      }}
                    >
                      <Camera size={11} />
                      {showProof ? 'View Certificate' : 'View Proof'}
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="p-1 rounded text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Image Frame */}
              <div className="relative border-b border-white/[0.06] bg-[#0c0c1a]" style={{ minHeight: '280px' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={showProof ? 'proof' : 'cert'}
                    src={showProof && selectedAchievement.proofImage ? selectedAchievement.proofImage : selectedAchievement.image}
                    alt={selectedAchievement.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full object-contain max-h-[55vh]"
                  />
                </AnimatePresence>
                {showProof && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-[9px]" style={{ background: 'rgba(94,255,170,0.08)', border: '0.5px solid rgba(94,255,170,0.25)', color: '#5EFFAA' }}>
                    <Camera size={9} /> Award Presentation Photo
                  </div>
                )}
              </div>

              {/* Certificate Details */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span 
                    className="px-2 py-0.5 rounded font-mono text-[9px] text-white border"
                    style={{ 
                      borderColor: `${selectedAchievement.color}40`, 
                      backgroundColor: `${selectedAchievement.color}15` 
                    }}
                  >
                    {selectedAchievement.type.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] text-gray-500">{selectedAchievement.date} · {selectedAchievement.org}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-100 mb-4 tracking-tight">{selectedAchievement.title}</h2>
                <p className="text-sm text-gray-300 leading-relaxed">{selectedAchievement.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Achievements
