import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './Icon'

interface GalleryProps {
  images: string[]
  title: string
  initialIndex?: number
  onClose: () => void
}

export function Gallery({ images, title, initialIndex = 0, onClose }: GalleryProps) {
  const [i, setI] = useState(initialIndex)

  const prev = useCallback(() => setI((v) => (v - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setI((v) => (v + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, prev, next])

  return (
    <motion.div
      className="gallery"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="gallery__win term-win"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.94, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 16 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <div className="term-bar">
          <span className="term-dot r" />
          <span className="term-dot y" />
          <span className="term-dot g" />
          <span className="term-title">
            <span className="accent">{title}</span> — {i + 1}/{images.length}
          </span>
          <button className="gallery__close" onClick={onClose} aria-label="close">
            <Icon name="close" className="" />
          </button>
        </div>

        <div className="gallery__stage">
          <img className="gallery__img" src={images[i]} alt={`${title} screenshot ${i + 1}`} />
          {images.length > 1 && (
            <>
              <button className="gallery__nav prev" onClick={prev} aria-label="previous">
                <Icon name="chevL" className="" />
              </button>
              <button className="gallery__nav next" onClick={next} aria-label="next">
                <Icon name="chevR" className="" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="gallery__thumbs">
            {images.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`thumbnail ${idx + 1}`}
                className={idx === i ? 'active' : ''}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
