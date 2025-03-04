"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function HomePage({ isAdmin }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Fondation As-Salam"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fondation As-Salam pour le Développement Social</h1>
            <p className="text-lg mb-8">
              Une fondation nationale engagée dans le développement social et l&apos;aide aux femmes et enfants en
              situation difficile.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/nos-programmes">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                  Découvrir nos programmes
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              {isAdmin && (
                <Link href="/admin">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full bg-white/20 hover:bg-white/30 border-white text-white"
                  >
                    Accéder à l&apos;administration
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Nos Programmes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les différents programmes de la Fondation As-Salam, conçus pour soutenir le développement social
              et l&apos;aide aux personnes vulnérables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={program.link} className="block h-full">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <div className="flex justify-end">
                        <span className="text-primary font-medium flex items-center">
                          En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="À propos de nous"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-4">À propos de la Fondation</h2>
              <p className="text-muted-foreground mb-4">
                Fondation nationale, indépendante, à vocation sociale, solidaire et caritative, reposant sur le
                volontariat, fondée en 1992. Elle compte 36 sections réparties dans plusieurs villes du Royaume.
              </p>
              <p className="text-muted-foreground mb-6">
                La Fondation se distingue par son approche bienveillante envers les femmes et les enfants en situation
                difficile, s&apos;efforçant de surmonter tous les obstacles pouvant entraver l&apos;autonomisation
                socioéconomique des femmes et le développement des enfants.
              </p>
              <Link href="/a-propos">
                <Button className="rounded-full">
                  En savoir plus sur nous
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pour toute information complémentaire ou pour soutenir nos actions, n&apos;hésitez pas à nous contacter.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Adresse</h3>
              <p className="text-muted-foreground">
                152, Rue Yacoub El Mansour
                <br />
                Maârif, Casablanca
                <br />
                Maroc
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-muted-foreground">
                Téléphone: +212 5XX XX XX XX
                <br />
                Email: contact@fondation-assalam.org
                <br />
                Horaires: 9h00 - 16h30
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Fondation As-Salam</h3>
              <p className="text-primary-foreground/80">Pour le Développement Social</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="font-semibold mb-3">Liens rapides</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="hover:underline">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link href="/a-propos" className="hover:underline">
                      À propos
                    </Link>
                  </li>
                  <li>
                    <Link href="/nos-programmes" className="hover:underline">
                      Programmes
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Nos programmes</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/programme/jardin-enfants" className="hover:underline">
                      Jardin d&apos;Enfants
                    </Link>
                  </li>
                  <li>
                    <Link href="/programme/centre-himaya" className="hover:underline">
                      Centre Himaya
                    </Link>
                  </li>
                  <li>
                    <Link href="/programme/imtiaz" className="hover:underline">
                      Projet Imtiaz
                    </Link>
                  </li>
                  <li>
                    <Link href="/programme/parrainage" className="hover:underline">
                      Parrainage d&apos;orphelins
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/70">
              © {new Date().getFullYear()} Fondation As-Salam pour le Développement Social. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const programs = [
  {
    title: "Jardin d'Enfants Rihana As-Salam",
    description: "Un environnement éducatif et pédagogique sûr pour les enfants d'âge préscolaire.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/programme/jardin-enfants",
  },
  {
    title: "Centre Himaya",
    description: "Un centre pluridisciplinaire de soutien aux femmes et enfants en situation difficile.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/programme/centre-himaya",
  },
  {
    title: "Projet Imtiaz",
    description:
      "Accompagnement des étudiants brillants vivant en situation difficile jusqu'à leur insertion professionnelle.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/programme/imtiaz",
  },
  {
    title: "Nadi Assalam",
    description: "Formation en couture traditionnelle et moderne pour les femmes en situation précaire.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/programme/nadi-assalam",
  },
  {
    title: "Fataer Al Baraka",
    description: "Formation en pâtisserie et gâteaux marocains pour les femmes vulnérables.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/programme/fataer-al-baraka",
  },
  {
    title: "Parrainage d'orphelins",
    description: "Différentes formules de parrainage pour soutenir les orphelins et leur famille.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/programme/parrainage",
  },
]

