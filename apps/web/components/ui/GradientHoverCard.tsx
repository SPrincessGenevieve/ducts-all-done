"use client"

import { motion, useMotionValue, animate } from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react"

type Props = {
  colors?: string[]
  hoverable?: boolean
  speed?: number // 🔥 new prop
  children?: React.ReactNode
  size?: number
}

export default function SmartGradientCard({
  colors = [
    "rgb(204,230,226)",
    "rgba(34,197,94,0.5)",
    "rgba(0,128,111,0.651)",
    "rgba(0, 191, 166, 0.687)",
    "rgb(204, 230, 226)",
    "rgba(34,197,94,0.5)",
    "rgba(0,128,111,0.651)",
    "rgba(0,191,166,0.687)",
  ],
  speed = 5,
  children,
  size = 350,
  hoverable = true, // default: hover enabled
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  // Motion values stored safely
  const pointsRef = useRef(
    colors.map(() => ({
      x: useMotionValue(150),
      y: useMotionValue(100),
    }))
  )
  const points = pointsRef.current

  // Build gradient dynamically
  const buildGradient = () => {
    return points
      .map((p, i) => {
        return `radial-gradient(
          ${size - i * 20}px circle at ${p.x.get()}px ${p.y.get()}px,
          ${colors[i]},
          transparent 60%
        )`
      })
      .join(",")
  }

  const [bg, setBg] = useState(buildGradient())

  // Sync animation → update background
  useEffect(() => {
    const unsubscribers = points.map((p) =>
      p.x.on("change", () => setBg(buildGradient()))
    )
    return () => unsubscribers.forEach((u) => u())
  }, [])

  // Idle animation
  useEffect(() => {
    if (hovered && hoverable) return

    const padding = 150 // adjust based on your biggest gradient radius

    points.forEach((p, i) => {
      const animateRandom = () => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return

        const newX = padding + Math.random() * (rect.width - 2 * padding)
        const newY = padding + Math.random() * (rect.height - 2 * padding)

        animate(p.x, newX, {
          duration: speed + i,
          ease: "easeInOut",
          onComplete: animateRandom,
        })

        animate(p.y, newY, {
          duration: speed + i,
          ease: "easeInOut",
        })
      }

      animateRandom()
    })
  }, [hovered, hoverable])

  // Mouse follow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverable || !hovered) return

    const rect = ref.current!.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top

    points.forEach((p, i) => {
      animate(p.x, mx, { duration: 0.2 + i * 0.1 })
      animate(p.y, my, { duration: 0.2 + i * 0.1 })
    })
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => hoverable && setHovered(true)}
      onMouseLeave={() => hoverable && setHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative h-full w-full overflow-hidden bg-white"
    >
      {children}
      <motion.div
        className="absolute inset-0 blur-3xl"
        style={{ background: bg }}
      ></motion.div>
    </div>
  )
}
