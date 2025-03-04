import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { FileText, Newspaper, BookOpen, Globe } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6" data-aos="fade-right">
        Tableau de bord
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
        <Link href="/admin/pages">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Pages</CardTitle>
              <FileText className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription>Gérer les pages statiques du site</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/news">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Actualités</CardTitle>
              <Newspaper className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription>Gérer les actualités et événements</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/programs">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Programmes</CardTitle>
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription>Gérer les programmes de la fondation</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/translations">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Traductions</CardTitle>
              <Globe className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription>Gérer les traductions du site</CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Actions rapides</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/admin/pages/new">
            <Button>Créer une page</Button>
          </Link>
          <Link href="/admin/news/new">
            <Button>Ajouter une actualité</Button>
          </Link>
          <Link href="/admin/programs/new">
            <Button>Ajouter un programme</Button>
          </Link>
          <Link href="/" target="_blank">
            <Button variant="outline">Voir le site</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

