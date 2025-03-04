import { db } from "@/lib/db"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { PlusCircle, Edit, ExternalLink } from "lucide-react"
import Image from "next/image"

export default async function NewsAdmin() {
  const news = await db.news.findMany({
    orderBy: {
      publishDate: "desc",
    },
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold" data-aos="fade-right">
          Gestion des actualités
        </h1>
        <Link href="/admin/news/new">
          <Button className="flex items-center gap-2" data-aos="fade-left">
            <PlusCircle className="h-4 w-4" />
            Ajouter une actualité
          </Button>
        </Link>
      </div>

      <div className="rounded-md border bg-white overflow-hidden" data-aos="fade-up">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Titre</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Date de publication</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {news.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="relative h-12 w-12 rounded overflow-hidden">
                    <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>
                  {item.isPublished ? (
                    <Badge variant="success">Publié</Badge>
                  ) : (
                    <Badge variant="secondary">Brouillon</Badge>
                  )}
                </TableCell>
                <TableCell>{format(new Date(item.publishDate), "dd/MM/yyyy")}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/news/${item.id}`}>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Edit className="h-3.5 w-3.5" />
                        Modifier
                      </Button>
                    </Link>
                    <Link href={`/actualites/${item.slug}`} target="_blank">
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Voir
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {news.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                  Aucune actualité trouvée. Ajoutez votre première actualité !
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

