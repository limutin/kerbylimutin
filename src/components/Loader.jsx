import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Loader = () => {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('BOOT SEQUENCE INITIATED')

  const phases = [
    'BOOT SEQUENCE INITIATED',
    'LOADING SYSTEM MODULES',
    'ESTABLISHING SECURE CHANNELS',
    'RENDERING GRAPHICAL UI',
    'SYSTEM READY'
  ]

  useEffect(() => {
    let p = 0
    const interval = setInterval(() => {
      p += Math.random() * 15 + 3
      if (p >= 100) {
        p = 100
        clearInterval(interval)
      }
      const roundedP = Math.floor(p)
      setProgress(roundedP)
      
      const idx = Math.floor((roundedP / 100) * (phases.length - 1))
      setPhase(phases[idx])
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
      style={{ background: '#050507' }}
    >
      {/* Top-left label: location details */}
      <div className="absolute left-8 top-8 font-mono text-[9px] uppercase tracking-[0.2em] text-[#606078] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#5EFFAA] animate-pulse" />
        <span>OROQUIETA CITY, PH</span>
      </div>

      {/* Top-right label: boot command */}
      <div className="absolute right-8 top-8 font-mono text-[9px] uppercase tracking-[0.2em] text-[#606078]">
        SYS.BOOT_SEQUENCE // V1.0.0
      </div>

      {/* Center content container */}
      <div className="flex flex-col items-center justify-center w-full max-w-lg px-6">
        
        {/* Logo Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center mb-16"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-white mb-4"
            style={{
              background: 'linear-gradient(135deg, #C17BE8, #6080FF)',
              boxShadow: '0 15px 45px -10px rgba(127,80,220,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
              border: '0.5px solid rgba(255,255,255,0.12)',
            }}
          >
            KL
          </div>
          <h2 className="text-[12px] font-medium tracking-tight text-gray-200 mb-0.5">Kerby Limutin</h2>
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#606078]">Developer · Builder</p>
        </motion.div>

        {/* Big Progress Number Display */}
        <div className="flex items-baseline justify-center mb-8 font-mono">
          <span className="text-[110px] sm:text-[130px] font-medium leading-none text-gray-100 tracking-tighter">
            {progress.toString().padStart(3, '0')}
          </span>
          <span className="text-xs text-[#606078] tracking-widest ml-3">
            / 100
          </span>
        </div>

        {/* Terminal Boot Phase Description */}
        <div className="h-6 flex items-center justify-center mb-8 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gray-400">
          <span className="text-[#606078] mr-2 animate-pulse">&gt;</span>
          <span>{phase}</span>
          <span className="w-1 h-3.5 bg-primary-400 ml-1.5 animate-pulse" />
        </div>

        {/* Slim Progress Bar */}
        <div className="relative h-[2px] w-full bg-white/[0.04] rounded-full overflow-hidden mb-2">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #C17BE8 0%, #8AA0FF 50%, #6080FF 100%)',
              boxShadow: '0 0 10px rgba(193,123,232,0.4)',
            }}
          />
        </div>

        {/* Scale labels */}
        <div className="flex w-full items-center justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-[#606078] mb-12">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>

        {/* Footer info metadata */}
        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#606078] flex items-center gap-2 flex-wrap justify-center text-center">
          <span>KERBY LIMUTIN</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>DEVELOPER</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>BUILDER</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>V1.0.0</span>
        </div>

      </div>
    </div>
  )
}

export default Loader
