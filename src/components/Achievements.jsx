import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Award, ExternalLink, X } from 'lucide-react'

const achievements = [
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
    image: '/images/fixup.png',
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
    title: 'USTP Quiz Bowl',
    org: 'USTP Oroquieta Campus',
    date: '2024',
    description: 'Participated in the USTP Quiz Bowl competition, testing knowledge across IT fundamentals, programming concepts, and problem-solving skills.',
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
              onClick={() => setSelectedAchievement(item)}
              className="glass-card overflow-hidden group cursor-pointer card-corners border border-white/[0.04]"
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
              </div>

              <div className="p-5">
                <p className="font-mono text-[10px] text-gray-500 mb-1">{item.date} // {item.org}</p>
                <h3 className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors tracking-tight line-clamp-1">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mt-2 line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievement Modal - Styled like terminal inspector */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#08080f] border border-white/10 rounded max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl card-corners"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Title Bar */}
              <div className="bg-[#0c0c1a] px-6 py-3 border-b border-white/10 flex items-center justify-between sticky top-0 z-20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setSelectedAchievement(null)} />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="font-mono text-xs text-gray-400 ml-3">
                    inspect_credential --id={selectedAchievement.type.toLowerCase()}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="p-1 rounded text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Certificate Image Frame */}
              <div className="relative h-64 border-b border-white/[0.06] bg-[#0c0c1a] flex items-center justify-center">
                <img src={selectedAchievement.image} alt={selectedAchievement.title} className="w-full h-full object-cover opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] to-transparent" />
              </div>

              {/* Certificate Details */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span 
                    className="px-2 py-0.5 rounded font-mono text-[9px] text-white border"
                    style={{ 
                      borderColor: `${selectedAchievement.color}40`, 
                      backgroundColor: `${selectedAchievement.color}15` 
                    }}
                  >
                    {selectedAchievement.type.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] text-gray-500">{selectedAchievement.date} // {selectedAchievement.org}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-100 mb-4 tracking-tight">{selectedAchievement.title}</h2>
                <p className="text-xs text-gray-300 leading-relaxed">{selectedAchievement.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Achievements
