import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ImtiazPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Projet Imtiaz"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">Projet Imtiaz</h1>
            <p className="text-lg mb-6">Parrainage des étudiants brillants jusqu'à leur insertion professionnelle</p>
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
                  <h2 className="text-2xl font-bold mb-6">Présentation du projet Imtiaz</h2>
                  <p className="mb-4">
                    Le projet Imtiaz a pour mission d'accompagner les étudiants les plus brillants vivant en situation
                    difficile ou issus de milieux défavorisés de manière générale jusqu'à leur insertion
                    professionnelle.
                  </p>
                  <p className="mb-4">
                    L'objectif principal étant d'insuffler un esprit d'appartenance et d'initiative en lui ou elle et
                    les activer dans la réforme et le développement.
                  </p>
                  <p className="mb-4">
                    Nous visons à travers les différentes formations du projet d'élaborer le leader de demain : Un
                    leader missionnaire engagé avec une bonne moralité, l'excellence académique, une bonne santé et une
                    efficacité au sein de la famille et de la société.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Objectifs spécifiques</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      Développer le niveau éducatif et l'aspect éthique des jeunes, et œuvrer pour leur inculquer les
                      plus hautes valeurs humaines.
                    </li>
                    <li>
                      Oeuvrer pour le développement des compétences éducatives, comportementales et relationnelles.
                    </li>
                    <li>Enseigner un ensemble de compétences pour interagir avec soi-même et avec l'autre.</li>
                    <li>
                      Enseigner les compétences de gérer son plan d'action dans la vie afin d'atteindre ses objectifs.
                    </li>
                    <li>Autonomiser les jeunes à travers le coaching et des conseils individuels.</li>
                    <li>
                      Aider dans l'acquisition des besoins nécessaires des étudiants afin d'améliorer leurs conditions
                      éducatives (Fournitures scolaires, PC, imprimantes, connexion Internet...)
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Attentes des étudiants</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Information et Orientation des futurs bacheliers.</li>
                    <li>Accéder à des établissements de formation de qualité.</li>
                    <li>Soutien financier pour subvenir à leurs besoins.</li>
                    <li>
                      Accompagnement et conseil pour les choix d'option et l'insertion dans la vie professionnelle.
                    </li>
                    <li>Augmenter les chances de succès dans la vie professionnelle.</li>
                    <li>Coaching individuel et accompagnement.</li>
                    <li>Séances de formations en développement personnel.</li>
                    <li>Soutien en langues.</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Notre engagement</h2>
                  <p className="mb-4">
                    Les démarches suivies s'axent sur l'épanouissement de la personne : changement positif, évolution
                    personnelle, développement des compétences et soft-skills, approfondissement des connaissances,
                    amélioration de son mode de communication, etc.
                  </p>
                  <p className="mb-4">Tout ceci se fait par le biais de plusieurs actions, à savoir :</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Des rencontres d'information et d'orientation pour les candidats au Baccalauréat.</li>
                    <li>Un plan de formation annuel sur les différents axes de la roue de la vie.</li>
                    <li>
                      Une bourse mensuelle pour subvenir aux besoins minimaux des étudiants (transport, nourriture...)
                    </li>
                    <li>Un accompagnement visant l'accès au logement en cas de problèmes majeurs.</li>
                    <li>Un équipement informatique selon les disponibilités.</li>
                    <li>Le coaching ou l'accompagnent psychologique par un professionnel.</li>
                    <li>Mise à niveau linguistique.</li>
                    <li>Aide à la recherche de stage et d'emplois.</li>
                    <li>Renforcement du Leadership.</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Critères d'éligibilité et de sélection</h2>
                  <p className="mb-4">
                    Le programme Imtiaz cible les étudiants méritants avec un potentiel académique assez fort et issus
                    de milieux défavorisés selon les critères d'éligibilité ci-dessous :
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Critère académique</h3>
                  <p className="mb-4">
                    Nous nous basons dans le cadre du projet imtiaz sur plusieurs indicateurs d'excellence :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>La note</li>
                    <li>La filière</li>
                    <li>Le Projet de vie</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Critère social</h3>
                  <p className="mb-4">
                    Grace aux différentes enquêtes et visites sur place nous arrivons à repérer les étudiants les plus
                    défavorisés :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Orphelins ou étudiants issus des structures de protection sociale</li>
                    <li>Etudiants démunis en situation d'handicap</li>
                    <li>
                      Etudiants en situations difficiles : pauvreté, exclusion sociale, parents divorcés ou malades...
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="overflow-hidden border-none shadow-sm">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Étudiants du Projet Imtiaz"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Nos réussites</h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez les parcours de nos étudiants et leurs réussites académiques et professionnelles.
                  </p>
                  <Link href="/temoignages" className="text-primary font-medium hover:underline">
                    Lire les témoignages
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Nous contacter</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="font-medium">Adresse:</strong> 152, Rue Yacoub El Mansour, Maârif, Casablanca
                    </p>
                    <p>
                      <strong className="font-medium">Téléphone:</strong> +212 5XX XX XX XX
                    </p>
                    <p>
                      <strong className="font-medium">Email:</strong> imtiaz@fondation-assalam.org
                    </p>
                    <p>
                      <strong className="font-medium">Horaires:</strong> Lundi au Vendredi, 9h00 - 16h30
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-sm bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Soutenez un étudiant brillant</h3>
                  <p className="mb-4">
                    Contribuez à l'avenir d'un étudiant méritant en devenant parrain ou en faisant un don.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Faire un don
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

