import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, GitBranch, Star, Code2, ExternalLink } from 'lucide-react'

const repos = [
  { name: 'FixUp', desc: 'AI-Enhanced Home Service Platform', lang: 'Dart', stars: 0, color: '#00B4AB' },
  { name: 'PURRFECTCARE', desc: 'Veterinary Clinic Management System', lang: 'TypeScript', stars: 0, color: '#3178C6' },
  { name: 'LumberPOS', desc: 'POS and Inventory System', lang: 'JavaScript', stars: 0, color: '#F7DF1E' },
  { name: 'surveysystem', desc: 'Survey Rewards Platform', lang: 'JavaScript', stars: 0, color: '#F7DF1E' },
]

const generateContributions = () => {
  const weeks = 52
  const days = 7
  const grid = []
  for (let w = 0; w < weeks; w++) {
    const week = []
    for (let d = 0; d < days; d++) {
      const rand = Math.random()
      let level = 0
      if (w > 20 && w < 50) {
        if (rand > 0.7) level = 1
        if (rand > 0.8) level = 2
        if (rand > 0.9) level = 3
        if (rand > 0.95) level = 4
      } else {
        if (rand > 0.85) level = 1
        if (rand > 0.93) level = 2
      }
      week.push(level)
    }
    grid.push(week)
  }
  return grid
}

const contribColors = {
  0: 'bg-white/[0.02] border border-white/[0.02]',
  1: 'bg-primary-950/25 border border-primary-500/20 text-primary-400',
  2: 'bg-primary-900/40 border border-primary-400/40 text-primary-300',
  3: 'bg-primary-600/70 border border-primary-300/60 text-white',
  4: 'bg-primary-400 border border-white/20 text-white',
}

const contributions = generateContributions()

const GitHubActivity = () => {
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
          <span className="section-index">009 — GIT_LOGS</span>
          <h2 className="section-title text-mono">
            Open Source <span className="text-gradient">Activity</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A real-time simulation of my GitHub commit database, language distribution, and open-source nodes.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
          >
            {[
              { icon: Code2, label: 'Repositories', value: '10+' },
              { icon: GitBranch, label: 'Contributions', value: '185+' },
              { icon: Star, label: 'Languages', value: '6+' },
              { icon: Github, label: 'Years Active', value: '3+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="glass-card p-4 text-center card-corners border border-white/[0.04]"
                style={{ borderRadius: '4px' }}
              >
                <stat.icon size={16} className="mx-auto text-primary-400 mb-2" />
                <div className="text-xl font-bold font-mono text-gray-100">{stat.value}</div>
                <div className="font-mono text-[9px] text-gray-500 uppercase mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 sm:p-8 mb-8 card-corners border border-white/[0.04]"
            style={{ borderRadius: '4px' }}
          >
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 animate-pulse" />
                <h3 className="font-mono text-xs text-gray-300">db_queries --query="user_commits"</h3>
              </div>
              <span className="font-mono text-[10px] text-gray-500">SYSTEM: ONLINE</span>
            </div>

            {/* Graph */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-[4px] min-w-[700px]">
                {contributions.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[4px]">
                    {week.map((level, di) => (
                      <motion.div
                        key={`${wi}-${di}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: Math.min(wi * 0.008, 0.4) + di * 0.008 }}
                        className={`w-[10px] h-[10px] rounded-[1px] ${contribColors[level]} transition-all duration-300 hover:scale-125`}
                        title={`${level} commits`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-1.5 mt-4">
              <span className="font-mono text-[9px] text-gray-500">Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div key={level} className={`w-[10px] h-[10px] rounded-[1px] ${contribColors[level]}`} />
              ))}
              <span className="font-mono text-[9px] text-gray-500">More</span>
            </div>
          </motion.div>

          {/* Pinned Repos */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-mono text-xs text-gray-400 mb-4 flex items-center gap-2">
              <span>$ cat ~/pinned_repos.json</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repos.map((repo, i) => (
                <motion.a
                  key={i}
                  href={`https://github.com/limutin/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="glass-card p-5 group card-corners border border-white/[0.04]"
                  style={{ borderRadius: '4px' }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Github size={14} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
                      <h4 className="font-mono text-sm text-primary-400 group-hover:text-primary-300 group-hover:underline">{repo.name}</h4>
                    </div>
                    <ExternalLink size={12} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <p className="text-xs text-gray-400 mb-4 h-8 leading-relaxed line-clamp-2">{repo.desc}</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/[0.02]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.color }} />
                      <span className="font-mono text-[10px] text-gray-500">{repo.lang}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* View on GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <motion.a
              href="https://github.com/limutin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-gray-300 hover:text-white font-mono text-xs transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={14} /> execute: view_full_profile()
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GitHubActivity
