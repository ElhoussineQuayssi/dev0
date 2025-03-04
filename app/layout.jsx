import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from "@/components/session-provider"
import AosInitializer from "@/components/aos-initializer"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"
import { db } from "@/lib/db"
import { getTranslations } from "@/lib/translations"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fondation As-Salam",
  description: "Fondation As-Salam pour le Développement Social",
    generator: 'v0.dev'
}

export default async function RootLayout({ children }) {
  // Fetch programs for the header dropdown
  const programs = await db.program.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      order: "asc",
    },
    select: {
      id: true,
      slug: true,
      title: true,
    },
  })

  // Fetch translations
  const translations = await getTranslations("fr")

  return (
    <html lang="fr">
      <body className={inter.className}>
        <SessionProvider>
          <AosInitializer />
          <div className="flex min-h-screen flex-col">
            <SiteHeader translations={translations} programs={programs} />
            <main className="flex-1">{children}</main>
            <SiteFooter translations={translations} />
          </div>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
}



import './globals.css'