import { db } from "@/lib/db"
import { getTranslations, t } from "@/lib/translations"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export async function generateMetadata() {
  const translations = await getTranslations("fr")

  return {
    title: t(translations, "about.title", "À propos") + " | " + t(translations, "site.name", "Fondation As-Salam"),
    description: t(
      translations,
      "about.description",
      "En savoir plus sur la Fondation As-Salam pour le Développement Social",
    ),
  }
}

export default async function AboutPage() {
  const translations = await getTranslations("fr")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/placeholder.svg?height=300&width=1200"}
            alt={t(translations, "about.title", "À propos")}
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">{t(translations, "about.title", "À propos")}</h1>
            <p className="text-lg mb-6">
              {t(translations, "about.subtitle", "Découvrez la Fondation As-Salam pour le Développement Social")}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-none bg-white overflow-hidden mb-12">
            <CardContent className="p-8">
            </CardContent>
          </Card>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-sm overflow-hidden" data-aos="fade-right">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Notre Mission</h2>
                <p className="text-muted-foreground mb-4">
                  Chez la Fondation As-Salam pour le Développement Social Casablanca Anfa, nous croyons en un monde où
                  chaque individu, peu importe où il vit, a accès aux ressources essentielles pour s'épanouir. Nos
                  projets, ancrés dans les zones rurales les plus reculées, visent à apporter des solutions durables et
                  à créer un impact tangible sur les communautés les plus vulnérables.
                </p>
                <p className="text-muted-foreground">
                  Notre mission est de transformer des vies et construire des avenirs meilleurs à travers des projets de
                  développement durable, d'aide humanitaire et de soutien aux communautés les plus défavorisées.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm overflow-hidden" data-aos="fade-left">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Notre Vision</h2>
                <p className="text-muted-foreground mb-4">
                  Nous aspirons à un Maroc où chaque communauté, même la plus isolée, dispose des infrastructures
                  essentielles pour se développer et s'épanouir. Un pays où l'accès à l'eau potable, à l'éducation et
                  aux soins de santé n'est pas un privilège mais un droit pour tous.
                </p>
                <p className="text-muted-foreground">
                  Notre vision est de créer un modèle de développement social inclusif et durable, qui puisse être
                  reproduit dans différentes régions et qui permette aux communautés de devenir autonomes et résilientes
                  face aux défis du futur.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <Card className="border-none shadow-sm overflow-hidden mb-16" data-aos="fade-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Nos Valeurs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Solidarité</h3>
                  <p className="text-muted-foreground">
                    Nous croyons en la force de l'entraide et de la solidarité pour surmonter les défis et construire un
                    avenir meilleur pour tous.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Intégrité</h3>
                  <p className="text-muted-foreground">
                    Nous agissons avec transparence, honnêteté et respect dans toutes nos actions et relations avec nos
                    bénéficiaires et partenaires.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Nous recherchons constamment des solutions innovantes et durables pour répondre aux défis complexes
                    du développement social.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* History Section */}
          <Card className="border-none shadow-sm overflow-hidden mb-16" data-aos="fade-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Notre Histoire</h2>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 relative h-60 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Fondation As-Salam - Débuts"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-2">1992 - Les débuts</h3>
                    <p className="text-muted-foreground">
                      Fondée en 1992, la Fondation As-Salam pour le Développement Social est née de la volonté d'un
                      groupe de bénévoles déterminés à améliorer les conditions de vie des populations les plus
                      vulnérables au Maroc. Commençant par des actions modestes mais significatives, la fondation s'est
                      rapidement développée pour répondre aux besoins croissants des communautés défavorisées.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-2">2000-2010 - Expansion et structuration</h3>
                    <p className="text-muted-foreground">
                      Durant cette décennie, la fondation a connu une expansion significative, établissant des sections
                      dans plusieurs villes du Royaume. Cette période a été marquée par la structuration de nos
                      programmes et le développement de partenariats stratégiques avec des acteurs nationaux et
                      internationaux, permettant d'amplifier notre impact sur le terrain.
                    </p>
                  </div>
                  <div className="md:w-1/3 relative h-60 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Fondation As-Salam - Expansion"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 relative h-60 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Fondation As-Salam - Aujourd'hui"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-2">Aujourd'hui - Une fondation nationale reconnue</h3>
                    <p className="text-muted-foreground">
                      Aujourd'hui, la Fondation As-Salam est une organisation nationale reconnue, comptant 36 sections
                      réparties dans plusieurs villes du Royaume. Notre approche bienveillante envers les femmes et les
                      enfants en situation difficile, ainsi que nos projets de développement dans les zones rurales, ont
                      fait de nous un acteur incontournable du développement social au Maroc.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Section */}
          <Card className="border-none shadow-sm overflow-hidden" data-aos="fade-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Notre Équipe</h2>
              <p className="text-center text-muted-foreground mb-8">
                La Fondation As-Salam s'appuie sur une équipe dévouée de professionnels et de bénévoles passionnés, unis
                par la même vision d'un Maroc plus équitable et solidaire.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="relative h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                    <Image src="/placeholder.svg?height=160&width=160" alt="Président" fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold">Mohammed Alami</h3>
                  <p className="text-primary">Président</p>
                </div>

                <div className="text-center">
                  <div className="relative h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Directrice Exécutive"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Fatima Zahra Bennis</h3>
                  <p className="text-primary">Directrice Exécutive</p>
                </div>

                <div className="text-center">
                  <div className="relative h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Responsable des Programmes"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Karim Tazi</h3>
                  <p className="text-primary">Responsable des Programmes</p>
                </div>

                <div className="text-center">
                  <div className="relative h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Responsable Communication"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Nadia El Fassi</h3>
                  <p className="text-primary">Responsable Communication</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

