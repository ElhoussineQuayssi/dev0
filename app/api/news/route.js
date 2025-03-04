import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get("slug")

    if (slug) {
      const newsItem = await db.news.findUnique({
        where: {
          slug,
        },
      })

      if (!newsItem) {
        return NextResponse.json({ error: "News item not found" }, { status: 404 })
      }

      return NextResponse.json(newsItem)
    }

    const news = await db.news.findMany({
      orderBy: {
        publishDate: "desc",
      },
    })

    return NextResponse.json(news)
  } catch (error) {
    console.error("Error fetching news:", error)
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { slug, title, summary, content, imageUrl, isPublished, publishDate } = body

    if (!slug || !title || !summary || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if slug already exists
    const existingNews = await db.news.findUnique({
      where: {
        slug,
      },
    })

    if (existingNews) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 400 })
    }

    const newsItem = await db.news.create({
      data: {
        slug,
        title,
        summary,
        content,
        imageUrl: imageUrl || null,
        isPublished: isPublished || false,
        publishDate: publishDate ? new Date(publishDate) : new Date(),
      },
    })

    return NextResponse.json(newsItem, { status: 201 })
  } catch (error) {
    console.error("Error creating news item:", error)
    return NextResponse.json({ error: "Failed to create news item" }, { status: 500 })
  }
}

