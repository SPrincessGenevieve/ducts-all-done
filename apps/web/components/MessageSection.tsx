"use client"

import React, { useState } from "react"
import AbstractSpot from "./ui/AbstractSpot"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Button } from "@workspace/ui/components/button"
import { ArrowRight } from "lucide-react"
import SectionTitle from "./ui/SectionTitle"

const fields = [
  {
    field: "First Name",
    placeholder: "John",
    value: "",
  },
  {
    field: "Last Name",
    placeholder: "Smith",
    value: "",
  },
  {
    field: "Email Address",
    placeholder: "john@gmail.com",
    value: "",
  },
  {
    field: "Phone Number",
    placeholder: "(813)-555-0000",
    value: "",
  },
]

const selection = [
  "Air Duct Cleaning",
  "Dryer Vent Cleaning",
  "Chimney Sweep",
  "Attic Insulation",
  "Duct Sanitizing",
  "UV Light Installation",
  "Other / Not Sure",
]

export default function MessageSection() {
  const [service, setService] = useState("")
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden overflow-x-hidden max-[932px]:py-[30%]">
      <div className="absolute top-0 right-0 max-[667px]:scale-50">
        <AbstractSpot></AbstractSpot>
      </div>
      <div className="absolute bottom-0 left-0 rotate-180 max-[667px]:scale-50">
        <AbstractSpot></AbstractSpot>
      </div>

      <div
        style={{
          borderRadius: 300,
          WebkitMaskImage:
            "linear-gradient(to top, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to top, transparent, black 10%, black 90%, transparent)",
        }}
        className="z-50 flex w-full max-w-200 flex-col items-center justify-center gap-8 bg-linear-0 from-white/70 from-20% to-transparent px-8 py-14 pb-40 backdrop-blur-[2px]"
      >
        <SectionTitle
          title={"Get Your Free Estimate"}
          desc={
            " Fill out the form and we'll get back to you within a few hours. Same-day service often available."
          }
          label=""
        ></SectionTitle>

        <div className="flex w-full flex-col gap-4">
          <div className="grid w-full grid-cols-2 gap-4">
            {fields.map((item, i) => (
              <div key={i} className="flex w-full flex-col">
                <p className="text-primary-blue-200">{item.field}</p>
                <input
                  className="h-10 rounded-sm border border-primary-blue-200/50 p-2 text-primary-blue-100 transition duration-200 ease-in-out outline-none placeholder:text-primary-blue-200/50 focus:border-primary-blue-200"
                  placeholder={item.placeholder}
                ></input>
              </div>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-full">
              <div>
                <p className="text-primary-blue-200">Service Needed</p>
                <div
                  className={`flex h-10 w-full items-center rounded-sm border border-primary-blue-200/30 p-2 ${service !== "" ? "text-primary-blue-100" : "text-primary-blue-200/50"}`}
                >
                  <p>{service !== "" ? service : "Select service..."}</p>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              {selection.map((item, i) => (
                <DropdownMenuItem
                  key={i}
                  onClick={() => setService(item)}
                  className="text-black hover:bg-gray-50"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex w-full flex-col">
            <p className="text-primary-blue-200">Message (optional)</p>
            <textarea
              placeholder="Tell us about your home, any concerns, or when you'd like service..."
              className="rounded-sm border border-primary-blue-200/50 p-2 text-primary-blue-100 transition duration-200 ease-in-out outline-none placeholder:text-primary-blue-200/50 focus:border-primary-blue-200"
            ></textarea>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <Button className="w-full">
            Send My Free Estimate Request <ArrowRight></ArrowRight>
          </Button>
          <p className="text-center text-[14px] text-primary-blue-200">
            No spam. We'll only contact you about your request.
          </p>
        </div>
      </div>
    </div>
  )
}
