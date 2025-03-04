import { getTranslations, t } from "@/lib/translations"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import ContactForm from "@/components/contact/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export async function generateMetadata() {
  const translations = await getTranslations("fr")

  return {
    title: t(translations, "contact.title", "Contact") + " | " + t(translations, "site.name", "Fondation As-Salam"),
    description: t(translations, "contact.description", "Contactez la Fondation As-Salam pour plus d'informations"),
  }
}

export default async function ContactPage() {
  const translations = await getTranslations("fr")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt={t(translations, "contact.title", "Contact")}
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">{t(translations, "contact.title", "Contact")}</h1>
            <p className="text-lg mb-6">{t(translations, "contact.subtitle", "Nous sommes à votre écoute")}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t(translations, "contact.get_in_touch", "Contactez-nous")}</h2>

              <Card className="border-none shadow-none bg-white overflow-hidden">
                <CardContent className="p-8">
                  <ContactForm translations={translations} />
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">{t(translations, "contact.info", "Informations de contact")}</h2>

              <Card className="border-none shadow-none bg-white overflow-hidden mb-6">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{t(translations, "contact.address", "Adresse")}</h3>
                        <p className="text-muted-foreground">
                          152, Rue Yacoub El Mansour
                          <br />
                          Maârif, Casablanca
                          <br />
                          Maroc
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{t(translations, "contact.phone", "Téléphone")}</h3>
                        <p className="text-muted-foreground">+212 5XX XX XX XX</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{t(translations, "contact.email", "Email")}</h3>
                        <p className="text-muted-foreground">contact@fondation-assalam.org</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {t(translations, "contact.hours", "Horaires d'ouverture")}
                        </h3>
                        <p className="text-muted-foreground">
                          Lundi - Vendredi: 9h00 - 16h30
                          <br />
                          Samedi - Dimanche: Fermé
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-none bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-[300px] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846399874089!2d-7.6413!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzOCczMi45Ilc!5e0!3m2!1sfr!2sma!4v1616661080000!5m2!1sfr!2sma"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

