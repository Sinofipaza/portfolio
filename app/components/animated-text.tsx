"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedName({ text, className }: { text: string; className?: string }) {
  const [isHovering, setIsHovering] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Start animation after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Reset animation periodically
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setIsHovering(true)
      setTimeout(() => setIsHovering(false), 1500)
    }, 8000)

    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <div className={className} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6]"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: isHovering || (isPlaying && (index === 0 || index === text.indexOf("F"))) ? [-5, 5, -3, 3, 0] : 0,
            scale: hoveredIndex === index ? 1.2 : 1,
          }}
          transition={{
            opacity: { duration: 0.3, delay: 0.4 + index * 0.05 },
            y: {
              duration: 0.5,
              delay: isHovering ? index * 0.05 : 0,
              type: "spring",
              stiffness: 300,
              damping: 10,
            },
            scale: { duration: 0.2 },
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  )
}

