"use client"

import { services, services_detail_data } from "@/lib/data"
import { IconArrowRight } from "@tabler/icons-react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ServicesSection() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(true)
  const [position, setPosition] = useState(0)
  const [totalScroll, setTotalScroll] = useState(0)

  const step = (totalScroll / 16) * 1.1
  const checkpoint = Array.from(
    { length: services.length },
    (_, i) => step * (i + 1)
  )

  useMotionValueEvent(scrollY, "change", (current) => {
    setPosition(current)

    const flag = step * 7

    if (current > flag) {
      console.log("~~~ HEADER HIDDEN ~~~")
      setHidden(true)
    } else if (current > step) {
      console.log("~~~ HEADER VISIBLE ~~~")
      setHidden(false)
    } else {
      console.log("~~~ HEADER HIDDEN ~~~")
      setHidden(true)
    }
  })

  useEffect(() => {
    // Calculate total scrollable distance
    const updateTotal = () => {
      setTotalScroll(document.body.scrollHeight - window.innerHeight)
    }

    updateTotal()
    window.addEventListener("resize", updateTotal) // recalc if window resizes
    return () => window.removeEventListener("resize", updateTotal)
  }, [])

  useMotionValueEvent(scrollY, "change", (current) => {
    setPosition(current)
  })

  return (
    <div id="example">
      <motion.header
        className="fixed top-0 z-90 flex w-full flex-col items-center justify-center gap-4 p-4 backdrop-blur-xl backdrop-sepia-50"
        animate={{
          y: hidden ? -140 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="w-full">
          <motion.div className="z-10 flex flex-col items-center gap-2">
            <p className="rounded-2xl bg-primary-blue-200 p-1 px-2 text-sm font-normal text-white">
              Our Services
            </p>
            <p className="text-center font-medium text-white">
              Everything Your Home's Air System Needs
            </p>
          </motion.div>
        </div>
        <div className="service-icon-cont flex gap-4">
          {services.map((item, i) => {
            return (
              <div
                key={i}
                className="flex w-full max-w-30 flex-col items-center gap-4"
              >
                <div
                  className={`rounded-full transition duration-150 ease-in-out ${
                    position >= (checkpoint[i] ?? Infinity)
                      ? "bg-primary-blue-100"
                      : "bg-primary-blue-100/30"
                  } p-4`}
                >
                  <Image src={item.icon} width={30} height={30} alt=""></Image>
                </div>
                <p className="flex text-center text-sm font-normal text-white">
                  {item.title}
                </p>
              </div>
            )
          })}
        </div>
      </motion.header>

      <main className="">
        {services_detail_data.map((item, i) => (
          <section key={i} className="h-screen bg-white">
            <div
              key={i}
              className="h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="items-last flex h-full items-end justify-center -bg-linear-140 from-black/50 from-50% to-black to-95%">
                <div className="flex h-[75%] w-full max-w-300 flex-col justify-center gap-4 p-8">
                  <motion.p
                    variants={{
                      hidden: { y: 40, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl font-semibold text-primary-blue-100"
                  >
                    {item.title}
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { y: 40, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-150 text-sm font-normal text-white"
                  >
                    {item.desc}
                  </motion.p>
                  <motion.div
                    variants={{
                      hidden: { y: 40, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="flex"
                  >
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex h-10 items-center gap-2 rounded-sm bg-primary-blue-100 px-4 text-sm text-white"
                    >
                      Learn more <IconArrowRight></IconArrowRight>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
