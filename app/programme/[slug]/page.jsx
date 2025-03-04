import { db } from "@/lib/db"
import { getTranslations, t } from "@/lib/translations"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export async function generateMetadata({ params }) {
  const translations = await getTranslations("fr")

  const program = await db.program.findUnique({
    where: {
      slug: params.slug,
    },
  })

  if (!program) {
    return {
      title: "Programme non trouvé | " + t(translations, "site.name", "Fondation As-Salam"),
    }
  }

  return {
    title: program.title + " | " + t(translations, "site.name", "Fondation As-Salam"),
    description: program.summary,
  }
}

export default async function ProgramPage({ params }) {
  const translations = await getTranslations("fr")

  // Fetch the program from the database
  const program = await db.program.findUnique({
    where: {
      slug: params.slug,
    },
  })

  if (!program || !program.isPublished) {
    notFound()
  }

  // Fetch other programs
  const otherPrograms = await db.program.findMany({
    where: {
      isPublished: true,
      id: {
        not: program.id,
      },
    },
    orderBy: {
      order: "asc",
    },
    take: 3,
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={program.imageUrl || "/placeholder.svg?height=400&width=1200"}
            alt={program.title}
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
            <p className="text-lg mb-6">{program.summary}</p>
            <Link href="/programmes">
              <Button variant="outline" className="rounded-full bg-white/20 hover:bg-white/30 border-white text-white">
                <ChevronLeft className="mr-2 h-4 w-4" />
                {t(translations, "programs.back_to_list", "Retour aux programmes")}
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
                  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: program.content }} />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              {otherPrograms.length > 0 && (
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {t(translations, "programs.other_programs", "Autres programmes")}
                    </h3>
                    <div className="space-y-4">
                      {otherPrograms.map((item) => (
                        <Link key={item.id} href={`/programme/${item.slug}`} className="block group">
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
                              <p className="text-sm text-muted-foreground line-clamp-2">{item.summary}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="overflow-hidden border-none shadow-sm bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {t(translations, "programs.support_us", "Soutenez-nous")}
                  </h3>
                  <p className="mb-4">
                    {t(
                      translations,
                      "programs.support_text",
                      "Votre soutien est essentiel pour nous aider à poursuivre notre mission.",
                    )}
                  </p>
                  <Button variant="secondary" className="w-full">
                    {t(translations, "programs.donate", "Faire un don")}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

