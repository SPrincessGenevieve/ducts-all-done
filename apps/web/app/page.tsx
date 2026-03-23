"use client"

import { useEffect, useRef, useState } from "react"
import HeroSection from "@/components/HeroSection"
import { animate } from "framer-motion"
import Image from "next/image"
import { motion } from "framer-motion"
import { services, services_detail_data } from "@/lib/data"
import { IconArrowRight } from "@tabler/icons-react"
import Link from "next/link"
import ServicesSection from "@/components/ServicesSection"

export default function Page() {
  const [height, setHeight] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 8 // HeroSection + 4 colored pages
  const [isScrolling, setIsScrolling] = useState(false)
  const isManualScrolling = useRef(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const pageRef = useRef(0)

  // Measure window height safely
  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage")
    const initialPage = savedPage ? parseInt(savedPage, 10) : 0

    const currentHeight = window.innerHeight
    setHeight(currentHeight)
    pageRef.current = initialPage
    setCurrentPage(initialPage)

    // Instant jump to the saved position
    window.scrollTo(0, initialPage * currentHeight)

    setIsLoaded(true)
  }, [])
  // Function to scroll to a specific page smoothly
  const scrollToPage = (page: number) => {
    if (!height) return
    const targetY = page * height

    animate(window.scrollY, targetY, {
      type: "spring",
      stiffness: 150, // Slightly softer for better sync
      damping: 25,
      onUpdate: (v) => window.scrollTo(0, v),
    })
  }

  // Handle wheel events to scroll one page at a time
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return
      e.preventDefault()

      setIsScrolling(true)

      if (e.deltaY > 0 && pageRef.current < totalPages - 1) {
        const next = pageRef.current + 1
        scrollToPage(next)
      } else if (e.deltaY < 0 && pageRef.current > 0) {
        const prev = pageRef.current - 1
        scrollToPage(prev)
      }

      setTimeout(() => setIsScrolling(false), 1000)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [height, isScrolling]) // Removed currentPage dependency to prevent re-binding

  // 4. Updated Scroll Listener (The Single Source of Truth)
  useEffect(() => {
    if (!height || !isLoaded) return

    const handleScroll = () => {
      const page = Math.round(window.scrollY / height)

      // Only update and save if the page actually changed
      if (page !== pageRef.current) {
        pageRef.current = page
        setCurrentPage(page)
        localStorage.setItem("currentPage", page.toString())
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [height, isLoaded])

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerHeight
      setHeight(newHeight)
      // Re-snap to the current page so the user doesn't get "lost" between sections
      window.scrollTo(0, pageRef.current * newHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="w-full">
      <div className="h-screen bg-white">
        <HeroSection />
      </div>
      <ServicesSection
        height={height}
        currentPage={currentPage}
      ></ServicesSection>
    </div>
  )
}
