import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { locales } from "@/lib/translations"

export async function GET(request, { params }) {
  try {
    const translation = await db.translation.findUnique({
      where: {
        id: params.id,
      },
    })

    if (!translation) {
      return NextResponse.json({ error: "Translation not found" }, { status: 404 })
    }

    return NextResponse.json(translation)
  } catch (error) {
    console.error("Error fetching translation:", error)
    return NextResponse.json({ error: "Failed to fetch translation" }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
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

    // Check if translation already exists and belongs to another entry
    const existingTranslation = await db.translation.findUnique({
      where: {
        locale_key: {
          locale,
          key,
        },
      },
    })

    if (existingTranslation && existingTranslation.id !== params.id) {
      return NextResponse.json({ error: "Translation already exists" }, { status: 400 })
    }

    const translation = await db.translation.update({
      where: {
        id: params.id,
      },
      data: {
        locale,
        key,
        value,
      },
    })

    return NextResponse.json(translation)
  } catch (error) {
    console.error("Error updating translation:", error)
    return NextResponse.json({ error: "Failed to update translation" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    await db.translation.delete({
      where: {
        id: params.id,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting translation:", error)
    return NextResponse.json({ error: "Failed to delete translation" }, { status: 500 })
  }
}

