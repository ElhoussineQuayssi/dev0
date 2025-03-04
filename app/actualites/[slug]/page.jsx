import { db } from "@/lib/db"
import { getTranslations, t } from "@/lib/translations"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import Link from "next/link"

export async function generateMetadata({ params }) {
  const translations = await getTranslations("fr")

  const newsItem = await db.news.findUnique({
    where: {
      slug: params.slug,
    },
  })

  if (!newsItem) {
    return {
      title: "Article non trouvé | " + t(translations, "site.name", "Fondation As-Salam"),
    }
  }

  return {
    title: newsItem.title + " | " + t(translations, "site.name", "Fondation As-Salam"),
    description: newsItem.summary,
  }
}

export default async function NewsItemPage({ params }) {
  const translations = await getTranslations("fr")

  // Fetch the news item from the database
  const newsItem = await db.news.findUnique({
    where: {
      slug: params.slug,
    },
  })

  if (!newsItem || !newsItem.isPublished) {
    notFound()
  }

  // Fetch related news
  const relatedNews = await db.news.findMany({
    where: {
      isPublished: true,
      id: {
        not: newsItem.id,
      },
    },
    orderBy: {
      publishDate: "desc",
    },
    take: 3,
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={newsItem.imageUrl || "/placeholder.svg?height=400&width=1200"}
            alt={newsItem.title}
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <div className="mb-2 text-white/80">
              {format(new Date(newsItem.publishDate), "d MMMM yyyy", { locale: fr })}
            </div>
            <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
            <p className="text-lg mb-6">{newsItem.summary}</p>
            <Link href="/actualites">
              <Button variant="outline" className="rounded-full bg-white/20 hover:bg-white/30 border-white text-white">
                <ChevronLeft className="mr-2 h-4 w-4" />
                {t(translations, "news.back_to_list", "Retour aux actualités")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <Card className="border-none shadow-none bg-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content }} />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              {relatedNews.length > 0 && (
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {t(translations, "news.related_news", "Articles similaires")}
                    </h3>
                    <div className="space-y-4">
                      {relatedNews.map((item) => (
                        <Link key={item.id} href={`/actualites/${item.slug}`} className="block group">
                          <div className="flex gap-4">
                            <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden">
                              <Image
                                src={item.imageUrl || "/placeholder.svg?height=64&width=64"}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium group-hover:text-primary transition-colors">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {format(new Date(item.publishDate), "d MMMM yyyy", { locale: fr })}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

