import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react"

export default function WallSection() {
  const posts = [
    {
      id: 1,
      author: "Jaider Manrique",
      time: "2 horas",
      content: "¡Qué hermoso día para programar! Trabajando en mi nuevo proyecto de React.",
      likes: 15,
      comments: 3,
    },
    {
      id: 2,
      author: "Jaider Manrique",
      time: "3 horas",
      content: "Disfrutando de un hermoso día en el parque. ¡La naturaleza siempre me inspira!",
      image: "/images/landscape-post.jpeg",
      likes: 24,
      comments: 8,
    },
    {
      id: 3,
      author: "María García",
      time: "5 horas",
      content: "Compartiendo algunas fotos de mi viaje a la montaña. ¡La naturaleza es increíble!",
      likes: 28,
      comments: 7,
    },
    {
      id: 4,
      author: "Carlos López",
      time: "1 día",
      content: "Terminé mi curso de desarrollo web. ¡Muy emocionado por aplicar todo lo aprendido!",
      likes: 42,
      comments: 12,
    },
  ]

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Create Post */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/images/profile-dog.jpeg" />
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
            <div className="flex-1 bg-muted rounded-full px-4 py-2 cursor-pointer">
              <span className="text-muted-foreground">¿Qué estás pensando?</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts */}
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage
                    src={
                      post.author === "Jaider Manrique"
                        ? "/images/profile-dog.jpeg"
                        : `/abstract-geometric-shapes.png?height=40&width=40&query=${post.author} avatar`
                    }
                  />
                  <AvatarFallback>
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-sm">{post.author}</h3>
                  <p className="text-xs text-muted-foreground">{post.time}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm mb-4">{post.content}</p>
            {post.image && (
              <div className="mb-4">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Post image"
                  className="w-full rounded-lg object-cover max-h-96"
                />
              </div>
            )}
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span className="text-xs">{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-xs">{post.comments}</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
