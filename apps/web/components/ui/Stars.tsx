"use client"

import { useEffect, useRef } from "react"

export default function Stars() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const starsContainer = starsRef.current
    if (!starsContainer) return

    const starsCount = 800
    const r = 800

    // Clear if re-rendered
    starsContainer.innerHTML = ""

    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement("div")
      star.className = "star"

      const s = 0.2 + Math.random() * 1
      const curR = r + Math.random() * 300

      star.style.transformOrigin = `0 0 ${curR}px`
      star.style.transform = `
        translate3d(0,0,-${curR}px)
        rotateY(${Math.random() * 360}deg)
        rotateX(${Math.random() * -50}deg)
        scale(${s}, ${s})
      `

      starsContainer.appendChild(star)
    }
  }, [])

  return (
    <div className="starfield-wrapper bg-linear-0 from-primary-blue-200 to-primary-blue-100">
      <div ref={starsRef} className="stars" />
    </div>
  )
}
