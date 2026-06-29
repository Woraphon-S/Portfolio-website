import { useCallback, useRef } from 'react'
import { useApp } from '../context/AppContext'

type AudioCtor = typeof AudioContext

export function useSound() {
  const { soundOn } = useApp()
  const ctxRef = useRef<AudioContext | null>(null)

  const getCtx = useCallback((): AudioContext | null => {
    if (typeof window === 'undefined') return null
    const Ctor: AudioCtor | undefined =
      window.AudioContext ?? (window as unknown as { webkitAudioContext?: AudioCtor }).webkitAudioContext
    if (!Ctor) return null
    if (!ctxRef.current) ctxRef.current = new Ctor()
    return ctxRef.current
  }, [])

  const blip = useCallback(
    (freq: number, duration = 0.05, type: OscillatorType = 'square', gain = 0.04) => {
      if (!soundOn) return
      const ctx = getCtx()
      if (!ctx) return
      if (ctx.state === 'suspended') void ctx.resume()

      const osc = ctx.createOscillator()
      const amp = ctx.createGain()
      osc.type = type
      osc.frequency.value = freq
      amp.gain.value = gain
      osc.connect(amp)
      amp.connect(ctx.destination)

      const now = ctx.currentTime
      amp.gain.setValueAtTime(gain, now)
      amp.gain.exponentialRampToValueAtTime(0.0001, now + duration)
      osc.start(now)
      osc.stop(now + duration)
    },
    [soundOn, getCtx],
  )

  const key = useCallback(() => blip(620 + Math.random() * 120, 0.03, 'square', 0.025), [blip])
  const hover = useCallback(() => blip(880, 0.04, 'sine', 0.02), [blip])
  const select = useCallback(() => blip(1320, 0.08, 'triangle', 0.05), [blip])
  const enter = useCallback(() => {
    blip(523, 0.08, 'triangle', 0.05)
    window.setTimeout(() => blip(784, 0.12, 'triangle', 0.05), 80)
  }, [blip])

  return { key, hover, select, enter }
}
