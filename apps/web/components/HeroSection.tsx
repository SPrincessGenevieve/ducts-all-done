"use client"

import React from "react"
import { Compare } from "./ui/compare"
import Image from "next/image"
import { Button } from "@workspace/ui/components/button"
import { Dot, Star, Wallet } from "lucide-react"
import { IconStar, IconStarFilled } from "@tabler/icons-react"
import Header from "./ui/header"

export default function HeroSection() {
  const handleBtn = () => {
    alert("Clicked")
  }
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Header></Header>
      <div className="flex h-full w-full justify-between">
        <div className="z-50 mt-20 flex flex-col gap-8 p-4 lg:pl-[100px]">
          <div className="flex">
            <div className="flex items-center justify-center gap-2 rounded-full border border-primary-orange px-2">
              <div className="h-2 w-2 rounded-full bg-primary-orange"></div>
              <p className="text-sm text-black">Tampa's Trusted Choice</p>
            </div>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary-orange">
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
              <div className="flex h-full w-auto items-center justify-center bg-background">
                <div className="absolute h-150 w-auto">
                  <Image
                    src="https://res.cloudinary.com/dqgkvrmve/image/upload/v1773992358/clean-vent_lqpfvr.png"
                    alt=""
                    width={400}
                    height={400}
                    className="h-full w-auto object-cover"
                  />
                </div>
              </div>
            }
            secondChild={
              <div className="flex h-full w-auto items-center justify-center bg-background">
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
