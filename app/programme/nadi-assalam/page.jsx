import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NadiAssalamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Nadi Assalam"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">Nadi Assalam</h1>
            <p className="text-lg mb-6">
              Un avenir cousu d&apos;espoir - Formation en couture pour les femmes vulnérables
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
                  <h2 className="text-2xl font-bold mb-6">Nadi Assalam : Un avenir cousu d&apos;espoir</h2>
                  <p className="mb-4">
                    Nadi Assalam est un centre de formation dédié à l'apprentissage de la couture traditionnelle et
                    moderne, conçu pour redonner espoir et opportunités aux femmes veuves ou en situation précaire. Ce
                    projet offre bien plus qu'une formation : il permet à ces femmes de se réinventer, de retrouver une
                    autonomie économique et de devenir actrices de leur propre avenir.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Mission et objectifs</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      Transmettre un savoir-faire en couture, mêlant traditions marocaines et techniques modernes.
                    </li>
                    <li>
                      Favoriser l'autonomisation des femmes en difficulté grâce à une formation professionnalisante.
                    </li>
                    <li>Contribuer à l'épanouissement personnel et professionnel des participantes.</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Durée et déroulement de la formation</h2>
                  <p className="mb-4">
                    La formation au sein de Nadi Assalam s'étale sur une période de 9 mois, pendant lesquels les
                    participantes apprennent :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Les techniques de couture traditionnelle marocaine (caftans, djellabas, takchitas, etc.).</li>
                    <li>
                      Les bases et les avancées de la couture moderne (vêtements prêt-à-porter, accessoires, etc.).
                    </li>
                    <li>Des notions de design, de gestion et d'entrepreneuriat pour monter leur propre activité.</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Certification et reconnaissance</h2>
                  <p className="mb-4">
                    À l'issue de la formation, un examen supervisé par l'Entraide Nationale est organisé. Les
                    participantes qui réussissent obtiennent un diplôme officiel reconnu, ouvrant les portes d'un avenir
                    prometteur dans le domaine de la couture.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6">
                    Après la formation : Un tremplin pour l&apos;autonomie
                  </h2>
                  <p className="mb-4">Le diplôme en main, les femmes formées par Nadi Assalam peuvent :</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Se regrouper en coopératives pour produire et vendre des créations artisanales et modernes.</li>
                    <li>
                      Lancer leurs propres projets depuis leur domicile, en proposant des services de couture adaptés
                      aux besoins de leur communauté.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Impact social et économique</h2>
                  <p className="mb-4">Le projet Nadi Assalam a un impact significatif :</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Il lutte contre la précarité en offrant aux femmes des opportunités concrètes de revenus.</li>
                    <li>
                      Il renforce la solidarité au sein des communautés en encourageant les collaborations locales.
                    </li>
                    <li>Il valorise le patrimoine vestimentaire marocain tout en intégrant des approches modernes.</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion</h2>
                  <p className="mb-4">
                    Avec Nadi Assalam, chaque femme formée devient une ambassadrice de la tradition et de la modernité,
                    mais surtout, elle devient une actrice de changement. Ce projet, qui allie savoir-faire ancestral et
                    innovation, transforme des vies et bâtit un avenir plus équitable.
                  </p>
                  <p className="mb-4">
                    Ensemble, soutenons ces femmes dans leur cheminement vers l'indépendance et l'épanouissement !
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="overflow-hidden border-none shadow-sm">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Atelier de couture Nadi Assalam"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Nos créations</h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez les créations réalisées par les femmes formées au sein de notre centre.
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
                      <strong className="font-medium">Email:</strong> nadi.assalam@fondation-assalam.org
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
                    Votre soutien aide les femmes vulnérables à acquérir une autonomie durable. Faites un don ou devenez
                    bénévole.
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

