"use client"

import React from "react"
import GradientHoverCard from "./ui/GradientHoverCard"
import {
  IconBolt,
  IconHomeStar,
  IconMedal,
  IconStarFilled,
} from "@tabler/icons-react"
import { CreditCard, House } from "lucide-react"
import { easeInOut, motion, spring } from "framer-motion"
import ServiceAreaSection from "./ServiceAreaSection"
import SectionTitle from "./ui/SectionTitle"

const data = [
  {
    label: "IICRC & EPA Certified",
    desc: "Industry-leading certifications. License #7196244, EPA Cert #P5455385CC00BC501.",
    icon: IconMedal,
  },
  {
    label: "Residential & Commercial",
    desc: "All makes and models on both residential and commercial properties throughout Tampa Bay.",
    icon: House,
  },
  {
    label: "Financing Available",
    desc: "Flexible financing options so you can improve your air quality without breaking the budget.",
    icon: CreditCard,
  },
  {
    label: "100% Satisfaction Guarantee",
    desc: "We guarantee our air duct and dryer vent cleaning work. Not happy? We make it right.",
    icon: IconStarFilled,
  },
  {
    label: "Fast, Friendly Service",
    desc: "Same-day appointments available. We respect your time and keep your home clean.",
    icon: IconBolt,
  },
  {
    label: "Free Inspection Included",
    desc: "Get a free inspection with every service purchased. We show you what we find — no surprises.",
    icon: IconHomeStar,
  },
]

export default function ChooseUsSection() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8">
      <div className="absolute h-full w-full">
        <GradientHoverCard hoverable={false}></GradientHoverCard>
      </div>
      <div className="z-20 max-w-180 p-4">
        <SectionTitle
          title={"Why Choose Us"}
          label={"The Ducts All Done Difference"}
          desc={
            "We're not a franchise. We're a local Tampa Bay team that cares about your home and your air quality."
          }
        ></SectionTitle>
      </div>
      <motion.div className="choose-cont z-20 grid grid-cols-3 gap-4 p-4">
        {data.map((item, i) => (
          <React.Fragment key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                mass: 0.8,
                delay: i * 0.15,
              }}
              className="flex w-full max-w-80 flex-col gap-4 rounded-2xl bg-white/20 p-4 shadow-xl backdrop-blur-3xl"
            >
              <motion.div className="flex gap-2">
                <item.icon className="text-primary-blue-100"></item.icon>
                <motion.p className="font-semibold text-primary-blue-100">
                  {item.label}
                </motion.p>
              </motion.div>
              <p className="text-sm text-primary-blue-200">{item.desc}</p>
            </motion.div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
