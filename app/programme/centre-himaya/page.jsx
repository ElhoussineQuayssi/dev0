import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CentreHimayaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Centre Himaya"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">Centre Himaya</h1>
            <p className="text-lg mb-6">
              Un centre pluridisciplinaire de soutien aux femmes et enfants en situation difficile
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
                  <h2 className="text-2xl font-bold mb-6">Présentation du centre Himaya</h2>
                  <p className="mb-4">
                    L'observateur des activités de Fondation Al Salam pour le Développement Social en général, et de
                    section de Casablanca Anfa en particulier, constatera qu'elle a franchi des étapes importantes dans
                    le domaine du travail social et de développement. Elle se distingue par son approche bienveillante
                    envers les femmes et les enfants en situation difficile, s'efforçant de surmonter tous les obstacles
                    pouvant entraver l'autonomisation socioéconomique des femmes et l'autonomisation des enfants.
                  </p>
                  <p className="mb-4">
                    Elle mobilise à cette fin tous les espaces, ressources et talents humains prometteurs à sa
                    disposition. Ce parcours a été couronné par l'ouverture d'un centre pluridisciplinaire de soutien
                    aux femmes et enfants en situation difficile, en partenariat avec le Ministère de la Femme et de la
                    Solidarité Sociale et la Direction Provinciale de Casablanca Anfa, dans l'École Bachiri Mixte, le
                    vendredi 27 février.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Objectif général du centre</h2>
                  <p className="mb-4">
                    Développer les capacités personnelles et les compétences des femmes et des filles victimes de
                    violences sous toutes leurs formes, ainsi que des femmes et des enfants en situation difficile.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Objectifs spécifiques</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      Garantir des services d'accueil, d'écoute, d'orientation, de conseil, d'accompagnement, de
                      médiation familiale et de soutien psycho-social.
                    </li>
                    <li>
                      Permettre aux femmes et filles victimes de violence ainsi qu'aux enfants en situation difficile
                      d'exprimer les difficultés qu'ils rencontrent.
                    </li>
                    <li>
                      Offrir aux bénéficiaires des consultations individuelles et collectives avec des formateurs et
                      spécialistes en soutien psychologique, social, développement personnel, conseil familial et
                      juridique, et les accompagner dans leur application au quotidien.
                    </li>
                    <li>
                      Assurer une formation professionnelle pour développer les compétences personnelles et techniques
                      des femmes et enfants en situation difficile.
                    </li>
                    <li>
                      Sensibiliser et informer les femmes et filles victimes de violence, ainsi que les femmes en
                      situation difficile, sur leurs droits et renforcer leurs compétences personnelles et techniques.
                    </li>
                    <li>
                      Aider à diagnostiquer les problèmes, suivre les démarches de protection et de traitement, réduire
                      la violence et trouver des solutions légales.
                    </li>
                    <li>
                      Faciliter la réintégration socio-économique et réparer les préjudices individuels et collectifs.
                    </li>
                    <li>Participer aux travaux des commissions locales de lutte contre la violence.</li>
                    <li>Renforcer les capacités personnelles des participants aux formations.</li>
                    <li>Donner aux femmes et enfants des compétences pour surmonter les difficultés.</li>
                    <li>
                      Encourager les femmes à fréquenter le centre et à participer aux ateliers en offrant des espaces
                      sécurisés pour leurs enfants (garderie et activités ludiques).
                    </li>
                    <li>
                      Fournir un soutien psychologique et éducatif aux élèves de l'École ELbachiri via une cellule de
                      veille.
                    </li>
                    <li>
                      Ouvrir des classes d'alphabétisation et des ateliers de formation artisanale pour les
                      bénéficiaires.
                    </li>
                    <li>Offrir une aide sociale aux familles vivant dans des conditions précaires.</li>
                    <li>Lutter contre le décrochage scolaire via des classes d'éducation non formelle.</li>
                    <li>
                      Organiser des caravanes médicales pour le dépistage précoce du cancer du sein et du col de
                      l'utérus, ainsi que des campagnes de sensibilisation sur le diabète, la tuberculose, les maladies
                      respiratoires et la santé dentaire des enfants.
                    </li>
                    <li>
                      Mettre en place des séances de soutien scolaire pour les élèves préparant les examens régionaux et
                      nationaux.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Population cibles</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Femmes et filles victimes de violence.</li>
                    <li>Femmes et enfants en situation difficile.</li>
                    <li>Veuves et orphelins bénéficiaires des services de l'association.</li>
                    <li>Familles et proches des femmes et filles victimes de violence ou en situation difficile.</li>
                    <li>Personnel des centres d'écoute.</li>
                    <li>
                      Différents intervenants dans le domaine de la lutte contre la violence, au niveau local, régional
                      et national.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Équipe de travail au centre</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Coordinatrice</li>
                    <li>Assistantes sociales</li>
                    <li>Avocate</li>
                    <li>Spécialistes en conseil familial</li>
                    <li>Psychologues</li>
                    <li>Formateurs spécialisés en développement personnel</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-6">Services offerts par le centre</h2>

                  <h3 className="text-xl font-semibold mt-6 mb-3">1. Accueil</h3>
                  <p className="mb-4">
                    Le centre assure un service d'accueil en continu de 9h00 à 16h30. Une coordinatrice et une
                    assistante sociale, en plus d'autres assistantes sociales travaillant au siège principal de
                    l'association situé au 152, Rue Yacoub El Mansour, Maârif, Casablanca, sont chargées d'accueillir
                    les femmes arrivant à l'association. Elles écoutent, diagnostiquent leurs problèmes et orientent les
                    femmes et filles victimes de violence vers le centre.
                  </p>
                  <p className="mb-4">
                    L'assistante sociale du centre se charge de réaccueillir les femmes et filles dirigées depuis
                    l'association, ainsi que les visiteurs du centre, tout en assurant leur accompagnement et
                    orientation.
                  </p>
                  <p className="mb-4">
                    Le centre reçoit en moyenne 10 cas par jour, avec des besoins et attentes variés en fonction des
                    problèmes et types d'aides demandés.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">2. Écoute</h3>
                  <p className="mb-4">
                    Les femmes et filles victimes de violence sont écoutées quotidiennement afin de leur permettre
                    d'exprimer leurs problèmes et attentes. L'assistante sociale remplit une fiche d'accueil contenant
                    les informations sur chaque cas, ouvre un dossier et rédige un compte rendu résumant le problème,
                    les attentes et les orientations données. Selon les besoins exprimés, les cas peuvent être référés à
                    d'autres spécialistes ou services disponibles au centre.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">3. Soutien psychologique</h3>
                  <p className="mb-4">
                    Le psychologue du centre reçoit 4 cas par semaine, offrant des séances de soutien psychologique
                    adaptées à la durée nécessaire pour chaque situation.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">4. Consultations juridiques</h3>
                  <p className="mb-4">
                    L'avocate du centre fournit des consultations juridiques aux femmes victimes de violence deux fois
                    par mois. Elle organise également des ateliers de sensibilisation sur des sujets juridiques
                    concernant les droits des femmes et des filles.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">5. Formations pour les bénéficiaires</h3>
                  <p className="mb-4">
                    En parallèle au soutien psychologique, social et aux conseils familiaux, le centre organise des
                    formations de développement personnel. Ces formations visent à traiter des aspects de la vie
                    quotidienne et des difficultés rencontrées par les femmes, tout en renforçant leur confiance en
                    elles et leurs compétences pour faire face aux défis.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="overflow-hidden border-none shadow-sm">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Activités au Centre Himaya"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Nos activités</h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez les activités variées que nous proposons pour soutenir les femmes et enfants en situation
                    difficile.
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
                      <strong className="font-medium">Adresse:</strong> École Bachiri Mixte, Casablanca-Anfa
                    </p>
                    <p>
                      <strong className="font-medium">Téléphone:</strong> +212 5XX XX XX XX
                    </p>
                    <p>
                      <strong className="font-medium">Email:</strong> centre.himaya@fondation-assalam.org
                    </p>
                    <p>
                      <strong className="font-medium">Horaires:</strong> Lundi au Vendredi, 9h00 - 16h30
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-sm bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Besoin d'aide?</h3>
                  <p className="mb-4">
                    Notre équipe de professionnels est à votre écoute. Contactez-nous pour bénéficier de nos services
                    d'accompagnement.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Nous contacter
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

