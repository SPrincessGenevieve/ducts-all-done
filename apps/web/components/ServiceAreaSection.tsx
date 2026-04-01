"use client"

import React from "react"
import FloridaMap from "./ui/FloridaMap"
import AbstractContainer from "./ui/AbstractContainer"
import { motion } from "framer-motion"
import SectionTitle from "./ui/SectionTitle"

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
  const shuffle = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden bg-linear-0 from-primary-blue-100 from-10% to-white to-70%">
      <div className="z-20 max-w-180 p-4">
        <SectionTitle
          title={"Service Area"}
          label={"Serving 4 Counties Across Tampa Bay"}
          desc={
            "If you're in the Greater Tampa Bay area, we've got you covered."
          }
        ></SectionTitle>
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
          {[...Array(8)].map((_, rowIndex) => {
            const isLeft = rowIndex % 2 === 0

            // shuffle once per row
            const randomizedList = shuffle(placeList)

            return (
              <motion.div
                key={rowIndex}
                className="flex w-max gap-4"
                animate={{
                  x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 230,
                  ease: "linear",
                }}
              >
                {[...randomizedList, ...randomizedList].map((item, i) => (
                  <div
                    key={i}
                    className="flex h-10 w-40 shrink-0 items-center justify-center rounded-sm bg-white/50 backdrop-blur-2xl"
                  >
                    <p className="text-center text-sm text-primary-blue-200">
                      {item}
                    </p>
                  </div>
                ))}
              </motion.div>
            )
          })}
        </div>

        <div className="abstract-map-cont my-12 flex">
          <AbstractContainer></AbstractContainer>
        </div>
      </div>
    </div>
  )
}
