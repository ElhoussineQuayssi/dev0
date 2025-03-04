import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function JardinEnfantsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Jardin d'Enfants Rihana As-Salam"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">Jardin d'Enfants Rihana As-Salam</h1>
            <p className="text-lg mb-6">
              Un environnement éducatif et pédagogique sûr et inspirant pour les enfants d'âge préscolaire
            </p>
            <Link href="/nos-programmes">
              <Button variant="outline" className="rounded-full bg-white/20 hover:bg-white/30 border-white text-white">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Retour aux programmes
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
                  <h2 className="text-2xl font-bold mb-6">Présentation</h2>
                  <p className="mb-4">
                    Le Jardin d'Enfants Rihana As-Salam, affilié à Fondation As-Salam pour le Développement Social,
                    section Casablanca-Anfa, a été inauguré en 2013 en partenariat avec la Direction Régionale d'Anfa à
                    l'école El Bachiri. Son objectif principal est de fournir un environnement éducatif et pédagogique
                    sûr et inspirant pour les enfants d'âge préscolaire, tout en mettant l'accent sur le développement
                    des compétences sociales, cognitives et émotionnelles à travers des activités dirigées et des jeux.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Objectifs</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      Développer les compétences des enfants dans les domaines du langage, des mathématiques et des
                      arts.
                    </li>
                    <li>Renforcer les compétences de coopération et de travail en équipe.</li>
                    <li>Encourager la pensée critique et la créativité chez les enfants.</li>
                    <li>Construire une relation saine entre l'enfant et son environnement éducatif.</li>
                    <li>Améliorer le niveau d'apprentissage des enfants avant l'entrée en école primaire.</li>
                    <li>Favoriser les relations sociales entre les enfants.</li>
                    <li>Découvrir les talents et compétences spécifiques des enfants dès leur jeune âge.</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Public cible et capacité d'accueil</h2>
                  <p className="mb-4">
                    Le jardin d'enfants s'adresse aux enfants âgés de 4 à 5 ans en phase préscolaire. Il dispose de deux
                    salles équipées pour accueillir les enfants.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Équipe pédagogique</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Deux enseignantes formées dans l'éducation et l'enseignement préscolaire.</li>
                    <li>Une assistante pédagogique pour aider les enfants dans leurs activités quotidiennes.</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Programme éducatif</h2>
                  <p className="mb-4">
                    Le programme repose sur des méthodes pédagogiques approuvées, axées sur le développement des
                    compétences de base :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Lecture, écriture, calcul.</li>
                    <li>Activités récréatives : dessin, musique, théâtre.</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Activités et missions</h2>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Activités éducatives</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Séances d'apprentissage des lettres, des chiffres et des couleurs.</li>
                    <li>Jeux éducatifs pour stimuler la pensée critique et la résolution de problèmes.</li>
                    <li>Lectures d'histoires pour améliorer les capacités d'écoute et de concentration.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Activités sportives et physiques</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Jeux collectifs pour renforcer la coopération et les compétences motrices.</li>
                    <li>Exercices physiques pour améliorer la coordination et la condition physique.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Activités sociales et émotionnelles</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Renforcer les compétences de communication entre pairs.</li>
                    <li>Sessions éducatives sur des valeurs comme l'amitié et le respect.</li>
                    <li>Exercices de résolution de problèmes en groupe ou individuellement.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Activités créatives et artistiques</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Dessin et coloriage.</li>
                    <li>Création d'œuvres manuelles avec des matériaux simples et sûrs.</li>
                    <li>Activités musicales et dramatiques : chant, danse, théâtre.</li>
                  </ul>

                  <p className="mt-8 text-lg font-medium">
                    Le Jardin d'Enfants Rihana As-Salam s'engage à offrir aux enfants un cadre épanouissant, favorisant
                    leur développement global tout en les préparant à une transition harmonieuse vers l'école primaire.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="overflow-hidden border-none shadow-sm">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Activités au Jardin d'Enfants"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Nos activités</h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez les activités variées que nous proposons pour le développement de vos enfants.
                  </p>
                  <Link href="/galerie" className="text-primary font-medium hover:underline">
                    Voir la galerie
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Nous contacter</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="font-medium">Adresse:</strong> École El Bachiri, Casablanca-Anfa
                    </p>
                    <p>
                      <strong className="font-medium">Téléphone:</strong> +212 5XX XX XX XX
                    </p>
                    <p>
                      <strong className="font-medium">Email:</strong> jardin@fondation-assalam.org
                    </p>
                    <p>
                      <strong className="font-medium">Horaires:</strong> Lundi au Vendredi, 8h30 - 16h30
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-sm bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Inscriptions</h3>
                  <p className="mb-4">
                    Les inscriptions pour l'année scolaire sont ouvertes. Contactez-nous pour plus d'informations.
                  </p>
                  <Button variant="secondary" className="w-full">
                    En savoir plus
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

