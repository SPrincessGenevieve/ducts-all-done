"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  motion,
  useMotionValue,
  animate,
  useAnimationControls,
} from "framer-motion"

type ServiceT = {
  title: string
  desc: string
  icon: any
}

type ItemT = {
  item: ServiceT[]
}

export default function ServiceDetailSection({ item }: ItemT) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0)
  const x = useMotionValue(0)
  const controls = useAnimationControls()
  const animationRef = useRef<any>(null)

  // Duplicate items for seamless loop
  const items = [...item, ...item]

  useEffect(() => {
    if (containerRef.current) {
      // We divide by 2 because we duplicated the items
      setWidth(containerRef.current.scrollWidth / 2)
    }
  }, [item])

  const startAutoScroll = () => {
    if (width === 0) return

    // Calculate remaining distance to cover to keep speed consistent
    const currentX = x.get()
    const targetX = -width

    // If we've scrolled past the boundary, reset to 0 before starting
    if (currentX <= -width) x.set(0)

    animationRef.current = animate(x, -width, {
      ease: "linear",
      duration: (width + x.get()) / 50,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      onUpdate: (latest) => {
        // This is the "infinite" magic: if it goes past the width, reset to 0
        if (latest <= -width) {
          x.set(latest + width)
        }
      },
    })
  }

  useEffect(() => {
    startAutoScroll()
    return () => animationRef.current?.stop()
  }, [width])

  // Handle manual drag logic
  const handleDragUpdate = () => {
    const currentX = x.get()
    if (currentX > 0) {
      x.set(currentX - width)
    } else if (currentX < -width) {
      x.set(currentX + width)
    }
  }

  return (
    <div className="absolute bottom-0 left-0 z-70 flex w-full items-center justify-center overflow-hidden bg-transparent backdrop-blur-xl">
      {/* Mobile/Scrolling View */}
      <div className="hero-footer gradient-background hidden w-full overflow-hidden bg-linear-90 from-primary-blue-200 to-primary-blue-100 p-2 max-[780px]:flex">
        <motion.div
          ref={containerRef}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          onDragStart={() => animationRef.current?.stop()}
          onDragEnd={startAutoScroll}
          onUpdate={handleDragUpdate}
          className="flex min-w-max cursor-grab gap-4 divide-x divide-white/70 will-change-transform active:cursor-grabbing"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex min-w-50 items-center gap-4 p-2 select-none"
            >
              <item.icon className="text-white" />
              <div>
                <p className="text-[16px] font-semibold text-white">
                  {item.title}
                </p>
                <p className="text-[12px] text-white/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop View (Static) */}
      <div className="hero-footer gradient-background flex w-full items-center justify-center gap-4 divide-x divide-white/70 bg-linear-90 from-primary-blue-200 to-primary-blue-100 p-2 max-[780px]:hidden">
        {item.map((item, i) => (
          <div key={i} className="flex w-full max-w-70 items-center gap-4 p-2">
            <item.icon className="text-white" />
            <div>
              <p className="text-[16px] font-semibold text-white">
                {item.title}
              </p>
              <p className="text-[12px] text-white/70">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
