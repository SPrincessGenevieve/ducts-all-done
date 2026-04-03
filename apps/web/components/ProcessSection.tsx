"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Fragment, useEffect, useMemo, useState } from "react"
import SectionTitle from "./ui/SectionTitle"

type WindLineProps = {
  delay: number
  duration: number
  top: string
}

type WindCloudProps = {
  src: string
  className?: string
  duration?: number
  delay?: number
  top?: string
  rotateAmount?: number // degrees of rotation back and forth
}

const WindCloud = ({
  src,
  className,
  duration = 10,
  delay = 0,
  rotateAmount = 360,
}: WindCloudProps) => {
  // Randomize starting position
  const startX = -50 - Math.random() * 100 // start somewhere offscreen left
  const startY = Math.random() * 80 // random vertical position 0% - 80%

  const [config, setConfig] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    // ✅ FIX: This only runs in the browser, so Math.random() is safe here.
    setConfig({
      x: -50 - Math.random() * 100,
      y: Math.random() * 80,
    })
  }, [])

  if (!config) return null // Wait for the client to generate positions

  return (
    <motion.div
      initial={{ x: `${startX}vw`, rotate: 0 }}
      animate={{
        x: "120vw", // move left → right
        rotate: [0, rotateAmount, -rotateAmount, 0], // rotate while moving
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
        delay,
      }}
      style={{ top: `${startY}%`, position: "absolute" }}
    >
      <Image src={src} alt="" width={400} height={400} className={className} />
    </motion.div>
  )
}

const WindLine = ({ delay, duration, top }: WindLineProps) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: "110vw", opacity: [0, 1, 0] }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
        delay,
      }}
      style={{ top }}
      className="absolute h-[3px] w-[200px] bg-gradient-to-r from-transparent via-primary-blue-200/30 to-transparent"
    />
  )
}

export default function ProcessSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const windLines = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      duration: 1.5 + Math.random() * 2, // 1.5s - 3.5s
      delay: Math.random() * 2,
      width: 100 + Math.random() * 200, // 100px - 300px
      height: 2 + Math.random() * 4, // 2px - 6px
    }))
  }, [])

  const items = [
    {
      icon: "https://res.cloudinary.com/dqgkvrmve/image/upload/v1774791252/contact_ri4yfg.gif",
      label: "Call or Book Online",
      desc: "Call 813-923-2906 or drop your number in the header. We confirm same-day or next-day.",
    },
    {
      icon: "https://res.cloudinary.com/dqgkvrmve/image/upload/v1774791251/piping_r3z6n0.gif",
      label: "Tech Arrives On Time",
      desc: "Our certified tech arrives in a fully equipped van, ready to inspect and clean your system.",
    },
    {
      icon: "https://res.cloudinary.com/dqgkvrmve/image/upload/v1774791252/nose_btvitl.gif",
      label: "Breathe Cleaner Air",
      desc: "Job done right the first time, backed by our 100% satisfaction guarantee.",
    },
  ]

  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute top-0 z-0 h-full w-full">
        <div className="relative min-h-screen w-full overflow-hidden bg-transparent blur-[3px]">
          <div className="pointer-events-none absolute inset-0">
            {mounted &&
              windLines.map((line, i) => <WindLine key={i} {...line} />)}
          </div>
          <WindCloud
            src="https://res.cloudinary.com/dqgkvrmve/image/upload/v1774789721/cloud2_nup8lp.png"
            className="h-20 w-auto"
            duration={8}
            delay={6}
          />
          <WindCloud
            src="https://res.cloudinary.com/dqgkvrmve/image/upload/v1774789721/cloud1_a2md8h.png"
            className="h-30 w-auto"
            duration={10}
            delay={0}
          />
          <WindCloud
            src="https://res.cloudinary.com/dqgkvrmve/image/upload/v1774789721/cloud1_a2md8h.png"
            className="h-30 w-auto"
            duration={12}
            delay={2}
          />

          <WindCloud
            src="https://res.cloudinary.com/dqgkvrmve/image/upload/v1774789721/cloud2_nup8lp.png"
            className="h-20 w-auto"
            duration={8}
            delay={2}
          />

          <WindCloud
            src="https://res.cloudinary.com/dqgkvrmve/image/upload/v1774789722/cloud3_dynhr0.png"
            className="h-20 w-auto"
            duration={4}
            delay={4}
          />
          <WindCloud
            src="https://res.cloudinary.com/dqgkvrmve/image/upload/v1774789722/cloud3_dynhr0.png"
            className="h-20 w-auto"
            duration={5}
            delay={2}
          />
        </div>
      </div>
      <div className="z-20 flex min-h-screen w-full flex-col items-center justify-center p-4">
        <SectionTitle
          title={"Simple Process"}
          label={"How It Works"}
          desc={
            "Booking is easy. We handle the rest — fast, clean, and professional every time."
          }
        ></SectionTitle>
        <div className="process-card-cont z-20 mt-4 flex min-h-100 w-full max-w-250 justify-evenly gap-8">
          {items.map((item, i) => (
            <Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  delay: i / 4,
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                  mass: 0.8,
                }}
                className="process-card flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-primary-blue-200/10 p-4 backdrop-blur-2xl"
              >
                <Image
                  className="rounded-full"
                  src={item.icon}
                  alt=""
                  width={60}
                  height={60}
                ></Image>
                <motion.p className="text-center text-xl font-semibold text-primary-blue-100">
                  {item.label}
                </motion.p>
                <p className="text-center text-sm text-black">{item.desc}</p>
              </motion.div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
