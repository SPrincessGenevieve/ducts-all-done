"use client"

import { IconQuote, IconQuoteFilled, IconStarFilled } from "@tabler/icons-react"
import React from "react"
import { motion } from "framer-motion"
import SectionTitle from "./ui/SectionTitle"

const testimonies = [
  {
    name: "Joe S.",
    comment:
      "Excellent and professional service! Pricing is affordable and customer support was 5-stars all the way. Refreshing to get such a personal touch. Highly recommend!",
    address: "Tampa, FL",
  },
  {
    name: "Mike T.",
    comment:
      "Ducts All Done was very friendly. They took my call right away and fit me into their busy schedule. Everything met my expectations — I will definitely use them again.",
    address: "Tampa Bay Area",
  },
  {
    name: "Sagi O.",
    comment:
      "Tom and Martin did a great job! After UV light install we are definitely feeling better. Great price too — truly appreciate it.",
    address: "Wesley Chapel, FL",
  },
]

export default function TestimoniesSection() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center p-4">
      <section className="flex w-full max-w-300 flex-col gap-8">
        <SectionTitle
          title={"Customer Reviews"}
          label={"Tampa Homeowners Trust Us"}
          desc={
            "114+ five-star reviews on Google from real customers across Tampa Bay."
          }
        ></SectionTitle>
        <div className="testimony-cont flex w-full flex-wrap justify-center gap-8">
          {testimonies.map((item, i) => (
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
              key={i}
              className="relative flex min-h-80 max-w-70 flex-col gap-4 rounded-2xl bg-linear-0 from-primary-blue-50 from-50% to-primary-blue-100/50 p-8"
            >
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <IconQuoteFilled className="left-0 h-14 w-14 text-primary-blue-200" />
              </motion.div>

              <p className="z-20 text-sm text-black">{item.comment}</p>
              <div className="absolute bottom-7 -left-3 h-0 w-30 border-10 border-white"></div>
              <div className="absolute bottom-7 left-0 h-0 h-10 w-[60%] rounded-bl-xl border-10 border-primary-blue-50 bg-primary-blue-50"></div>
              <div className="absolute bottom-2 left-0 h-0 w-[58%] rounded-r-2xl border-10 border-white"></div>
              <div className="absolute bottom-0 left-0 h-0 w-[62%] border-10 border-white bg-white"></div>
              <div className="absolute right-0 bottom-0 h-10 w-[42%] rounded-b-xl border-10 border-primary-blue-50 bg-primary-blue-50"></div>
              <motion.div className="absolute bottom-0 left-0 z-20 flex gap-2 bg-white">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: i }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white"
                  >
                    <IconStarFilled
                      key={i}
                      size={22}
                      className="text-yellow-400"
                    />
                  </motion.div>
                ))}
              </motion.div>
              <p className="absolute right-2 bottom-4 z-20 font-semibold text-primary-blue-200">
                {item.name}
              </p>
              <p className="absolute right-2 bottom-1 z-20 text-[10px] font-normal text-primary-blue-200">
                {item.address}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
