import Image from "next/image"
import React from "react"
import Stars from "./ui/Stars"
import { Button } from "@workspace/ui/components/button"
import { ArrowRight, Clock, Mail, Phone, Pin } from "lucide-react"
import { easeInOut, motion, spring } from "framer-motion"

export default function ContactUsSection() {
  return (
    <div className="relative flex h-full w-full bg-primary-blue-100">
      <Stars></Stars>
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to top, transparent, black 10%, black 90%, transparent)",
        }}
        className="z-30 flex h-full w-full flex-col items-center justify-center gap-4 bg-transparent p-4 py-20"
      >
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-4xl font-semibold text-white">
            Ready to Breathe Better?
          </p>
          <p className="text-center text-white">
            Tampa's trusted duct cleaning team is ready to help. Call now for
            same-day service or get your free estimate.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4"
        >
          <Button>
            <Phone></Phone> Call 813-923-2906
          </Button>
          <Button className="bg-white text-primary-blue-200">
            Get a Free Quote <ArrowRight></ArrowRight>
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="z-50 flex w-full max-w-300 flex-wrap items-center justify-center gap-4"
        >
          <div className="flex gap-2 rounded-sm bg-white/20 p-2 backdrop-blur-2xl">
            <Mail size={16} className="text-white"></Mail>
            <p className="text-sm text-white">office@ductsalldone.com</p>
          </div>
          <div className="flex gap-2 rounded-sm bg-white/20 p-2 backdrop-blur-2xl">
            <Pin size={16} className="text-white"></Pin>
            <p className="text-sm text-white">
              13542 N Florida Ave, Tampa FL 33613
            </p>
          </div>
          <div className="flex gap-2 rounded-sm bg-white/20 p-2 backdrop-blur-2xl">
            <Clock size={16} className="text-white"></Clock>
            <p className="text-sm text-white">
              Mon–Thu & Sun: 6AM–9PM | Fri: 6AM–5PM
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-0 z-20 flex h-full w-auto items-end">
        <Image
          src={
            "https://res.cloudinary.com/dqgkvrmve/image/upload/v1775047852/footer_xowqpw.png"
          }
          alt=""
          width={400}
          height={400}
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, transparent, black 20%, black 20%, transparent)",
            maskImage:
              "linear-gradient(to top, transparent, black 20%, black 20%, transparent)",
          }}
          className="h-[90%] w-110 object-cover object-top opacity-60"
        ></Image>
      </div>
    </div>
  )
}
