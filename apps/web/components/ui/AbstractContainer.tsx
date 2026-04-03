"use client"

import React from "react"
import "leaflet/dist/leaflet.css"
import dynamic from "next/dynamic"

const FloridaMap = dynamic(() => import("@/components/ui/FloridaMap"), {
  ssr: false,
  loading: () => <div style={{ height: "400px" }}>Loading Map...</div>,
})

export default function AbstractMap() {
  return (
    <div className="relative flex h-115 w-70 items-center justify-center">
      <div
        className="absolute right-3 bottom-2 z-5 h-full w-full bg-primary-blue-100/30"
        style={{
          clipPath: `path('M35.0308 212.898C22.2308 200.498 8.19743 183.065 4.53076 173.898C-16.1624 137.898 50.5308 112.398 31.0308 62.8981C11.5309 13.398 101.531 -34.6019 204.531 36.3981C307.531 107.398 276.031 250.898 264.531 314.398C255.331 365.198 209.197 418.565 189.531 431.398C169.864 444.232 140.472 451.344 114.531 431.398C79.3962 404.384 94.5486 338.926 95.0307 319.398C96.0307 278.898 51.0308 228.398 35.0308 212.898Z')`,
        }}
      ></div>
      <div
        className="absolute top-0 left-0 z-5 h-full w-full"
        style={{
          clipPath: `path('M35.0308 212.898C22.2308 200.498 8.19743 183.065 4.53076 173.898C-16.1624 137.898 50.5308 112.398 31.0308 62.8981C11.5309 13.398 101.531 -34.6019 204.531 36.3981C307.531 107.398 276.031 250.898 264.531 314.398C255.331 365.198 209.197 418.565 189.531 431.398C169.864 444.232 140.472 451.344 114.531 431.398C79.3962 404.384 94.5486 338.926 95.0307 319.398C96.0307 278.898 51.0308 228.398 35.0308 212.898Z')`,
        }}
      >
        <FloridaMap></FloridaMap>
      </div>
      <div
        style={{
          clipPath: `path('M257.566 333.138C195.066 424.638 116.066 349.525 107.066 307.138C91.5662 234.138 83.8661 180.338 45.0661 135.138C-3.43388 78.6379 -9.43384 37.6379 13.0661 16.1379C54.132 -23.1029 323.566 17.6379 352.566 70.6379C381.566 123.638 320.066 241.638 257.566 333.138Z')`,
        }}
        className="absolute top-20 right-8 h-full w-full bg-primary-blue-100/20 backdrop-blur-2xl"
      ></div>
    </div>
  )
}
