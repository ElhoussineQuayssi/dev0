import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { locales, defaultLocale } from "@/lib/translations"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const locale = searchParams.get("locale") || defaultLocale
    const key = searchParams.get("key")

    if (key) {
      const translation = await db.translation.findUnique({
        where: {
          locale_key: {
            locale,
            key,
          },
        },
      })

      if (!translation) {
        return NextResponse.json({ error: "Translation not found" }, { status: 404 })
      }

      return NextResponse.json(translation)
    }

    const translations = await db.translation.findMany({
      where: {
        locale,
      },
      orderBy: {
        key: "asc",
      },
    })

    return NextResponse.json(translations)
  } catch (error) {
    console.error("Error fetching translations:", error)
    return NextResponse.json({ error: "Failed to fetch translations" }, { status: 500 })
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { locale, key, value } = body

    if (!locale || !key || !value) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!locales.includes(locale)) {
      return NextResponse.json({ error: "Invalid locale" }, { status: 400 })
    }

    // Check if translation already exists
    const existingTranslation = await db.translation.findUnique({
      where: {
        locale_key: {
          locale,
          key,
        },
      },
    })

    if (existingTranslation) {
      return NextResponse.json({ error: "Translation already exists" }, { status: 400 })
    }

    const translation = await db.translation.create({
      data: {
        locale,
        key,
        value,
      },
    })

    return NextResponse.json(translation, { status: 201 })
  } catch (error) {
    console.error("Error creating translation:", error)
    return NextResponse.json({ error: "Failed to create translation" }, { status: 500 })
  }
}

