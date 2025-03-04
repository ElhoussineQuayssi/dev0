import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET(request, { params }) {
  try {
    const newsItem = await db.news.findUnique({
      where: {
        id: params.id,
      },
    })

    if (!newsItem) {
      return NextResponse.json({ error: "News item not found" }, { status: 404 })
    }

    return NextResponse.json(newsItem)
  } catch (error) {
    console.error("Error fetching news item:", error)
    return NextResponse.json({ error: "Failed to fetch news item" }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
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

    // Check if slug already exists and belongs to another news item
    const existingNews = await db.news.findUnique({
      where: {
        slug,
      },
    })

    if (existingNews && existingNews.id !== params.id) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 400 })
    }

    const newsItem = await db.news.update({
      where: {
        id: params.id,
      },
      data: {
        slug,
        title,
        summary,
        content,
        imageUrl,
        isPublished,
        publishDate: publishDate ? new Date(publishDate) : undefined,
      },
    })

    return NextResponse.json(newsItem)
  } catch (error) {
    console.error("Error updating news item:", error)
    return NextResponse.json({ error: "Failed to update news item" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    await db.news.delete({
      where: {
        id: params.id,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting news item:", error)
    return NextResponse.json({ error: "Failed to delete news item" }, { status: 500 })
  }
}

