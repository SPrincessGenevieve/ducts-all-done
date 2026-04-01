"use client"

import React from "react"
import { easeInOut, motion, spring } from "framer-motion"

type SectionT = {
  title: string
  label: string
  desc: string
}

export default function SectionTitle({ title, label, desc }: SectionT) {
  return (
    <div className="z-20 my-10 flex flex-col items-center justify-center gap-4">
      <motion.div className="z-20 flex">
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            mass: 0.8,
            delay: 0.15,
          }}
          className="z-20 rounded-sm bg-primary-blue-200 p-1 px-2 text-center text-black text-white"
        >
          {title}
        </motion.p>
      </motion.div>
      <motion.div>
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            mass: 0.8,
            delay: 0.3,
          }}
          className="z-20 text-center text-5xl font-bold text-black text-primary-blue-200"
        >
          {label}
        </motion.p>
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            mass: 0.8,
            delay: 0.5,
          }}
          className="z-20 text-center text-black"
        >
          {desc}
        </motion.p>
      </motion.div>
    </div>
  )
}
