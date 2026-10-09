import { motion } from 'framer-motion'
import { useMusic } from './music'

export function MusicToggle() {
  const { enabled, toggle } = useMusic()
  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={enabled ? 'Mute music' : 'Play music'}
      whileHover={{ scale: 1.08, rotate: -2 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-2xl border-[3px] border-white bg-white/95 px-4 py-2.5 text-sm font-extrabold text-rose-deep shadow-[0_5px_0_rgba(255,107,157,0.25),0_12px_28px_rgba(61,42,74,0.12)] backdrop-blur-md"
    >
      <span className="text-base">{enabled ? '🎵' : '▶️'}</span>
      <span>{enabled ? 'Music on' : 'Play music'}</span>
    </motion.button>
  )
}
