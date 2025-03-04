import { db } from "@/lib/db"
import { getTranslations, t } from "@/lib/translations"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

export async function generateMetadata() {
  const translations = await getTranslations("fr")

  return {
    title: t(translations, "news.title", "Actualités") + " | " + t(translations, "site.name", "Fondation As-Salam"),
    description: t(translations, "news.description", "Découvrez les dernières actualités de la Fondation As-Salam"),
  }
}

export default async function NewsPage() {
  const translations = await getTranslations("fr")

  // Fetch published news from the database
  const news = await db.news.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      publishDate: "desc",
    },
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt={t(translations, "news.title", "Actualités")}
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">{t(translations, "news.title", "Actualités")}</h1>
            <p className="text-lg mb-6">
              {t(translations, "news.subtitle", "Restez informé des dernières nouvelles et événements de la fondation")}
            </p>
          </div>
        </div>
      </section>

      {/* News List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={item.imageUrl || "/placeholder.svg?height=200&width=400"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {format(new Date(item.publishDate), "d MMMM yyyy", { locale: fr })}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{item.summary}</p>
                    <Link href={`/actualites/${item.slug}`}>
                      <Button variant="link" className="p-0 h-auto font-medium flex items-center">
                        {t(translations, "news.read_more", "Lire la suite")}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">
                {t(translations, "news.no_news", "Aucune actualité disponible pour le moment.")}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

