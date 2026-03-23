"use client"

import React, { useEffect, useState } from "react"
import { Compare } from "./ui/compare"
import Image from "next/image"
import { Button } from "@workspace/ui/components/button"
import {
  BadgeCheck,
  Check,
  Dot,
  Medal,
  ShieldCheck,
  Star,
  TimerReset,
  Wallet,
} from "lucide-react"
import { IconStar, IconStarFilled } from "@tabler/icons-react"
import Header from "./ui/header"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [slide, setSlide] = useState(0)
  const handleBtn = () => {
    alert("Clicked")
  }

  const icons = [
    {
      icon: Check,
      label: "Licensed & Insured",
    },
    {
      icon: Medal,
      label: "IICRC Certified",
    },
    {
      icon: ShieldCheck,
      label: "EPA Certified",
    },
    {
      icon: BadgeCheck,
      label: "100% Satisfaction Guarantee",
    },
    {
      icon: TimerReset,
      label: "Same-Day Available",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide((prev) => (prev >= 4 ? 0 : prev + 1))
    }, 3000)

    return () => clearTimeout(timer)
  }, [slide])

  const slideClasses = [4, 40, 78, 111, 144]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // each label appears 0.2s after previous
      },
    },
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Header></Header>
      <div className="flex h-full w-full justify-between">
        <div className="z-50 mt-20 flex flex-col gap-8 p-4 lg:pl-25">
          <div className="flex flex-col gap-4">
            <motion.div
              className="relative flex"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Render labels */}
              {icons.map(
                (item, i) =>
                  slide === i && (
                    <motion.div
                      key={i}
                      className="flex w-55 items-center gap-2 rounded-[5px] bg-primary-blue-100 p-2"
                    >
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>
                    </motion.div>
                  )
              )}

              {/* Triangle indicator */}
              <motion.div
                className="absolute -bottom-3 h-0 w-0 border-t-14 border-r-12 border-l-12 border-t-primary-blue-100 border-r-transparent border-l-transparent"
                initial={false}
                animate={{ x: slideClasses[slide] }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 10,
                  mass: 0.5,
                }}
              />
            </motion.div>
            <div className="flex items-center gap-2">
              {icons.map((item, i) => (
                <div
                  onMouseEnter={() => setSlide(i)}
                  key={i}
                  className="group flex items-center gap-2"
                >
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition delay-100 ease-in-out ${slide === i ? "bg-primary-blue-100/70" : "bg-primary-blue-100/30"}`}
                  >
                    <item.icon className="text-white" size={15} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center justify-center gap-2 rounded-full border border-primary-blue-100 px-2">
              <div className="h-2 w-2 rounded-full bg-primary-blue-100"></div>
              <p className="text-sm text-black">Tampa's Trusted Choice</p>
            </div>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary-blue-100">
              Cleaner Air
            </p>
            <p className="text-5xl font-bold text-black">
              Starts in Your Ducts
            </p>
          </div>
          <p className="max-w-120 text-black">
            Expert air duct cleaning, dryer vent service, chimney sweeping &
            attic insulation across Tampa Bay. Licensed, IICRC & EPA certified.
            Same-day appointments available.
          </p>
          <div className="flex gap-2">
            <Button onClick={handleBtn} className="w-40">
              Contact Us
            </Button>
            <Button variant={"outline"} className="w-40 text-black">
              Get a Free Quote
            </Button>
          </div>
          <div className="flex">
            <div className="rounded-xl bg-black p-2 px-4">
              <div className="flex">
                {[...Array(5)].map((__, i) => (
                  <IconStarFilled
                    size={12}
                    className="text-yellow-400"
                    key={i}
                  ></IconStarFilled>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <p className="text-3xl font-bold text-white">5.0</p>
                <div>
                  <p className="text-[10px] text-white">114+ Reviews</p>
                  <p className="text-[10px] text-white">Google Verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-1/2">
          <Compare
            autoplay={true}
            firstChild={
              <div className="flex h-full w-auto items-center justify-center bg-white">
                <div className="absolute h-150 w-auto">
                  <Image
                    src="https://res.cloudinary.com/dqgkvrmve/image/upload/v1774242746/clean-vent_kgfwpb.png"
                    alt=""
                    width={400}
                    height={400}
                    className="h-full w-auto object-cover"
                  />
                </div>
              </div>
            }
            secondChild={
              <div className="flex h-full w-auto items-center justify-center bg-white">
                <div className="absolute h-150 w-auto">
                  <Image
                    src="https://res.cloudinary.com/dqgkvrmve/image/upload/v1773992360/dirty-vent_e9imih.png"
                    alt=""
                    width={400}
                    height={400}
                    className="h-full w-auto object-cover"
                  />
                </div>
              </div>
            }
            className="pointer-events-none absolute h-full w-full"
            slideMode="drag"
          />
        </div>
      </div>
    </div>
  )
}
