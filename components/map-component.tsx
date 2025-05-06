"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { MapPin } from "lucide-react"

// Note: In a real implementation, you would use an environment variable for the token
// This is a temporary token for demonstration purposes
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGVtby1hY2NvdW50IiwiYSI6ImNrbmhueTJvbzBwNDcyb3Bld295Z2EyY2IifQ.s5Z5CLatjVFZSYxI6LqnBA"

interface MapComponentProps {
  address?: string
  latitude?: number
  longitude?: number
  zoom?: number
  className?: string
}

export function MapComponent({
  address = "123 Innovation Drive, Harare, Zimbabwe",
  // Default coordinates for Harare, Zimbabwe
  latitude = -17.824858,
  longitude = 31.053028,
  zoom = 15,
  className,
}: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const marker = useRef<mapboxgl.Marker | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Initialize map only once
    if (map.current) return

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [longitude, latitude],
        zoom: zoom,
        interactive: true,
      })

      // Add navigation controls (zoom in/out)
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

      // Add fullscreen control
      map.current.addControl(new mapboxgl.FullscreenControl(), "top-right")

      // Create a custom marker element
      const markerElement = document.createElement("div")
      markerElement.className = "custom-marker"
      markerElement.innerHTML = `
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-aiva-blue text-white shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-map-pin">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
      `

      // Add marker to map
      marker.current = new mapboxgl.Marker(markerElement)
        .setLngLat([longitude, latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="p-2">
              <h3 class="font-semibold">AIVA Solutions</h3>
              <p class="text-sm">${address}</p>
            </div>
          `),
        )
        .addTo(map.current)

      // Set map loaded state when map is loaded
      map.current.on("load", () => {
        setMapLoaded(true)
      })
    }

    // Cleanup function to remove map on unmount
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [latitude, longitude, zoom, address])

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="h-full w-full rounded-lg" />

      {/* Loading state */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-100">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-aiva-blue border-t-transparent"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}

      {/* Fallback for no JavaScript or errors */}
      <noscript>
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-100 p-8 text-center">
          <div>
            <MapPin className="mx-auto mb-4 h-12 w-12 text-aiva-blue" />
            <p className="text-lg font-medium text-gray-900">JavaScript is required to view the map</p>
            <p className="text-gray-600">{address}</p>
          </div>
        </div>
      </noscript>
    </div>
  )
}
