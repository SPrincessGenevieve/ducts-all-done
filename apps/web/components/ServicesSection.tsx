"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { services, services_detail_data } from "@/lib/data"
import { IconArrowRight } from "@tabler/icons-react"
import Link from "next/link"

type ServicesT = {
  height: number
  currentPage: number
}

export default function ServicesSection({ height, currentPage }: ServicesT) {
  return (
    <div>
      {height > 0 && currentPage > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-1/2 left-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-3xl font-bold"
        >
          <div className="relative flex h-full w-full flex-col items-center justify-start gap-4 p-8">
            {/* Central large div */}
            <div className="z-10 flex flex-col items-center gap-2">
              <p className="rounded-2xl bg-primary-blue-200 p-1 px-2 text-sm font-normal">
                Our Services
              </p>
              <p className="text-center font-medium text-white">
                Everything Your Home's Air System Needs
              </p>
            </div>
            <div>
              <div className="flex gap-4">
                {services.map((item, i) => (
                  <div
                    key={i}
                    className="flex w-full max-w-30 flex-col items-center gap-4"
                  >
                    <div
                      className={`rounded-full ${currentPage === i + 1 ? "bg-primary-blue-100" : "bg-primary-blue-100/30"} p-4`}
                    >
                      <Image
                        src={item.icon}
                        width={30}
                        height={30}
                        alt=""
                      ></Image>
                    </div>
                    <p className="flex text-center text-sm font-normal">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Extra pages to scroll through */}
      <div>
        {services_detail_data.map((item, i) => (
          <div
            key={i}
            className="h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="items-last flex h-full items-end justify-center -bg-linear-140 from-black/50 from-50% to-black to-95%">
              <motion.div className="z-100 flex h-[75%] w-full max-w-300 flex-col justify-center gap-4 p-8">
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
                    className="flex h-10 items-center gap-2 rounded-sm bg-primary-blue-100 px-4 text-sm"
                  >
                    Learn more <IconArrowRight></IconArrowRight>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
