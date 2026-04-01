import Link from "next/link"
import React from "react"

export default function FooterSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 bg-primary-blue-300 p-4">
      <p className="text-center text-[12px] text-white">
        <strong>Ducts All Done</strong>, LLC — Air Duct Cleaning Tampa FL
      </p>
      <div className="flex w-full items-center justify-center divide-x divide-white">
        <p className="px-2 text-center text-[12px] text-white">
          License #7196244
        </p>
        <p className="px-2 text-center text-[12px] text-white">
          {" "}
          EPA Cert #P5455385CC00BC501{" "}
        </p>
        <Link
          className="px-2 text-center text-[12px] text-primary-blue-100"
          href={"ductsalldone.com"}
          target="_blank"
        >
          ductsalldone.com
        </Link>
      </div>
      <p className="px-2 text-center text-[12px] text-white">
        © 2026 Ducts All Done. All rights reserved.
      </p>
    </div>
  )
}
