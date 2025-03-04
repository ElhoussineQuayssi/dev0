import { db } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { PlusCircle, Edit, Globe } from "lucide-react"
import { locales } from "@/lib/translations"

export default async function TranslationsAdmin() {
  // Get translations grouped by key
  const translations = await db.translation.findMany({
    orderBy: {
      key: "asc",
    },
  })

  // Group translations by key
  const translationsByKey = translations.reduce((acc, translation) => {
    if (!acc[translation.key]) {
      acc[translation.key] = {}
    }
    acc[translation.key][translation.locale] = translation.value
    acc[translation.key].id = translation.id
    return acc
  }, {})

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold" data-aos="fade-right">
          Gestion des traductions
        </h1>
        <Link href="/admin/translations/new">
          <Button className="flex items-center gap-2" data-aos="fade-left">
            <PlusCircle className="h-4 w-4" />
            Ajouter une traduction
          </Button>
        </Link>
      </div>

      <div className="rounded-md border bg-white overflow-hidden" data-aos="fade-up">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Clé</TableHead>
              {locales.map((locale) => (
                <TableHead key={locale}>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    {locale.toUpperCase()}
                  </div>
                </TableHead>
              ))}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(translationsByKey).map(([key, values]) => (
              <TableRow key={key}>
                <TableCell className="font-medium">{key}</TableCell>
                {locales.map((locale) => (
                  <TableCell key={locale}>{values[locale] || "-"}</TableCell>
                ))}
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/translations/${values.id}`}>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Edit className="h-3.5 w-3.5" />
                        Modifier
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {Object.keys(translationsByKey).length === 0 && (
              <TableRow>
                <TableCell colSpan={locales.length + 2} className="text-center py-4 text-muted-foreground">
                  Aucune traduction trouvée. Ajoutez votre première traduction !
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

