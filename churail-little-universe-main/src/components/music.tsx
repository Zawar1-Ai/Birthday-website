import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react'

type MusicContextValue = {
  enabled: boolean
  toggle: () => void
  unlockAudio: () => void
}

const MusicContext = createContext<MusicContextValue | null>(null)

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [enabled, setEnabled] = useState(false)

  const play = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.45
    void audio.play().catch((error: unknown) => {
      console.error('Unable to play the birthday song.', error)
      setEnabled(false)
    })
  }, [])

  const pause = useCallback(() => {
    audioRef.current?.pause()
    setEnabled(false)
  }, [])

  const unlockAudio = useCallback(() => {
    play()
  }, [play])

  const toggle = useCallback(() => {
    if (enabled) {
      pause()
      return
    }
    play()
  }, [enabled, pause, play])

  const value = useMemo(
    () => ({ enabled, toggle, unlockAudio }),
    [enabled, toggle, unlockAudio],
  )

  return (
    <MusicContext.Provider value={value}>
      <audio
        ref={audioRef}
        src="/audio/birthday-song.mp3"
        preload="metadata"
        loop
        hidden
        onPlay={() => setEnabled(true)}
        onPause={() => setEnabled(false)}
        onError={(event) =>
          console.error('Unable to load /audio/birthday-song.mp3.', event.currentTarget.error)
        }
      />
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error('useMusic must be used within MusicProvider')
  return ctx
}
