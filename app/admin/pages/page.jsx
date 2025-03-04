import { db } from "@/lib/db"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { PlusCircle, Edit, ExternalLink } from "lucide-react"

export default async function PagesAdmin() {
  const pages = await db.page.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold" data-aos="fade-right">
          Gestion des pages
        </h1>
        <Link href="/admin/pages/new">
          <Button className="flex items-center gap-2" data-aos="fade-left">
            <PlusCircle className="h-4 w-4" />
            Créer une page
          </Button>
        </Link>
      </div>

      <div className="rounded-md border bg-white overflow-hidden" data-aos="fade-up">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Titre</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Dernière modification</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page) => (
              <TableRow key={page.id}>
                <TableCell className="font-medium">{page.title}</TableCell>
                <TableCell>{page.slug}</TableCell>
                <TableCell>
                  {page.isPublished ? (
                    <Badge variant="success">Publié</Badge>
                  ) : (
                    <Badge variant="secondary">Brouillon</Badge>
                  )}
                </TableCell>
                <TableCell>{format(new Date(page.updatedAt), "dd/MM/yyyy HH:mm")}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/pages/${page.id}`}>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Edit className="h-3.5 w-3.5" />
                        Modifier
                      </Button>
                    </Link>
                    <Link href={`/${page.slug}`} target="_blank">
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Voir
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {pages.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                  Aucune page trouvée. Créez votre première page !
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

