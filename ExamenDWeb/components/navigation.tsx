"use client"

import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections = [
    { id: "wall", label: "Muro" },
    { id: "info", label: "Info" },
    { id: "photos", label: "Photos" },
    { id: "boxes", label: "Boxes" },
  ]

  return (
    <nav className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "ghost"}
              className={`px-6 py-3 rounded-none border-b-2 ${
                activeSection === section.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-transparent hover:bg-muted"
              }`}
              onClick={() => onSectionChange(section.id)}
            >
              {section.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
