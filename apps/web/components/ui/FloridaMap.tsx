"use client"

import React, { useEffect, useRef, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"

// Florida locations
const locations = [
  { name: "Tampa", lat: 27.9506, lng: -82.4572 },
  { name: "Brandon", lat: 27.9378, lng: -82.2859 },
  { name: "Riverview", lat: 27.8826, lng: -82.2954 },
  { name: "Lutz", lat: 28.1412, lng: -82.4215 },
  { name: "Plant City", lat: 28.0146, lng: -82.1289 },
  { name: "Apollo Beach", lat: 27.831, lng: -82.296 },
  { name: "Sun City Center", lat: 27.6936, lng: -82.3951 },
  { name: "Wesley Chapel", lat: 28.2316, lng: -82.3526 },
  { name: "Land O' Lakes", lat: 28.2473, lng: -82.4066 },
  { name: "New Port Richey", lat: 28.2434, lng: -82.7184 },
  { name: "Zephyrhills", lat: 28.2339, lng: -82.187 },
  { name: "Odessa", lat: 28.1446, lng: -82.551 },
  { name: "Trinity", lat: 28.1919, lng: -82.7187 },
  { name: "Hudson", lat: 28.4799, lng: -82.7039 },
  { name: "Clearwater", lat: 27.9659, lng: -82.8001 },
  { name: "Largo", lat: 27.9095, lng: -82.7873 },
  { name: "Dunedin", lat: 28.0198, lng: -82.7875 },
  { name: "Tarpon Springs", lat: 28.1461, lng: -82.756 },
  { name: "Safety Harbor", lat: 27.9996, lng: -82.687 },
  { name: "Seminole", lat: 27.8382, lng: -82.7887 },
  { name: "St. Pete Beach", lat: 27.7403, lng: -82.7415 },
  { name: "Bradenton", lat: 27.4989, lng: -82.5748 },
  { name: "Palmetto", lat: 27.5211, lng: -82.5666 },
  { name: "Ellenton", lat: 27.5223, lng: -82.5604 },
  { name: "Anna Maria", lat: 27.5385, lng: -82.7267 },
  { name: "Cortez", lat: 27.4808, lng: -82.662 },
  { name: "Bradenton Beach", lat: 27.5042, lng: -82.7399 },
]

function FitBounds({ markers }: { markers: typeof locations }) {
  const map = useMap()

  useEffect(() => {
    import("leaflet").then((L) => {
      const bounds = L.latLngBounds(markers.map((m) => [m.lat, m.lng]))
      map.fitBounds(bounds, { padding: [50, 50] })
    })
  }, [map, markers])

  return null
}

export default function FloridaMap() {
  const [leafletLoaded, setLeafletLoaded] = useState(false)

  useEffect(() => {
    import("leaflet").then((L) => {
      // Fix default icon paths
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      })
      setLeafletLoaded(true)
    })
  }, [])

  if (!leafletLoaded) return <div>Loading map...</div>

  return (
    <MapContainer
      //@ts-ignore
      zoomControl={false}
      center={[27.9944, -81.7603]} // fallback center
      zoom={7} // fallback zoom
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //@ts-ignore
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {locations.map((loc, idx) => (
        <Marker key={idx} position={[loc.lat, loc.lng]}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}

      <FitBounds markers={locations} />
    </MapContainer>
  )
}
