import { IconStarFilled } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { Award, Dot, MessageCircleIcon, Phone, Pin, Wallet } from "lucide-react"
import Image from "next/image"
import React from "react"

// https://res.cloudinary.com/dqgkvrmve/image/upload/v1774673176/duct-icon_bnsb3s.png

export default function Header() {
  return (
    <div className="z-100 w-full">
      <div className="z-100 flex w-full items-center justify-between gap-4 bg-transparent px-2 max-[780px]:flex-col">
        <div className="z-100 flex w-auto items-center justify-center p-4 max-[780px]:hidden">
          <Image
            src={
              "https://res.cloudinary.com/dqgkvrmve/image/upload/v1774001571/logo_oxklht.webp"
            }
            alt=""
            width={400}
            height={400}
            className="h-full max-h-20 w-auto"
          ></Image>
        </div>
        <div className="z-100 flex items-center justify-between gap-2 max-[780px]:w-full max-[780px]:py-4">
          <Image
            src={
              "https://res.cloudinary.com/dqgkvrmve/image/upload/v1774673176/duct-icon_bnsb3s.png"
            }
            alt=""
            width={400}
            height={400}
            className="hidden h-full max-h-14 w-auto max-[780px]:flex"
          ></Image>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-4">
              <div className="flex w-full items-center overflow-hidden rounded-sm border border-primary-blue-200 max-[780px]:w-full">
                <input
                  placeholder="Your phone number -- get a gree quote"
                  className="h-10 w-full rounded-sm rounded-r-none px-4 text-black placeholder:text-[12px] placeholder:text-primary-blue-200/70"
                ></input>
                <Button className="rounded-none border border-primary-blue-100 font-semibold">
                  Get Free Quote
                </Button>
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="max-[780px]:w-full">
                <Phone></Phone>
                <p className="max-[540px]:hidden">813-923-2906</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
