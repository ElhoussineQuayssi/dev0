import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ParrainagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Parrainage d'orphelins"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">Parrainage d&apos;orphelins</h1>
            <p className="text-lg mb-6">Offrir une égide globale aux orphelins au sein de leurs familles</p>
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
                  <h2 className="text-2xl font-bold mb-6">Projet Parrainage d&apos;orphelins</h2>
                  <p className="mb-4">
                    Plusieurs études menées par des organismes nationaux ou internationaux ont montré que certains
                    enfants sont exposés dans notre pays à la déviation, à la délinquance, au vagabondage ou encore à la
                    criminalité. Dans la majorité des cas, parmi les causes principales directes ou indirectes nous
                    retrouvons en premier lieu la pauvreté ou encore l'orphelinat.
                  </p>
                  <p className="mb-4">
                    Notre projet vise à fournir une assistance globale à l'orphelin et à lui permettre de s'épanouir
                    dans son environnement naturel « sa famille », en offrant une égide sociale, éducative, psychique et
                    médicale.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Objectif général du projet</h2>
                  <p className="mb-4">Offrir une égide globale aux orphelins au sein de leurs familles.</p>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Formules de parrainages</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>Parrainage globale :</strong> Besoins de Base + Besoins Ponctuels.
                    </li>
                    <li>
                      <strong>Parrainage de base :</strong> pour couvrir les besoins de base de l'orphelin (de
                      nourriture, éducation et santé).
                    </li>
                    <li>
                      <strong>Parrainage scolaire :</strong> le parrain peut choisir que l'orphelin poursuive sa
                      scolarité primaire dans une école privée.
                    </li>
                    <li>
                      <strong>Parrainage famille :</strong> couvrir les besoins de base d'une famille d'orphelins (2 et
                      plus).
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Parrainage ponctuel</h2>
                  <p className="mb-4">
                    Toute personne qui parraine ou ne parraine pas un orphelin peut contribuer occasionnellement dans un
                    ou plusieurs des projets ponctuels de la FONDATION : il s'agit de couvrir les besoins de l'orphelin
                    lors des occasions suivantes :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>Rentrée scolaire :</strong> Achat de fourniture
                    </li>
                    <li>
                      <strong>Camp d'été :</strong> 10 jours
                    </li>
                    <li>
                      <strong>Eid Al Adha :</strong> Achat de mouton
                    </li>
                    <li>
                      <strong>Panier Du ramadan :</strong> (500 Dhs)
                    </li>
                    <li>
                      <strong>Eid AL fitr :</strong> Achat de vêtements
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Description des projets annexes</h2>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Projet : Rentrée scolaire</h3>
                  <p className="mb-4">
                    Il permet la distribution de cartables scolaires au profit des orphelins. Il a comme objectif
                    principal d'encourager la poursuite des études, de lutter contre le décrochement scolaire et de
                    garantir l'égalité des chances en matière d'enseignement.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Projet panier du Ramadan</h3>
                  <p className="mb-4">
                    Le projet permet de fournir des paniers contenant des aliments de bases pouvant subvenir aux besoins
                    d'une famille pendant le mois sacré du Ramadan. Ce projet s'inscrit dans le volet social desservi
                    depuis plus de dix années par notre association.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Projet des campings d&apos;été</h3>
                  <p className="mb-4">
                    Chaque été, plusieurs orphelins et démunis bénéficient de campings d'été organisés par l'association
                    en collaboration avec quelques associations spécialisées dans le domaine.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Projet : Farhat Al Aid</h3>
                  <p className="mb-4">
                    Il permet d'offrir aux orphelins pris en charge par l'association ainsi qu'aux enfants des familles
                    nécessiteuses des vêtements neufs et des chaussures à l'occasion de Aïd El Fitr. Ces vêtements
                    permettent à ces enfants vivants dans des conditions précaires de ressentir la joie et la gaieté de
                    l'Aid en se sentant pour une fois égales à tous les autres enfants de leurs âges.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Projet Farhat Aid El Adha</h3>
                  <p className="mb-4">
                    A l'occasion de la fête d'Al Adha ou la fête du sacrifice, ce projet permet d'offrir aux personnes
                    démunies des aides leurs permettant d'acquérir le mouton de l'Aid. En effet, la fête d'al Adha est
                    une occasion qui permet de célébrer l'esprit de générosité afin de développer la solidarité envers
                    les pauvres et les nécessiteux.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="overflow-hidden border-none shadow-sm">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Enfants bénéficiaires du programme de parrainage"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Nos bénéficiaires</h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez l'impact positif de notre programme de parrainage sur la vie des orphelins.
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
                      <strong className="font-medium">Email:</strong> parrainage@fondation-assalam.org
                    </p>
                    <p>
                      <strong className="font-medium">Horaires:</strong> Lundi au Vendredi, 9h00 - 16h30
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-sm bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Devenez parrain</h3>
                  <p className="mb-4">
                    Changez la vie d'un orphelin en devenant parrain ou marraine. Votre soutien peut faire toute la
                    différence.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Parrainer un orphelin
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

