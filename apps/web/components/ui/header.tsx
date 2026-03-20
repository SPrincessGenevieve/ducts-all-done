import { IconStarFilled } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { Award, Dot, MessageCircleIcon, Phone, Pin, Wallet } from "lucide-react"
import Image from "next/image"
import React from "react"

export default function Header() {
  return (
    <div className="z-50 w-full">
      <div className="flex h-8 w-full items-center justify-center divide-x divide-amber-500/70 bg-black px-2">
        <div className="flex h-[50%] items-center gap-2 px-4">
          <div className="h-2 w-2 rounded-full bg-green-400"></div>
          <div className="flex items-center">
            <p className="text-[10px] font-bold">Open Now</p>
            <Dot></Dot>
            <p className="text-[10px]">Mon–Thu & Sun 6AM–9PM</p>
          </div>
        </div>
        <div className="flex h-[50%] items-center gap-2 px-4">
          <IconStarFilled
            className="text-yellow-400"
            size={12}
          ></IconStarFilled>
          <div className="flex items-center">
            <p className="text-[10px] font-bold">5.0</p>
            <Dot></Dot>
            <p className="text-[10px]">114 Google Reviews</p>
          </div>
        </div>

        <div className="flex h-[50%] items-center gap-2 px-4">
          <Pin size={12} className="text-red-500"></Pin>
          <p className="text-[10px]">Serving Tampa Bay & 4 Counties</p>
        </div>
        <div className="flex h-[50%] items-center gap-2 px-4">
          <Award size={12} className="text-yellow-400"></Award>
          <p className="text-[10px]">IICRC & EPA Certified</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-4 px-4">
        <Image
          src={
            "https://res.cloudinary.com/dqgkvrmve/image/upload/v1774001571/logo_oxklht.webp"
          }
          alt=""
          width={400}
          height={400}
          className="h-20 w-auto"
        ></Image>
        <div className="flex w-100 items-center overflow-hidden rounded-sm border border-black">
          <input
            placeholder="Your phone number -- get a gree quote"
            className="h-10 w-full rounded-sm rounded-r-none border-black px-4 text-black placeholder:text-[12px] placeholder:text-black/50"
          ></input>
          <Button className="rounded-none border border-primary-blue-100 font-semibold">
            Get Free Quote
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant={"outline"} className="text-black">
            <MessageCircleIcon></MessageCircleIcon>
            Text me back
          </Button>
          <Button>
            <Phone></Phone>
            813-923-2906
          </Button>
        </div>
      </div>
      <div className="z-50 flex w-full items-center justify-center divide-x divide-red-500 bg-black py-1">
        <div className="flex items-center gap-2 px-4">
          <div className="flex">
            <div className="rounded-[4px] bg-primary-blue-100 px-2">
              <p className="text-[12px]">Free</p>
            </div>
          </div>
          <p className="text-[12px] text-white">
            Inspection with every service
          </p>
        </div>
        <div className="flex items-center gap-2 px-4">
          <div className="flex">
            <div className="rounded-[4px] bg-green-500 px-2">
              <p className="text-[12px]">Same-Day</p>
            </div>
          </div>
          <p className="text-[12px] text-white">Appointments available</p>
        </div>
        <div className="flex items-center gap-2 px-4">
          <div className="flex">
            <div className="rounded-[4px] bg-blue-500 px-2">
              <p className="text-[12px]">100%</p>
            </div>
          </div>
          <p className="text-[12px] text-white">Satisfaction guaranteed</p>
        </div>

        <div className="flex items-center gap-2 px-4">
          <div className="flex">
            <div className="rounded-[4px] bg-purple-500 px-2 py-1">
              <p className="text-[12px]">
                <Wallet size={15}></Wallet>
              </p>
            </div>
          </div>
          <p className="text-[12px] text-white"> Financing available</p>
        </div>
      </div>
    </div>
  )
}
