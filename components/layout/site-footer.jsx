import Link from "next/link"
import { t } from "@/lib/translations"

export default function SiteFooter({ translations = {} }) {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{t(translations, "site.name", "Fondation As-Salam")}</h3>
            <p className="text-primary-foreground/80">
              {t(translations, "site.tagline", "Pour le Développement Social")}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-semibold mb-3">{t(translations, "footer.quick_links", "Liens rapides")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    {t(translations, "nav.home", "Accueil")}
                  </Link>
                </li>
                <li>
                  <Link href="/a-propos" className="hover:underline">
                    {t(translations, "nav.about", "À propos")}
                  </Link>
                </li>
                <li>
                  <Link href="/programmes" className="hover:underline">
                    {t(translations, "nav.programs", "Programmes")}
                  </Link>
                </li>
                <li>
                  <Link href="/actualites" className="hover:underline">
                    {t(translations, "nav.news", "Actualités")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    {t(translations, "nav.contact", "Contact")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">{t(translations, "footer.contact", "Contact")}</h4>
              <ul className="space-y-2">
                <li>{t(translations, "footer.address", "152, Rue Yacoub El Mansour, Maârif, Casablanca")}</li>
                <li>{t(translations, "footer.phone", "Téléphone")}: +212 5XX XX XX XX</li>
                <li>{t(translations, "footer.email", "Email")}: contact@fondation-assalam.org</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © {new Date().getFullYear()} {t(translations, "site.name", "Fondation As-Salam")}.
            {t(translations, "footer.rights", "Tous droits réservés.")}
          </p>
        </div>
      </div>
    </footer>
  )
}

