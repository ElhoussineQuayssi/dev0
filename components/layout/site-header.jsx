"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import { useSession } from "next-auth/react"
import { t } from "@/lib/translations"

export default function SiteHeader({ translations = {}, programs = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isActive = (path) => {
    return pathname === path
  }

  const isActiveProgram = (slug) => {
    return pathname === `/programme/${slug}`
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">{t(translations, "site.name", "Fondation As-Salam")}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t(translations, "nav.home", "Accueil")}
          </Link>
          <Link
            href="/apropos"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/a-propos") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t(translations, "nav.about", "À propos")}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center gap-1 px-0 ${
                  pathname.startsWith("/programme") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t(translations, "nav.programs", "Programmes")}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/programmes" className={`w-full ${isActive("/programmes") ? "text-primary" : ""}`}>
                  {t(translations, "nav.all_programs", "Tous les programmes")}
                </Link>
              </DropdownMenuItem>
              {programs.map((program) => (
                <DropdownMenuItem key={program.id} asChild>
                  <Link
                    href={`/programme/${program.slug}`}
                    className={`w-full ${isActiveProgram(program.slug) ? "text-primary" : ""}`}
                  >
                    {program.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/actualites"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname.startsWith("/actualites") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t(translations, "nav.news", "Actualités")}
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/contact") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t(translations, "nav.contact", "Contact")}
          </Link>

          {session && (
            <Link
              href="/admin"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t(translations, "nav.admin", "Administration")}
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className={`block py-2 text-base font-medium ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(translations, "nav.home", "Accueil")}
            </Link>
            <Link
              href="/a-propos"
              className={`block py-2 text-base font-medium ${
                isActive("/a-propos") ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(translations, "nav.about", "À propos")}
            </Link>

            <div className="py-2">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium">{t(translations, "nav.programs", "Programmes")}</span>
              </div>
              <div className="mt-2 pl-4 space-y-2">
                <Link
                  href="/programmes"
                  className={`block py-1 text-sm ${isActive("/programmes") ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(translations, "nav.all_programs", "Tous les programmes")}
                </Link>
                {programs.map((program) => (
                  <Link
                    key={program.id}
                    href={`/programme/${program.slug}`}
                    className={`block py-1 text-sm ${
                      isActiveProgram(program.slug) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {program.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/actualites"
              className={`block py-2 text-base font-medium ${
                pathname.startsWith("/actualites") ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(translations, "nav.news", "Actualités")}
            </Link>

            <Link
              href="/contact"
              className={`block py-2 text-base font-medium ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(translations, "nav.contact", "Contact")}
            </Link>

            {session && (
              <Link
                href="/admin"
                className="block py-2 text-base font-medium text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(translations, "nav.admin", "Administration")}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

