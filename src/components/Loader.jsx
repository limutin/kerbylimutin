import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Loader = () => {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('INITIALIZING')

  const phases = ['INITIALIZING', 'LOADING MODULES', 'RENDERING UI', 'COMPLETE']

  useEffect(() => {
    let p = 0
    const interval = setInterval(() => {
      p += Math.random() * 18 + 4
      if (p >= 100) {
        p = 100
        clearInterval(interval)
      }
      setProgress(Math.min(p, 100))
      const idx = Math.floor((Math.min(p, 100) / 100) * (phases.length - 1))
      setPhase(phases[idx])
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#050507' }}
    >
      {/* Top-left label */}
      <div className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#606078' }}>
        /system/boot.run
      </div>

      {/* Top-right label */}
      <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#606078' }}>
        INDEX · 0001
      </div>

      {/* Corner decorations */}
      <div className="absolute left-6 bottom-6 h-4 w-4" style={{ borderLeft: '0.5px solid rgba(255,255,255,0.25)', borderBottom: '0.5px solid rgba(255,255,255,0.25)' }} />
      <div className="absolute right-6 bottom-6 h-4 w-4" style={{ borderRight: '0.5px solid rgba(255,255,255,0.25)', borderBottom: '0.5px solid rgba(255,255,255,0.25)' }} />
      <div className="absolute left-6 top-14 h-4 w-4" style={{ borderLeft: '0.5px solid rgba(255,255,255,0.25)', borderTop: '0.5px solid rgba(255,255,255,0.25)' }} />
      <div className="absolute right-6 top-14 h-4 w-4" style={{ borderRight: '0.5px solid rgba(255,255,255,0.25)', borderTop: '0.5px solid rgba(255,255,255,0.25)' }} />

      {/* Center — Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center"
      >
        {/* Logo badge */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-semibold text-white mb-5"
          style={{
            background: 'linear-gradient(135deg, #C17BE8, #6080FF)',
            boxShadow: '0 20px 60px -10px rgba(127,80,220,0.55), inset 0 1px 0 rgba(255,255,255,0.3)',
            border: '0.5px solid rgba(255,255,255,0.15)',
          }}
        >
          KL
        </div>

        <div
          className="text-[14px] font-medium tracking-tight mb-1"
          style={{ color: '#e8e8f0' }}
        >
          Kerby Limutin
        </div>
        <div
          className="font-mono text-[10px] uppercase tracking-[0.3em] mb-10"
          style={{ color: '#606078' }}
        >
          Developer · Builder
        </div>

        {/* Phase label */}
        <motion.div
          className="mb-4 h-4 font-mono text-[11px] uppercase tracking-[0.3em]"
          style={{ color: '#a0a0b8' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="mr-2" style={{ color: '#606078' }}>›</span>
          {phase}
        </motion.div>

        {/* Progress bar */}
        <div
          className="relative h-[2px] w-[420px] max-w-[80vw] overflow-hidden rounded-full"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #C17BE8 0%, #8AA0FF 50%, #6080FF 100%)',
              boxShadow: '0 0 14px rgba(193,123,232,0.55)',
            }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
          />
        </div>

        {/* Scale markers */}
        <div
          className="mt-2 flex w-[420px] max-w-[80vw] items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em]"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>

        {/* Footer info */}
        <div
          className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em]"
          style={{ color: '#606078' }}
        >
          <span>Kerby Limutin</span>
          <span
            className="h-[3px] w-[3px] rounded-full"
            style={{ background: 'rgba(255,255,255,0.25)' }}
          />
          <span>Developer · Builder</span>
          <span
            className="h-[3px] w-[3px] rounded-full"
            style={{ background: 'rgba(255,255,255,0.25)' }}
          />
          <span>v1.0.0</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Loader
