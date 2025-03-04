import { db } from "@/lib/db"
import { getTranslations, t } from "@/lib/translations"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export async function generateMetadata() {
  const translations = await getTranslations("fr")

  return {
    title: t(translations, "programs.title", "Programmes") + " | " + t(translations, "site.name", "Fondation As-Salam"),
    description: t(translations, "programs.description", "Découvrez les programmes de la Fondation As-Salam"),
  }
}

export default async function ProgramsPage() {
  const translations = await getTranslations("fr")

  // Fetch published programs from the database
  const programs = await db.program.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      order: "asc",
    },
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt={t(translations, "programs.title", "Programmes")}
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">{t(translations, "programs.title", "Programmes")}</h1>
            <p className="text-lg mb-6">
              {t(translations, "programs.subtitle", "Découvrez les différents programmes de la Fondation As-Salam")}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Transformer des Vies, Construire des Avenirs</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Chez la Fondation As-Salam pour le Développement Social Casablanca Anfa, nous croyons en un monde où
              chaque individu, peu importe où il vit, a accès aux ressources essentielles pour s'épanouir. Nos projets,
              ancrés dans les zones rurales les plus reculées, visent à apporter des solutions durables et à créer un
              impact tangible sur les communautés les plus vulnérables.
            </p>
            <p className="text-lg text-muted-foreground">
              Découvrez comment nous œuvrons chaque jour pour construire des avenirs meilleurs à travers nos différents
              programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Development Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Des Projets de Développement qui Changent la Donne</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-sm overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Forage de Puits"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Forage de Puits : L'Eau, Source de Vie</h3>
                <p className="text-muted-foreground mb-4">
                  Notre objectif est de briser la barrière de l'inaccessibilité à l'eau potable dans les zones rurales
                  isolées, réduisant drastiquement les maladies hydriques et améliorant la santé et les conditions de
                  vie des populations.
                </p>
                <h4 className="font-medium mb-2">Notre Approche :</h4>
                <ul className="list-disc pl-5 text-muted-foreground mb-4">
                  <li>Études géologiques approfondies pour localiser les nappes phréatiques</li>
                  <li>Construction de puits équipés de systèmes de pompage modernes</li>
                  <li>Formation des habitants pour assurer l'entretien et la pérennité des installations</li>
                </ul>
                <Link href="/programme/forage-puits">
                  <Button variant="link" className="p-0 h-auto font-medium flex items-center">
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Construction d'Écoles"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Construction d'Écoles : L'Éducation, un Droit pour Tous</h3>
                <p className="text-muted-foreground mb-4">
                  Notre objectif est d'offrir aux enfants des zones rurales un accès à une éducation de qualité,
                  augmentant significativement le taux de scolarisation et réduisant le décrochage scolaire.
                </p>
                <h4 className="font-medium mb-2">Notre Engagement :</h4>
                <ul className="list-disc pl-5 text-muted-foreground mb-4">
                  <li>Écoles primaires modernes, équipées en matériel pédagogique adapté</li>
                  <li>Programmes de sensibilisation pour encourager la scolarisation, en particulier des filles</li>
                </ul>
                <Link href="/programme/construction-ecoles">
                  <Button variant="link" className="p-0 h-auto font-medium flex items-center">
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm overflow-hidden" data-aos="fade-up" data-aos-delay="300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Construction de Mosquées"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Construction de Mosquées : Un Lieu de Culte et de Cohésion
                </h3>
                <p className="text-muted-foreground mb-4">
                  Notre objectif est de créer des espaces de rassemblement communautaire et spirituel, renforçant le
                  tissu social des communautés rurales.
                </p>
                <h4 className="font-medium mb-2">Notre Vision :</h4>
                <ul className="list-disc pl-5 text-muted-foreground mb-4">
                  <li>Mosquées construites avec des matériaux durables, adaptées aux conditions climatiques locales</li>
                  <li>Intégration d'espaces éducatifs pour enseigner des valeurs sociales et religieuses</li>
                </ul>
                <Link href="/programme/construction-mosquees">
                  <Button variant="link" className="p-0 h-auto font-medium flex items-center">
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Village Orange Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Village Orange" fill className="object-cover" />
              </div>
            </div>

            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">Projet Pilote : Le Premier Village Orange au Maroc</h2>
              <p className="text-muted-foreground mb-4">
                Un modèle innovant de village communautaire autosuffisant, conçu pour répondre aux besoins des zones
                rurales les plus défavorisées, notamment dans l'Atlas et le sud du Maroc.
              </p>
              <h3 className="text-xl font-semibold mb-3">Infrastructures Clés :</h3>
              <ul className="list-disc pl-5 text-muted-foreground mb-6">
                <li>Infrastructures essentielles : réseau d'assainissement et voirie</li>
                <li>Centres éducatifs et de formation professionnelle pour autonomiser les habitants</li>
                <li>Fermes communautaires pour garantir la sécurité alimentaire</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Ce projet est réalisé en collaboration avec des entreprises nationales et internationales engagées dans
                la Responsabilité Sociale des Entreprises (RSE).
              </p>
              <Link href="/programme/village-orange">
                <Button className="rounded-full">
                  Découvrir le Village Orange
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Caravans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Nos Caravanes : Une Aide Directe aux Populations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-sm overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Caravanes Humanitaires"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Caravanes Humanitaires : Une Aide Urgente et Concrète</h3>
                <p className="text-muted-foreground mb-4">
                  Notre objectif est d'apporter un soutien immédiat aux populations en situation de précarité,
                  particulièrement lors des périodes critiques comme l'hiver ou le Ramadan.
                </p>
                <h4 className="font-medium mb-2">Nos Actions :</h4>
                <ul className="list-disc pl-5 text-muted-foreground mb-4">
                  <li>Distribution de vêtements, vivres et couvertures pour affronter les périodes difficiles</li>
                  <li>Activités éducatives et récréatives pour les enfants des zones isolées</li>
                </ul>
                <Link href="/programme/caravanes-humanitaires">
                  <Button variant="link" className="p-0 h-auto font-medium flex items-center">
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Caravanes Médicales"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Caravanes Médicales : La Santé, un Droit Universel</h3>
                <p className="text-muted-foreground mb-4">
                  Notre objectif est d'offrir un accès aux soins médicaux dans les zones où les infrastructures
                  sanitaires sont quasi inexistantes, réduisant ainsi les inégalités en matière de santé.
                </p>
                <h4 className="font-medium mb-2">Nos Services :</h4>
                <ul className="list-disc pl-5 text-muted-foreground mb-4">
                  <li>Consultations médicales généralistes et spécialisées</li>
                  <li>Distribution gratuite de médicaments essentiels</li>
                  <li>Campagnes de sensibilisation sur la santé et l'hygiène</li>
                </ul>
                <Link href="/programme/caravanes-medicales">
                  <Button variant="link" className="p-0 h-auto font-medium flex items-center">
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Résultats Clés : Un Impact Qui Parle de Lui-Même</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center p-6 bg-primary/5 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <h3 className="text-xl font-semibold mb-2">Familles Soutenues</h3>
              <p className="text-muted-foreground">
                Des milliers de familles ont vu leurs conditions de vie s'améliorer grâce à nos actions.
              </p>
            </div>

            <div className="text-center p-6 bg-primary/5 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <h3 className="text-xl font-semibold mb-2">Projets Réalisés</h3>
              <p className="text-muted-foreground">
                Plus de cinquante projets de développement menés à bien dans les zones rurales prioritaires.
              </p>
            </div>

            <div className="text-center p-6 bg-primary/5 rounded-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <h3 className="text-xl font-semibold mb-2">Partenaires</h3>
              <p className="text-muted-foreground">
                Collaboration étroite avec des acteurs publics, privés et des organisations internationales.
              </p>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Nos zones d'intervention prioritaires incluent les régions rurales de l'Atlas et du sud du Maroc, où les
              besoins sont les plus pressants et où notre impact peut être le plus significatif.
            </p>
            <Link href="/contact">
              <Button className="rounded-full">
                Rejoignez-nous dans cette aventure humanitaire
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs List Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Nos Programmes en Détail</h2>

          {programs.length > 0 ? (
            <div className="space-y-12">
              {programs.map((program, index) => (
                <Card key={program.id} className="overflow-hidden border-none shadow-sm">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      <Image
                        src={program.imageUrl || "/placeholder.svg?height=300&width=400"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 md:p-8 md:w-2/3">
                      <h2 className="text-2xl font-semibold mb-3">{program.title}</h2>
                      <p className="text-muted-foreground mb-6">{program.summary}</p>
                      <Link href={`/programme/${program.slug}`}>
                        <Button className="rounded-full">
                          En savoir plus
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">Aucun programme disponible pour le moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

