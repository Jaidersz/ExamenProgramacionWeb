"use client"

import { useState } from "react"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import WallSection from "@/components/wall-section"
import InfoSection from "@/components/info-section"
import PhotosSection from "@/components/photos-section"
import BoxesSection from "@/components/boxes-section"

export default function FacebookProfile() {
  const [activeSection, setActiveSection] = useState("wall")

  const renderActiveSection = () => {
    switch (activeSection) {
      case "wall":
        return <WallSection />
      case "info":
        return <InfoSection />
      case "photos":
        return <PhotosSection />
      case "boxes":
        return <BoxesSection />
      default:
        return <WallSection />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="container mx-auto px-4 py-6">{renderActiveSection()}</main>
    </div>
  )
}
