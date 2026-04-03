"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SectionTitle from "./ui/SectionTitle"
import AbstractContainer from "./ui/AbstractContainer"

const placeList = [
  "Tampa",
  "Brandon",
  "Riverview",
  "Lutz",
  "Plant City",
  "Apollo Beach",
  "Sun City Center",
  "Wesley Chapel",
  "Land O' Lakes",
  "New Port Richey",
  "Zephyrhills",
  "Odessa",
  "Trinity",
  "Hudson",
  "Clearwater",
  "Largo",
  "Dunedin",
  "Tarpon Springs",
  "Safety Harbor",
  "Seminole",
  "St. Pete Beach",
  "Bradenton",
  "Palmetto",
  "Ellenton",
  "Anna Maria",
  "Cortez",
  "Bradenton Beach",
]

export default function ServiceAreaSection() {
  // 1. Initialize rows as an empty array
  const [rows, setRows] = useState<string[][]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // 2. This logic ONLY runs on the client
    const shuffle = (array: string[]) =>
      [...array].sort(() => 0.5 - Math.random())

    const generatedRows = [...Array(8)].map(() => shuffle(placeList))

    setRows(generatedRows)
    setMounted(true)
  }, [])

  // 3. Server renders null, Client renders null on first pass.
  // No mismatch possible.
  if (!mounted || rows.length === 0) {
    return <div className="min-h-screen w-full bg-white" />
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden bg-linear-0 from-primary-blue-100 from-10% to-white to-70%">
      <div className="z-20 max-w-180 p-4">
        <SectionTitle
          title="Service Area"
          label="Serving 4 Counties Across Tampa Bay"
          desc="If you're in the Greater Tampa Bay area, we've got you covered."
        />
      </div>

      <div className="flex h-full flex-wrap-reverse items-center justify-center gap-20">
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
          className="flex h-full min-h-150 w-full max-w-200 flex-col items-center justify-center gap-4 overflow-hidden p-4"
        >
          {rows.map((randomizedList, rowIndex) => {
            const isLeft = rowIndex % 2 === 0
            const displayList = [...randomizedList, ...randomizedList]

            return (
              <motion.div
                key={`row-${rowIndex}`}
                className="flex w-max gap-4"
                animate={{ x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 230,
                  ease: "linear",
                }}
              >
                {displayList.map((item, i) => (
                  <div
                    key={`item-${rowIndex}-${i}-${item}`}
                    className="flex h-10 w-40 shrink-0 items-center justify-center rounded-sm bg-white/50 backdrop-blur-2xl"
                  >
                    <span className="text-center text-sm text-primary-blue-200">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            )
          })}
        </div>

        <div className="abstract-map-cont my-12 flex">
          <AbstractContainer />
        </div>
      </div>
    </div>
  )
}
