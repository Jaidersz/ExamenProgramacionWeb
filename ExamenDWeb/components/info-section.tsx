import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Briefcase, GraduationCap, Heart, Calendar } from "lucide-react"

export default function InfoSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Información Personal */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Información Personal</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Briefcase className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Desarrollador Full Stack</p>
                <p className="text-sm text-muted-foreground">en Tech Company</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Ingeniería de Sistemas</p>
                <p className="text-sm text-muted-foreground">Unicatolica</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Cali, Colombia</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">En una relación</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Se unió en enero de 2020</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contacto */}
        <Card>
          <CardHeader>
            <CardTitle>Información de Contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">jose.manrique01@unicatolica.edu.co</p>
            </div>
            <div>
              <p className="font-medium">Teléfono</p>
              <p className="text-sm text-muted-foreground">+57 300 123 4567</p>
            </div>
            <div>
              <p className="font-medium">Sitio Web</p>
              <p className="text-sm text-muted-foreground">www.jaider-manrique.dev</p>
            </div>
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-muted-foreground">linkedin.com/in/jaider-manrique</p>
            </div>
          </CardContent>
        </Card>

        {/* Intereses */}
        <Card>
          <CardHeader>
            <CardTitle>Intereses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["Programación", "Tecnología", "Viajes", "Fotografía", "Música", "Deportes"].map((interest) => (
                <span key={interest} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Biografía */}
        <Card>
          <CardHeader>
            <CardTitle>Acerca de</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desarrollador apasionado por crear soluciones innovadoras. Me encanta aprender nuevas tecnologías y
              compartir conocimiento con la comunidad. En mi tiempo libre disfruto de la fotografía y los viajes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
