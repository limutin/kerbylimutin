import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 15 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 px-3 py-2.5 rounded border border-white/10 bg-[#08080f]/90 backdrop-blur-md text-primary-400 hover:text-primary-300 shadow-[0_0_15px_rgba(138,92,246,0.15)] hover:shadow-[0_0_20px_rgba(138,92,246,0.25)] hover:border-white/20 transition-all flex flex-col items-center gap-0.5"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <ArrowUp size={14} className="animate-bounce" />
          <span className="font-mono text-[8px] tracking-widest font-bold">TOP</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
