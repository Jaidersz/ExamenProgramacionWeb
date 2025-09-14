import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PhotosSection() {
  const photos = [
    { id: 1, src: "/vast-mountain-valley.png", alt: "Paisaje montañoso" },
    { id: 2, src: "/city-photo.jpg", alt: "Ciudad nocturna" },
    { id: 3, src: "/sunny-beach-day.png", alt: "Playa tropical" },
    { id: 4, src: "/forest-photo.jpg", alt: "Bosque verde" },
    { id: 5, src: "/sunset-photo.jpg", alt: "Atardecer" },
    { id: 6, src: "/modern-glass-facade.png", alt: "Arquitectura moderna" },
    { id: 7, src: "/delicious-meal.png", alt: "Comida deliciosa" },
    { id: 8, src: "/vibrant-street-market.png", alt: "Viaje aventura" },
    { id: 9, src: "/serene-forest-path.png", alt: "Naturaleza salvaje" },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Fotos ({photos.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img src={photo.src || "/placeholder.svg"} alt={photo.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
