import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get("slug")

    if (slug) {
      const page = await db.page.findUnique({
        where: {
          slug,
        },
      })

      if (!page) {
        return NextResponse.json({ error: "Page not found" }, { status: 404 })
      }

      return NextResponse.json(page)
    }

    const pages = await db.page.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    })

    return NextResponse.json(pages)
  } catch (error) {
    console.error("Error fetching pages:", error)
    return NextResponse.json({ error: "Failed to fetch pages" }, { status: 500 })
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { slug, title, content, imageUrl, isPublished } = body

    if (!slug || !title || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if slug already exists
    const existingPage = await db.page.findUnique({
      where: {
        slug,
      },
    })

    if (existingPage) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 400 })
    }

    const page = await db.page.create({
      data: {
        slug,
        title,
        content,
        imageUrl: imageUrl || null,
        isPublished: isPublished || false,
      },
    })

    return NextResponse.json(page, { status: 201 })
  } catch (error) {
    console.error("Error creating page:", error)
    return NextResponse.json({ error: "Failed to create page" }, { status: 500 })
  }
}

