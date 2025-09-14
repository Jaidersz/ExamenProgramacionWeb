import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Music, Book, Camera, Code, Gamepad2 } from "lucide-react"

export default function BoxesSection() {
  const boxes = [
    {
      id: 1,
      title: "Favoritos",
      icon: Star,
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 2,
      title: "Música",
      icon: Music,
      items: ["Rock Alternativo", "Jazz", "Electrónica", "Indie Pop"],
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: 3,
      title: "Libros",
      icon: Book,
      items: ["Clean Code", "The Pragmatic Programmer", "1984", "Sapiens"],
      color: "bg-green-100 text-green-800",
    },
    {
      id: 4,
      title: "Fotografía",
      icon: Camera,
      items: ["Paisajes", "Retratos", "Arquitectura", "Naturaleza"],
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 5,
      title: "Tecnologías",
      icon: Code,
      items: ["JavaScript", "Python", "Node.js", "MongoDB"],
      color: "bg-red-100 text-red-800",
    },
    {
      id: 6,
      title: "Juegos",
      icon: Gamepad2,
      items: ["The Witcher 3", "Cyberpunk 2077", "Minecraft", "Among Us"],
      color: "bg-indigo-100 text-indigo-800",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxes.map((box) => {
          const IconComponent = box.icon
          return (
            <Card key={box.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg ${box.color}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span>{box.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {box.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
