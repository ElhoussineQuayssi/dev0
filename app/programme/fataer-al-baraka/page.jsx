import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FataerAlBarakaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Fataer Al Baraka"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">Fataer Al Baraka</h1>
            <p className="text-lg mb-6">Un projet d&apos;espoir et de renouveau - Formation en pâtisserie marocaine</p>
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
                  <h2 className="text-2xl font-bold mb-6">
                    Fataer Al Baraka : Un projet d&apos;espoir et de renouveau
                  </h2>
                  <p className="mb-4">
                    Fataer Al Baraka est un centre de formation dans la production de la pâtisserie et des gâteaux
                    marocaines ; c'est aussi un tremplin vers l'autonomie et l'épanouissement personnel pour des femmes
                    en situation précaire, en particulier des veuves ou des femmes vulnérables. Ce projet met à
                    l'honneur la tradition culinaire marocaine, en permettant à ces femmes de transformer leur passion
                    pour la pâtisserie en une réelle opportunité de vie.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Mission et objectifs</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Offrir une formation professionnelle de qualité en pâtisserie et gâteaux marocains.</li>
                    <li>Contribuer à l'autonomisation économique des femmes en difficulté.</li>
                    <li>Préserver et valoriser l'art culinaire marocain.</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Durée et déroulement de la formation</h2>
                  <p className="mb-4">
                    La formation au sein de Fataer Al Baraka s'étale sur une période de 9 mois, au cours desquels les
                    participantes acquièrent :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Les techniques de base et avancées de la pâtisserie marocaine.</li>
                    <li>
                      Des compétences en gestion et en entrepreneuriat pour développer des projets individuels ou
                      collectifs.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Certification et reconnaissance</h2>
                  <p className="mb-4">
                    En fin de formation, un examen organisé et supervisé en partenariat par l'Entraide Nationale permet
                    aux participantes d'obtenir un diplôme certifié et officiellement reconnu. Ce diplôme constitue un
                    véritable passeport vers l'emploi et l'autonomie.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Après la formation : Un avenir prometteur</h2>
                  <p className="mb-4">Grâce à cette formation, les participantes peuvent :</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Se regrouper pour former des coopératives dans le secteur culinaire.</li>
                    <li>
                      Lancer leurs propres projets à domicile, en proposant des pâtisseries traditionnelles aux
                      particuliers et aux professionnels.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Impact social</h2>
                  <p className="mb-4">Fataer Al Baraka contribue à :</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Lutter contre la précarité en offrant des opportunités professionnelles concrètes.</li>
                    <li>Renforcer l'esprit de solidarité et de coopération au sein des communautés locales.</li>
                    <li>Valoriser le rôle des femmes dans le développement économique et social.</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion</h2>
                  <p className="mb-4">
                    En s'appuyant sur la richesse de la tradition culinaire marocaine, Fataer Al Baraka transforme les
                    défis en opportunités et redonne espoir à des femmes qui aspirent à une vie meilleure. Ce projet
                    illustre parfaitement l'alliance entre patrimoine, solidarité et développement durable.
                  </p>
                  <p className="mb-4">Soutenez-nous dans cette noble mission !</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="overflow-hidden border-none shadow-sm">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Atelier de pâtisserie Fataer Al Baraka"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Nos créations</h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez les délicieuses pâtisseries traditionnelles réalisées par les femmes formées au sein de
                    notre centre.
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
                      <strong className="font-medium">Adresse:</strong> 152, Rue Yacoub El Mansour, Maârif, Casablanca
                    </p>
                    <p>
                      <strong className="font-medium">Téléphone:</strong> +212 5XX XX XX XX
                    </p>
                    <p>
                      <strong className="font-medium">Email:</strong> fataer.albaraka@fondation-assalam.org
                    </p>
                    <p>
                      <strong className="font-medium">Horaires:</strong> Lundi au Vendredi, 9h00 - 16h30
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-sm bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Soutenez notre projet</h3>
                  <p className="mb-4">
                    Votre soutien aide les femmes vulnérables à acquérir des compétences qui changent leur vie. Faites
                    un don ou devenez bénévole.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Contribuer
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

